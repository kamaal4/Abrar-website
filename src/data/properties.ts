import type { ListingType, Property, PropertyStatus, PropertyType } from '../types';
import { check, fromFiles } from './entries';
import { getLocationBySlug } from './locations';
import { getProjectBySlug } from './projects';

/**
 * One listing per published configuration of every development we list — the
 * unit-level view of the projects. Edited through /admin (src/content/properties/).
 *
 * `price` and `area` are deliberately absent: the developer publishes neither
 * a price nor a per-flat area, and a percentage of an unknown number is a
 * guess, not an estimate. Both render as "on request" until real figures land.
 *
 * `verified` is false throughout: we have not inspected these ourselves, and
 * some gallery images are artist's impressions rather than photographs.
 */
const properties = fromFiles<Property>(
  import.meta.glob<Omit<Property, 'slug'>>('../content/properties/*.json', { eager: true, import: 'default' }),
);

for (const p of properties) {
  const file = `src/content/properties/${p.slug}.json`;
  check(getLocationBySlug(p.location), file, `unknown location "${p.location}"`);
  if (p.project !== undefined) check(getProjectBySlug(p.project), file, `unknown project "${p.project}"`);
  check(p.images?.length, file, 'has no photos');
  // Flip this the day we start inspecting properties and documents ourselves.
  check(p.verified === false, file, 'is marked verified');
}

export function getAllProperties(): Property[] {
  return properties;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getFeaturedProperties(limit = 8): Property[] {
  return properties.filter((p) => p.featured).slice(0, limit);
}

export function getPropertiesByLocation(locationSlug: string, limit?: number): Property[] {
  const matches = properties.filter((p) => p.location === locationSlug);
  return limit ? matches.slice(0, limit) : matches;
}

export function getPropertiesByProject(projectSlug: string): Property[] {
  return properties.filter((p) => p.project === projectSlug);
}

export function getPropertiesByListing(listing: ListingType): Property[] {
  return properties.filter((p) => p.listing.includes(listing));
}

export function getPropertiesByType(type: PropertyType): Property[] {
  return properties.filter((p) => p.type === type);
}

export function getPropertiesByStatus(status: PropertyStatus): Property[] {
  return properties.filter((p) => p.status === status);
}

/** Same location first, then same type, then anything else — never the property itself. */
export function getSimilarProperties(property: Property, limit = 3): Property[] {
  const others = properties.filter((p) => p.slug !== property.slug);
  const score = (p: Property) =>
    (p.location === property.location ? 2 : 0) +
    (p.type === property.type ? 1 : 0) +
    (p.bhk && p.bhk === property.bhk ? 1 : 0);
  return [...others].sort((a, b) => score(b) - score(a)).slice(0, limit);
}

/**
 * Budget buckets used by the hero search. Values are `max:<rupees>` or `min:<rupees>`
 * so one <select> can express both "up to" and "above" without a second control.
 */
export const budgetOptions = [
  { value: 'max:5000000', label: 'Up to ₹50 L' },
  { value: 'max:7500000', label: 'Up to ₹75 L' },
  { value: 'max:10000000', label: 'Up to ₹1 Cr' },
  { value: 'max:15000000', label: 'Up to ₹1.5 Cr' },
  { value: 'max:20000000', label: 'Up to ₹2 Cr' },
  { value: 'min:20000000', label: 'Above ₹2 Cr' },
] as const;
