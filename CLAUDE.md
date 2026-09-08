# Wappnet.ai website

**Every new page must follow `Wappnet Design System.dc.html`.** Read it before designing anything for this project. It is derived from the live pages and is the single source of truth for colour, type, spacing, components, page recipes, motion, imagery sizes and copy voice.

## Quick reference

- Fonts: Archivo (headings, buttons, eyebrows, numbers), DM Sans (body).
- Ink `#0D0D0F` / heading `#141414` / footer `#151515`. Action orange `#E8541F`. Link `#C2571A`. Accent `#F4A557`. Highlight `#F8D06A`. Surface `#F7F6F4`. Icon tile `#FDECE4`. Card border `#E9E7E3`.
- Only three gradients: hero mesh (once per page), warm `linear-gradient(115deg,#F4756B,#F4A557)`, menu strip `linear-gradient(100deg,#F9B08C,#E8541F)`.
- Container `max-width:1200px; padding:0 24px`. Light sections `112px 0`, dark `96px 0`.
- Section heading: `clamp(26px,3.4vw,36px)`, 800, `-.02em`, `1.22`, `max-width:24ch`, `text-wrap:pretty`. Eyebrow 16px above, 52px to content.
- Radii 4/6/9/12/16/24/pill. Card hover lifts 4px.
- `white-space:nowrap` on button labels, chips, stat captions; `flex:none` on arrows; `minmax(0,1fr)` on grid text cells.
- Column counts for rows that must not orphan are set in JS from `window.innerWidth`, not `auto-fit`.
- Scroll reveal: `data-reveal` + optional `data-reveal-delay`. Keyframes limited to `panelIn`, `fadeUp`, `marquee`.

## Files

- `Wappnet Home.dc.html` — homepage
- `Wappnet AI Service.dc.html` — AI capability page
- `Wappnet Design System.dc.html` — the guide

## Content rules

- Placeholder stats and certifications are marked as such; never present unverified figures as fact.
- No invented client names, logos or metrics. No emoji, no filled icons, no drawn illustrations standing in for photography.
- Image placeholders always state the export size at 2× the rendered box.
