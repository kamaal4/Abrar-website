/** Indian price shorthand: 8200000 -> "₹82 L", 13500000 -> "₹1.35 Cr". */
export function formatPrice(rupees: number): string {
  if (rupees >= 10_000_000) {
    const cr = rupees / 10_000_000;
    return `₹${trim(cr)} Cr`;
  }
  if (rupees >= 100_000) {
    const lakh = rupees / 100_000;
    return `₹${trim(lakh)} L`;
  }
  return `₹${rupees.toLocaleString('en-IN')}`;
}

/** Long form for headings and detail pages: "₹82 Lakhs". */
export function formatPriceLong(rupees: number): string {
  if (rupees >= 10_000_000) return `₹${trim(rupees / 10_000_000)} Crore`;
  if (rupees >= 100_000) return `₹${trim(rupees / 100_000)} Lakhs`;
  return `₹${rupees.toLocaleString('en-IN')}`;
}

/** Monthly rent reads better in thousands. */
export function formatRent(rupees: number): string {
  return `₹${rupees.toLocaleString('en-IN')}/mo`;
}

export function formatArea(sqft: number): string {
  return `${sqft.toLocaleString('en-IN')} sq.ft`;
}

export function formatRupees(rupees: number): string {
  return `₹${Math.round(rupees).toLocaleString('en-IN')}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function trim(n: number): string {
  // 1.50 -> "1.5", 1.00 -> "1", 82.4 -> "82.4"
  return Number(n.toFixed(2)).toString();
}
