# Portfolio review — Venkata Vikranth Jannatha

Generated 04 October 2026 · everything below is measured from the files, not asserted.

## Verified against

| | |
| --- | --- |
| Branch | `arena/01a10631-portfolio-career` |
| Site files last changed in | `0301316` — Rebuild portfolio to spec: content-first, icon set, profile photo, filters |
| Report file | `review.md`, committed alongside the site it describes |
| Remote | matches HEAD |

| File | SHA-256 (first 16) |
| --- | --- |
| `index.html` | `f284f2680a0e02af` |
| `css/style.css` | `c5f6e3468712d0d5` |
| `js/main.js` | `bf66ef45fe0ba0d3` |

If the three hashes above still match your working copy, every number in this report is current. Change any of those files and the report becomes stale — ask for it to be regenerated.

## 1. Structure

| Check | Result |
| --- | --- |
| Unbalanced / mismatched tags | none |
| Duplicate ids | none |
| Local files referenced but missing | none |
| `aria-controls` targets that exist | 7/7 |
| In-page anchors with no target | none |
| `<img>` count / missing alt / missing width+height | 7 / 0 / 0 |
| Lazy-loaded images | 5/7 |
| Buttons with no accessible name | 0 (filters and toggles are named by their visible text) |
| Exactly one `<h1>` | yes |
| Heading levels skipped | none |
| Semantic landmarks | header, nav, main, section, footer |

## 2. Colour contrast (WCAG 2.1 AA = 4.5:1)

| Text | Ratio | Verdict |
| --- | --- | --- |
| Body text on page background | **16.99:1** | pass |
| Body text on card | **17.74:1** | pass |
| Secondary text on page background | **4.63:1** | pass |
| Secondary text on card | **4.83:1** | pass |
| Detail / bullet text on card | **10.31:1** | pass |
| Accent links on page background | **4.95:1** | pass |
| Accent links on card | **5.17:1** | pass |
| White label on accent button | **5.17:1** | pass |
| Tag text on tag fill (card) | **6.02:1** | pass |
| Tag text on tag fill (page) | **5.76:1** | pass |
| Status chip text on chip fill | **6.16:1** | pass |
| 'In progress' pill | **6.88:1** | pass |
| Active filter label on accent | **5.17:1** | pass |
| Inactive filter label on card | **4.83:1** | pass |
| Footer / muted on page background | **4.63:1** | pass |

**All 15 combinations pass AA.**

## 3. Skill and UI icons

- Icons defined in `js/main.js`: **36**
- Icon slots used in `index.html`: **36**
- Used but not defined (would render blank): **none**
- Defined but unused: none
- Icons that are invalid SVG: **none**
- Solid (`is-filled`) icons get a fill override in CSS: **yes**

## 4. Requests and weight

- Third-party hosts referenced: ['fonts.googleapis.com', 'fonts.gstatic.com', 'github.com', 'www.linkedin.com']
- Fonts: Google Fonts (Inter 400-700, JetBrains Mono 400-500) — 2 hosts, preconnected
- Icons: inline SVG only, no icon font
- Files in the project: **18**, total **243 KB**

| Largest assets | Size |
| --- | --- |
| `assets/resume.pdf` | 42.4 KB |
| `assets/images/og-image.png` | 36.0 KB |
| `index.html` | 32.8 KB |
| `css/style.css` | 22.0 KB |
| `assets/images/cover-banking.webp` | 14.5 KB |
| `js/main.js` | 13.9 KB |

## 5. SEO and sharing

- Title (48 chars, aim <=60): Venkata Vikranth Jannatha — Full-Stack Developer
- Meta description (142 chars, aim <=160): Full-stack developer with hands-on experience in Java, Spring Boot, React.js and SQL, plus a year as a Junior Developer on production systems.
- `og:title`: present
- `og:description`: present
- `og:image`: present
- `twitter:card`: present
- `favicon-32`: present
- `apple-touch-icon`: present
- `theme-color`: present
- `viewport`: present

## 6. Placeholders in the source

- `TODO_GITHUB_URL` — 3 occurrences (inside an HTML comment, hidden from visitors)
- `TODO_LIVE_DEMO_URL` — 2 occurrences (inside an HTML comment, hidden from visitors)

- Placeholders rendering as visible text on the page: **0** (correct — none should be visible)

## 7. Responsive and accessibility

- Breakpoints: 1023px, 900px, 720px, 639px
- Project grid at desktop: 2 columns
- `overflow-x: hidden` guard on body: present
- Skip link: present
- `:focus-visible` styles: present
- `prefers-reduced-motion` block: present
- `aria-pressed` on filters: 3 of 5 filters
- Live region for filter results: present
- CSS variables defined: 35

