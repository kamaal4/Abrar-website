export type EmiInput = {
  /** Loan principal in rupees. */
  principal: number;
  /** Annual interest rate as a percentage, e.g. 8.5 */
  ratePct: number;
  /** Tenure in years. */
  years: number;
};

export type EmiResult = {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  months: number;
};

/**
 * Standard reducing-balance EMI. Shared by the calculator page and the
 * property-detail widget so the two can never disagree.
 */
export function calcEmi({ principal, ratePct, years }: EmiInput): EmiResult {
  const months = Math.max(1, Math.round(years * 12));
  const p = Math.max(0, principal);
  const monthlyRate = ratePct / 12 / 100;

  // A 0% loan is simple division; the compound formula divides by zero there.
  const emi =
    monthlyRate === 0
      ? p / months
      : (p * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  return { emi, totalInterest: totalPayment - p, totalPayment, months };
}
