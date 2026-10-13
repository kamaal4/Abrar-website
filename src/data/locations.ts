import type { Location, PropertyType } from '../types';
import { fromFiles } from './entries';

/**
 * Area guides, written for orientation rather than as authority. Where a record
 * carries a startingPrice or priceRanges those figures are our own indicative
 * read and should be confirmed against live listings; areas we have not priced
 * ourselves carry neither, and show less rather than guessing.
 * Edited through /admin (src/content/locations/).
 */
const locations = fromFiles<Location>(
  import.meta.glob<Omit<Location, 'slug'>>('../content/locations/*.json', { eager: true, import: 'default' }),
);

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationName(slug: string): string {
  return getLocationBySlug(slug)?.name ?? slug;
}

export function getFeaturedLocations(): Location[] {
  return locations.filter((l) => l.featured);
}

/** Used by the search bar and filter rail so the option list never drifts from the data. */
export function locationOptions(): { value: string; label: string }[] {
  return locations.map((l) => ({ value: l.slug, label: l.name }));
}

export function popularTypeLabels(types: PropertyType[]): PropertyType[] {
  return types;
}
