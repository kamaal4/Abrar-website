const base = import.meta.env.BASE_URL; // '/' locally, '/repo-name/' on GitHub Pages

/**
 * Prefix an internal path with the configured base so the same links work on a
 * GitHub Pages project URL and on a custom domain. Query strings and hashes pass
 * through untouched.
 */
export function url(path: string): string {
  if (/^([a-z]+:|\/\/|#|mailto:|tel:)/i.test(path)) return path;
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const trimmedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${trimmedPath}` || '/';
}

/**
 * True when `href` points at the page currently being rendered.
 *
 * `search` matters: /properties?listing=buy and /properties?listing=rent are two
 * different nav items on the same path, and marking both current is wrong.
 */
export function isCurrent(href: string, pathname: string, search = ''): boolean {
  const [rawPath = '', rawQuery = ''] = href.split('#')[0]!.split('?');
  const target = url(rawPath).replace(/\/$/, '');
  const here = pathname.replace(/\/$/, '');
  const home = url('/').replace(/\/$/, '');

  const pathMatches =
    target === home ? here === home : here === target || here.startsWith(`${target}/`);
  if (!pathMatches) return false;

  if (!rawQuery) {
    // A plain link is only "current" when the page carries no competing selection.
    const current = new URLSearchParams(search);
    return !current.has('listing');
  }

  const wanted = new URLSearchParams(rawQuery);
  const current = new URLSearchParams(search);
  for (const [key, value] of wanted) {
    if (current.get(key) !== value) return false;
  }
  return true;
}
