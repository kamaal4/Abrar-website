# Product

## Register

brand

## Users

Buyers, sellers and investors looking at residential property in Hyderabad, arriving mostly
from Instagram, WhatsApp forwards and search:

- **First-time home buyers and families** — stretched budgets, high anxiety about paperwork,
  usually deciding between two or three areas and needing someone to tell them what they are
  actually trading off.
- **NRIs** — cannot visit easily, need documentation and location context they can trust
  remotely, and transact largely over WhatsApp across time zones.
- **Investors** — comparing apartments against plots and land, thinking in horizons rather
  than in monthly EMIs.
- **Plot and land buyers** — the highest-diligence segment, where title, layout approval and
  land use decide whether the purchase is sound at all.
- **Sellers** — want a realistic price view before committing to an agent.

Context of use: mostly a phone, often in daylight, often mid-conversation with a spouse or
parent. Sessions are short and comparative. The decision itself takes weeks.

## Product Purpose

Buying property in Hyderabad is an information problem, not a listings problem. The portals
have plenty of inventory and almost no straight answers about which of it suits a particular
household, or what is wrong with the rest.

This site exists to be the place where a buyer gets that answer, and then gets it from a
person on WhatsApp. Success is a WhatsApp enquiry from someone who arrived with a vague idea
and left with a shortlist they understand.

Conversion order: WhatsApp enquiry → site visit → returning visitor.

## Brand Personality

**Grounded, precise, local.**

The voice is a knowledgeable local consultant talking to an intelligent adult: specific,
unhurried, willing to say "not this one" or "nobody can tell you that". It names real
streets, real trade-offs and real risks. It never uses superlatives it cannot support, never
projects returns, and never manufactures urgency.

**The site argues for property — on structure, never on returns.** It is a business that sells
real estate and it says so plainly: a bank will fund 80% of a flat and nothing else you can
buy; you can live in it; the tax code favours it; you cannot panic-sell it. Every one of those
is a mechanical fact about how the asset works. What the site will not do is claim property
out-returns gold or equities, publish a projected return, or bury the counter-argument — the
`Where gold and stocks genuinely win` section exists on purpose and sits *after* the case, not
in a footnote. An argument that survives its own counter is the only kind this brand can make.

Emotionally the site should evoke **confidence through candour** — the relief of being told
the truth about a large, frightening purchase.

## Anti-references

- **Indian property portals** (99acres, MagicBricks, NoBroker): banner-dense listing walls,
  ad-driven layouts, everything shouting at once.
- **Local builder websites**: autoplay carousels, marquee text, stretched stock photography,
  WhatsApp banners pasted over everything.
- **SaaS landing templates**: purple gradients, big-number hero metrics, endless identical
  icon-card grids, glassmorphism.

Also explicitly avoided, though not named by the client: the luxury-real-estate cliché of
navy + gold + Playfair over marble textures. The gold here is placed deliberately, once, and
the photography is real Hyderabad rather than generic aspiration.

## Design Principles

1. **Say what we do not know.** Unverified listings are labelled unverified. Where the
   developer publishes no price, the page says "price on request" rather than inventing one.
   Artist's impressions are labelled as such. Indicative figures are labelled indicative.
   Candour is the product — and it is also what makes the argument for property believable.
2. **The photograph is the argument.** Real images of Hyderabad and Telangana carry the local
   credibility that copy cannot claim for itself.
3. **Every path ends in a conversation.** The site's job is to get someone informed enough to
   ask a good question, then hand them to a person — not to simulate one.
4. **Show the total, not the sticker.** Carpet area alongside super built-up, acquisition cost
   alongside price, waiting cost alongside discount. The real number, early.
5. **Restraint carries the premium.** One accent colour, one drenched fold, one entrance
   animation. Everything else is type, whitespace and photography.

## Accessibility & Inclusion

- Target **WCAG 2.1 AA**. Every text/background pair in the palette is contrast-checked and
  the measured ratios are recorded in `src/styles/global.css`; an in-browser audit runs
  against rendered pages.
- `prefers-reduced-motion` is honoured, and entrance animations are declared *inside*
  `no-preference` so the default state is already visible — content is never gated on an
  animation that may not run.
- Dialogs are native `<dialog>`: Escape closes, focus returns to the trigger, backdrop click
  dismisses. All interactive controls are real buttons and links.
- Placeholder text meets the same 4.5:1 as body text rather than the usual light grey.
- Every image carries descriptive alt text written as a sentence, not a label.
- Bilingual wordmark (Latin + Telugu) reflects the actual city.
