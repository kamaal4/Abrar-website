# Design

Visual system for **InvestForAssets**. Tokens live in `src/styles/global.css` under `@theme`;
this document explains the intent behind them. Strategic context is in `PRODUCT.md`.

## Theme

**Dark. Cool near-black.** This reverses the earlier light system, and the reason is the
content: the product is photographs of buildings at dusk in a city that markets itself on
skyline. On a near-white ground those photographs are stamps on a page; on near-black they
are the light source, and the page reads as an instrument rather than a brochure.

The earlier system argued against dark on daylight-legibility grounds — someone on a phone in
Hyderabad sun. That argument is answered by contrast, not by lightness: body prose runs at
10.5:1 and the dimmest meta text at 6.1:1, both well past AA, and both higher than the light
system's equivalents were. A dark page with genuinely high contrast survives sunlight; a dark
page with grey-on-grey does not, which is the failure this palette is built to avoid.

The ground is `oklch(0.155 0.012 255)`. Two rules protect it:

- **It is not warm.** Chroma tilts toward hue 255 (blue). A near-black tinted warm reads as
  sepia and pulls the whole page toward "cosy", which is the opposite of the brief.
- **It is not `#000`.** Pure black destroys the elevation system: a lifted panel needs
  something to be lifted from, and a well needs something to sink below.

**Elevation on dark is light, not shadow.** Panels carry a 1px inner highlight along the top
edge, as if lit from above. A black drop shadow on a black ground is invisible and only costs
paint time. `--shadow-lift` and `--shadow-panel` are therefore mostly ring, not blur; the one
real bloom is `--shadow-glow`, which is accent-coloured.

**Colour strategy: Committed, single accent.** One electric azure carries every interactive
surface — buttons, focus rings, active states, links, rules, bar fills, the reading-progress
hairline. There is no second accent. Warmth on the page comes from the photography, which is
amber and concrete, and the azure exists to be maximally separated from it.

## Colour

All values are OKLCH. Neutrals carry a trace of chroma toward the ground's blue rather than
sitting at chroma 0.

| Token | OKLCH | Role |
| --- | --- | --- |
| `--color-bg` | `oklch(0.155 0.012 255)` | Page ground |
| `--color-surface` | `oklch(0.205 0.014 255)` | Cards and panels — **lifted above** `bg` |
| `--color-surface-deep` | `oklch(0.105 0.01 255)` | Wells: alternating bands, inputs, bar tracks, footer |
| `--color-ink-deep` | `oklch(0.085 0.008 255)` | The one ground below a well — gallery frames |
| `--color-ink` | `oklch(0.97 0.004 255)` | Headings and emphasis |
| `--color-ink-muted` | `oklch(0.8 0.008 255)` | Body prose |
| `--color-ink-subtle` | `oklch(0.65 0.01 255)` | Meta, captions, mono labels, placeholders |
| `--color-line` | `oklch(1 0 0 / 0.11)` | Hairlines, card borders |
| `--color-line-strong` | `oklch(1 0 0 / 0.24)` | Input borders, chips, outline buttons |
| `--color-beam` | `oklch(0.8 0.15 220)` | The accent as a **surface** |
| `--color-beam-ink` | `oklch(0.865 0.13 215)` | The accent as **text** on dark |
| `--color-beam-deep` | `oklch(0.62 0.16 228)` | Pressed and deep accent states |
| `--color-beam-wash` | `oklch(0.8 0.15 220 / 0.12)` | Tinted panel ground, hover fills, glows |
| `--color-on-beam` | `oklch(0.13 0.02 240)` | Label colour **on** the accent |

`ink` means *foreground*, not black. Naming it for its role rather than its value is what let
the whole re-skin invert by changing values instead of ~780 call sites.

**Hairlines are alpha, not solid.** They have to read over the ground, over a lifted card,
over a well and over a photograph without a variant for each.

### Contrast (measured in-browser, WCAG 2.1)

| Pair | Ratio | |
| --- | --- | --- |
| ink on bg | 17.93:1 | headings |
| ink-muted on bg | 10.48:1 | body prose |
| ink-subtle on bg | 6.08:1 | meta, labels, placeholders |
| beam-ink on bg | 13.40:1 | accent text and links |
| beam on bg | 10.97:1 | accent as a surface or rule |
| **on-beam on beam** | **11.27:1** | primary button |
| ink on surface | 16.33:1 | card headings |
| ink-muted on surface | 9.55:1 | card prose |
| ink-subtle on surface | 5.54:1 | the dimmest pair on the site |
| ink-muted on surface-deep | 10.98:1 | |

**The rules that matter:**

1. **Nothing white ever sits on the accent.** White on `beam` is about 2.1:1. Anything on the
   accent takes `--color-on-beam`, which is 11.27:1. Dark-on-bright is the only way an accent
   this luminous works, and it is why `#fff` appears nowhere in the stylesheet.
2. **`ink-subtle` on `surface` at 5.54:1 is the floor.** It clears AA for normal text with
   room, but it is the dimmest pair that exists — do not introduce anything below it.
3. **Do not lower `beam`'s lightness to "tone it down".** Below roughly L 0.72 it stops taking
   a dark label cleanly and the whole accent system inverts. Tone it down with *less area*,
   not less luminance.
4. Verify by measurement, not by eye. The canvas-based audit rasterises each token through a
   1×1 canvas (`getComputedStyle` returns OKLCH verbatim in Chromium, so parsing the string is
   not enough) and computes real sRGB ratios. Run it over every page after a palette change.
   Text over photography is excluded and has to be checked visually.

## Typography

Three families on a technical axis. The previous system paired a sans display with a serif
body; the serif was the single strongest "editorial, not engineered" signal on the page.

| Token | Family | Use |
| --- | --- | --- |
| `--font-display` | **Space Grotesk** | Headings, buttons, nav, UI labels |
| `--font-body` | **Inter** | Body prose, article text |
| `--font-mono` | **JetBrains Mono** | Data: spec rows, prices, section indices, table headers |
| `--font-telugu` | **Anek Telugu** | The `హైదరాబాద్` half of the wordmark |

Anek Telugu is the only survivor of the previous pairing, kept because it is what lets the
wordmark be bilingual without a mismatched fallback.

**The mono voice is for data, not decoration.** `.mono-label` (uppercase, tracked, subtle) goes
on things that are *read as instruments*: spec keys, section indices, field labels, tile
categories. `.mono-data` (tabular figures) goes on the figures themselves. Both are banned as
a generic kicker above every heading — see Bans.

Everything numeric carries `font-variant-numeric: tabular-nums` at the base layer. Figures
line up in columns or they are not data.

### Scale

Fluid `clamp()`, ratio ≥ 1.25, unchanged from the previous system.

| Token | Range | Line height |
| --- | --- | --- |
| `--text-display-1` | `clamp(2.5rem, 6.2vw, 5rem)` | 1.02 |
| `--text-display-2` | `clamp(1.95rem, 4.2vw, 3.25rem)` | 1.06 |
| `--text-display-3` | `clamp(1.45rem, 2.4vw, 2.1rem)` | 1.15 |
| Body | `1rem` / `1.0625rem` in prose | 1.65 / 1.7 |

Letter-spacing is `-0.025em` on headings, `-0.03em` on `h1`. `h1–h3` use `text-wrap: balance`;
prose uses `text-wrap: pretty`. Measure is capped at `68ch`.

## Layout

- `.shell` — 78rem max, fluid `clamp(1.15rem, 4vw, 2.5rem)` inline padding.
- `.shell-wide` — 92rem, for listing grids and the property detail two-column layout.
- `.band` — `clamp(2.75rem, 5.5vw, 5rem)` block padding. `.band-tight` for closers.
- **Band rhythm is by depth, not by alternating tints.** Sections sit on `bg` and are
  separated by hairline seams, `.beam-rule` and `.techgrid` texture; the ones that need to
  recede drop to `surface-deep`. Cards are `surface`, so a card band must never itself be
  `surface` — the card would vanish into it.
- Cards are used where they are genuinely the right affordance (property, project and blog
  listings) and avoided elsewhere. Trust points are a ruled list, investment options a ruled
  row list, locations an asymmetric grid with one large tile. No nested cards.
- Breakpoint-free grids: `repeat(auto-fit, minmax(280px, 1fr))` and `sm:grid-cols-2
  lg:grid-cols-3`.
- Radii: `--radius-card` 1.25rem, `--radius-panel` 1.5rem, buttons 0.7rem.
- Z-index is a named scale — `--z-sticky`, `--z-bottom-bar`, `--z-drawer-backdrop`,
  `--z-drawer`, `--z-modal`. No bare numbers.

## The effect vocabulary

Everything here is CSS the browser already ships. No animation library, no WebGL, no canvas.

| Class | What it is |
| --- | --- |
| `.glass` | Translucent `surface` + `backdrop-filter: blur(20px) saturate(1.4)` + inner top highlight. Header, hero search panel, mobile bar, dialogs. Behind `@supports`, with an opaque fallback. |
| `.aurora` | Three large radial blooms in azure and indigo at 10–16% alpha, drifting on a 44s alternating keyframe. The page's ambient light. Used twice: the hero and the closing fold. |
| `.techgrid` | 64px hairline grid at 4.5% white, radially masked so it never reaches an edge. A grid that runs to the bleed reads as wallpaper; one that fades reads as an instrument. Two bands only. |
| `.hud-frame` | Two corner brackets in azure instead of a full border. Frames the leverage fold. |
| `.beam-rule` | A 1px rule bright in the middle and gone at both ends. Seams and the hero horizon. |
| `.mono-label` / `.mono-data` | The instrument voice on data. |
| `.ticker` / `.ticker-track` | A seamless marquee: two identical copies, translated exactly `-50%`. The second copy is `aria-hidden`, and every figure in it appears as real text elsewhere. |
| `.glow-text` | A soft azure text-shadow. The hero eyebrow only. Not gradient text — that ban stands. |

## Motion

CSS only, no library. The discipline from the previous system is unchanged and is the part
most likely to be broken by a careless addition.

- `--ease-out-quint` `cubic-bezier(0.23, 1, 0.32, 1)` and `--ease-out-quart`
  `cubic-bezier(0.25, 1, 0.5, 1)`. No bounce, no elastic.
- **One orchestrated entrance** on arrival, on the hero only: eyebrow, headline, subhead,
  horizon rule, search panel and CTA row staggered 80ms apart, with the photograph settling
  from `scale(1.05)` over 1.6s.
- **Scroll-driven reveals, rationed.** `animation-timeline: view()` — no JavaScript, no
  observer. `.bar-grow` (the leverage bars, the signature moment), `.reveal-stagger` (capped
  at six steps), `.reveal-rows` (comparison-table rows), `.read-progress`.
- **The bar track must not be `overflow: hidden`.** An `overflow` value makes the element a
  scroll container, which is what `view()` resolves against, and the timeline goes inert.
- **Ambient motion is slow enough not to be caught.** The aurora drifts 3% over 44s; the
  ticker takes 46s for one pass and pauses on hover. Anything faster becomes a distraction on
  a page people read for minutes.
- Hover: card image scales 1.035 over 700ms, a diagonal light sweeps the photograph, the
  border lifts to azure with a glow, arrows nudge 4px, nav links wipe an azure underline.
  `.card` responds to `:focus-within` as well as `:hover`. The button press is 60ms — a 250ms
  press reads as lag on release.
- Disclosures animate open via `::details-content` + `interpolate-size: allow-keywords`,
  behind `@supports`; where unsupported they simply snap.
- Every keyframe and every reveal rule is declared **inside**
  `@media (prefers-reduced-motion: no-preference)`. Where motion is unwelcome — or in any
  renderer that does not run animations — no rule applies and the content is simply visible at
  full opacity, bars at their natural width. The reveal enhances a working default; nothing is
  ever gated on an animation that may not run. **Verify this on every change** by emulating
  `prefers-reduced-motion: reduce` and confirming nothing is stuck invisible. The one rule
  that needs an explicit `reduce` override is `.ticker-track`, because the blanket
  duration-collapse would otherwise park it on its second copy.
- A `@media print` block disables all animation and transition.

## Imagery

Photography is both the local credibility and, on this palette, the page's light. Real
photographs of Hyderabad and Telangana from Wikimedia Commons — the Financial District skyline,
Kokapet lake, Tellapur towers under construction, the Outer Ring Road at night, Telangana
farmland — each credited with author and licence on `/credits`, alongside developer-published
project imagery.

The hero photograph carries `contrast(1.12) saturate(1.08)` so it holds up against the ground
rather than sinking into it, under a two-part scrim: a vertical fade for legibility at any
crop, and (desktop only) a horizontal panel behind the type. On phones the horizontal panel is
dropped — at that width it would cover the whole photograph.

Alt text is written as description in the brand voice ("Kokapet Lake with new residential
towers on the far bank"), never as a label.

All images run through `astro:assets`: WebP, responsive `srcset`, explicit dimensions,
`loading="lazy"` everywhere except the hero.

## Bans

Enforced across the codebase: no gradient text, no side-stripe borders, no identical icon-card
grids, no hero-metric template, no `01/02/03` scaffolding except the genuine sequences (the
six-step process, the seven-step investment process), no fabricated ratings or reviews, no
white text on the accent, no second accent colour, no light-mode variant.

Two bans from the previous system changed rather than vanished:

- **Glassmorphism** was banned outright as decoration. It is now a named component with two
  jobs — chrome that floats over content, and dialogs — and is banned everywhere else. Glass
  on a static panel is still decoration.
- **The tiny uppercase tracked eyebrow above every section** is still banned. `.mono-label`
  exists for *data* — spec keys, field labels, section indices, tile categories. A mono label
  used as a kicker above a heading is the banned thing wearing a different font.
