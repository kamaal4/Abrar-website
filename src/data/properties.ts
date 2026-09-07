import type { ListingType, Property, PropertyStatus, PropertyType } from '../types';

/**
 * Demo property data.
 *
 * Everything here is illustrative sample stock, not live inventory. To move to a
 * real backend, replace the array with a fetch and keep the accessors below —
 * no component imports this array directly.
 */
export const properties: Property[] = [
  {
    slug: '3-bhk-premium-apartment-tolichowki',
    title: '3 BHK Premium Apartment',
    listing: ['buy'],
    type: 'flat',
    status: 'ready-to-move',
    location: 'tolichowki',
    price: 8_200_000,
    area: 1520,
    areaUnit: 'sqft',
    bhk: 3,
    bathrooms: 2,
    parking: 2,
    floor: '12th of 14',
    facing: 'East',
    verified: true,
    featured: true,
    images: ['tolichowki-building-rainbow', 'interior-living-plants', 'interior-living-tv'],
    summary:
      'An east-facing 3 BHK on a high floor in an established Tolichowki building, walking distance from the main road but set back far enough to stay quiet. Suits a family that wants to be central without moving to a new layout.',
    highlights: [
      'Corner unit with light on two sides',
      'Covered parking for two cars, allotted in writing',
      'Lift and backup power for common areas',
      'Occupancy certificate available for inspection',
    ],
    amenities: ['Lift', 'Power backup', 'Covered parking', 'Water softener', 'Security', 'Intercom'],
    nearby: [
      { label: 'Schools', distance: 'within 1.5 km' },
      { label: 'Hospital', distance: '2 km' },
      { label: 'Supermarket', distance: '400 m' },
      { label: 'Mehdipatnam bus terminal', distance: '5 km' },
    ],
    postedOn: '2026-08-14',
  },
  {
    slug: '2-bhk-apartment-kapra',
    title: '2 BHK Apartment near Kapra Lake',
    listing: ['buy'],
    type: 'flat',
    status: 'ready-to-move',
    location: 'kapra',
    price: 5_200_000,
    area: 1105,
    areaUnit: 'sqft',
    bhk: 2,
    bathrooms: 2,
    parking: 1,
    floor: '3rd of 5',
    facing: 'North-East',
    verified: true,
    images: ['hyd-residential-building', 'interior-living-tv'],
    summary:
      'A practical 2 BHK in a small, low-maintenance building on the eastern side, a short walk from Kapra Lake. Priced for a first purchase rather than a stretch.',
    highlights: [
      'Low monthly maintenance — small society, no oversized clubhouse to fund',
      'Open outlook to the north-east',
      'Borewell plus municipal water connection',
    ],
    amenities: ['Lift', 'Covered parking', 'Security', 'Rainwater harvesting'],
    nearby: [
      { label: 'Kapra Lake', distance: '900 m' },
      { label: 'ECIL junction', distance: '4 km' },
      { label: 'Schools', distance: 'within 2 km' },
    ],
    postedOn: '2026-08-02',
  },
  {
    slug: '4-bhk-villa-kokapet',
    title: '4 BHK Villa in a Gated Community',
    listing: ['buy', 'invest'],
    type: 'villa',
    status: 'ready-to-move',
    location: 'kokapet',
    price: 42_000_000,
    area: 3800,
    areaUnit: 'sqft',
    bhk: 4,
    bathrooms: 4,
    parking: 2,
    floor: 'G+1 with terrace',
    facing: 'East',
    verified: true,
    featured: true,
    images: ['kokapet-villas', 'villa-modern-pool', 'interior-living-plants'],
    summary:
      'An east-facing villa in a completed gated layout at Kokapet, with a private garden on two sides and direct Outer Ring Road access a few minutes away. Handover complete, association running.',
    highlights: [
      'Private garden on the east and north sides',
      'Servant room and separate utility yard',
      'Clubhouse, pool and gym within the layout',
      'Ten minutes to the Financial District on a clear run',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gym',
      'Landscaped park',
      'Gated security',
      'Underground cabling',
      'Sewage treatment plant',
    ],
    nearby: [
      { label: 'ORR Kokapet interchange', distance: '2 km' },
      { label: 'International school', distance: '3 km' },
      { label: 'Financial District', distance: '8 km' },
    ],
    postedOn: '2026-07-28',
  },
  {
    slug: '3-bhk-high-rise-tellapur',
    title: '3 BHK in a New High-Rise',
    listing: ['buy', 'invest'],
    type: 'flat',
    status: 'under-construction',
    location: 'tellapur',
    price: 13_500_000,
    area: 1885,
    areaUnit: 'sqft',
    bhk: 3,
    bathrooms: 3,
    parking: 2,
    floor: '18th of 32',
    facing: 'West',
    verified: true,
    featured: true,
    images: ['tellapur-towers', 'interior-living-plants'],
    summary:
      'A 3 BHK on the eighteenth floor of an under-construction tower at Tellapur, with a construction-linked payment plan and possession scheduled for late 2027. Long open view to the west.',
    highlights: [
      'Construction-linked payment plan',
      'Two covered car parks included',
      'Clubhouse and sports amenities planned within the project',
      'RERA registration number available on request',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gym',
      'Indoor games',
      'Children’s play area',
      'Power backup',
      'Gated security',
    ],
    nearby: [
      { label: 'Tellapur MMTS station', distance: '3 km' },
      { label: 'Financial District', distance: '14 km' },
      { label: 'Schools', distance: 'within 4 km' },
    ],
    postedOn: '2026-08-20',
  },
  {
    slug: 'residential-plot-267-sqyd-mokila',
    title: 'Residential Plot — 267 sq.yd',
    listing: ['buy', 'invest'],
    type: 'plot',
    status: 'ready-to-move',
    location: 'mokila',
    price: 5_200_000,
    area: 267,
    areaUnit: 'sqyd',
    facing: 'East',
    verified: true,
    featured: true,
    images: ['telangana-farmland-2', 'plot-layout-moinabad'],
    summary:
      'An east-facing plot in an approved layout at Mokila, with internal roads laid, drainage in place and electricity drawn to the layout. Ready to build on or hold.',
    highlights: [
      'Layout approval documents available for verification',
      '30-foot internal road frontage',
      'Corner-adjacent position, two open sides',
      'Compound wall around the layout complete',
    ],
    nearby: [
      { label: 'Mokila village centre', distance: '2 km' },
      { label: 'Shankarpally road', distance: '5 km' },
      { label: 'ORR Kollur interchange', distance: '14 km' },
    ],
    postedOn: '2026-08-11',
  },
  {
    slug: 'farm-land-2-acres-shankarpally',
    title: 'Farm Land — 2 Acres',
    listing: ['invest', 'buy'],
    type: 'farm-land',
    status: 'ready-to-move',
    location: 'shankarpally',
    price: 19_000_000,
    area: 9680,
    areaUnit: 'sqyd',
    verified: false,
    images: ['telangana-farmland', 'telangana-farmland-3'],
    summary:
      'Two acres of level farm land off the Shankarpally road with an existing borewell and road access on one side. Suited to a weekend-home build or a long hold. Documents pending our own verification.',
    highlights: [
      'Level land, no rock outcrop on the surveyed portion',
      'Existing borewell with reported year-round yield',
      'Approach road on the eastern boundary',
      'Pahani and passbook details to be shared on enquiry',
    ],
    nearby: [
      { label: 'Shankarpally town', distance: '7 km' },
      { label: 'Mokila', distance: '15 km' },
      { label: 'Shankarpally railway station', distance: '8 km' },
    ],
    postedOn: '2026-07-19',
  },
  {
    slug: '3-bhk-apartment-gachibowli',
    title: '3 BHK Apartment in the IT Corridor',
    listing: ['buy', 'rent', 'invest'],
    type: 'flat',
    status: 'ready-to-move',
    location: 'gachibowli',
    price: 18_500_000,
    rent: 55_000,
    area: 1750,
    areaUnit: 'sqft',
    bhk: 3,
    bathrooms: 3,
    parking: 2,
    floor: '9th of 12',
    facing: 'North',
    verified: true,
    featured: true,
    images: ['gachibowli-skyview', 'interior-living-tv', 'interior-living-plants'],
    summary:
      'A tenanted 3 BHK in Gachibowli, ten minutes from the Financial District. Available either as an investment purchase with the tenancy in place, or vacant on possession.',
    highlights: [
      'Currently tenanted — rental history available',
      'Two covered car parks',
      'Walk to office campuses on the Nanakramguda side',
      'Society with functioning association and maintenance record',
    ],
    amenities: ['Clubhouse', 'Gym', 'Lift', 'Power backup', 'Covered parking', 'Gated security'],
    nearby: [
      { label: 'Financial District', distance: '5 km' },
      { label: 'ORR Gachibowli entry', distance: '3 km' },
      { label: 'University campuses', distance: '2 km' },
    ],
    postedOn: '2026-08-22',
  },
  {
    slug: '2-bhk-for-rent-tolichowki',
    title: '2 BHK for Rent',
    listing: ['rent'],
    type: 'flat',
    status: 'ready-to-move',
    location: 'tolichowki',
    price: 6_200_000,
    rent: 28_000,
    area: 1080,
    areaUnit: 'sqft',
    bhk: 2,
    bathrooms: 2,
    parking: 1,
    floor: '2nd of 5',
    facing: 'South-East',
    verified: true,
    images: ['tolichowki-villa', 'interior-living-tv'],
    summary:
      'A semi-furnished 2 BHK on the second floor, available immediately. Wardrobes and modular kitchen in place; no white goods included.',
    highlights: [
      'Semi-furnished — wardrobes and kitchen fittings',
      'One covered parking slot',
      'Two months deposit, eleven-month agreement',
      'Available for immediate occupation',
    ],
    amenities: ['Lift', 'Covered parking', 'Security', 'Power backup'],
    nearby: [
      { label: 'Tolichowki junction', distance: '700 m' },
      { label: 'Schools', distance: 'within 1 km' },
      { label: 'Supermarket', distance: '300 m' },
    ],
    postedOn: '2026-08-25',
  },
  {
    slug: '4-bhk-villa-kompally',
    title: '4 BHK Villa with a Private Terrace',
    listing: ['buy'],
    type: 'villa',
    status: 'ready-to-move',
    location: 'kompally',
    price: 17_500_000,
    area: 3100,
    areaUnit: 'sqft',
    bhk: 4,
    bathrooms: 4,
    parking: 2,
    floor: 'G+2',
    facing: 'West',
    verified: true,
    images: ['palampally-villas-aerial', 'villa-modern-dark', 'interior-living-plants'],
    summary:
      'A G+2 villa in a north-side gated layout, with a private terrace on the top level and a small garden at the front. More built-up area than a comparable budget buys on the western corridor.',
    highlights: [
      'Private terrace, plumbed and ready for a pergola',
      'Separate utility and drying yard',
      'Two-car covered porch',
      'Layout with laid roads, underground drainage and street lighting',
    ],
    amenities: ['Clubhouse', 'Park', 'Gated security', 'Underground drainage', 'Street lighting'],
    nearby: [
      { label: 'Kompally main road', distance: '2 km' },
      { label: 'Schools', distance: 'within 3 km' },
      { label: 'ORR Medchal interchange', distance: '9 km' },
    ],
    postedOn: '2026-08-06',
  },
  {
    slug: '3-bhk-apartment-narsingi',
    title: '3 BHK Apartment near the ORR',
    listing: ['buy', 'invest'],
    type: 'flat',
    status: 'ready-to-move',
    location: 'narsingi',
    price: 12_800_000,
    area: 1690,
    areaUnit: 'sqft',
    bhk: 3,
    bathrooms: 3,
    parking: 2,
    floor: '7th of 14',
    facing: 'East',
    verified: true,
    images: ['narsingi-orr-flyover', 'interior-living-plants'],
    summary:
      'An east-facing 3 BHK a few minutes from the Narsingi ORR interchange — the practical middle ground between Kokapet pricing and the outer layouts.',
    highlights: [
      'Under five minutes to the ORR entry',
      'Two covered car parks',
      'Clubhouse and pool within the project',
      'Completed and occupied — you can see how it is actually maintained',
    ],
    amenities: ['Clubhouse', 'Swimming pool', 'Gym', 'Power backup', 'Gated security', 'Lift'],
    nearby: [
      { label: 'ORR Narsingi interchange', distance: '2 km' },
      { label: 'Financial District', distance: '9 km' },
      { label: 'Schools', distance: 'within 3 km' },
    ],
    postedOn: '2026-08-17',
  },
  {
    slug: 'open-land-1-5-acres-mokila',
    title: 'Open Land — 1.5 Acres',
    listing: ['invest'],
    type: 'open-land',
    status: 'ready-to-move',
    location: 'mokila',
    price: 24_000_000,
    area: 7260,
    areaUnit: 'sqyd',
    verified: false,
    images: ['hyd-rock-open-land', 'telangana-farmland'],
    summary:
      'An acre and a half of open land on the Mokila side, held for the corridor rather than for immediate use. Suitable only for a buyer comfortable with a long horizon and their own due diligence.',
    highlights: [
      'Single contiguous parcel, not fragmented',
      'Road access on the southern boundary',
      'No structure on site',
      'Title documents to be verified independently before any advance',
    ],
    nearby: [
      { label: 'Mokila junction', distance: '4 km' },
      { label: 'Shankarpally road', distance: '6 km' },
      { label: 'ORR Kollur interchange', distance: '16 km' },
    ],
    postedOn: '2026-06-30',
  },
  {
    slug: '3-bhk-new-launch-kokapet',
    title: '3 BHK in a New Launch Tower',
    listing: ['buy', 'invest'],
    type: 'flat',
    status: 'new-launch',
    location: 'kokapet',
    price: 23_500_000,
    area: 2010,
    areaUnit: 'sqft',
    bhk: 3,
    bathrooms: 3,
    parking: 2,
    floor: '24th of 40',
    facing: 'North-East',
    verified: true,
    featured: true,
    images: ['kokapet-ncc-urban-one', 'kokapet-lake', 'interior-living-tv'],
    summary:
      'A north-east facing 3 BHK in a newly launched Kokapet tower, with lake-side outlook from the higher floors and possession scheduled for 2029. Launch pricing, longest wait.',
    highlights: [
      'Launch-stage pricing with a construction-linked plan',
      'Outlook towards Kokapet lake from the upper floors',
      'Large clubhouse planned as part of the development',
      'RERA number to be shared with the cost sheet',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gym',
      'Co-working lounge',
      'Sports courts',
      'EV charging provision',
      'Gated security',
    ],
    nearby: [
      { label: 'ORR Kokapet interchange', distance: '1.5 km' },
      { label: 'Financial District', distance: '7 km' },
      { label: 'International schools', distance: 'within 5 km' },
    ],
    postedOn: '2026-08-27',
  },
];

/** Shown on every card and detail page so demo stock is never mistaken for live inventory. */
export const SAMPLE_DATA_NOTICE = 'Sample listing — illustrative data, not a live offer.';

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
