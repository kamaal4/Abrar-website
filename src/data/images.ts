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





  // --- Qmaks project galleries -------------------------------------------
  // Supplied by the developer on qmaks.com. Some are artist's impressions
  // rather than photographs of the completed building; the site says so.
  'qmaks-aasheen-1': {
    alt: 'Qmaks Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-aasheen',
  },
  'qmaks-aasheen-2': {
    alt: 'Qmaks Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-aasheen',
  },
  'qmaks-aasheen-3': {
    alt: 'Qmaks Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-aasheen',
  },
  'qmaks-aasheen-4': {
    alt: 'Qmaks Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-aasheen',
  },
  'qmaks-al-kareem-1': {
    alt: 'Qmaks Al Kareem, an under-construction development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-kareem',
  },
  'qmaks-al-qasr-1': {
    alt: 'Qmaks Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-qasr',
  },
  'qmaks-al-qasr-2': {
    alt: 'Qmaks Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-qasr',
  },
  'qmaks-al-qasr-3': {
    alt: 'Qmaks Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-qasr',
  },
  'qmaks-al-qasr-4': {
    alt: 'Qmaks Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-qasr',
  },
  'qmaks-al-quadeer-1': {
    alt: 'Qmaks Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-quadeer',
  },
  'qmaks-al-quadeer-2': {
    alt: 'Qmaks Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-quadeer',
  },
  'qmaks-al-quadeer-3': {
    alt: 'Qmaks Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-quadeer',
  },
  'qmaks-al-quadeer-4': {
    alt: 'Qmaks Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-al-quadeer',
  },
  'qmaks-amer-1': {
    alt: 'Qmaks Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-amer',
  },
  'qmaks-amer-2': {
    alt: 'Qmaks Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-amer',
  },
  'qmaks-amer-3': {
    alt: 'Qmaks Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-amer',
  },
  'qmaks-amer-4': {
    alt: 'Qmaks Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-amer',
  },
  'qmaks-ashiyana-1': {
    alt: 'Qmaks Ashiyana, an under-construction development in Anurag Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-ashiyana',
  },
  'qmaks-crystal-avenue-1': {
    alt: 'Qmaks Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-crystal-avenue',
  },
  'qmaks-crystal-avenue-2': {
    alt: 'Qmaks Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-crystal-avenue',
  },
  'qmaks-crystal-avenue-3': {
    alt: 'Qmaks Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-crystal-avenue',
  },
  'qmaks-crystal-avenue-4': {
    alt: 'Qmaks Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-crystal-avenue',
  },
  'qmaks-hashim-residency-1': {
    alt: 'Qmaks Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-hashim-residency',
  },
  'qmaks-hashim-residency-2': {
    alt: 'Qmaks Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-hashim-residency',
  },
  'qmaks-hashim-residency-3': {
    alt: 'Qmaks Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-hashim-residency',
  },
  'qmaks-hashim-residency-4': {
    alt: 'Qmaks Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-hashim-residency',
  },
  'qmaks-jtr-enclave-1': {
    alt: 'Qmaks JTR Enclave, an under-construction development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-jtr-enclave',
  },
  'qmaks-jtr-enclave-2': {
    alt: 'Qmaks JTR Enclave, an under-construction development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-jtr-enclave',
  },
  'qmaks-khizra-1': {
    alt: 'Qmaks Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-khizra',
  },
  'qmaks-khizra-2': {
    alt: 'Qmaks Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-khizra',
  },
  'qmaks-khizra-3': {
    alt: 'Qmaks Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-khizra',
  },
  'qmaks-mohammed-ali-1': {
    alt: 'Qmaks Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mohammed-ali',
  },
  'qmaks-mohammed-ali-2': {
    alt: 'Qmaks Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mohammed-ali',
  },
  'qmaks-mohammed-ali-3': {
    alt: 'Qmaks Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mohammed-ali',
  },
  'qmaks-mohammed-ali-4': {
    alt: 'Qmaks Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mohammed-ali',
  },
  'qmaks-mujeeb-atrium-1': {
    alt: 'Qmaks Mujeeb Atrium, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mujeeb-atrium',
  },
  'qmaks-mujeeb-atrium-2': {
    alt: 'Qmaks Mujeeb Atrium, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-mujeeb-atrium',
  },
  'qmaks-neknampur-1': {
    alt: 'Qmaks Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-neknampur',
  },
  'qmaks-neknampur-2': {
    alt: 'Qmaks Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-neknampur',
  },
  'qmaks-neknampur-3': {
    alt: 'Qmaks Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-neknampur',
  },
  'qmaks-neknampur-4': {
    alt: 'Qmaks Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-neknampur',
  },
  'qmaks-noor-khan-bazar-1': {
    alt: 'Qmaks Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-noor-khan-bazar',
  },
  'qmaks-noor-khan-bazar-2': {
    alt: 'Qmaks Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-noor-khan-bazar',
  },
  'qmaks-noor-khan-bazar-3': {
    alt: 'Qmaks Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-noor-khan-bazar',
  },
  'qmaks-noor-khan-bazar-4': {
    alt: 'Qmaks Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-noor-khan-bazar',
  },
  'qmaks-parkview-1': {
    alt: 'Qmaks Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-parkview',
  },
  'qmaks-parkview-2': {
    alt: 'Qmaks Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-parkview',
  },
  'qmaks-parkview-3': {
    alt: 'Qmaks Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-parkview',
  },
  'qmaks-siraj-1': {
    alt: 'Qmaks Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-siraj',
  },
  'qmaks-siraj-2': {
    alt: 'Qmaks Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-siraj',
  },
  'qmaks-siraj-3': {
    alt: 'Qmaks Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-siraj',
  },
  'qmaks-siraj-4': {
    alt: 'Qmaks Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-siraj',
  },
  'qmaks-umaiza-1': {
    alt: 'Qmaks Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-umaiza',
  },
  'qmaks-umaiza-2': {
    alt: 'Qmaks Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-umaiza',
  },
  'qmaks-umaiza-3': {
    alt: 'Qmaks Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-umaiza',
  },
  'qmaks-zam-zam-1': {
    alt: 'Qmaks Zam Zam, an under-construction development in Arvind Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-zam-zam',
  },
  'qmaks-zam-zam-2': {
    alt: 'Qmaks Zam Zam, an under-construction development in Arvind Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/ongoing/qmaks-zam-zam',
  },
  'qmaks-baba-atrium-1': {
    alt: 'Qmaks Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-baba-atrium',
  },
  'qmaks-baba-atrium-2': {
    alt: 'Qmaks Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-baba-atrium',
  },
  'qmaks-baba-atrium-3': {
    alt: 'Qmaks Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-baba-atrium',
  },
  'qmaks-baba-atrium-4': {
    alt: 'Qmaks Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-baba-atrium',
  },
  'qmaks-galaxy-1': {
    alt: 'Qmaks Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-galaxy',
  },
  'qmaks-galaxy-2': {
    alt: 'Qmaks Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-galaxy',
  },
  'qmaks-galaxy-3': {
    alt: 'Qmaks Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-galaxy',
  },
  'qmaks-imperial-1': {
    alt: 'Qmaks Imperial, an under-construction development in Humayun Nagar, Mehdipatnam, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-imperial',
  },
  'qmaks-imperial-2': {
    alt: 'Qmaks Imperial, an under-construction development in Humayun Nagar, Mehdipatnam, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-imperial',
  },
  'qmaks-quadri-plaza-1': {
    alt: 'Qmaks Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-quadri-plaza',
  },
  'qmaks-quadri-plaza-2': {
    alt: 'Qmaks Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-quadri-plaza',
  },
  'qmaks-quadri-plaza-3': {
    alt: 'Qmaks Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-quadri-plaza',
  },
  'qmaks-quadri-plaza-4': {
    alt: 'Qmaks Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-quadri-plaza',
  },
  'qmaks-rf-arcade-1': {
    alt: 'Qmaks RF Arcade, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-rf-arcade',
  },
  'qmaks-rf-arcade-2': {
    alt: 'Qmaks RF Arcade, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/ongoing/qmaks-rf-arcade',
  },
  'qmaks-crown-enclave-1': {
    alt: 'Qmaks Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/upcoming/qmaks-crown-enclave',
  },
  'qmaks-crown-enclave-2': {
    alt: 'Qmaks Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/upcoming/qmaks-crown-enclave',
  },
  'qmaks-crown-enclave-3': {
    alt: 'Qmaks Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/upcoming/qmaks-crown-enclave',
  },
  'qmaks-akbar-enclave-1': {
    alt: 'Qmaks Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-akbar-enclave',
  },
  'qmaks-akbar-enclave-2': {
    alt: 'Qmaks Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-akbar-enclave',
  },
  'qmaks-akbar-enclave-3': {
    alt: 'Qmaks Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-akbar-enclave',
  },
  'qmaks-akbar-enclave-4': {
    alt: 'Qmaks Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-akbar-enclave',
  },
  'qmaks-ameena-fasi-manzil-1': {
    alt: 'Qmaks Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ameena-fasi-manzil',
  },
  'qmaks-ameena-fasi-manzil-2': {
    alt: 'Qmaks Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ameena-fasi-manzil',
  },
  'qmaks-ameena-fasi-manzil-3': {
    alt: 'Qmaks Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ameena-fasi-manzil',
  },
  'qmaks-ameena-fasi-manzil-4': {
    alt: 'Qmaks Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ameena-fasi-manzil',
  },
  'qmaks-avenue-1': {
    alt: 'Qmaks Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-avenue',
  },
  'qmaks-avenue-2': {
    alt: 'Qmaks Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-avenue',
  },
  'qmaks-avenue-3': {
    alt: 'Qmaks Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-avenue',
  },
  'qmaks-avenue-4': {
    alt: 'Qmaks Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-avenue',
  },
  'qmaks-ayesha-enclave-1': {
    alt: 'Qmaks Ayesha Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayesha-enclave',
  },
  'qmaks-ayesha-enclave-2': {
    alt: 'Qmaks Ayesha Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayesha-enclave',
  },
  'qmaks-ayzal-residency-1': {
    alt: 'Qmaks Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayzal-residency',
  },
  'qmaks-ayzal-residency-2': {
    alt: 'Qmaks Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayzal-residency',
  },
  'qmaks-ayzal-residency-3': {
    alt: 'Qmaks Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayzal-residency',
  },
  'qmaks-ayzal-residency-4': {
    alt: 'Qmaks Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ayzal-residency',
  },
  'qmaks-bait-ul-aman-1': {
    alt: 'Qmaks Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-bait-ul-aman',
  },
  'qmaks-bait-ul-aman-2': {
    alt: 'Qmaks Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-bait-ul-aman',
  },
  'qmaks-bait-ul-aman-3': {
    alt: 'Qmaks Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-bait-ul-aman',
  },
  'qmaks-bait-ul-aman-4': {
    alt: 'Qmaks Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-bait-ul-aman',
  },
  'qmaks-darul-aman-1': {
    alt: 'Qmaks Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-aman',
  },
  'qmaks-darul-aman-2': {
    alt: 'Qmaks Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-aman',
  },
  'qmaks-darul-aman-3': {
    alt: 'Qmaks Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-aman',
  },
  'qmaks-darul-aman-4': {
    alt: 'Qmaks Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-aman',
  },
  'qmaks-darul-khair-1': {
    alt: 'Qmaks Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-khair',
  },
  'qmaks-darul-khair-2': {
    alt: 'Qmaks Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-khair',
  },
  'qmaks-darul-khair-3': {
    alt: 'Qmaks Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-khair',
  },
  'qmaks-darul-khair-4': {
    alt: 'Qmaks Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-darul-khair',
  },
  'qmaks-delight-suites-1': {
    alt: 'Qmaks Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-delight-suites',
  },
  'qmaks-delight-suites-2': {
    alt: 'Qmaks Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-delight-suites',
  },
  'qmaks-delight-suites-3': {
    alt: 'Qmaks Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-delight-suites',
  },
  'qmaks-delight-suites-4': {
    alt: 'Qmaks Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-delight-suites',
  },
  'qmaks-diamond-residency-1': {
    alt: 'Qmaks Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-diamond-residency',
  },
  'qmaks-diamond-residency-2': {
    alt: 'Qmaks Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-diamond-residency',
  },
  'qmaks-diamond-residency-3': {
    alt: 'Qmaks Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-diamond-residency',
  },
  'qmaks-diamond-residency-4': {
    alt: 'Qmaks Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-diamond-residency',
  },
  'qmaks-future-city-1': {
    alt: 'Qmaks Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-future-city',
  },
  'qmaks-future-city-2': {
    alt: 'Qmaks Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-future-city',
  },
  'qmaks-future-city-3': {
    alt: 'Qmaks Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-future-city',
  },
  'qmaks-future-city-4': {
    alt: 'Qmaks Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-future-city',
  },
  'qmaks-haniya-residency-1': {
    alt: 'Qmaks Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haniya-residency',
  },
  'qmaks-haniya-residency-2': {
    alt: 'Qmaks Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haniya-residency',
  },
  'qmaks-haniya-residency-3': {
    alt: 'Qmaks Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haniya-residency',
  },
  'qmaks-haniya-residency-4': {
    alt: 'Qmaks Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haniya-residency',
  },
  'qmaks-haseeb-residency-1': {
    alt: 'Qmaks Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haseeb-residency',
  },
  'qmaks-haseeb-residency-2': {
    alt: 'Qmaks Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haseeb-residency',
  },
  'qmaks-haseeb-residency-3': {
    alt: 'Qmaks Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haseeb-residency',
  },
  'qmaks-haseeb-residency-4': {
    alt: 'Qmaks Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-haseeb-residency',
  },
  'qmaks-iftekhar-1': {
    alt: 'Qmaks Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iftekhar',
  },
  'qmaks-iftekhar-2': {
    alt: 'Qmaks Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iftekhar',
  },
  'qmaks-iftekhar-3': {
    alt: 'Qmaks Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iftekhar',
  },
  'qmaks-iftekhar-4': {
    alt: 'Qmaks Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iftekhar',
  },
  'qmaks-imam-1': {
    alt: 'Qmaks Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-imam',
  },
  'qmaks-imam-2': {
    alt: 'Qmaks Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-imam',
  },
  'qmaks-imam-3': {
    alt: 'Qmaks Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-imam',
  },
  'qmaks-imam-4': {
    alt: 'Qmaks Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-imam',
  },
  'qmaks-iqbal-residency-1': {
    alt: 'Qmaks Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iqbal-residency',
  },
  'qmaks-iqbal-residency-2': {
    alt: 'Qmaks Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iqbal-residency',
  },
  'qmaks-iqbal-residency-3': {
    alt: 'Qmaks Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iqbal-residency',
  },
  'qmaks-iqbal-residency-4': {
    alt: 'Qmaks Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-iqbal-residency',
  },
  'qmaks-ishaq-residency-1': {
    alt: 'Qmaks Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ishaq-residency',
  },
  'qmaks-ishaq-residency-2': {
    alt: 'Qmaks Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ishaq-residency',
  },
  'qmaks-ishaq-residency-3': {
    alt: 'Qmaks Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ishaq-residency',
  },
  'qmaks-ishaq-residency-4': {
    alt: 'Qmaks Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-ishaq-residency',
  },
  'qmaks-javeed-1': {
    alt: 'Qmaks Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-javeed',
  },
  'qmaks-javeed-2': {
    alt: 'Qmaks Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-javeed',
  },
  'qmaks-javeed-3': {
    alt: 'Qmaks Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-javeed',
  },
  'qmaks-javeed-4': {
    alt: 'Qmaks Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-javeed',
  },
  'qmaks-masood-1': {
    alt: 'Qmaks Masood, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-masood',
  },
  'qmaks-masood-2': {
    alt: 'Qmaks Masood, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-masood',
  },
  'qmaks-mia-khan-residency-1': {
    alt: 'Qmaks Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mia-khan-residency',
  },
  'qmaks-mia-khan-residency-2': {
    alt: 'Qmaks Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mia-khan-residency',
  },
  'qmaks-mia-khan-residency-3': {
    alt: 'Qmaks Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mia-khan-residency',
  },
  'qmaks-mia-khan-residency-4': {
    alt: 'Qmaks Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mia-khan-residency',
  },
  'qmaks-mk-tower-1': {
    alt: 'Qmaks MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mk-tower',
  },
  'qmaks-mk-tower-2': {
    alt: 'Qmaks MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mk-tower',
  },
  'qmaks-mk-tower-3': {
    alt: 'Qmaks MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mk-tower',
  },
  'qmaks-mk-tower-4': {
    alt: 'Qmaks MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-mk-tower',
  },
  'qmaks-moosa-enclave-1': {
    alt: 'Qmaks Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-moosa-enclave',
  },
  'qmaks-moosa-enclave-2': {
    alt: 'Qmaks Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-moosa-enclave',
  },
  'qmaks-moosa-enclave-3': {
    alt: 'Qmaks Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-moosa-enclave',
  },
  'qmaks-moosa-enclave-4': {
    alt: 'Qmaks Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-moosa-enclave',
  },
  'qmaks-msn-encalve-1': {
    alt: 'Qmaks MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-msn-encalve',
  },
  'qmaks-msn-encalve-2': {
    alt: 'Qmaks MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-msn-encalve',
  },
  'qmaks-msn-encalve-3': {
    alt: 'Qmaks MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-msn-encalve',
  },
  'qmaks-msn-encalve-4': {
    alt: 'Qmaks MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-msn-encalve',
  },
  'qmaks-nashika-avenue-1': {
    alt: 'Qmaks Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nashika-avenue',
  },
  'qmaks-nashika-avenue-2': {
    alt: 'Qmaks Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nashika-avenue',
  },
  'qmaks-nashika-avenue-3': {
    alt: 'Qmaks Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nashika-avenue',
  },
  'qmaks-nashika-avenue-4': {
    alt: 'Qmaks Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nashika-avenue',
  },
  'qmaks-nawaz-1': {
    alt: 'Qmaks Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nawaz',
  },
  'qmaks-nawaz-2': {
    alt: 'Qmaks Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nawaz',
  },
  'qmaks-nawaz-3': {
    alt: 'Qmaks Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nawaz',
  },
  'qmaks-nawaz-4': {
    alt: 'Qmaks Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-nawaz',
  },
  'qmaks-orchid-tower-1': {
    alt: 'Qmaks Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-orchid-tower',
  },
  'qmaks-orchid-tower-2': {
    alt: 'Qmaks Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-orchid-tower',
  },
  'qmaks-orchid-tower-3': {
    alt: 'Qmaks Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-orchid-tower',
  },
  'qmaks-orchid-tower-4': {
    alt: 'Qmaks Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-orchid-tower',
  },
  'qmaks-pearls-1': {
    alt: 'Qmaks Pearls, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-pearls',
  },
  'qmaks-pearls-2': {
    alt: 'Qmaks Pearls, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-pearls',
  },
  'qmaks-sajid-1': {
    alt: 'Qmaks Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-sajid',
  },
  'qmaks-sajid-2': {
    alt: 'Qmaks Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-sajid',
  },
  'qmaks-sajid-3': {
    alt: 'Qmaks Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-sajid',
  },
  'qmaks-sajid-4': {
    alt: 'Qmaks Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-sajid',
  },
  'qmaks-serene-heights-1': {
    alt: 'Qmaks Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-serene-heights',
  },
  'qmaks-serene-heights-2': {
    alt: 'Qmaks Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-serene-heights',
  },
  'qmaks-serene-heights-3': {
    alt: 'Qmaks Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-serene-heights',
  },
  'qmaks-serene-heights-4': {
    alt: 'Qmaks Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-serene-heights',
  },
  'qmaks-shareef-enclave-1': {
    alt: 'Qmaks Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-shareef-enclave',
  },
  'qmaks-shareef-enclave-2': {
    alt: 'Qmaks Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-shareef-enclave',
  },
  'qmaks-shareef-enclave-3': {
    alt: 'Qmaks Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-shareef-enclave',
  },
  'qmaks-shareef-enclave-4': {
    alt: 'Qmaks Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-shareef-enclave',
  },
  'qmaks-silver-residency-1': {
    alt: 'Qmaks Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-silver-residency',
  },
  'qmaks-silver-residency-2': {
    alt: 'Qmaks Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-silver-residency',
  },
  'qmaks-silver-residency-3': {
    alt: 'Qmaks Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-silver-residency',
  },
  'qmaks-silver-residency-4': {
    alt: 'Qmaks Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-silver-residency',
  },
  'qmaks-zia-enclave-1': {
    alt: 'Qmaks Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-zia-enclave',
  },
  'qmaks-zia-enclave-2': {
    alt: 'Qmaks Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-zia-enclave',
  },
  'qmaks-zia-enclave-3': {
    alt: 'Qmaks Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-zia-enclave',
  },
  'qmaks-zia-enclave-4': {
    alt: 'Qmaks Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/qmaks-zia-enclave',
  },
  'qmaks-sapphire-1': {
    alt: 'Qmaks Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/QMAKS%20SAPPHIRE',
  },
  'qmaks-sapphire-2': {
    alt: 'Qmaks Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/QMAKS%20SAPPHIRE',
  },
  'qmaks-sapphire-3': {
    alt: 'Qmaks Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/QMAKS%20SAPPHIRE',
  },
  'qmaks-sapphire-4': {
    alt: 'Qmaks Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/residential/completed/QMAKS%20SAPPHIRE',
  },
  'qmaks-fatima-residency-1': {
    alt: 'Qmaks Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-fatima-residency',
  },
  'qmaks-fatima-residency-2': {
    alt: 'Qmaks Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-fatima-residency',
  },
  'qmaks-fatima-residency-3': {
    alt: 'Qmaks Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-fatima-residency',
  },
  'qmaks-platina-1': {
    alt: 'Qmaks Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-platina',
  },
  'qmaks-platina-2': {
    alt: 'Qmaks Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-platina',
  },
  'qmaks-platina-3': {
    alt: 'Qmaks Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-platina',
  },
  'qmaks-platina-4': {
    alt: 'Qmaks Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-platina',
  },
  'qmaks-shezu-paradise-1': {
    alt: 'Qmaks Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-shezu-paradise',
  },
  'qmaks-shezu-paradise-2': {
    alt: 'Qmaks Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-shezu-paradise',
  },
  'qmaks-shezu-paradise-3': {
    alt: 'Qmaks Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-shezu-paradise',
  },
  'qmaks-shezu-paradise-4': {
    alt: 'Qmaks Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Qmaks Builders & Developers',
    source: 'https://qmaks.com/projects/commercial/completed/qmaks-shezu-paradise',
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
