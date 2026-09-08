/**
 * Client-side filtering for /properties.
 *
 * Every property is already in the static HTML — this only hides cards, so the page
 * works with JavaScript disabled (all listings visible) and filters instantly with it.
 * State lives in the URL so a filtered view can be shared or bookmarked.
 */
type Card = HTMLElement;

const form = document.getElementById('property-filters') as HTMLFormElement | null;
const grid = document.getElementById('property-grid');
const empty = document.getElementById('property-empty');
const countTargets = document.querySelectorAll('[data-filter-count]');
const activeTargets = document.querySelectorAll('[data-active-filters]');

if (form && grid) {
  const cards = Array.from(grid.querySelectorAll<Card>('[data-property]'));

  const setField = (name: string, value: string) => {
    const els = form.elements.namedItem(name);
    if (!els) return;
    if (els instanceof RadioNodeList) {
      for (const el of Array.from(els) as HTMLInputElement[]) {
        if (el.type === 'radio') el.checked = el.value === value;
        else if (el.type === 'checkbox' && el.value === value) el.checked = true;
      }
    } else if (els instanceof HTMLInputElement) {
      if (els.type === 'checkbox') els.checked = els.value === value;
      else els.value = value;
    } else if (els instanceof HTMLSelectElement) {
      els.value = value;
    }
  };

  /** Read the URL once on load so links like /properties?listing=rent&bhk=3 work. */
  const hydrateFromUrl = () => {
    const params = new URLSearchParams(location.search);
    for (const name of ['q', 'listing', 'type', 'bhk', 'location', 'minPrice', 'maxPrice']) {
      const value = params.get(name);
      if (value !== null) setField(name, value);
    }
    for (const value of params.getAll('status')) setField('status', value);

    // The hero search sends a single budget value in `max:` / `min:` form.
    const budget = params.get('budget');
    if (budget) {
      const [kind, amount] = budget.split(':');
      if (kind === 'max') setField('maxPrice', amount ?? '');
      if (kind === 'min') setField('minPrice', amount ?? '');
    }
  };

  const read = () => {
    const data = new FormData(form);
    return {
      q: String(data.get('q') ?? '').trim().toLowerCase(),
      listing: String(data.get('listing') ?? ''),
      type: String(data.get('type') ?? ''),
      bhk: String(data.get('bhk') ?? ''),
      location: String(data.get('location') ?? ''),
      minPrice: Number(data.get('minPrice') ?? 0) || 0,
      maxPrice: Number(data.get('maxPrice') ?? 0) || Infinity,
      status: data.getAll('status').map(String),
    };
  };

  type Filters = ReturnType<typeof read>;

  const matches = (card: Card, f: Filters) => {
    const d = card.dataset;
    if (f.listing && !(d.listing ?? '').split(' ').includes(f.listing)) return false;
    if (f.type && d.type !== f.type) return false;
    if (f.bhk && d.bhk !== f.bhk) return false;
    if (f.location && d.location !== f.location) return false;
    if (f.status.length && !f.status.includes(d.status ?? '')) return false;
    // Listings with no published price stay visible until the visitor actually
    // sets a budget — at which point we cannot honestly claim they fit it.
    const hasBudget = f.minPrice > 0 || Number.isFinite(f.maxPrice);
    if (d.noprice === 'true') {
      if (hasBudget) return false;
    } else {
      const price = Number(d.price ?? 0);
      if (price < f.minPrice || price > f.maxPrice) return false;
    }
    if (f.q) {
      const haystack = `${d.title ?? ''} ${d.location ?? ''} ${d.type ?? ''} ${d.bhk ?? ''} bhk`;
      if (!f.q.split(/\s+/).every((term) => haystack.includes(term))) return false;
    }
    return true;
  };

  const syncUrl = (f: Filters) => {
    const params = new URLSearchParams();
    if (f.q) params.set('q', f.q);
    if (f.listing) params.set('listing', f.listing);
    if (f.type) params.set('type', f.type);
    if (f.bhk) params.set('bhk', f.bhk);
    if (f.location) params.set('location', f.location);
    if (f.minPrice) params.set('minPrice', String(f.minPrice));
    if (Number.isFinite(f.maxPrice)) params.set('maxPrice', String(f.maxPrice));
    for (const s of f.status) params.append('status', s);
    const query = params.toString();
    history.replaceState(null, '', query ? `?${query}` : location.pathname);
    // Let the header re-evaluate which nav item is current for the new URL.
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const apply = () => {
    const f = read();
    let shown = 0;
    for (const card of cards) {
      const ok = matches(card, f);
      card.hidden = !ok;
      if (ok) shown += 1;
    }
    const label = `${shown} of ${cards.length}`;
    countTargets.forEach((el) => (el.textContent = label));
    activeTargets.forEach(
      (el) =>
        (el.textContent =
          shown === cards.length
            ? `${cards.length} listings`
            : `${shown} of ${cards.length} listings`),
    );
    if (empty) empty.hidden = shown > 0;
    syncUrl(f);
  };

  hydrateFromUrl();
  apply();

  form.addEventListener('input', apply);
  form.addEventListener('change', apply);
  form.addEventListener('submit', (event) => event.preventDefault());
  form.addEventListener('reset', () => window.setTimeout(apply, 0));

  // The mobile drawer borrows the form node, then gives it back.
  const dialog = document.getElementById('filter-dialog') as HTMLDialogElement | null;
  const slot = document.getElementById('filter-dialog-slot');
  const home = document.getElementById('filter-home');
  if (dialog && slot && home) {
    document.querySelector('[data-filters-open]')?.addEventListener('click', () => {
      slot.appendChild(form);
      dialog.showModal();
    });
    const close = () => dialog.close();
    dialog.querySelectorAll('[data-filters-close]').forEach((el) =>
      el.addEventListener('click', close),
    );
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) close();
    });
    dialog.addEventListener('close', () => home.appendChild(form));
  }
}
