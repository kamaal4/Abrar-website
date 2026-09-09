# Design

Visual system for **InvestForAssets**. Tokens live in
`src/styles/global.css` under `@theme`; this document explains the intent behind them.
Strategic context is in `PRODUCT.md`.

## Theme

**Light, warm near-white.** The scene: someone on a phone in Hyderabad daylight, mid-conversation,
comparing two flats. Dark mode would fight the ambient light and make photographs of the city
harder to read.

The ground is `oklch(0.99 0.003 40)` — a whisper of the brand's own hue in white. Two rules
protect it:

- **It is not cream.** The band at OKLCH L 0.84–0.97 with warm-yellow chroma reads as
  cream / sand / paper / parchment whatever you call it, and that is the saturated default of
  the moment. Do not lower the ground's lightness into that band.
- **Its chroma tilts toward clay (hue 40), not toward generic warmth (hue 60–80).** Tinting a
  neutral toward the brand's own hue is deliberate; tinting it warm-by-default is the reflex.

No token is named `paper`, `sand`, `cream` or `ivory`.

**Colour strategy: Committed.** Clay carries roughly 30% of a page — buttons, verified pills,
rules, link underlines, section numerals, accent headings — and then takes the whole surface for
a single drenched fold (the investment band on the homepage, the closing CTA on `/invest` and
`/about`).

This replaced a Restrained strategy built on a muted brass gold. Two things were wrong with it:
Restrained is the *product* default and this is a brand surface, so a greyscale page with one
timid accent read as invisible; and the gold was 2.9:1 on white, so it could never carry text
and the accent had nowhere to go. Feedback said the site was unappealing, and it was right.

## Colour

All values are OKLCH. Neutrals carry a trace of chroma toward the clay hue rather than sitting
at chroma 0 — enough to belong to the palette, not enough to read as tinted.

| Token | OKLCH | Hex | Role |
| --- | --- | --- | --- |
| `--color-bg` | `oklch(0.99 0.003 40)` | `#fefbfa` | Page ground |
| `--color-surface` | `oklch(0.966 0.009 40)` | `#faf2ef` | Alternating bands |
| `--color-surface-deep` | `oklch(0.94 0.014 40)` | `#f4e8e4` | Inset panels — the elevation layer |
| `--color-ink` | `oklch(0.175 0.012 40)` | `#150f0d` | Body and headings |
| `--color-ink-deep` | `oklch(0.115 0.01 40)` | `#080403` | Gallery backdrop |
| `--color-ink-muted` | `oklch(0.43 0.014 40)` | `#574d4a` | Secondary prose |
| `--color-ink-subtle` | `oklch(0.53 0.014 40)` | `#736966` | Meta, captions, placeholders |
| `--color-line` | `oklch(0.895 0.008 40)` | `#e1dbd8` | Hairlines, card borders |
| `--color-line-strong` | `oklch(0.81 0.012 40)` | `#c8bebb` | Input borders, chips |
| `--color-clay` | `oklch(0.56 0.15 34)` | `#bc4c33` | The accent — surfaces **and** text on light |
| `--color-clay-ink` | `oklch(0.47 0.145 34)` | `#9b321a` | Accent text wanting more weight; focus ring |
| `--color-clay-deep` | `oklch(0.405 0.13 34)` | `#80240f` | Drenched fold, button hover |
| `--color-clay-light` | `oklch(0.72 0.13 45)` | `#e7885d` | Accent type **on dark** grounds |
| `--color-clay-wash` | `oklch(0.955 0.022 40)` | `#feece5` | Highlighted panel ground |

### Contrast (measured, WCAG 2.1 AA)

| Pair | Ratio | |
| --- | --- | --- |
| ink on bg | 18.45:1 | |
| ink-muted on bg | 7.92:1 | body prose |
| ink-subtle on bg | 5.15:1 | meta, placeholders |
| ink on surface | 17.18:1 | |
| clay-ink on bg | 7.11:1 | |
| **white on clay** | **4.84:1** | primary button |
| white on clay-deep | 9.31:1 | drenched fold |
| clay-light on ink | 7.33:1 | hero eyebrow, dark folds |
| clay-light on hero scrim | 6.36:1 | |
| ink on clay | 3.81:1 | **large text only — never body copy** |

**The rules that matter:**

1. **Clay takes a white label at 4.84:1.** That is what lets the accent hold 30% of the page
   instead of 10%, and it is why the primary button is clay-with-white rather than the old
   surface-with-ink workaround.
2. **Never put ink on clay below 18.66px bold / 24px regular.** It is 3.81:1.
3. **On any dark ground use `clay-light`, not `clay`.** Clay is 3.81:1 on ink and fails.
4. Verify by measurement, not by eye. There is a canvas-based contrast audit that walks the
   rendered DOM and resolves Tailwind's `oklab()` output; run it over every page after a palette
   change. Text over photography is excluded from it and has to be checked visually.

## Typography

Two families on a contrast axis, inverting the usual editorial pairing — sans display over
serif body.

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | **Anek Latin** (Ek Type) | Headings, buttons, nav, labels, numerals |
| `--font-body` | **Literata** | Body prose, article text |
| `--font-telugu` | **Anek Telugu** | The `హైదరాబాద్` half of the wordmark |

Anek is by Ek Type, an Indian foundry, and ships a Telugu companion — which is why the
wordmark can be bilingual without a mismatched fallback. It is tall, tightly spaced and
architectural. Literata keeps long-form articles readable and stops the page reading as a
dashboard.

### Scale

Fluid `clamp()`, ratio ≥ 1.25.

| Token | Range | Line height |
| --- | --- | --- |
| `--text-display-1` | `clamp(2.5rem, 6.2vw, 5rem)` | 1.02 |
| `--text-display-2` | `clamp(1.95rem, 4.2vw, 3.25rem)` | 1.06 |
| `--text-display-3` | `clamp(1.45rem, 2.4vw, 2.1rem)` | 1.15 |
| Body | `1rem` / `1.0625rem` in prose | 1.65 / 1.75 |

Display max is 5rem, under the 6rem ceiling. Letter-spacing floor is `-0.035em`. `h1–h3` use
`text-wrap: balance`; prose uses `text-wrap: pretty`. Measure is capped at `68ch`.

## Layout

- `.shell` — 78rem max, fluid `clamp(1.15rem, 4vw, 2.5rem)` inline padding.
- `.shell-wide` — 92rem, for listing grids and the property detail two-column layout.
- `.band` — `clamp(2.75rem, 5.5vw, 5rem)` block padding. `.band-tight` for closers. The
  earlier 6.5rem ceiling left short sections floating in dead space, which read as unfinished
  rather than airy.
- Rhythm is varied on purpose: tight groupings inside a section, generous separation between.
- Cards are used where they are genuinely the right affordance (property, project and blog
  listings) and avoided elsewhere. Trust points are a **ruled list**, investment options are a
  **ruled row list**, locations are an **asymmetric grid** with one large tile. No nested cards.
- Breakpoint-free grids: `repeat(auto-fit, minmax(280px, 1fr))` and `sm:grid-cols-2
  lg:grid-cols-3`.
- Radii: `--radius-card` 1.25rem, `--radius-panel` 1.5rem, buttons 0.7rem.
- Z-index is a named scale — `--z-sticky`, `--z-bottom-bar`, `--z-drawer-backdrop`,
  `--z-drawer`, `--z-modal`. No bare numbers.

## Components

| Component | Notes |
| --- | --- |
| `Header` | White, hairline border, shadow appears only after scroll. Bilingual wordmark. |
| `PropertyCard` | 4:3 image, verified + status pills, **title-first** hierarchy, spec row, price line, dual CTA pinned with `mt-auto` so a row of cards bottom-aligns. Carries `data-*` for client-side filtering. Price is deliberately *not* the lead: with no published prices, price-first made "Price on request" the loudest thing on 74 cards. |
| `ProjectCard` | 16:10 image, possession status pill, four-fact `<dl>`. |
| `LocationCard` | Full-bleed photo with gradient scrim; `feature` variant doubles the size and adds type chips. |
| `SearchBar` | Plain `GET` form to `/properties`; works with JavaScript disabled. |
| `PropertyFilters` | One instance only — moved into a `<dialog>` on mobile and back on close. |
| `AIPropertyAssistant` | Bottom sheet on mobile, centred dialog above `sm`. Labelled a demo. |
| `EmiCalculator` | Server-rendered first, live on input, CSS-only composition bar. |
| `WhatsAppButton` | Seven variants; the only place a WhatsApp CTA is expressed. |
| `MobileActionBar` | Fixed WhatsApp / Call / Enquire, `md:hidden`, with a spacer so it never covers the footer. |
| `HeroImage` | Art direction via `<picture>` — a panorama on desktop, a tower on phones. |
| `Img` | Wraps `astro:assets`, resolves alt text and credits from the image registry. |

## Motion

CSS only, no library.

- `--ease-out-quint` `cubic-bezier(0.23, 1, 0.32, 1)` and `--ease-out-quart`
  `cubic-bezier(0.25, 1, 0.5, 1)`. No bounce, no elastic.
- **One orchestrated entrance** on arrival, on the hero only: tagline, headline, subhead,
  search panel, CTA row, staggered 80ms apart, with the photograph settling from `scale(1.05)`
  over 1.6s. Nothing else animates on page load.
- **Scroll-driven reveals, rationed.** `animation-timeline: view()` — no JavaScript, no
  library, no observer. Fade-and-rise on every section is the tell we avoid; these attach only
  to moments that earn one:
  - `.bar-grow` — the leverage bars. The signature moment: the argument drawing itself.
  - `.reveal-stagger` — siblings in one grid or ruled list, offset so the group reads as a
    group. Capped at six steps.
  - `.reveal-rows` — comparison-table rows wiping in left to right.
  - `.read-progress` — a 2px clay hairline under the header, driven by `scroll(root block)`.
- **The bar track must not be `overflow: hidden`.** An `overflow` value makes the element a
  scroll container, which is what `view()` resolves against, and the timeline goes inert.
- Hover: card image scales 1.035 over 700ms, border darkens, clay underline wipes in on nav
  links, arrows nudge 4px. `.card` responds to `:focus-within` as well as `:hover`, so keyboard
  users get the same affordance. The button press is a 60ms transition — a 250ms press reads
  as lag on release.
- Disclosures animate open via `::details-content` + `interpolate-size: allow-keywords`,
  behind `@supports`; where unsupported they simply snap.
- Every keyframe and every reveal rule is declared **inside**
  `@media (prefers-reduced-motion: no-preference)`. Where motion is unwelcome — or in any
  renderer that does not run animations — no rule applies and the content is simply visible at
  full opacity, bars at their natural width. The reveal enhances a working default; nothing is
  ever gated on an animation that may not run. **Verify this on every change** by emulating
  `prefers-reduced-motion: reduce` and confirming nothing is stuck invisible.
- A `@media print` block disables all animation and transition.

## Imagery

Photography is the local credibility. 37 of 42 images are real photographs of Hyderabad and
Telangana from Wikimedia Commons — the Financial District skyline, Kokapet lake, Tellapur
towers under construction, the Outer Ring Road at night, Telangana farmland — each credited
with author and licence on `/credits`. The remaining five are stock interiors and modern
villas, used to illustrate a type rather than a specific property.

Alt text is written as description in the brand voice ("Kokapet Lake with new residential
towers on the far bank"), never as a label.

All images run through `astro:assets`: WebP, responsive `srcset`, explicit dimensions,
`loading="lazy"` everywhere except the hero.

## Bans

Enforced across the codebase: no gradient text, no side-stripe borders, no decorative
glassmorphism, no identical icon-card grids, no hero-metric template, no tiny uppercase
tracked eyebrow above every section, no `01/02/03` scaffolding except the one genuine
sequence (the seven-step investment process), no cream or beige body background, no fabricated
ratings or reviews.
