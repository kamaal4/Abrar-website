# Stitch prompt — InvestForAssets homepage (desktop)

Design the desktop homepage for **InvestForAssets**, a Hyderabad real-estate
investment consultancy. Treat it as a financial *instrument panel* for property,
not a listings portal. The anti-references are 99acres / MagicBricks / NoBroker:
no banner walls, no star ratings, no "trusted by 10,000+" badges, no stock
handshake photography, no urgency countdowns.

## Aesthetic

Near-black cool ground (blue-tinted, hue ~255, never warm, never pure #000).
Photography of buildings at dusk is the only light source. One electric azure
accent carries every interactive surface. Elevation is rendered as *light* — a
1px top highlight on lifted panels — not as drop shadow.

Futuristic graphic layer, used sparingly and always carrying real information:
- Faint technical grid / blueprint plotting lines behind hero and CTA bands.
- Hyderabad growth corridors drawn as a glowing vector wireframe map with
  labelled nodes (Financial District, Kokapet, Tellapur, Shamshabad) — a
  radar/HUD read of the city, not a Google Maps screenshot.
- Monospace micro-labels with hairline rules above section titles, like axis
  labels on a chart.
- Frosted-glass panels over photography for the header and floating cards.
- A thin scanning beam / gradient sweep along section dividers.
- Numbers presented as instrument readouts: monospace, tabular, with unit
  suffixes, on a recessed well rather than a raised card.

## Typography

Display: Space Grotesk. Body: Inter. Data and micro-labels: JetBrains Mono.
Huge hero display type (up to ~5rem) with tight 1.02 line height.

## Sections, in order

1. **Hero** — full-bleed dusk photograph of a Hyderabad high-rise, darkened,
   wireframe grid overlaid. Monospace eyebrow ("HYDERABAD · RESIDENTIAL,
   COMMERCIAL, LAND"). Headline "Your Property. Your Asset. Your Future."
   Two buttons: a solid azure primary ("Talk on WhatsApp") and a glass outline
   secondary ("Browse properties"). Below them, a row of three instrument
   readouts (properties listed / projects tracked / corridors covered) in
   monospace on a recessed strip.
2. **The argument band** — "Why property, when a mutual fund is one tap away?"
   Two columns of prose against a technical-grid background, with a comparison
   readout of property vs gold vs equities on *structure* (leverage, tax,
   liquidity, use) — mechanical facts only, no projected returns, no performance
   chart.
3. **Assistant band** — a glass conversational panel: a scripted property
   assistant asking "What are you trying to achieve?" with chip-style answer
   options. Show it mid-conversation, like a terminal with rounded corners.
4. **How it works** — three or four steps rendered as a horizontal HUD timeline:
   a hairline track, azure nodes, monospace step numbers, short labels.
5. **Featured properties** — a 3-up card grid. Each card: 4:3 photograph, a
   status pill, title, locality, monospace price line (some read "Price on
   request"), and a small heart/save affordance. Cards lift on hover with an
   azure glow ring.
6. **Growth corridors** — the wireframe city map as the hero of this section,
   with corridor cards docked beside it.
7. **Closing CTA band** — "Don't just buy a property. Understand the asset."
   over a dark technical grid with a single azure WhatsApp button.
8. **Footer** — multi-column navigation, a long legal disclosure paragraph set
   small and muted, social icons.

## Rules

- Every primary call to action is a WhatsApp enquiry.
- Nothing on screen may be invented social proof: no ratings, no review counts,
  no testimonials, no "as seen in" logos, no projected returns or yield figures.
- Anything sitting on the azure accent must be near-black text, never white.
- All text must pass WCAG AA on its background.
- Design at 1440px wide, and keep every layout stackable to a single column at
  400px — the real audience is on a phone, mid-conversation.
