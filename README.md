# Kunigiri Kavya — Portfolio

A single-page, static portfolio for **Kunigiri Kavya**, full-stack developer (Java, Spring Boot, React).
Plain HTML, CSS and JavaScript — no build step, no frameworks, no CDN dependencies.

## Structure

```
.
├── index.html                  # the whole site
├── 404.html                    # GitHub Pages fallback page
├── css/style.css               # design system + layout + responsive rules
├── js/main.js                  # nav, active-link highlight, reveal, case studies
└── assets/
    ├── resume.pdf              # linked from the nav, hero and contact sections
    ├── fonts/                  # self-hosted Inter + JetBrains Mono (latin subset)
    ├── images/                 # project covers, OG image, favicons
    └── archive/                # previous CV + profile photo, kept for reference
```

## Preview locally

Any static server works — the site is just files:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Merge this work into `main`.
2. Repository **Settings → Pages**.
3. Source: *Deploy from a branch* → Branch: `main`, folder: `/ (root)` → Save.
4. The site goes live at `https://kunigirikavya-kk.github.io/Portfolio-Career/` within a minute or two.

`.nojekyll` is present, so the `css/`, `js/` and `assets/` folders are served as-is.

Because the site may live in a subfolder (`/Portfolio-Career/`), all internal links are **relative**
(no leading `/`), which works from the project URL and from a custom domain alike.

## Before you share the link

A few things only you can confirm or finish:

- [ ] **Email address** — the CV text says `kunigirikavya@gmail.com`, but the link inside both PDFs
      points to `kunigirikavya16283@gmail.com`. The site currently uses
      `kunigirikavya16283@gmail.com` (the one the PDF *links* to). If that is wrong, search and
      replace it in `index.html` (three places).
- [ ] **CGPA** — the older CV says `9.16`, the updated one says `9.27`. The site uses **9.27**. Fix
      in the Education block if needed.
- [ ] **Project links** — every *GitHub* button points at the profile
      (`github.com/kunigirikavya-kk`). Once each repo is public, point the buttons at the exact repo
      (there is a `TODO` comment above each one in `index.html`).
- [ ] **Live demo** — each card currently shows a muted *“Live demo — not public yet”* label. When a
      project is deployed (Vercel/Netlify/Render free tiers all work), swap that `<span>` for:
      `<a class="link-arrow" href="YOUR_URL" target="_blank" rel="noopener">Live Demo</a>`.
      The **Field Service Management Platform** is the one worth deploying first.
- [ ] **Project screenshots** — the four cover images are typographic previews generated for this
      build, not real screenshots. Replace `assets/images/cover-*.webp` with real captures
      (1200×750, WebP, under 150 KB) and update the `alt` text in `index.html`.
- [ ] **Leadership entry** — kept in the Education block (Core Member, SODS). Delete it if you would
      rather not show it.

## Design notes

- **Palette:** background `#FAFAF9`, surfaces `#FFFFFF` with a `#E5E7EB` border, text `#111827` /
  `#6B7280`, single accent `#2563EB` used only for links, buttons, active nav and tags.
- **Type:** Inter (400/500/600/700) for everything, JetBrains Mono for tech tags and dates.
- **Spacing:** 8px scale, one centred 960px column, 80px section padding (56px on mobile).
- **Fonts are self-hosted** (latin subset, ~140 KB total) so the page has no third-party requests at
  all — better privacy and no render-blocking CDN call.
- **Icons are inline SVG** — no Font Awesome, no Devicon.
- **Accessibility:** visible keyboard focus, skip link, `aria-expanded` / `aria-controls` on the menu
  and case-study toggles, alt text on every image, and text contrast of 4.5:1 or better throughout.
- **Motion:** one 260ms fade-in per section and a 2px card lift on hover. Everything is disabled
  under `prefers-reduced-motion`.

## Editing guide

| To change… | Edit… |
| --- | --- |
| Colours, spacing, type scale | `:root` tokens at the top of `css/style.css` |
| Copy, projects, dates, links | `index.html` |
| Animation timings, reveal behaviour | `js/main.js` (section 3) and the `reveal` rules in `css/style.css` |
| CV file | Replace `assets/resume.pdf` (keep the same filename and the links keep working) |
