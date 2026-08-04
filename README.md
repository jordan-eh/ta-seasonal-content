# Travel Alberta — Seasonal Content Toggle (POC)

Proof-of-concept prototypes exploring a **Summer ↔ Winter** content toggle for the
Travel Alberta PHASE 2 pages. Nav, breadcrumb, hero and the top of each page are
matched to the Figma frames; the toggle is layered in five different ways so the
interaction patterns can be compared.

## Preview locally
```bash
python3 -m http.server 8747
# then open http://127.0.0.1:8747/index.html
```
Start at `index.html` — a gallery linking all 15 prototypes.

## What's here
- **3 pages** — Outdoor Activities, Trip Ideas, Banff & Lake Louise
- **5 toggle variants each** (15 total):
  - **A · Segmented pill** — inline, matches Figma's placement
  - **B · Sticky bar** — persists under the nav
  - **C · Hero tabs** — immersive, tied to the hero
  - **D · Season spotlight** — full-width high-contrast band under the hero
  - **E · Floating switcher** — segmented pill fixed on screen
- `assets/` — shared `style.css`, `app.js` engine, and hero/section imagery exported from Figma

The nav + hero + top sections are Figma-matched; the lower feature/listing/stories
sections are representative POC content that swaps with the season.

> Not for production — prototype only.
