/** Favourites are a per-browser convenience, so a blocked storage API must not break the page. */
const FAV_KEY = 'iireh:favourites';
const readFavourites = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) ?? '[]');
  } catch {
    return [];
  }
};
const writeFavourites = (list: string[]) => {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
  } catch {
    /* private mode, blocked storage — the toggle still works for this page view */
  }
};

const favourites = new Set(readFavourites());
for (const button of document.querySelectorAll<HTMLButtonElement>('[data-favourite]')) {
  const slug = button.dataset.favourite!;
  const paint = () => {
    const on = favourites.has(slug);
    button.dataset.saved = String(on);
    button.setAttribute('aria-pressed', String(on));
  };
  paint();
  button.addEventListener('click', () => {
    if (favourites.has(slug)) favourites.delete(slug);
    else favourites.add(slug);
    writeFavourites([...favourites]);
    paint();
  });
}
