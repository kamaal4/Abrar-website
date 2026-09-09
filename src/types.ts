import type { ImageKey } from './data/images';

export type ListingType = 'buy' | 'rent' | 'invest';
export type PropertyType = 'flat' | 'villa' | 'plot' | 'open-land' | 'farm-land' | 'commercial';
export type PropertyStatus = 'ready-to-move' | 'under-construction' | 'new-launch';
export type Facing = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'South-East';

export const propertyTypeLabels: Record<PropertyType, string> = {
  flat: 'Flat',
  villa: 'Villa',
  plot: 'Plot',
  'open-land': 'Open Land',
  'farm-land': 'Farm Land',
  commercial: 'Commercial',
};

export const statusLabels: Record<PropertyStatus, string> = {
  'ready-to-move': 'Ready to move',
  'under-construction': 'Under construction',
  'new-launch': 'New launch',
};

export const listingLabels: Record<ListingType, string> = {
  buy: 'Buy',
  rent: 'Rent',
  invest: 'Invest',
};

export type Property = {
  slug: string;
  title: string;
  listing: ListingType[];
  type: PropertyType;
  status: PropertyStatus;
  /** Location slug — must match a Location in src/data/locations.ts. */
  location: string;
  /**
   * Sale price in rupees. For rentals this is the notional asset value.
   * Optional: the developer publishes no prices, so listings without one
   * render as "Price on request" rather than showing an invented figure.
   */
  price?: number;
  /** Monthly rent in rupees, when the property is available to rent. */
  rent?: number;
  /**
   * Per-unit area. Optional: the developer publishes total built-up area per
   * building, not per flat, so most units render as "Area on request".
   */
  area?: number;
  areaUnit: 'sqft' | 'sqyd';
  bhk?: number;
  bathrooms?: number;
  parking?: number;
  floor?: string;
  facing?: Facing;
  /** True when we have checked the documents and listing details ourselves. */
  verified: boolean;
  featured?: boolean;
  images: ImageKey[];
  summary: string;
  highlights: string[];
  amenities?: string[];
  nearby?: { label: string; distance: string }[];
  /** Optional link to a project in src/data/projects.ts. */
  project?: string;
  postedOn: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  /** Optional for the same reason as Property.price — none are published. */
  startingPrice?: number;
  configurations: string[];
  possession: string;
  status: PropertyStatus;
  units: string;
  landArea: string;
  images: ImageKey[];
  summary: string;
  highlights: string[];
  amenities: string[];
  featured?: boolean;
  /** The colony/street the developer publishes, finer than the location slug. */
  locality?: string;
  /** Residential or commercial development. */
  kind?: 'residential' | 'commercial';
  /** Units still unsold, where the developer states it. */
  unitsAvailable?: number;
  unitsPerFloor?: number;
  /** The developer's own badge: Premium, Prestige, Budget Friendly, … */
  category?: string;
  /** Construction specification lines, as published. */
  specs?: string[];
  nearby?: { label: string; distance: string }[];
  /** The page this record was built from, so the mapping stays traceable. */
  sourceUrl?: string;
};

export type Location = {
  slug: string;
  name: string;
  zone: 'West' | 'North' | 'South' | 'Central' | 'East';
  tagline: string;
  about: string[];
  image: ImageKey;
  /**
   * Indicative starting price in rupees, for orientation only. Optional —
   * areas we have not priced ourselves show nothing rather than a guess.
   */
  startingPrice?: number;
  priceRanges: { label: string; range: string }[];
  popularTypes: PropertyType[];
  configurations: string[];
  connectivity: { label: string; detail: string }[];
  nearbyAreas: string[];
  faq: { q: string; a: string }[];
  featured?: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  heroImage: ImageKey;
  readingTime: number;
};
