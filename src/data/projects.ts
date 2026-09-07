import type { Project } from '../types';

/**
 * Demo project data. Names and figures are illustrative sample content, not
 * offers from named developers. Swap this array for a backend fetch when there is one.
 */
export const projects: Project[] = [
  {
    slug: 'premium-heights-tolichowki',
    name: 'Premium Heights',
    developer: 'Sample Developer',
    location: 'tolichowki',
    startingPrice: 7_800_000,
    configurations: ['2 BHK', '3 BHK'],
    possession: 'Ready to move',
    status: 'ready-to-move',
    units: '96 units across 2 towers',
    landArea: '1.4 acres',
    images: ['tolichowki-building-rainbow', 'interior-living-plants'],
    summary:
      'A compact, completed development in the Tolichowki belt. The case for it is location and low maintenance rather than resort-scale amenities — two towers, a modest clubhouse, and everything the neighbourhood already offers within walking distance.',
    highlights: [
      'Completed and occupied, with a functioning owners’ association',
      'Two towers only — maintenance cost stays proportionate',
      'Covered parking allotted per unit',
      'Walking distance to schools, clinics and daily retail',
    ],
    amenities: ['Clubhouse', 'Gym', 'Children’s play area', 'Power backup', 'Lift', 'Security'],
    featured: true,
  },
  {
    slug: 'green-valley-tellapur',
    name: 'Green Valley',
    developer: 'Sample Developer',
    location: 'tellapur',
    startingPrice: 11_500_000,
    configurations: ['2 BHK', '3 BHK', '4 BHK'],
    possession: 'December 2027',
    status: 'under-construction',
    units: '640 units across 5 towers',
    landArea: '8.2 acres',
    images: ['tellapur-towers', 'tellapur-towers-2', 'interior-living-tv'],
    summary:
      'A five-tower development on the Tellapur stretch, currently under construction with possession scheduled for the end of 2027. Large open podium between the towers and a full clubhouse planned.',
    highlights: [
      'Construction-linked payment plan available',
      'Over half the site left open at podium level',
      '40,000 sq.ft clubhouse planned',
      'Three-side open units available on the higher floors',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gym',
      'Badminton court',
      'Jogging track',
      'Amphitheatre',
      'Sewage treatment plant',
      'Gated security',
    ],
    featured: true,
  },
  {
    slug: 'urban-nest-mokila',
    name: 'Urban Nest',
    developer: 'Sample Developer',
    location: 'mokila',
    startingPrice: 4_200_000,
    configurations: ['200 sq.yd', '267 sq.yd', '333 sq.yd', '400 sq.yd'],
    possession: 'Plots registered and ready',
    status: 'ready-to-move',
    units: '212 plots',
    landArea: '24 acres',
    images: ['telangana-farmland-2', 'plot-layout-moinabad'],
    summary:
      'A plotted development at Mokila with internal roads, drainage and electricity already in place. Buyers here are either building over the next few years or holding land as the western corridor extends.',
    highlights: [
      'Layout approval documents available for verification',
      '40-foot and 30-foot internal roads laid',
      'Underground drainage and electrical cabling complete',
      'Avenue plantation and compound wall done',
    ],
    amenities: [
      'Laid internal roads',
      'Underground drainage',
      'Underground electrical cabling',
      'Compound wall',
      'Avenue plantation',
      'Entrance arch',
    ],
    featured: true,
  },
  {
    slug: 'grand-vista-shankarpally',
    name: 'Grand Vista',
    developer: 'Sample Developer',
    location: 'shankarpally',
    startingPrice: 9_500_000,
    configurations: ['3 BHK villa', '4 BHK villa'],
    possession: 'June 2028',
    status: 'new-launch',
    units: '84 villas',
    landArea: '16 acres',
    images: ['villa-greens-gandipet', 'villa-modern-terrace', 'telangana-farmland-3'],
    summary:
      'A villa development on the Shankarpally side, launched recently with possession scheduled for mid-2028. Low density by design — 84 villas across sixteen acres — with the trade-off that it is further out than the ORR-adjacent alternatives.',
    highlights: [
      'Low density: 84 villas on 16 acres',
      'Every villa with a private garden on at least two sides',
      'Clubhouse and sports zone planned at the centre of the layout',
      'Launch-stage pricing',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Tennis court',
      'Cycling track',
      'Organic farming plots',
      'Gated security',
      'Solar street lighting',
    ],
  },
  {
    slug: 'lakeview-residency-kompally',
    name: 'Lakeview Residency',
    developer: 'Sample Developer',
    location: 'kompally',
    startingPrice: 5_600_000,
    configurations: ['2 BHK', '3 BHK'],
    possession: 'March 2027',
    status: 'under-construction',
    units: '288 units across 3 towers',
    landArea: '3.6 acres',
    images: ['kompally-sunset', 'hyd-residential-building', 'interior-living-plants'],
    summary:
      'A three-tower project on the north side at Kompally, under construction with possession scheduled for early 2027. Priced for families who want more built-up area than the western corridor allows at the same budget.',
    highlights: [
      'More carpet area per rupee than comparable western-corridor stock',
      'Rooftop deck on the tallest tower',
      'Two covered parking levels',
      'Established schools and hospitals already in the area',
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Gym',
      'Rooftop deck',
      'Indoor games',
      'Power backup',
      'Gated security',
    ],
    featured: true,
  },
];

export const PROJECT_DATA_NOTICE =
  'Sample project — illustrative content. Developer names, pricing and possession dates are placeholders.';

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}

export function getProjectsByLocation(locationSlug: string): Project[] {
  return projects.filter((p) => p.location === locationSlug);
}

export function getSimilarProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== project.slug)
    .sort(
      (a, b) =>
        (b.location === project.location ? 1 : 0) - (a.location === project.location ? 1 : 0),
    )
    .slice(0, limit);
}
