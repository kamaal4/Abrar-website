# Design

Visual system for **Invest In Real Estate Hyderabad**. Tokens live in
`src/styles/global.css` under `@theme`; this document explains the intent behind them.
Strategic context is in `PRODUCT.md`.

## Theme

**Light, pure white.** The scene: someone on a phone in Hyderabad daylight, mid-conversation,
comparing two flats. Dark mode would fight the ambient light and make photographs of the city
harder to read. The surface is literal `#ffffff` — not cream, not sand, not a warm-tinted
near-white. Warmth in this brand comes from the accent and the photography, never from the
background.

**Colour strategy: restrained, with one committed moment.** Gold occupies roughly 10–15% of
any given page — buttons, verified pills, rules, link underlines — and then takes over
completely for a single drenched fold (the investment band on the homepage, the closing CTA on
`/invest` and `/about`). One loud moment reads as deliberate; gold everywhere would read as
gilding.

## Colour

All values are OKLCH. Neutrals are **chroma 0** — deliberately untinted, so the gold is the
only hue on the page.

| Token | OKLCH | Hex | Role |
| --- | --- | --- | --- |
| `--color-bg` | `oklch(1 0 0)` | `#ffffff` | Page surface |
| `--color-surface` | `oklch(0.975 0 0)` | `#f7f7f7` | Alternating bands, inset panels |
| `--color-ink` | `oklch(0.16 0 0)` | `#0d0d0d` | Body and headings |
| `--color-ink-deep` | `oklch(0.1 0 0)` | `#030303` | Gallery backdrop |
| `--color-ink-muted` | `oklch(0.42 0 0)` | `#4d4d4d` | Secondary prose |
| `--color-ink-subtle` | `oklch(0.52 0 0)` | `#696969` | Meta, captions, placeholders |
| `--color-line` | `oklch(0.9 0 0)` | `#dedede` | Hairlines, card borders |
| `--color-line-strong` | `oklch(0.82 0 0)` | `#c4c4c4` | Input borders, chips |
| `--color-gold` | `oklch(0.68 0.11 78)` | `#bd8f41` | Accent **surfaces** only |
| `--color-gold-ink` | `oklch(0.44 0.09 78)` | `#6d4b04` | Gold **text** on white |
| `--color-gold-deep` | `oklch(0.54 0.105 78)` | `#906615` | Drenched fold, button hover |
| `--color-gold-wash` | `oklch(0.965 0.018 80)` | `#faf2e6` | Highlighted card ground |

### Contrast (measured, WCAG 2.1 AA)

| Pair | Ratio |
| --- | --- |
| ink on white | 19.4:1 |
| ink-muted on white | 8.5:1 |
| ink-subtle on white | 5.5:1 |
| gold-ink on white | 7.9:1 |
| ink on gold (primary button) | 6.7:1 |
| white on gold-deep (drenched fold) | 5.1:1 |

**The rule that matters:** `--color-gold` is 2.9:1 on white and must never carry text. Gold
type uses `--color-gold-ink`; the primary button is a gold *surface* with ink text, which is
both more legible and more confident than white-on-gold.

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
- `.band` — `clamp(3.25rem, 7vw, 6.5rem)` block padding. `.band-tight` for closers.
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
| `PropertyCard` | 4:3 image, verified + status pills, price-first hierarchy, spec row, dual CTA. Carries `data-*` for client-side filtering. |
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
- **One orchestrated entrance**, on the hero only: tagline, headline, subhead, search panel,
  assistant prompt, staggered 80ms apart. Nothing else animates on arrival.
- Hover: card image scales 1.035 over 700ms, border darkens, gold underline wipes in on nav
  links, arrows nudge 4px.
- Entrance keyframes are declared **inside** `@media (prefers-reduced-motion: no-preference)`.
  Where motion is unwelcome — or in any renderer that does not run animations — no rule
  applies and the content is simply visible. The reveal enhances a working default.
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
