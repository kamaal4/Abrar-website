/**
 * Scripted conversation for the demo property assistant.
 *
 * This is deliberately a plain state machine with no model behind it. To make the
 * assistant real later, replace `getNextStep()` with a call to an API that returns
 * the same shape — the UI does not need to change.
 */
export type AnswerKey = 'intent' | 'location' | 'budget';

export type Option = {
  label: string;
  /** Value stored against the step's answer key. */
  value: string;
  next: string;
};

export type Step = {
  id: string;
  /** What the assistant says when it arrives at this step. */
  message: string;
  /** Which answer the options on this step record. */
  key?: AnswerKey;
  options?: Option[];
  /** Terminal steps show matching properties instead of options. */
  showResults?: boolean;
};

export type Answers = Partial<Record<AnswerKey, string>>;

export const steps: Step[] = [
  {
    id: 'start',
    message:
      "Hi! I'm your Property Assistant. Tell me what you're looking for and I'll help you narrow down your options.",
    key: 'intent',
    options: [
      { label: '2 BHK', value: '2bhk', next: 'location' },
      { label: '3 BHK', value: '3bhk', next: 'location' },
      { label: 'Villa', value: 'villa', next: 'location' },
      { label: 'Plot', value: 'plot', next: 'location' },
      { label: 'Investment', value: 'investment', next: 'location' },
      { label: 'Under ₹1 Cr', value: 'under1cr', next: 'location' },
    ],
  },
  {
    id: 'location',
    message: "Good. Which part of Hyderabad works for you?",
    key: 'location',
    options: [
      { label: 'Tolichowki', value: 'tolichowki', next: 'budget' },
      { label: 'Tellapur', value: 'tellapur', next: 'budget' },
      { label: 'Gachibowli', value: 'gachibowli', next: 'budget' },
      { label: 'Kokapet', value: 'kokapet', next: 'budget' },
      { label: 'Kompally', value: 'kompally', next: 'budget' },
      { label: 'Mokila', value: 'mokila', next: 'budget' },
      { label: "I'm flexible", value: 'any', next: 'budget' },
    ],
  },
  {
    id: 'budget',
    message: "And roughly what budget are you working with?",
    key: 'budget',
    options: [
      { label: 'Under ₹75 L', value: '0-7500000', next: 'results' },
      { label: '₹75 L – ₹1 Cr', value: '7500000-10000000', next: 'results' },
      { label: '₹1 Cr – ₹2 Cr', value: '10000000-20000000', next: 'results' },
      { label: '₹2 Cr and above', value: '20000000-1000000000', next: 'results' },
      { label: 'Not sure yet', value: 'any', next: 'results' },
    ],
  },
  {
    id: 'results',
    message: '',
    showResults: true,
  },
];

export function getStep(id: string): Step {
  const step = steps.find((s) => s.id === id);
  if (!step) throw new Error(`Unknown assistant step: ${id}`);
  return step;
}

/** The seam a real API would replace. Returns the next step for a chosen option. */
export function getNextStep(option: Option): Step {
  return getStep(option.next);
}

/** Minimal property shape the assistant needs; serialised into the page. */
export type AssistantProperty = {
  slug: string;
  title: string;
  location: string;
  locationName: string;
  type: string;
  bhk?: number;
  /** Absent when the developer publishes no price. */
  price?: number;
  priceLabel: string;
  area: string;
  image: string;
  alt: string;
  listing: string[];
  href: string;
};

export function matchProperties(
  all: AssistantProperty[],
  answers: Answers,
  limit = 3,
): AssistantProperty[] {
  const { intent, location, budget } = answers;

  const intentMatch = (p: AssistantProperty) => {
    switch (intent) {
      case '2bhk':
        return p.bhk === 2;
      case '3bhk':
        return p.bhk === 3;
      case 'villa':
        return p.type === 'villa';
      case 'plot':
        return p.type === 'plot' || p.type === 'open-land' || p.type === 'farm-land';
      case 'investment':
        return p.listing.includes('invest');
      case 'under1cr':
        // No published price cannot be claimed to be under a crore.
        return p.price !== undefined && p.price <= 10_000_000;
      default:
        return true;
    }
  };

  const budgetMatch = (p: AssistantProperty) => {
    if (!budget || budget === 'any') return true;
    // An explicit budget excludes listings with no published price rather than
    // silently passing them off as a match.
    if (p.price === undefined) return false;
    const [min, max] = budget.split('-').map(Number);
    return p.price >= (min ?? 0) && p.price <= (max ?? Infinity);
  };

  const locationMatch = (p: AssistantProperty) =>
    !location || location === 'any' || p.location === location;

  // Progressively relax: exact match, then drop budget, then drop location.
  const tiers = [
    (p: AssistantProperty) => intentMatch(p) && locationMatch(p) && budgetMatch(p),
    (p: AssistantProperty) => intentMatch(p) && locationMatch(p),
    (p: AssistantProperty) => intentMatch(p),
    () => true,
  ];

  for (const test of tiers) {
    const hits = all.filter(test);
    if (hits.length) return hits.slice(0, limit);
  }
  return [];
}

/** Explains which constraint had to be loosened, so the result is never a silent lie. */
export function resultMessage(
  all: AssistantProperty[],
  answers: Answers,
  matches: AssistantProperty[],
): string {
  if (!matches.length) return "I couldn't find a listing for that combination.";
  const exact = matchProperties(all, answers, 99);
  const strict = all.filter((p) => exact.includes(p));
  const loosened =
    answers.location && answers.location !== 'any'
      ? matches.every((m) => m.location === answers.location)
      : true;
  if (!loosened) {
    return "Nothing in that exact area at that budget, so here are the closest listings elsewhere in the city:";
  }
  return strict.length > matches.length
    ? `Here are ${matches.length} of ${strict.length} listings that fit:`
    : 'Here are the listings that fit:';
}
