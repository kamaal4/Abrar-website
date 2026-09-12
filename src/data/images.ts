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
  /* Generated imagery, not photographs. Registered with that stated plainly so
     the credits page carries it — the site says elsewhere that some images are
     impressions rather than photographs, and these are the same kind of claim. */
  'hyd-dusk-skyline-render': {
    alt: 'A dense financial-district skyline at dusk, towers lit, an elevated metro line and traffic below',
    author: 'Generated with Google Stitch',
    license: 'AI-generated illustration — not a photograph',
    sourceName: 'Google Stitch',
  },
  'hyd-dusk-tower-render': {
    alt: 'A tall residential tower at dusk with lit balconies, landscaped podium and palms',
    author: 'Generated with Google Stitch',
    license: 'AI-generated illustration — not a photograph',
    sourceName: 'Google Stitch',
  },
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





  // --- Partner project galleries -----------------------------------------
  // Supplied by the developer whose stock we list. Some are artist's
  // impressions rather than photographs of the completed building; the site
  // says so on the gallery.
  'aasheen-1': {
    alt: 'Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'aasheen-2': {
    alt: 'Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'aasheen-3': {
    alt: 'Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'aasheen-4': {
    alt: 'Aasheen, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-kareem-1': {
    alt: 'Al Kareem, an under-construction development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-qasr-1': {
    alt: 'Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-qasr-2': {
    alt: 'Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-qasr-3': {
    alt: 'Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-qasr-4': {
    alt: 'Al Qasr, an under-construction development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-quadeer-1': {
    alt: 'Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-quadeer-2': {
    alt: 'Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-quadeer-3': {
    alt: 'Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'al-quadeer-4': {
    alt: 'Al Quadeer, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'amer-1': {
    alt: 'Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'amer-2': {
    alt: 'Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'amer-3': {
    alt: 'Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'amer-4': {
    alt: 'Amer, an under-construction development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ashiyana-1': {
    alt: 'Ashiyana, an under-construction development in Anurag Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crystal-avenue-1': {
    alt: 'Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crystal-avenue-2': {
    alt: 'Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crystal-avenue-3': {
    alt: 'Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crystal-avenue-4': {
    alt: 'Crystal Avenue, an under-construction development in Akbar Bagh, Malakpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'hashim-residency-1': {
    alt: 'Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'hashim-residency-2': {
    alt: 'Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'hashim-residency-3': {
    alt: 'Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'hashim-residency-4': {
    alt: 'Hashim Residency, an under-construction development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'jtr-enclave-1': {
    alt: 'JTR Enclave, an under-construction development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'jtr-enclave-2': {
    alt: 'JTR Enclave, an under-construction development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'khizra-1': {
    alt: 'Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Partner developer',
  },
  'khizra-2': {
    alt: 'Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Partner developer',
  },
  'khizra-3': {
    alt: 'Khizra, an under-construction development in Mehdipatnam, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mohammed-ali-1': {
    alt: 'Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mohammed-ali-2': {
    alt: 'Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mohammed-ali-3': {
    alt: 'Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mohammed-ali-4': {
    alt: 'Mohammed Ali, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mujeeb-atrium-1': {
    alt: 'Mujeeb Atrium, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mujeeb-atrium-2': {
    alt: 'Mujeeb Atrium, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'neknampur-1': {
    alt: 'Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'neknampur-2': {
    alt: 'Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'neknampur-3': {
    alt: 'Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'neknampur-4': {
    alt: 'Neknampur, an under-construction development in Neknampur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'noor-khan-bazar-1': {
    alt: 'Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Partner developer',
  },
  'noor-khan-bazar-2': {
    alt: 'Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Partner developer',
  },
  'noor-khan-bazar-3': {
    alt: 'Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Partner developer',
  },
  'noor-khan-bazar-4': {
    alt: 'Noor Khan Bazar, an under-construction development in Noor Khan Bazar, Hyderabad',
    sourceName: 'Partner developer',
  },
  'parkview-1': {
    alt: 'Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'parkview-2': {
    alt: 'Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'parkview-3': {
    alt: 'Parkview, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'siraj-1': {
    alt: 'Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'siraj-2': {
    alt: 'Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'siraj-3': {
    alt: 'Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'siraj-4': {
    alt: 'Siraj, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'umaiza-1': {
    alt: 'Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'umaiza-2': {
    alt: 'Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'umaiza-3': {
    alt: 'Umaiza, an under-construction development in Aziz Bagh Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zam-zam-1': {
    alt: 'Zam Zam, an under-construction development in Arvind Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zam-zam-2': {
    alt: 'Zam Zam, an under-construction development in Arvind Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'baba-atrium-1': {
    alt: 'Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'baba-atrium-2': {
    alt: 'Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'baba-atrium-3': {
    alt: 'Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'baba-atrium-4': {
    alt: 'Baba Atrium, an under-construction development in Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'galaxy-1': {
    alt: 'Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'galaxy-2': {
    alt: 'Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'galaxy-3': {
    alt: 'Galaxy, an under-construction development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imperial-1': {
    alt: 'Imperial, an under-construction development in Humayun Nagar, Mehdipatnam, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imperial-2': {
    alt: 'Imperial, an under-construction development in Humayun Nagar, Mehdipatnam, Hyderabad',
    sourceName: 'Partner developer',
  },
  'quadri-plaza-1': {
    alt: 'Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'quadri-plaza-2': {
    alt: 'Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'quadri-plaza-3': {
    alt: 'Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'quadri-plaza-4': {
    alt: 'Quadri Plaza, an under-construction development in Satya Colony, Shaikpet, Hyderabad',
    sourceName: 'Partner developer',
  },
  'rf-arcade-1': {
    alt: 'RF Arcade, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'rf-arcade-2': {
    alt: 'RF Arcade, an under-construction development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crown-enclave-1': {
    alt: 'Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crown-enclave-2': {
    alt: 'Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'crown-enclave-3': {
    alt: 'Crown Enclave, a newly launched development in Attapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'akbar-enclave-1': {
    alt: 'Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'akbar-enclave-2': {
    alt: 'Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'akbar-enclave-3': {
    alt: 'Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'akbar-enclave-4': {
    alt: 'Akbar Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ameena-fasi-manzil-1': {
    alt: 'Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ameena-fasi-manzil-2': {
    alt: 'Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ameena-fasi-manzil-3': {
    alt: 'Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ameena-fasi-manzil-4': {
    alt: 'Ameena Fasi Manzil, a completed development in Vijay Nagar Colony, Hyderabad',
    sourceName: 'Partner developer',
  },
  'avenue-1': {
    alt: 'Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'avenue-2': {
    alt: 'Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'avenue-3': {
    alt: 'Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'avenue-4': {
    alt: 'Avenue, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayesha-enclave-1': {
    alt: 'Ayesha Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayesha-enclave-2': {
    alt: 'Ayesha Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayzal-residency-1': {
    alt: 'Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayzal-residency-2': {
    alt: 'Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayzal-residency-3': {
    alt: 'Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ayzal-residency-4': {
    alt: 'Ayzal Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'bait-ul-aman-1': {
    alt: 'Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'bait-ul-aman-2': {
    alt: 'Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'bait-ul-aman-3': {
    alt: 'Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'bait-ul-aman-4': {
    alt: 'Bait Ul Aman, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-aman-1': {
    alt: 'Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-aman-2': {
    alt: 'Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-aman-3': {
    alt: 'Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-aman-4': {
    alt: 'Darul Aman, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-khair-1': {
    alt: 'Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-khair-2': {
    alt: 'Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-khair-3': {
    alt: 'Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'darul-khair-4': {
    alt: 'Darul Khair, a completed development in Surya Nagar Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'delight-suites-1': {
    alt: 'Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'delight-suites-2': {
    alt: 'Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'delight-suites-3': {
    alt: 'Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'delight-suites-4': {
    alt: 'Delight Suites, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'diamond-residency-1': {
    alt: 'Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'diamond-residency-2': {
    alt: 'Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'diamond-residency-3': {
    alt: 'Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'diamond-residency-4': {
    alt: 'Diamond Residency, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'future-city-1': {
    alt: 'Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Partner developer',
  },
  'future-city-2': {
    alt: 'Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Partner developer',
  },
  'future-city-3': {
    alt: 'Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Partner developer',
  },
  'future-city-4': {
    alt: 'Future City, a completed development in Ramanujapur, Shamshabad, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haniya-residency-1': {
    alt: 'Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haniya-residency-2': {
    alt: 'Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haniya-residency-3': {
    alt: 'Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haniya-residency-4': {
    alt: 'Haniya Residency, a completed development in Al Kareem Colony, Md Lines, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haseeb-residency-1': {
    alt: 'Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haseeb-residency-2': {
    alt: 'Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haseeb-residency-3': {
    alt: 'Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'haseeb-residency-4': {
    alt: 'Haseeb Residency, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iftekhar-1': {
    alt: 'Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iftekhar-2': {
    alt: 'Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iftekhar-3': {
    alt: 'Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iftekhar-4': {
    alt: 'Iftekhar, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imam-1': {
    alt: 'Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imam-2': {
    alt: 'Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imam-3': {
    alt: 'Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'imam-4': {
    alt: 'Imam, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iqbal-residency-1': {
    alt: 'Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iqbal-residency-2': {
    alt: 'Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iqbal-residency-3': {
    alt: 'Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Partner developer',
  },
  'iqbal-residency-4': {
    alt: 'Iqbal Residency, a completed development in Janachaitaniya, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ishaq-residency-1': {
    alt: 'Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ishaq-residency-2': {
    alt: 'Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ishaq-residency-3': {
    alt: 'Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'ishaq-residency-4': {
    alt: 'Ishaq Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'javeed-1': {
    alt: 'Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'javeed-2': {
    alt: 'Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'javeed-3': {
    alt: 'Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'javeed-4': {
    alt: 'Javeed, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'masood-1': {
    alt: 'Masood, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'masood-2': {
    alt: 'Masood, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mia-khan-residency-1': {
    alt: 'Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mia-khan-residency-2': {
    alt: 'Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mia-khan-residency-3': {
    alt: 'Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mia-khan-residency-4': {
    alt: 'Mia Khan Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mk-tower-1': {
    alt: 'MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mk-tower-2': {
    alt: 'MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mk-tower-3': {
    alt: 'MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Partner developer',
  },
  'mk-tower-4': {
    alt: 'MK Tower, a completed development in Narsingi, Hyderabad',
    sourceName: 'Partner developer',
  },
  'moosa-enclave-1': {
    alt: 'Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'moosa-enclave-2': {
    alt: 'Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'moosa-enclave-3': {
    alt: 'Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'moosa-enclave-4': {
    alt: 'Moosa Enclave, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'msn-encalve-1': {
    alt: 'MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'msn-encalve-2': {
    alt: 'MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'msn-encalve-3': {
    alt: 'MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'msn-encalve-4': {
    alt: 'MSN Encalve, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nashika-avenue-1': {
    alt: 'Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nashika-avenue-2': {
    alt: 'Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nashika-avenue-3': {
    alt: 'Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nashika-avenue-4': {
    alt: 'Nashika Avenue, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nawaz-1': {
    alt: 'Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nawaz-2': {
    alt: 'Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nawaz-3': {
    alt: 'Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'nawaz-4': {
    alt: 'Nawaz, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'orchid-tower-1': {
    alt: 'Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'orchid-tower-2': {
    alt: 'Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'orchid-tower-3': {
    alt: 'Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'orchid-tower-4': {
    alt: 'Orchid Tower, a completed development in Paramount Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'pearls-1': {
    alt: 'Pearls, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'pearls-2': {
    alt: 'Pearls, a completed development in Diamond Hills Colony, Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sajid-1': {
    alt: 'Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sajid-2': {
    alt: 'Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sajid-3': {
    alt: 'Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sajid-4': {
    alt: 'Sajid, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'serene-heights-1': {
    alt: 'Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'serene-heights-2': {
    alt: 'Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'serene-heights-3': {
    alt: 'Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'serene-heights-4': {
    alt: 'Serene Heights, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shareef-enclave-1': {
    alt: 'Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shareef-enclave-2': {
    alt: 'Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shareef-enclave-3': {
    alt: 'Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shareef-enclave-4': {
    alt: 'Shareef Enclave, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'silver-residency-1': {
    alt: 'Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'silver-residency-2': {
    alt: 'Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'silver-residency-3': {
    alt: 'Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'silver-residency-4': {
    alt: 'Silver Residency, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zia-enclave-1': {
    alt: 'Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zia-enclave-2': {
    alt: 'Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zia-enclave-3': {
    alt: 'Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'zia-enclave-4': {
    alt: 'Zia Enclave, a completed development in Brindavan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sapphire-1': {
    alt: 'Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sapphire-2': {
    alt: 'Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sapphire-3': {
    alt: 'Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'sapphire-4': {
    alt: 'Sapphire, a completed development in Golden Sands Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'fatima-residency-1': {
    alt: 'Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'fatima-residency-2': {
    alt: 'Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'fatima-residency-3': {
    alt: 'Fatima Residency, a completed development in Gulshan Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'platina-1': {
    alt: 'Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'platina-2': {
    alt: 'Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'platina-3': {
    alt: 'Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'platina-4': {
    alt: 'Platina, a completed development in Alkapur, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shezu-paradise-1': {
    alt: 'Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shezu-paradise-2': {
    alt: 'Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shezu-paradise-3': {
    alt: 'Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
  },
  'shezu-paradise-4': {
    alt: 'Shezu Paradise, a completed development in Sa Colony, Tolichowki, Hyderabad',
    sourceName: 'Partner developer',
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
