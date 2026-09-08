import type { Location, PropertyType } from '../types';

/**
 * Area guides, written for orientation rather than as authority. Where a record
 * carries a startingPrice or priceRanges those figures are our own indicative
 * read and should be confirmed against live listings; areas we have not priced
 * ourselves carry neither, and show less rather than guessing.
 *
 * Replace this array with an API/CMS fetch and keep the accessors as the interface.
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
    featured: true,
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
  // --- Areas where Qmaks builds -------------------------------------------
  // Written for orientation. These records deliberately carry no startingPrice
  // and no priceRanges: we have not priced these areas ourselves, and the
  // developer publishes nothing, so the page shows less rather than guessing.
  {
    slug: 'alkapur',
    name: 'Alkapur',
    zone: 'West',
    tagline: 'Township living on the Manikonda–Puppalaguda stretch',
    about: [
      'Alkapur Township sits off the Manikonda–Puppalaguda road, close enough to the western IT corridor that the commute is the main reason people buy here. It filled in fast over the last decade, so most of what you see is apartment stock of recent vintage rather than resale from the 1990s.',
      'Diamond Hills Colony, inside the township, is where a good deal of the newer mid-rise development has landed. The area is largely residential in character, with retail and commercial arriving along the main approach roads rather than inside the layouts.',
      'It appeals to buyers who want proximity to Gachibowli and the Financial District without the pricing of Kokapet or the newness of Tellapur.',
    ],
    image: 'manikonda-sprawl',
    priceRanges: [],
    popularTypes: ['flat', 'commercial'],
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    connectivity: [
      { label: 'Gachibowli and the Financial District', detail: 'reachable via Manikonda and the ORR approach' },
      { label: 'Outer Ring Road', detail: 'nearest access at Narsingi' },
      { label: 'Mehdipatnam', detail: 'along the Puppalaguda–Rethibowli road' },
    ],
    nearbyAreas: ['Manikonda', 'Puppalaguda', 'Narsingi', 'Neknampur', 'Shaikpet'],
    faq: [
      {
        q: 'How does Alkapur compare with Manikonda?',
        a: 'They adjoin each other and share the same road network. Alkapur is more layout-led and residential; Manikonda has more retail and older stock. Check the specific colony rather than the area name — the two vary more within themselves than between each other.',
      },
      {
        q: 'What should I verify before buying here?',
        a: 'Layout approvals and the building permission, water source and borewell reliability, and whether the internal roads and drainage have been handed over to the municipality. Ask for the occupancy certificate on completed buildings.',
      },
    ],
    featured: true,
  },
  {
    slug: 'shaikpet',
    name: 'Shaikpet',
    zone: 'West',
    tagline: 'Between Golconda and the Jubilee Hills edge',
    about: [
      'Shaikpet runs from the Golconda side towards the Jubilee Hills and Film Nagar edge, which gives it an unusual mix: heritage land on one flank, established high-value residential on the other. Aziz Bagh and Satya Colony are among the pockets where newer development has concentrated.',
      'The area is fully built out along its main roads, so new projects here are infill rather than greenfield — smaller plots, mid-rise buildings, and a fair amount of commercial on the arterial stretches.',
      'People buy here for the location rather than for amenities: you are close to Banjara Hills, Tolichowki and the western corridor at once.',
    ],
    image: 'golconda-city',
    priceRanges: [],
    popularTypes: ['flat', 'commercial'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Jubilee Hills and Banjara Hills', detail: 'directly adjoining to the north' },
      { label: 'Tolichowki', detail: 'along the Seven Tombs road' },
      { label: 'Golconda Fort', detail: 'immediately west' },
    ],
    nearbyAreas: ['Tolichowki', 'Golconda', 'Film Nagar', 'Manikonda', 'Langar Houz'],
    faq: [
      {
        q: 'Is Shaikpet a good rental area?',
        a: 'Rental demand is generally steady because of how central it is and how close it sits to Banjara Hills and the western offices. As always the specific building and its parking matter more to a tenant than the postcode.',
      },
      {
        q: 'Anything specific to check in Shaikpet?',
        a: 'Land near the Golconda side can carry heritage-zone and height restrictions. Confirm the sanctioned plan and the permitted number of floors against what has actually been built.',
      },
    ],
    featured: true,
  },
  {
    slug: 'mehdipatnam',
    name: 'Mehdipatnam',
    zone: 'West',
    tagline: 'The transport hub the west of the city routes through',
    about: [
      'Mehdipatnam is one of the busiest interchanges in Hyderabad — the bus terminus, the Rethibowli and Aramghar approaches and the road towards Tolichowki all meet here. That makes it convenient and loud in roughly equal measure.',
      'Stock is dense and mostly apartments, with a substantial commercial layer along the main roads. Humayun Nagar and the surrounding colonies are quieter than the junction itself while staying within walking distance of it.',
      'It suits buyers who value being able to get anywhere in the city without a car, and who are willing to trade quiet for that.',
    ],
    image: 'hyd-residential-building',
    priceRanges: [],
    popularTypes: ['flat', 'commercial'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'City bus terminus', detail: 'at the junction itself' },
      { label: 'Tolichowki and the western corridor', detail: 'along the Seven Tombs road' },
      { label: 'Rajiv Gandhi International Airport', detail: 'via the Aramghar and PV Narasimha Rao Expressway route' },
    ],
    nearbyAreas: ['Tolichowki', 'Humayun Nagar', 'Asif Nagar', 'Rethibowli', 'Attapur'],
    faq: [
      {
        q: 'Is the traffic a problem for a home here?',
        a: 'At the junction, yes — it is one of the heaviest in the city. Colonies a few hundred metres off the main road are noticeably calmer, so the specific street matters a great deal more here than the area name.',
      },
    ],
    featured: true,
  },
  {
    slug: 'mohammedi-lines',
    name: 'Mohammedi Lines',
    zone: 'West',
    tagline: 'A quiet pocket within the Tolichowki belt',
    about: [
      'Mohammedi Lines — MD Lines locally — is a residential pocket inside the wider Tolichowki area, with Al Kareem Colony among the layouts where new building has happened. It is small, largely residential, and reached off the main Tolichowki roads.',
      'Because the pocket is compact, projects here tend to be single mid-rise buildings rather than multi-tower developments. That means fewer shared amenities and, usually, a shorter completion timeline.',
    ],
    image: 'tolichowki-building-rainbow',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Tolichowki main road', detail: 'immediately adjoining' },
      { label: 'Mehdipatnam', detail: 'via the Seven Tombs road' },
    ],
    nearbyAreas: ['Tolichowki', 'Shaikpet', 'Langar Houz', 'Mehdipatnam'],
    faq: [
      {
        q: 'What is the difference between MD Lines and Tolichowki?',
        a: 'MD Lines is a pocket within the Tolichowki belt rather than a separate area. Expect the same connectivity and a slightly quieter street environment than the arterial roads.',
      },
    ],
  },
  {
    slug: 'malakpet',
    name: 'Malakpet',
    zone: 'Central',
    tagline: 'Central, connected and served by the Metro',
    about: [
      'Malakpet sits south-east of the centre, on the Metro Blue Line and close to the Musi and the old-city approaches. Akbar Bagh is one of the colonies within it where residential building has continued.',
      'It is an established, dense area — the stock is mostly apartments, and much of it is resale rather than new. The Metro station is the single biggest practical advantage for a daily commuter.',
    ],
    image: 'hussain-sagar',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Metro', detail: 'Malakpet station on the Blue Line' },
      { label: 'Secunderabad and Koti', detail: 'direct road and rail links' },
      { label: 'Dilsukhnagar', detail: 'a short distance east' },
    ],
    nearbyAreas: ['Dilsukhnagar', 'Saidabad', 'Koti', 'Chaderghat', 'Nalgonda X Roads'],
    faq: [
      {
        q: 'Why buy in Malakpet rather than the western corridor?',
        a: 'Price per square foot and Metro access. If your work is in the centre, Secunderabad or the east, Malakpet is a far shorter commute than anything in the west — and you are buying into an area that is already fully serviced.',
      },
    ],
  },
  {
    slug: 'neknampur',
    name: 'Neknampur',
    zone: 'West',
    tagline: 'Lake-side pocket off the Manikonda road',
    about: [
      'Neknampur lies off the Manikonda–Narsingi stretch and is best known for its lake and the restoration work around it. Residentially it is a smaller, quieter pocket than its neighbours, with development arriving later.',
      'The stock is mostly recent apartments. The appeal is being within reach of Gachibowli and the Financial District while sitting a little off the main traffic routes.',
    ],
    image: 'manikonda-sprawl',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Manikonda', detail: 'directly adjoining' },
      { label: 'Outer Ring Road', detail: 'nearest access at Narsingi' },
      { label: 'Financial District', detail: 'via Narsingi or Manikonda' },
    ],
    nearbyAreas: ['Manikonda', 'Alkapur', 'Narsingi', 'Puppalaguda'],
    faq: [
      {
        q: 'Does the lake affect buying here?',
        a: 'It is worth checking the full tank bed level and buffer zone for any plot or building close to the water. Ask specifically for the layout approval and whether any part of the site falls within the buffer.',
      },
    ],
  },
  {
    slug: 'noor-khan-bazar',
    name: 'Noor Khan Bazar',
    zone: 'Central',
    tagline: 'Old city, walking distance from Charminar',
    about: [
      'Noor Khan Bazar is in the old city, close to Charminar and the historic commercial quarter. It is one of the oldest continuously inhabited parts of Hyderabad, and it reads that way: narrow streets, mixed residential and commercial use, and very little vacant land.',
      'New residential building here is small-scale and infill by necessity. What you get in exchange is a genuinely central location within the old city and an area that needs no infrastructure to arrive.',
    ],
    image: 'charminar',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Charminar', detail: 'within walking distance' },
      { label: 'Metro', detail: 'nearest Blue Line access at Malakpet' },
      { label: 'Koti and Afzalgunj', detail: 'a short distance north' },
    ],
    nearbyAreas: ['Charminar', 'Moghalpura', 'Chatta Bazar', 'Malakpet'],
    faq: [
      {
        q: 'What is different about buying in the old city?',
        a: 'Title history tends to be longer and more layered than in newer layouts, and plots are often small and irregular. Budget for a proper legal search rather than a quick one, and confirm the building permission against what stands.',
      },
    ],
  },
  {
    slug: 'attapur',
    name: 'Attapur',
    zone: 'South',
    tagline: 'On the Rajendranagar side of the Ring Road',
    about: [
      'Attapur sits south-west of Mehdipatnam on the road towards Rajendranagar and the airport corridor. It grew as an overflow from Mehdipatnam and remains well connected to it.',
      'Stock is mostly apartments with a growing commercial layer along the main road. It draws buyers who want to be near the centre and the airport route without central-city pricing.',
    ],
    image: 'hyd-residential-building',
    priceRanges: [],
    popularTypes: ['flat', 'commercial'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Mehdipatnam', detail: 'a short distance north-east' },
      { label: 'Outer Ring Road', detail: 'access on the Rajendranagar side' },
      { label: 'Rajiv Gandhi International Airport', detail: 'along the Aramghar route' },
    ],
    nearbyAreas: ['Mehdipatnam', 'Rajendranagar', 'Hyderguda', 'Upperpally', 'Shamshabad'],
    faq: [
      {
        q: 'Is Attapur mainly an end-use or investment area?',
        a: 'Mostly end-use, driven by the commute into the centre and along the airport corridor. Treat any appreciation case as dependent on the specific road and how the corridor develops, not on the area label.',
      },
    ],
  },
  {
    slug: 'vijay-nagar',
    name: 'Vijay Nagar Colony',
    zone: 'Central',
    tagline: 'Established colony near the city centre',
    about: [
      'Vijay Nagar Colony is a long-established residential colony in the central belt, within reach of the Masab Tank and Mehdipatnam approaches. It is fully built out, with a mix of older independent houses and newer apartment buildings replacing them.',
      'New projects are infill on individual plots rather than layouts. The draw is central location and mature surroundings, not new amenities.',
    ],
    image: 'hyd-skyline-hotel',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [
      { label: 'Masab Tank and Mehdipatnam', detail: 'a short distance west' },
      { label: 'Banjara Hills', detail: 'directly to the north' },
      { label: 'Metro', detail: 'nearest Red Line access at Lakdikapul' },
    ],
    nearbyAreas: ['Masab Tank', 'Mehdipatnam', 'Banjara Hills', 'Asif Nagar'],
    faq: [
      {
        q: 'What is worth checking in an established colony like this?',
        a: 'On a redeveloped plot, ask what stood there before and confirm the demolition and rebuild were permitted. Parking allotment in writing matters more here than in a newer layout, because plots are small.',
      },
    ],
  },
  {
    slug: 'janachaitanya',
    name: 'Jana Chaitanya',
    zone: 'West',
    tagline: 'A residential colony on the western side',
    about: [
      'Jana Chaitanya is a residential colony on the western side of the city, of the kind that filled in as the IT corridor pulled housing demand outward. It is small and almost entirely residential in character.',
      'Development here is individual buildings rather than large projects, so expect fewer shared amenities and a shorter build timeline than a township.',
    ],
    image: 'hitec-apartment',
    priceRanges: [],
    popularTypes: ['flat'],
    configurations: ['2 BHK', '3 BHK'],
    connectivity: [],
    nearbyAreas: ['Manikonda', 'Puppalaguda', 'Alkapur'],
    faq: [
      {
        q: 'How do I judge a small colony like this?',
        a: 'Walk it at two different times of day. Water supply, approach road width and how far you are from the nearest arterial road tell you more about daily life here than any brochure.',
      },
    ],
  },
  {
    slug: 'shamshabad',
    name: 'Shamshabad',
    zone: 'South',
    tagline: 'The airport corridor, and plotted land',
    about: [
      'Shamshabad is the airport belt — Rajiv Gandhi International Airport sits here, and the expressway and Outer Ring Road both serve it. That infrastructure is the entire investment case for the area.',
      'Unlike the western corridor, a lot of what trades here is plotted land and layouts rather than apartments. Ramanujapur and the surrounding villages are where several of those layouts sit.',
      'It is a longer-horizon area: the roads and the airport are already built, but the residential density that would push prices is still arriving.',
    ],
    image: 'plot-layout-moinabad',
    priceRanges: [],
    popularTypes: ['plot', 'open-land'],
    configurations: ['Plots', 'Open land'],
    connectivity: [
      { label: 'Rajiv Gandhi International Airport', detail: 'within the same belt' },
      { label: 'PV Narasimha Rao Expressway', detail: 'direct link to the city centre' },
      { label: 'Outer Ring Road', detail: 'multiple interchanges nearby' },
    ],
    nearbyAreas: ['Attapur', 'Rajendranagar', 'Kothur', 'Maheshwaram', 'Adibatla'],
    faq: [
      {
        q: 'What is the main risk with a plotted layout out here?',
        a: 'Title and approval, in that order. Confirm the layout is approved (HMDA or the relevant authority), that the specific plot number appears on the sanctioned plan, and that the land is not assigned or under any acquisition notice.',
      },
      {
        q: 'How long a horizon does land here need?',
        a: 'Longer than an apartment in the west. The infrastructure exists, but plotted land pays nothing while you hold it, so plan on years rather than months and do not borrow against a timeline you cannot control.',
      },
    ],
    featured: true,
  },
  {
    slug: 'chevella',
    name: 'Chevella',
    zone: 'West',
    tagline: 'Farm land and open plots west of the city',
    about: [
      'Chevella is out on the western highway past the city edge, in the belt where farm land and farmhouse plots trade rather than apartments. Damergidda is one of the villages within it.',
      'This is a land market, with the characteristics that implies: low holding cost, no rental income, and a return that depends entirely on whether the city grows in this direction on your timeline.',
    ],
    image: 'telangana-farmland-2',
    priceRanges: [],
    popularTypes: ['farm-land', 'open-land', 'plot'],
    configurations: ['Farm land', 'Open land'],
    connectivity: [
      { label: 'Outer Ring Road', detail: 'via the Shankarpally and Moinabad approaches' },
      { label: 'Financial District', detail: 'along the Chevella road through Shankarpally' },
    ],
    nearbyAreas: ['Shankarpally', 'Moinabad', 'Vikarabad', 'Mokila'],
    faq: [
      {
        q: 'What has to be checked before buying agricultural land here?',
        a: 'Pattadar passbook and title deed in the seller’s name, the survey number and extent against the revenue records, whether the land is assigned or endowment land, and access — a plot with no legal road access is very hard to sell on.',
      },
    ],
  },
];

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
