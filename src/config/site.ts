/**
 * Single source of truth for everything contact-, brand- and navigation-related.
 * Replace the placeholder values here and the whole site follows.
 */
export const siteConfig = {
  name: 'Invest In Real Estate Hyderabad',
  shortName: 'Invest In Real Estate',
  tagline: 'Find. Invest. Grow.',
  description:
    'Explore homes, plots, villas and real estate investment opportunities across Hyderabad.',

  /** Digits only, with country code. Used to build every wa.me link. */
  whatsapp: '918247378529',
  /** Displayed as-is next to the call button. Leave empty to hide it. */
  phone: '+91 82473 78529',
  /** Leave empty until a business address is confirmed. */
  email: '',
  city: 'Hyderabad',
  state: 'Telangana',
  /** Leave empty to hide the street-address line. */
  address: '',

  social: {
    instagram: 'https://www.instagram.com/invest4assets',
    facebook: 'https://www.facebook.com/share/1C5UFY1qM4/',
    whatsapp: 'https://wa.me/918247378529',
  },

  /** Shown in the footer and on every listing card. Delete once real stock is loaded. */
  demoNotice: 'Sample listing — illustrative data, not a live offer.',
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Buy', href: '/properties?listing=buy' },
  { label: 'Rent', href: '/properties?listing=rent' },
  { label: 'Invest', href: '/invest' },
  { label: 'Projects', href: '/projects' },
  { label: 'Locations', href: '/locations' },
  { label: 'Sell Property', href: '/sell-property' },
  { label: 'About', href: '/about' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Explore',
    items: [
      { label: 'Buy', href: '/properties?listing=buy' },
      { label: 'Rent', href: '/properties?listing=rent' },
      { label: 'Invest', href: '/invest' },
      { label: 'Projects', href: '/projects' },
      { label: 'Locations', href: '/locations' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Sell Property', href: '/sell-property' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      { label: 'EMI Calculator', href: '/emi-calculator' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Image Credits', href: '/credits' },
    ],
  },
];
