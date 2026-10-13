/**
 * Listings are edited through /admin: one JSON file per entry in src/content/<collection>/,
 * and the filename is the slug. Entries keep the editor's drag-to-reorder `order`; new ones,
 * which have none yet, sort last.
 */
export function fromFiles<T extends { slug: string; order?: number }>(
  files: Record<string, Omit<T, 'slug'>>,
): T[] {
  return Object.entries(files)
    .map(([path, data]) => {
      const entry: Record<string, unknown> = { ...data, slug: path.slice(path.lastIndexOf('/') + 1, -5) };
      // An emptied optional field may be saved as null; the site only tests for undefined.
      for (const key of Object.keys(entry)) if (entry[key] === null) delete entry[key];
      return entry as T;
    })
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.slug.localeCompare(b.slug));
}

/**
 * Fails the build, naming the file, when an edit breaks the data. Cloudflare then keeps the
 * last good deploy live, so a bad save never reaches the site.
 */
export function check(ok: unknown, file: string, problem: string): void {
  if (!ok) throw new Error(`${file}: ${problem}`);
}
