import type { Location, PropertyType } from '../types';

/**
 * Demo location data. Written to be realistic and useful for orientation, not
 * authoritative: prices and ranges are indicative and should be confirmed against
 * live listings before any decision. Replace this array with an API/CMS fetch and
 * keep the accessor functions below as the interface.
 */
export const locations: Location[] = [
  {
    slug: 'tolichowki',
    name: 'Tolichowki',
    zone: 'West',
    tagline: 'Established, dense and extremely well connected',
    about: [
      'Tolichowki sits between the old city and the western IT belt, which is a large part of its appeal. It is a mature, fully built-out neighbourhood — schools, clinics, bakeries and grocers are all within walking distance, and you are not waiting on a layout to develop around you.',
      'Most of the stock here is apartments in mid-rise buildings, with a smaller number of independent houses and villas in pockets such as Bharani Layout. Because the area is established, resale inventory usually outnumbers new launches, and the trade-off is age of building against location.',
      'Buyers typically look here when the daily commute matters more than a large clubhouse — Mehdipatnam, Banjara Hills and the Financial District are all reachable without leaving the arterial roads.',
    ],
    image: 'tolichowki-villa',
    startingPrice: 5_500_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹55 L – ₹80 L' },
      { label: '3 BHK flat', range: '₹75 L – ₹1.3 Cr' },
      { label: 'Independent house / villa', range: '₹1.4 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    connectivity: [
      { label: 'Mehdipatnam', detail: 'roughly 10 minutes by road' },
      { label: 'Financial District', detail: '25–35 minutes via the Outer Ring Road approach' },
      { label: 'Rajiv Gandhi International Airport', detail: 'about 45 minutes via the ORR' },
      { label: 'Metro', detail: 'nearest station on the Red Line at Lakdikapul' },
    ],
    nearbyAreas: ['Langar Houz', 'Pasha Colony', 'Mehdipatnam', 'Shaikpet', 'Manikonda'],
    faq: [
      {
        q: 'Is Tolichowki better for living in or for investment?',
        a: 'It reads more as an end-use location than a pure appreciation play. The area is already built out, so growth tends to be steady rather than sharp, and rental demand is consistently good because of how central it is.',
      },
      {
        q: 'What should I check before buying a resale flat here?',
        a: 'Building age and maintenance record, the water source, parking allotment in writing, and whether the society has a functioning association. Ask for the occupancy certificate and the last two years of maintenance dues.',
      },
    ],
    featured: true,
  },
  {
    slug: 'langar-houz',
    name: 'Langar Houz',
    zone: 'West',
    tagline: 'Older west-city pocket in the shadow of Golconda',
    about: [
      'Langar Houz is one of the older residential pockets on the western side, close to Golconda Fort and the Golconda–Gachibowli link. Plot sizes tend to be irregular and the street pattern is organic, which is worth knowing before you shortlist.',
      'Inventory is a mix of independent houses, small apartment buildings and occasional redevelopment projects. Pricing is generally softer than Tolichowki for comparable carpet area, which is why it comes up for buyers stretching a budget to stay on this side of the city.',
    ],
    image: 'golconda-city',
    startingPrice: 4_500_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹45 L – ₹65 L' },
      { label: '3 BHK flat', range: '₹65 L – ₹95 L' },
      { label: 'Independent house', range: '₹90 L onwards' },
    ],
    popularTypes: ['flat', 'plot'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Tolichowki', detail: 'about 10 minutes' },
      { label: 'Gachibowli', detail: '20–30 minutes via the Golconda link road' },
      { label: 'Mehdipatnam', detail: 'about 15 minutes' },
    ],
    nearbyAreas: ['Tolichowki', 'Golconda', 'Shaikpet', 'Pasha Colony'],
    faq: [
      {
        q: 'Are plot titles usually clean here?',
        a: 'It varies more than in planned layouts, because many holdings are old and subdivided. Get an independent title search and check the encumbrance certificate for at least 30 years before you pay an advance.',
      },
    ],
  },
  {
    slug: 'pasha-colony',
    name: 'Pasha Colony',
    zone: 'West',
    tagline: 'Quiet residential streets inside the Tolichowki belt',
    about: [
      'Pasha Colony is a settled residential pocket within the wider Tolichowki area, known more for its quiet internal streets than for new launches. Buyers usually arrive here after looking at Tolichowki main road and deciding they want less traffic noise.',
      'Expect independent houses and modest apartment buildings rather than large gated projects. Because turnover is low, good units tend to move through word of mouth.',
    ],
    image: 'tolichowki-villa',
    startingPrice: 5_000_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹50 L – ₹72 L' },
      { label: '3 BHK flat', range: '₹70 L – ₹1.1 Cr' },
      { label: 'Independent house', range: '₹1.2 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Tolichowki junction', detail: 'about 5 minutes' },
      { label: 'Financial District', detail: '25–35 minutes' },
      { label: 'Mehdipatnam', detail: 'about 12 minutes' },
    ],
    nearbyAreas: ['Tolichowki', 'Langar Houz', 'Shaikpet'],
    faq: [
      {
        q: 'Is there much new construction here?',
        a: 'Not a lot. Most activity is redevelopment of older plots into small apartment buildings, so supply is thin and specific — it helps to tell us what you want and let us watch for it.',
      },
    ],
  },
  {
    slug: 'tellapur',
    name: 'Tellapur',
    zone: 'West',
    tagline: 'High-rise growth corridor west of the Financial District',
    about: [
      'Tellapur has been one of the most active high-rise corridors on the western side, with large gated developments going up along the Osman Sagar and Ramachandrapuram approaches. The character of the area is defined by towers rather than street-level neighbourhood.',
      'Because so much of the stock is under construction or recently completed, buyers here are usually choosing between possession timelines: a ready unit at a premium, or an under-construction unit with a longer wait and a payment plan.',
      'Social infrastructure is still catching up in parts of the layout. Schools and retail have arrived, but check the specific stretch you are buying on rather than the area as a whole.',
    ],
    image: 'tellapur-towers',
    startingPrice: 7_500_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹75 L – ₹1 Cr' },
      { label: '3 BHK flat', range: '₹1.1 Cr – ₹1.9 Cr' },
      { label: '4 BHK / duplex', range: '₹2.2 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    connectivity: [
      { label: 'Financial District', detail: '20–30 minutes' },
      { label: 'HITEC City', detail: '25–35 minutes' },
      { label: 'Outer Ring Road', detail: 'access via the Kollur and Patancheru interchanges' },
      { label: 'MMTS', detail: 'Tellapur station on the Hyderabad–Ramachandrapuram line' },
    ],
    nearbyAreas: ['Kollur', 'Nallagandla', 'Ramachandrapuram', 'Osman Sagar', 'Gopanpally'],
    faq: [
      {
        q: 'Ready-to-move or under-construction in Tellapur?',
        a: 'If you are moving in yourself and paying rent elsewhere, a ready unit usually wins once you add the rent you would pay while waiting. If you are investing with a horizon of several years, an under-construction unit in a well-funded project can make sense — but weight the developer’s delivery record heavily.',
      },
      {
        q: 'Is water supply an issue in the high-rises?',
        a: 'Ask the specific project about its water source, borewell yield and whether Krishna or Godavari supply has reached the layout. This is a real differentiator here and the answer changes street by street.',
      },
    ],
    featured: true,
  },
  {
    slug: 'mokila',
    name: 'Mokila',
    zone: 'West',
    tagline: 'Villa plots and farm land on the western fringe',
    about: [
      'Mokila is best known for plotted development and villa layouts rather than apartments. It sits beyond Tellapur on the western side, and the appeal is space — plot sizes here buy you a footprint that would be unthinkable closer in.',
      'This is a location where the layout matters more than the area. An HMDA-approved layout with laid roads, drainage and electricity is a different asset from an unapproved one on the next road, even if the asking price looks similar.',
      'Buyers are typically either building a house over the next few years, or holding land while the corridor develops. Both are long-horizon positions.',
    ],
    image: 'telangana-farmland-2',
    startingPrice: 3_500_000,
    priceRanges: [
      { label: 'Residential plot (200 sq.yd)', range: '₹35 L – ₹60 L' },
      { label: 'Villa plot (300+ sq.yd)', range: '₹60 L – ₹1.2 Cr' },
      { label: 'Farm land (per acre)', range: '₹1.2 Cr onwards' },
    ],
    popularTypes: ['plot', 'open-land', 'farm-land', 'villa'],
    configurations: ['200 sq.yd', '267 sq.yd', '300 sq.yd', '400 sq.yd'],
    connectivity: [
      { label: 'Financial District', detail: '35–45 minutes' },
      { label: 'Tellapur', detail: 'about 20 minutes' },
      { label: 'Shankarpally', detail: 'about 15 minutes' },
      { label: 'Outer Ring Road', detail: 'via the Kollur interchange' },
    ],
    nearbyAreas: ['Shankarpally', 'Tellapur', 'Kollur', 'Chevella', 'Janwada'],
    faq: [
      {
        q: 'What approvals should a plot here have?',
        a: 'Look for HMDA or DTCP layout approval, an LP or RUP number you can verify, and clear conversion from agricultural use if applicable. Ask to see the approved layout plan with your plot number marked on it.',
      },
      {
        q: 'Can I get a home loan on a plot?',
        a: 'Plot loans exist but terms are stricter than home loans — usually lower loan-to-value and shorter tenure. Construction-linked composite loans are often the better route if you plan to build.',
      },
    ],
    featured: true,
  },
  {
    slug: 'shankarpally',
    name: 'Shankarpally',
    zone: 'West',
    tagline: 'Farm land, weekend homes and long-horizon plots',
    about: [
      'Shankarpally has a distinctly semi-rural character — farm land, weekend-home layouts and gated plot developments rather than city density. The Shankarpally road corridor has seen steady interest as the western side has expanded.',
      'Because it is further out, price entry is lower and the horizon is longer. Buyers here are usually thinking in five-to-ten-year terms, or buying land for a second home rather than a primary residence.',
    ],
    image: 'telangana-farmland-3',
    startingPrice: 2_800_000,
    priceRanges: [
      { label: 'Residential plot (200 sq.yd)', range: '₹28 L – ₹50 L' },
      { label: 'Villa plot', range: '₹50 L – ₹95 L' },
      { label: 'Farm land (per acre)', range: '₹80 L onwards' },
    ],
    popularTypes: ['plot', 'farm-land', 'open-land'],
    configurations: ['200 sq.yd', '250 sq.yd', '333 sq.yd', '1 acre'],
    connectivity: [
      { label: 'Financial District', detail: '45–55 minutes' },
      { label: 'Mokila', detail: 'about 15 minutes' },
      { label: 'Regional Ring Road (proposed)', detail: 'alignment passes to the west' },
      { label: 'MMTS', detail: 'Shankarpally railway station' },
    ],
    nearbyAreas: ['Mokila', 'Chevella', 'Kollur', 'Janwada', 'Moinabad'],
    faq: [
      {
        q: 'Is farm land a sensible first investment?',
        a: 'It is a slower and less liquid asset than a flat, and it needs active checking of title, access and land use. If it is your first property purchase, it is worth understanding those risks properly before committing.',
      },
    ],
  },
  {
    slug: 'kompally',
    name: 'Kompally',
    zone: 'North',
    tagline: 'North-side residential belt with room to grow',
    about: [
      'Kompally is the established anchor of the northern residential belt, on the Medchal highway side of the city. Gated apartment projects, independent villas and plotted layouts all coexist here.',
      'The area has good access to the northern stretch of the Outer Ring Road, and it has drawn buyers who work on the north side or want more built-up area for the money than the west offers.',
      'Schools, hospitals and retail are all present, which makes it a practical family location rather than a purely speculative one.',
    ],
    image: 'kompally-sunset',
    startingPrice: 4_800_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹48 L – ₹70 L' },
      { label: '3 BHK flat', range: '₹68 L – ₹1.1 Cr' },
      { label: 'Villa', range: '₹1.6 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa', 'plot'],
    configurations: ['2 BHK', '3 BHK', '4 BHK villa'],
    connectivity: [
      { label: 'Secunderabad', detail: '25–35 minutes' },
      { label: 'Outer Ring Road', detail: 'access at the Shamirpet and Medchal interchanges' },
      { label: 'Airport', detail: 'about 60 minutes via the ORR' },
    ],
    nearbyAreas: ['Medchal', 'Bahadurpally', 'Suchitra', 'Alwal', 'Dundigal'],
    faq: [
      {
        q: 'How does Kompally compare with the western corridor on price?',
        a: 'For the same budget you generally get more built-up area on the north side. What you trade away is proximity to the IT corridor, so it depends where the household actually commutes.',
      },
    ],
    featured: true,
  },
  {
    slug: 'kapra',
    name: 'Kapra',
    zone: 'East',
    tagline: 'Eastern residential area around Kapra Lake',
    about: [
      'Kapra sits on the eastern side near ECIL and Sainikpuri, with Kapra Lake as its landmark. It is a settled residential area with a long-standing local population rather than a new corridor.',
      'Apartments and independent houses dominate. Pricing is among the more accessible in the city for a fully serviced area, and demand is driven largely by proximity to eastern employment centres and the defence establishments.',
    ],
    image: 'kapra-lake',
    startingPrice: 4_000_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹40 L – ₹60 L' },
      { label: '3 BHK flat', range: '₹58 L – ₹90 L' },
      { label: 'Independent house', range: '₹95 L onwards' },
    ],
    popularTypes: ['flat', 'plot'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'ECIL / Uppal', detail: '15–25 minutes' },
      { label: 'Secunderabad', detail: 'about 30 minutes' },
      { label: 'Metro', detail: 'Blue Line terminus at Nagole, then road' },
    ],
    nearbyAreas: ['Sainikpuri', 'ECIL', 'Nagaram', 'Cherlapally', 'Uppal'],
    faq: [
      {
        q: 'Is the east side worth considering for investment?',
        a: 'It is more of a rental-yield and affordability story than a rapid-appreciation one. If your budget is tighter and you want a serviced area rather than a developing layout, it deserves a look.',
      },
    ],
  },
  {
    slug: 'gachibowli',
    name: 'Gachibowli',
    zone: 'West',
    tagline: 'The centre of the IT corridor',
    about: [
      'Gachibowli is the heart of the western employment corridor — the Financial District, university campuses and a large share of the city’s office stock are all within a short radius. That proximity is what you are paying for.',
      'Residential stock ranges from older apartment buildings to premium towers, with very little land left to develop. Rental demand is the strongest in the city, which makes it a common choice for buyers who want an income-producing asset.',
      'Expect to pay a clear premium per square foot compared with locations even fifteen minutes further out.',
    ],
    image: 'gachibowli-skyview',
    startingPrice: 9_500_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹95 L – ₹1.4 Cr' },
      { label: '3 BHK flat', range: '₹1.5 Cr – ₹2.8 Cr' },
      { label: '4 BHK / premium', range: '₹3 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    connectivity: [
      { label: 'Financial District', detail: '10–15 minutes' },
      { label: 'HITEC City', detail: '10–20 minutes' },
      { label: 'Outer Ring Road', detail: 'direct access at Gachibowli and Nanakramguda' },
      { label: 'Airport', detail: 'about 35 minutes via the ORR' },
    ],
    nearbyAreas: ['Nanakramguda', 'Kondapur', 'Manikonda', 'Kokapet', 'Nallagandla'],
    faq: [
      {
        q: 'Are rental yields actually better here?',
        a: 'Occupancy tends to be easier and tenant turnover lower because of the office density nearby. Gross yields are still modest in absolute terms — Indian residential yields generally are — so buy for the combination of rent and location, not rent alone.',
      },
    ],
    featured: true,
  },
  {
    slug: 'kokapet',
    name: 'Kokapet',
    zone: 'West',
    tagline: 'Premium high-rise district on the ORR',
    about: [
      'Kokapet, and the Neopolis layout in particular, has become the address for premium high-rise development in Hyderabad. Land here has been sold at some of the highest rates the city has recorded, and the built form reflects that — tall towers, large clubhouses, wide internal roads.',
      'The area sits directly on the Outer Ring Road with quick access to the Financial District, which is the practical case for it alongside the aspirational one.',
      'Almost everything here is either recently completed or under construction, so possession timelines and developer track record are the deciding factors.',
    ],
    image: 'kokapet-lake',
    startingPrice: 12_000_000,
    priceRanges: [
      { label: '3 BHK flat', range: '₹1.6 Cr – ₹3 Cr' },
      { label: '4 BHK flat', range: '₹3 Cr – ₹6 Cr' },
      { label: 'Villa', range: '₹4 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['3 BHK', '4 BHK', '5 BHK'],
    connectivity: [
      { label: 'Financial District', detail: '10–15 minutes' },
      { label: 'Gachibowli', detail: '15–20 minutes' },
      { label: 'Outer Ring Road', detail: 'direct access at the Kokapet interchange' },
      { label: 'Airport', detail: 'about 30 minutes via the ORR' },
    ],
    nearbyAreas: ['Narsingi', 'Gandipet', 'Manikonda', 'Nanakramguda', 'Tellapur'],
    faq: [
      {
        q: 'Is Kokapet overpriced?',
        a: 'It is priced as a premium district, and that premium is real — it reflects location on the ORR and the scale of the projects. Whether it is right for you depends on whether you need that address or would rather hold a larger unit further out for the same money.',
      },
    ],
    featured: true,
  },
  {
    slug: 'narsingi',
    name: 'Narsingi',
    zone: 'West',
    tagline: 'ORR-adjacent, between the city and the western fringe',
    about: [
      'Narsingi sits on the Outer Ring Road between Manikonda and Kokapet, which gives it a practical advantage: you can be on the ORR in minutes and in the Financial District shortly after.',
      'The stock is a mix of gated apartment projects and villa communities, with pricing that generally sits below Kokapet and above the outer layouts. It has become a common shortlist entry for buyers who want ORR access without Kokapet pricing.',
    ],
    image: 'narsingi-orr-flyover',
    startingPrice: 8_000_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹80 L – ₹1.1 Cr' },
      { label: '3 BHK flat', range: '₹1.15 Cr – ₹2 Cr' },
      { label: 'Villa', range: '₹2.5 Cr onwards' },
    ],
    popularTypes: ['flat', 'villa'],
    configurations: ['2 BHK', '3 BHK', '4 BHK villa'],
    connectivity: [
      { label: 'Financial District', detail: '15–20 minutes' },
      { label: 'Outer Ring Road', detail: 'direct access at the Narsingi interchange' },
      { label: 'Gachibowli', detail: '20–25 minutes' },
    ],
    nearbyAreas: ['Kokapet', 'Manikonda', 'Gandipet', 'Puppalguda', 'Bandlaguda Jagir'],
    faq: [
      {
        q: 'What is the main risk to check in Narsingi?',
        a: 'Internal road and drainage quality varies significantly between layouts. Visit the specific project approach road during or just after rain if you can — it tells you more than a brochure will.',
      },
    ],
  },
  {
    slug: 'kollur',
    name: 'Kollur',
    zone: 'West',
    tagline: 'Large-format gated projects at the ORR edge',
    about: [
      'Kollur has drawn very large gated developments on the western ORR edge, next to Tellapur. Project scale is the defining feature — several thousand units in a single development is not unusual.',
      'That scale brings amenities that smaller projects cannot match, and it brings the corresponding questions: how the layout handles traffic at peak hours, and how maintenance is run once handover is complete.',
    ],
    image: 'tellapur-towers-2',
    startingPrice: 6_500_000,
    priceRanges: [
      { label: '2 BHK flat', range: '₹65 L – ₹90 L' },
      { label: '3 BHK flat', range: '₹95 L – ₹1.6 Cr' },
      { label: 'Villa plot', range: '₹55 L onwards' },
    ],
    popularTypes: ['flat', 'plot'],
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    connectivity: [
      { label: 'Financial District', detail: '25–35 minutes' },
      { label: 'Outer Ring Road', detail: 'access at the Kollur interchange' },
      { label: 'Tellapur', detail: 'about 10 minutes' },
    ],
    nearbyAreas: ['Tellapur', 'Mokila', 'Osman Sagar', 'Patancheru', 'Nallagandla'],
    faq: [
      {
        q: 'Do very large projects hold value well?',
        a: 'They can, but supply within the project itself becomes your competition at resale. If you buy in a several-thousand-unit development, pick a differentiated unit — a better floor, a better view, a less common configuration.',
      },
    ],
  },
];

export const LOCATION_DATA_NOTICE =
  'Price ranges and travel times on this page are indicative and provided for orientation only. Confirm current figures against live listings before making a decision.';

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
