import type { ImageKey } from './data/images';

export type ListingType = 'buy' | 'rent' | 'invest';
export type PropertyType = 'flat' | 'villa' | 'plot' | 'open-land' | 'farm-land';
export type PropertyStatus = 'ready-to-move' | 'under-construction' | 'new-launch';
export type Facing = 'East' | 'West' | 'North' | 'South' | 'North-East' | 'South-East';

export const propertyTypeLabels: Record<PropertyType, string> = {
  flat: 'Flat',
  villa: 'Villa',
  plot: 'Plot',
  'open-land': 'Open Land',
  'farm-land': 'Farm Land',
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
  /** Sale price in rupees. For rentals this is the notional asset value. */
  price: number;
  /** Monthly rent in rupees, when the property is available to rent. */
  rent?: number;
  area: number;
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
  developer: string;
  location: string;
  startingPrice: number;
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
};

export type Location = {
  slug: string;
  name: string;
  zone: 'West' | 'North' | 'South' | 'Central' | 'East';
  tagline: string;
  about: string[];
  image: ImageKey;
  /** Indicative starting price in rupees, for orientation only. */
  startingPrice: number;
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
