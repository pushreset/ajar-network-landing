# Handoff: AJAR Network Landing Page

## Overview
A single-screen landing page for the **AJAR Network** (Access to Justice Action Research) — a project of the Praxis Mobilities Collaborative supporting rights and access to justice for precariously housed and unhoused people. The page presents a bold activist-poster aesthetic with a hero statement, a "what is a signalement?" explainer, a primary call-to-action, and multilingual support (English, French, Punjabi, Chinese).

## About the Design Files
The file in this bundle is a **design reference created in HTML** — a prototype showing intended look and behavior, **not production code to copy directly**. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.), using its established component patterns, styling conventions, and i18n libraries. If no environment exists yet, choose the most appropriate framework for the project and implement the design there.

The prototype is authored as a "Design Component" (`.dc.html`) — a runtime-specific format. Treat the markup and inline styles as the **source of truth for visual values**, and ignore the `<x-dc>`, `<helmet>`, `<sc-for>`, and `data-dc-script` wrappers, which are scaffolding for the prototype environment only.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and interactions are specified. Recreate the UI pixel-perfectly using the codebase's existing libraries and patterns. Exact hex values, font families, and measurements are listed below.

## Screens / Views

### Landing Page (single screen, full viewport height)
- **Purpose**: Communicate the AJAR Network's mission, explain what a "signalement" is, and drive users to add a signalement. Allow language switching.
- **Layout**: A full-height vertical flex column (`min-height: 100vh; display:flex; flex-direction:column`). Background `#f7f4ee`, default text color `#141210`. Four stacked regions, top to bottom:
  1. **Four-direction ribbon** (decorative top bar)
  2. **Header** (logo + language pills)
  3. **Hero** (flex-grow region with the mission statement)
  4. **Action band** (dark footer block with explainer + CTA + links)

#### 1. Four-direction ribbon
- A horizontal bar, `height: 8px`, `flex: 0 0 auto`, `display:flex`.
- Four equal-width segments (`flex:1` each), left to right:
  - `#141210` (near-black)
  - `#c0322a` (red)
  - `#f4c20d` (yellow)
  - `#f7f4ee` (cream) with `box-shadow: inset 0 0 0 1.5px rgba(20,18,16,0.28)` to define its edge against the page.

#### 2. Header
- Container: `display:flex; justify-content:space-between; align-items:center; gap:24px; padding:24px 56px;` with `border-bottom:1.5px solid rgba(20,18,16,0.12)`. `flex:0 0 auto`.
- **Left — wordmark** (note: an earlier compass/"wheel" logo mark was removed; the wordmark now stands alone):
  - `display:flex; align-items:baseline; gap:8px; line-height:1;`
  - "AJAR" — font `Bricolage Grotesque`, weight `800`, size `25px`, letter-spacing `-0.02em`, color `#141210`.
  - "Network" — font `Archivo`, weight `600`, size `18px`, letter-spacing `0.01em`, color `rgba(20,18,16,0.62)`.
- **Right — language pills**: a `display:flex; gap:7px;` row of 4 buttons (EN, FR, ਪੰਜਾਬੀ, 中文).
  - Each pill: `padding:8px 13px; border-radius:7px; line-height:1; cursor:pointer; font:600 14px Archivo;` transition `border-color .15s ease`.
  - **Idle**: `border:1.5px solid rgba(20,18,16,0.22); background:transparent; color:#141210;`
  - **Active** (current language): `border:1.5px solid #141210; background:<accent>; color:<ctaText>;` (accent default `#c0322a`, ctaText `#f7f4ee` — see Design Tokens).
  - **Hover**: `border-color:#141210;`

#### 3. Hero
- Section: `flex:1; position:relative; overflow:hidden; display:flex; align-items:center; padding:72px 56px;`.
- Inner container: `width:100%; max-width:1320px; margin:0 auto; position:relative; z-index:2;`.
- **Eyebrow row**: `display:flex; align-items:center; gap:12px; margin-bottom:26px;`
  - A `12px × 12px` solid square filled with the accent color (`#c0322a`), no border-radius (sharp square).
  - Subtitle text: weight `600`, size `14px`, letter-spacing `0.12em`, `text-transform:uppercase`, color `rgba(20,18,16,0.62)`. Content (EN): "AJAR Network — Access to Justice Action Research".
- **Statement (`<h1>`)**: the mission headline.
  - `margin:0; max-width:22ch; border-left:10px solid <accent>; padding-left:36px;`
  - Font `Bricolage Grotesque`, weight `800`, size `clamp(30px, 3.6vw, 54px)`, line-height `1.04`, letter-spacing `-0.018em`, color `#141210`, `text-wrap:balance`.
  - Content (EN): "Supporting rights and access to justice for precariously housed and unhoused people and those who depend on public space".

#### 4. Action band (dark footer)
- Section: `flex:0 0 auto; background:#141210; color:#f7f4ee; padding:54px 56px 40px;`.
- Inner row: `max-width:1320px; margin:0 auto; display:flex; justify-content:space-between; align-items:flex-end; gap:56px; flex-wrap:wrap;`.
- **Left column** (`flex:1 1 420px; min-width:300px;`):
  - **Label**: weight `600`, size `13px`, letter-spacing `0.14em`, `text-transform:uppercase`, color `#f4c20d` (yellow), `margin-bottom:14px`. Content (EN): "What is a signalement?".
  - **Paragraph**: `margin:0 0 30px; max-width:560px;` font `Archivo`, size `21px`, line-height `1.45`, color `rgba(247,244,238,0.88)`. Content (EN): "A signalement is a short report documenting an incident of institutional violence — a record that builds toward accountability."
  - **CTA button (`<a>`)**: `display:inline-flex; align-items:center; gap:12px; padding:18px 32px; border-radius:6px; text-decoration:none;` font `Bricolage Grotesque`, weight `700`, size `21px`; background `<accent>` (`#c0322a`), color `<ctaText>` (`#f7f4ee`); `box-shadow:0 12px 26px rgba(192,50,42,0.32)`; transition `transform/background/box-shadow/color .18s ease`. Includes a trailing `↗` glyph at `font-size:24px; line-height:0`. Content (EN): "Add a signalement ↗".
    - **Hover**: `background:#f4c20d; color:#141210; transform:translateY(-3px); box-shadow:0 18px 38px rgba(244,194,13,0.42);`
- **Right column** (`flex:0 1 auto; display:flex; flex-direction:column; align-items:flex-end; gap:14px; text-align:right;`):
  - A row (`display:flex; align-items:center; gap:18px; font-size:16px;`) of two links separated by a `/` divider (`color:rgba(247,244,238,0.3)`).
  - Links: `color:#f7f4ee; text-decoration:underline; text-underline-offset:5px; text-decoration-thickness:1.5px;` transition `color .15s ease`. **Hover**: `color:#f4c20d`. Content (EN): "Contact us" and "About the Collaborative".
- **Bottom credit line**: `max-width:1320px; margin:36px auto 0; padding-top:22px; border-top:1.5px solid rgba(247,244,238,0.16); font-size:14px; color:rgba(247,244,238,0.55); letter-spacing:0.01em;`. Content: "A project of the Praxis Mobilities Collaborative · Vancouver, Canada / Paris, France".

## Interactions & Behavior
- **Language switching**: Clicking a language pill sets the active language. ALL localized strings (subtitle, statement, whatisLabel, whatis, cta, contact, about) update in place. The active pill gains the accent background; the previously active pill returns to idle. No page reload, no routing — pure client state. Full translation strings for `en`, `fr`, `pa`, `zh` are in the prototype's logic block (see file) — copy them verbatim.
- **CTA "Add a signalement"**: Currently links to `#` (placeholder). Wire this to the real signalement submission route/flow in the target app.
- **Contact / About links**: Currently `#` placeholders — wire to real routes.
- **Hover transitions**: Pills `.15s`, CTA `.18s`, footer links `.15s` — all `ease`.
- **Responsive**: The action-band inner row uses `flex-wrap:wrap`, so the right-column links drop below the left column on narrow widths. Hero font uses `clamp()` for fluid scaling. Horizontal padding is a fixed `56px` — on small screens this should be reduced (e.g. to `24px`); add a breakpoint in the target implementation.

## State Management
- **`lang`**: current language code, one of `'en' | 'fr' | 'pa' | 'zh'`. Default `'en'`. Drives all displayed copy via a strings lookup table.
- **`accent`** (configurable token, default `#c0322a`): the brand accent. Used by the eyebrow square, the hero `<h1>` left border, the active language pill background, and the CTA background. A derived value **`ctaText`** = `#141210` when accent is yellow (`#f4c20d`/`#f5c518`), otherwise `#f7f4ee` — ensures readable contrast on the accent.
- No data fetching in the prototype. In production, the CTA and contact/about links require real navigation/data.

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Ink / near-black | `#141210` | Primary text, dark action band bg, ribbon segment, borders |
| Cream / paper | `#f7f4ee` | Page background, light text on dark band |
| Accent red | `#c0322a` | Default accent: eyebrow square, h1 border, active pill, CTA bg |
| Yellow | `#f4c20d` | Ribbon segment, "what is" label, hover states |
| Text on ink (88%) | `rgba(247,244,238,0.88)` | Action-band paragraph |
| Muted ink (62%) | `rgba(20,18,16,0.62)` | Subtitle, "Network" wordmark |
| Border ink (12%) | `rgba(20,18,16,0.12)` | Header bottom border |
| Border ink (22%) | `rgba(20,18,16,0.22)` | Idle pill border |
| Divider on ink (16%) | `rgba(247,244,238,0.16)` | Action-band top border |
| Credit text (55%) | `rgba(247,244,238,0.55)` | Bottom credit line |
| Selection | bg `#f4c20d`, text `#141210` | `::selection` |

### Typography
- **Display / headings**: `Bricolage Grotesque` — weights 600, 700, 800. (AJAR wordmark 800/25px, h1 800, labels/CTA 700.)
- **Body / UI**: `Archivo` — weights 400, 500, 600, 700.
- **CJK fallback**: `Noto Sans SC` (weights 400, 700, 900).
- **Punjabi fallback**: `Noto Sans Gurmukhi` (weights 400, 600, 700).
- Body font stack: `'Archivo','Noto Sans SC','Noto Sans Gurmukhi',sans-serif`. Heading stack: `'Bricolage Grotesque','Noto Sans SC','Noto Sans Gurmukhi',sans-serif`.
- `-webkit-font-smoothing: antialiased`.

### Spacing & layout
- Content max-width: `1320px`, centered.
- Section horizontal padding: `56px`.
- Header padding: `24px 56px`. Hero padding: `72px 56px`. Action band padding: `54px 56px 40px`.
- Ribbon height: `8px`.

### Border radius
- Language pills: `7px`. CTA: `6px`. (Eyebrow square and hero border are intentionally sharp/0.)

### Shadows
- CTA rest: `0 12px 26px rgba(192,50,42,0.32)`.
- CTA hover: `0 18px 38px rgba(244,194,13,0.42)`.

## Assets
- **Fonts**: Google Fonts — Bricolage Grotesque, Archivo, Noto Sans Gurmukhi, Noto Sans SC. Load via the codebase's font pipeline (self-host or `@fontsource` preferred over the CDN `<link>` used in the prototype).
- **No images or icons.** The only "logo" is the text wordmark. The `↗` is a Unicode arrow glyph. The decorative ribbon is pure CSS. (A prior compass-wheel logo mark was removed at the user's request.)

## Files
- `AJAR Landing - Activist Poster.dc.html` — the high-fidelity design prototype (included in this bundle). Contains the full markup, inline styles, and the multilingual strings table for all four languages.
