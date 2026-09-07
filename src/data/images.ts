// AUTO-COMPOSED image registry. Every file in src/assets/ is registered here with the
// alt text and attribution it must be shown with. Components never import assets directly;
// they take an ImageKey and call getImage(), so swapping the whole image set later is a
// change to this file alone.
import type { ImageMetadata } from 'astro';

export type ImageCredit = {
  /** Human-readable alt text. Written as description, not as a label. */
  alt: string;
  /** Photographer / uploader, where the licence requires attribution. */
  author?: string;
  license?: string;
  /** Source page for the original file. */
  source?: string;
  sourceName: string;
};

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/*.webp', { eager: true });

const credits = {
  'hyd-financial-district-panorama': {
    alt: 'Financial District towers along the Hyderabad skyline at dusk',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Financial_District,_Hyderabad_-_Wide_panoramic_skyline_view_from_Nanakramguda_to_Gachibowli.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hyd-financial-district': {
    alt: 'Apartment towers rising over the Financial District, Hyderabad',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Financial_District,_Hyderabad_-_Skyline_featuring_Aparna_Zenon_and_SAS_iRA_under_construction.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hyd-skyline-hotel': {
    alt: 'Hyderabad rooftops looking out over the city',
    author: 'Billjones94',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hyderabad_skyline_captured_from_a_local_hotel.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hyd-rock-open-land': {
    alt: 'Open green land and rock formations on the edge of Hyderabad',
    author: 'melgupta',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hyderabad_City_rock_formations_View_2005.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tolichowki-villa': {
    alt: 'An independent villa in Bharani Layout, Tolichowki',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:A_villa_in_Bharani_layout,_Tolichowki.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tolichowki-building-rainbow': {
    alt: 'A rainbow over a residential building in Hyderabad',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Rainbow_over_a_building_in_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tolichowki-from-film-nagar': {
    alt: 'Tolichowki seen from the Film Nagar hill',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Tolichowki_from_Film_Nagar_hill.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tellapur-station': {
    alt: 'The Telugu and English nameboard at Tellapur railway station',
    author: 'Adityamadhav83',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Tellapur_railway_station.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'kompally-sunset': {
    alt: 'Sunset over the water on the northern edge of Hyderabad',
    author: 'pangalactic gargleblaster and the heart of gold from Hyderabad, India',
    license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Today_In_Sunsets_(14578565652).jpg',
    sourceName: 'Wikimedia Commons',
  },
  'kapra-lake': {
    alt: 'A little egret wading at Kapra Lake',
    author: 'KALX999',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Little_egret_at_Kapra_Lake.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'kokapet-lake': {
    alt: 'Kokapet Lake with new residential towers on the far bank',
    author: 'Kavali Chandrakanth KCK',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kokapet_Lake_2_Gandipet_Rangareddy_Telangana.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'kokapet-ncc-urban-one': {
    alt: 'High-rise apartments seen from the Kokapet road',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:NCC_Urban_One_from_Kokapet_road_(Closeup_Perspective).jpg',
    sourceName: 'Wikimedia Commons',
  },
  'kokapet-villas': {
    alt: 'Upscale villas in a gated layout at Kokapet',
    author: 'Saptarshi Pal',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Upscale_Villas_at_Kokapet_in_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hitec-apartment': {
    alt: 'A residential apartment block in HITEC City',
    author: 'Nikhil B',
    license: 'CC BY-SA 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:A_residential_apartment_in_Hitec_City,_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'aparna-zenon-towers': {
    alt: 'Symmetrical apartment towers in Hyderabad',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Aparna_Zenon,_Hyderabad_-_Symmetric_framing_of_the_high-rise_apartment_towers_facade.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hyd-residential-building': {
    alt: 'A finished residential building in Hyderabad',
    author: 'Nikhilb239',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Residential_Building,_Hyderabad,_20022015.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hitec-city': {
    alt: 'Office blocks in HITEC City, Hyderabad',
    author: 'Syced',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Hitec_City,_Hyderabad_(35576).jpg',
    sourceName: 'Wikimedia Commons',
  },
  'orr-aerial': {
    alt: 'The Outer Ring Road interchange from the air',
    author: 'Saikanth Krishna',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hyderabad_Outer_Ring_Road.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'orr-night': {
    alt: 'Long exposure of traffic on the Nehru Outer Ring Road',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Long_Exposure_shot_of_Nehru_Outer_ring_road_towards_Gachibowli.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'plot-layout-moinabad': {
    alt: 'An approved plot layout drawing for a farm development near Moinabad',
    author: 'Tahersn',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Scope_farms_moinabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'manikonda-sprawl': {
    alt: 'Rooftops spreading across Manikonda, Hyderabad',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Urban_sprawl_in_Manikonda,_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'telangana-farmland': {
    alt: 'Farmland and trees outside a Telangana village',
    author: 'Ms Sarah Welch',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Palampet_village_and_nearby_farmlands,_Telangana_India_-_1.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'telangana-farmland-2': {
    alt: 'Open fields on the edge of a Telangana village',
    author: 'Ms Sarah Welch',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Palampet_village_and_nearby_farmlands,_Telangana_India_-_2.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'telangana-farmland-3': {
    alt: 'A tree-lined road through Telangana farmland',
    author: 'Ms Sarah Welch',
    license: 'CC0',
    source: 'https://commons.wikimedia.org/wiki/File:Palampet_village_and_nearby_farmlands,_Telangana_India_-_3.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'narsingi-orr-flyover': {
    alt: 'The Outer Ring Road seen from the Narsingi flyover',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:ORR_view_from_Narasinghi_flyover_(02).jpg',
    sourceName: 'Wikimedia Commons',
  },
  'gachibowli-sunset': {
    alt: 'Sunset over Gachibowli, Hyderabad',
    author: 'Bhavabhuthi',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Sunset_in_Gachibowli_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'gachibowli-skyview': {
    alt: 'The Sky View tower at Gachibowli lit by the setting sun',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:The_Sky_View_10_building_at_Gachibowli_illuminated_by_Sunset.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tellapur-towers': {
    alt: 'Apartment towers under construction at Tellapur',
    author: 'Pendemsrikanth',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Alien_Space_Station.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'tellapur-towers-2': {
    alt: 'New high-rise construction on the Tellapur stretch',
    author: 'Sawarijoshi',
    license: 'CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Aliens_Space_Station_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'palampally-villas-aerial': {
    alt: 'Villas in a planned layout, seen from above',
    author: 'Adityamadhav83',
    license: 'CC BY 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:View_of_Palampally_Villas_in_Hyderabad.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'villa-greens-gandipet': {
    alt: 'Villas at Gandipet, on the western edge of the city',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Villa_Greens_in_Gandipet_village.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hussain-sagar': {
    alt: 'Hussain Sagar lake in the middle of Hyderabad',
    author: 'Yakshitha',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hussain_Sagar,_Hyderabad_3.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'charminar': {
    alt: 'The Charminar in the old city of Hyderabad',
    author: 'Joydeep',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Charminar_Hyderabad_111.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'golconda-city': {
    alt: 'Golconda Fort with the city stretching out behind it',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Golconda_Fort_and_Hyderabad_city.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'hyd-metro': {
    alt: 'A Hyderabad Metro train on the elevated Blue Line',
    author: 'Nikhil B',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Hyderabad_Metro_Blue_Line_14042019.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'gandipet-road': {
    alt: 'The road across the Gandipet reservoir',
    author: 'iMahesh',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Road_on_Gandipet_Reservoir.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'gandipet-lake-night': {
    alt: 'Evening light over Gandipet Lake',
    author: 'Nikesh.kumar44',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Night_at_Gandipet_Lake.jpg',
    sourceName: 'Wikimedia Commons',
  },
  'interior-living-plants': {
    alt: 'A bright living room with plants and a low wooden table',
    sourceName: 'Unsplash',
  },
  'interior-living-tv': {
    alt: 'A living room with a blue sofa and a wall-length media unit',
    sourceName: 'Unsplash',
  },
  'villa-modern-dark': {
    alt: 'A modern villa with deep eaves and floor-to-ceiling glazing',
    sourceName: 'Unsplash',
  },
  'villa-modern-pool': {
    alt: 'A white flat-roofed villa beside a swimming pool',
    sourceName: 'Unsplash',
  },
  'villa-modern-terrace': {
    alt: 'A modern villa with a timber-lined terrace over a long pool',
    sourceName: 'Unsplash',
  },
} as const satisfies Record<string, ImageCredit>;

export type ImageKey = keyof typeof credits;

export const imageKeys = Object.keys(credits) as ImageKey[];

export function getImage(key: ImageKey): { src: ImageMetadata; credit: ImageCredit } {
  const mod = files[`../assets/${key}.webp`];
  if (!mod) throw new Error(`Missing image asset for key "${key}" (expected src/assets/${key}.webp)`);
  return { src: mod.default, credit: credits[key] };
}

/** Only the images whose licence actually requires a credit line. */
export function attributedImages(): Array<{ key: ImageKey } & ImageCredit> {
  const all: Array<{ key: ImageKey } & ImageCredit> = imageKeys.map((key) => ({
    key,
    ...(credits[key] as ImageCredit),
  }));
  return all.filter((c) => Boolean(c.author));
}

/** Validates a string from frontmatter/content into an ImageKey at build time. */
export function asImageKey(value: string): ImageKey {
  if (!(value in credits)) {
    throw new Error(`Unknown image key "${value}". Add the asset to src/assets/ and register it in src/data/images.ts.`);
  }
  return value as ImageKey;
}
