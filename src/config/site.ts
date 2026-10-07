import settings from './settings.json';

/** Contact details and the disclosure, edited by Abrar through /admin (src/config/settings.json). */
type Settings = {
  /** Digits only, with country code. Used to build every wa.me link. */
  whatsapp: string;
  /** Displayed as-is next to the call button. Empty hides it. */
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  /** Site-wide disclosure, shown in the footer. */
  disclosure: string;
};
const contact: Settings = settings;

/**
 * Single source of truth for everything contact-, brand- and navigation-related.
 * Brand and navigation live here in code; contact details come from settings.json.
 */
export const siteConfig = {
  name: 'InvestForAssets',
  shortName: 'InvestForAssets',
  tagline: 'Your Property. Your Asset. Your Future.',
  description:
    'Discover, compare and invest in residential, commercial and land assets across Hyderabad — with AI-powered property discovery and investment guidance.',

  whatsapp: contact.whatsapp,
  phone: contact.phone ?? '',
  email: contact.email ?? '',
  city: 'Hyderabad',
  state: 'Telangana',

  social: {
    instagram: contact.instagram ?? '',
    facebook: contact.facebook ?? '',
    whatsapp: `https://wa.me/${contact.whatsapp}`,
  },

  disclosure: contact.disclosure,
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Buy', href: '/properties?listing=buy' },
  { label: 'Commercial', href: '/properties?type=commercial' },
  { label: 'Invest', href: '/invest' },
  { label: 'Projects', href: '/projects' },
  { label: 'Locations', href: '/locations' },
  { label: 'Investment Insights', href: '/investment-insights' },
  { label: 'About', href: '/about' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Explore',
    items: [
      { label: 'Buy', href: '/properties?listing=buy' },
      { label: 'Commercial', href: '/properties?type=commercial' },
      { label: 'Invest', href: '/invest' },
      { label: 'Projects', href: '/projects' },
      { label: 'Locations', href: '/locations' },
      { label: 'Investment Insights', href: '/investment-insights' },
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
