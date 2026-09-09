/**
 * Single source of truth for everything contact-, brand- and navigation-related.
 * Replace the placeholder values here and the whole site follows.
 */
export const siteConfig = {
  name: 'InvestForAssets',
  shortName: 'InvestForAssets',
  tagline: 'Your Property. Your Asset. Your Future.',
  description:
    'Discover, compare and invest in residential, commercial and land assets across Hyderabad — with AI-powered property discovery and investment guidance.',

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

  /**
   * Site-wide disclosure, shown in the footer. Real stock, but the developer
   * publishes no prices and some gallery images are artist's renders rather
   * than photographs — both facts belong on the page, not in a drawer.
   */
  disclosure:
    'Project details, unit counts and areas are as published by the developer. Prices are shared on request. Some images are artist’s impressions, not photographs of the completed building. Verify all documents, approvals and figures independently before committing.',
} as const;

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
