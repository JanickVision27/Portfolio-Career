# Venkata Vikranth Jannatha — Portfolio

A single-page static portfolio for **Venkata Vikranth Jannatha**, full-stack developer
(Java, Spring Boot, React.js) with a data analytics background.
Plain HTML, CSS and JavaScript — no frameworks, no build step, no npm.

```
portfolio/
├── index.html          # the whole site
├── 404.html            # GitHub Pages fallback
├── css/style.css       # design tokens + layout, organised by section
├── js/main.js          # icons, nav, filters, disclosure, reveal
└── assets/
    ├── resume.pdf      # linked from the nav, hero and contact
    └── images/         # profile photo, project covers, OG image, favicon
```

## Run it locally

**Option A — VS Code + Live Server (recommended)**

1. `File → Open Folder…` and pick this folder.
2. Extensions (`Ctrl+Shift+X`) → install **Live Server** by Ritwick Dey.
3. Right-click `index.html` → **Open with Live Server**. Opens at `http://127.0.0.1:5500` and
   reloads on save.

**Option B — Python**

```bash
python -m http.server 8000      # python3 on macOS/Linux
```

Then open <http://localhost:8000>.

**Option C — double-click `index.html`**

Works: there are no JS modules and no `fetch()` calls, so nothing needs a real origin.
The one caveat is that Google Fonts may be slower to load when opened straight from disk.

## Deploy to GitHub Pages

1. Merge this branch into `main`.
2. Repo **Settings → Pages** → Source: *Deploy from a branch* → `main` + `/ (root)` → Save.
3. Live at `https://janickvision27.github.io/Portfolio-Career/` in a minute or two.

All internal links are relative (no leading `/`), so the site works from that subpath.

## What still needs your input

### Placeholders (marked with `TODO_` comments in `index.html`)

| Placeholder | Where | What to do |
| --- | --- | --- |
| `TODO_GITHUB_URL` | Customer Churn, MRI, Resume Assistant cards | Paste each repo URL, or leave the button hidden |
| `TODO_LIVE_DEMO_URL` | Team Task & Sprint Tracker, MRI cards | Paste the deployed URL, or leave it hidden |

The **GitHub** and **Live Demo** buttons for those cards are deliberately **not rendered** —
there is no broken link anywhere on the page. To switch one on, uncomment the matching `<a>`
tag styles next to the `TODO_` comment.

> Note: a live demo for the Sprint Tracker does exist at `task-sprint-tracker.vercel.app`
> (it is set as the repo homepage) and the MRI project has a Streamlit app. Both were
> unreachable from the build sandbox, so they are not linked. Confirm they load, then add them.

### Your photo

`assets/images/profile.webp` is **not a real photo** — it is a neutral placeholder. To use your own:

1. Crop a square image (400×400 or larger, head-and-shoulders works best).
2. Save it over `assets/images/profile.webp` — or save as `.jpg`/`.png` and update the `src`
   in the hero section of `index.html`.
3. Update the `alt` text on that line to describe the photo.

Keep it under ~150 KB. The CSS crops it to a circle, so a square original is ideal.

### Other things worth checking

- **LinkedIn URL** — the site uses
  `linkedin.com/in/venkata-vikranth-jannatha-642323244` (read from your CV's embedded link).
  Your brief listed a slightly shorter form as `TODO_CONFIRM_LINKEDIN_URL`. If the shorter one
  is current, update it in `index.html` (three places).
- **Project screenshots** — the six covers in `assets/images/cover-*.webp` are typographic
  previews designed for this build, not real captures. Swap them for real screenshots
  (1200×750, WebP, under 150 KB) and update the `alt` text as you go.
- **Resume** — `assets/resume.pdf` was generated from the brief's source-of-truth section so
  the site and CV tell the same story. Replace it with your own LaTeX build whenever you like;
  keep the filename and every link keeps working.

## Design notes

- **Palette:** `#FAFAF9` background · `#FFFFFF` surfaces · `#E5E7EB` borders · `#111827` /
  `#6B7280` text · single accent `#2563EB` · tags use the accent at 8% opacity with `#1D4ED8`
  text so they pass contrast checks on any surface.
- **Type:** Inter (400–700) for everything, JetBrains Mono (400–500) for tech tags and dates.
- **Spacing:** 8px scale, one centred 960px column, 80px section padding (56px on mobile).
- **Icons:** 36 hand-drawn inline SVGs in `js/main.js`, injected into `[data-icon]` slots.
  No Font Awesome, no Devicon, no icon font. They are original geometric marks rather than
  brand logos — to use official logos instead, drop files into `assets/images/` and swap the
  matching entry in the `ICONS` object for an `<img>`.
- **Accessibility:** skip link, visible focus rings, `aria-expanded` on the menu and every
  disclosure, `aria-pressed` on the filters, a polite live region announcing filter results,
  alt text on all images, and contrast ≥ 4.5:1 across 15 measured combinations.
- **Motion:** one 260ms fade-in and a 2px card lift, both disabled under `prefers-reduced-motion`.

## Editing guide

| To change… | Edit… |
| --- | --- |
| Colours, spacing, type scale | the `:root` token block at the top of `css/style.css` |
| Copy, projects, dates, links | `index.html` |
| Add or change a skill icon | the `ICONS` object at the top of `js/main.js` |
| Reveal timing or filter behaviour | `js/main.js` |
