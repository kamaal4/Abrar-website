import { siteConfig } from '../config/site';

/**
 * The one place a WhatsApp URL is constructed. Every CTA on the site routes through
 * here, so changing the number is a one-line edit in src/config/site.ts.
 */
export function getWhatsAppLink(message?: string): string {
  const number = siteConfig.whatsapp.replace(/\D/g, '');
  if (!number) return siteConfig.social.whatsapp || '/contact';
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function getTelLink(): string | null {
  const digits = siteConfig.phone.replace(/[^\d+]/g, '');
  return digits ? `tel:${digits}` : null;
}
