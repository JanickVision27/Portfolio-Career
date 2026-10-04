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
| `index.html` | `47662ca0c09e3a26` |
| `css/style.css` | `fe48bc8494a57c8b` |
| `js/main.js` | `3a1a9611daeea242` |

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

- Icons defined in `js/main.js`: **29**
- Icon slots used in `index.html`: **29**
- Used but not defined (would render blank): **none**
- Defined but unused: none
- Icons that are invalid SVG: **none**
- Solid (`is-filled`) icons get a fill override in CSS: **yes**

## 4. Requests and weight

- Third-party hosts referenced: ['fonts.googleapis.com', 'fonts.gstatic.com', 'github.com', 'janickvision27.github.io', 'schema.org', 'www.linkedin.com']
- Fonts: Google Fonts (Inter 400-700, JetBrains Mono 400-500) — 2 hosts, preconnected
- Icons: inline SVG only, no icon font
- Files in the project: **19**, total **249 KB**

| Largest assets | Size |
| --- | --- |
| `assets/resume.pdf` | 42.4 KB |
| `assets/images/og-image.png` | 36.0 KB |
| `index.html` | 34.4 KB |
| `css/style.css` | 22.8 KB |
| `assets/images/cover-banking.webp` | 15.4 KB |
| `assets/images/cover-mri.webp` | 14.0 KB |

## 5. SEO and sharing

- Title (48 chars, aim <=60): Venkata Vikranth Jannatha — Full-Stack Developer
- Meta description (151 chars, aim <=160): Full-stack developer with a year of production experience as a Junior Developer. Secure REST APIs and real-time apps in Java, Spring Boot and React.js.
- `og:title`: present
- `og:description`: present
- `og:image`: present
- `twitter:card`: present
- `favicon-32`: present
- `apple-touch-icon`: present
- `theme-color`: present
- `viewport`: present

## 6. Placeholders in the source

- `TODO_CHURN_PRECISION_RECALL` — 1 occurrence (inside an HTML comment, hidden from visitors)
- `TODO_CONFIRM_LINKEDIN_URL` — 1 occurrence (inside an HTML comment, hidden from visitors)
- `TODO_GITHUB_URL` — 3 occurrences (inside an HTML comment, hidden from visitors)
- `TODO_LIVE_DEMO_URL` — 2 occurrences (inside an HTML comment, hidden from visitors)
- `TODO_SITE_URL` — 1 occurrence (inside an HTML comment, hidden from visitors)

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

## 8. Final polish pass — assertions

| PASS | No "58.5" anywhere in the page |
| PASS | No "Xception at" phrasing |
| PASS | MRI 77.3% is the only MRI accuracy figure |
| PASS | "Illustrative preview" badge markup present |
| PASS | Badge is driven by project-media--illustrative |
| PASS | No visible "CV" label (uses "Resume") |
| PASS | CrewAI chip removed from the page |
| PASS | Conceptual skills carry no icon |
| PASS | Seven unused icon definitions deleted |
| PASS | No icon referenced but undefined |
| PASS | No icon defined but unused |
| PASS | noscript fallback shows hidden content |
| PASS | canonical link with TODO_SITE_URL |
| PASS | JSON-LD Person block present |
| PASS | TODO_CONFIRM_LINKEDIN_URL comment present |
| PASS | TODO_CHURN_PRECISION_RECALL comment present |
| PASS | Every resume.pdf link has an aria-label |
| PASS | All target=_blank links carry rel=noopener |
| PASS | Meta description under 160 characters |
| PASS | Hero pitch matches the approved text |

| Check | Result |
| --- | --- |
| Filter buttons carrying `aria-pressed` | 3 of 3 |
| Icons defined in `js/main.js` | 29 |
| Icons used in `index.html` | 29 |
| Placeholders rendered as visible text | 0 |
| TODO comments present in source | 8 |

## 9. TODO placeholders you must fill in

| Placeholder | Count | What to supply |
| --- | --- | --- |
| `TODO_GITHUB_URL` | 3 | Repository URLs for Customer Churn, MRI and Resume Assistant |
| `TODO_LIVE_DEMO_URL` | 2 | Deployed URLs for the Sprint Tracker and the MRI Streamlit app |
| `TODO_SITE_URL` | 1 | Confirm the canonical URL once Pages is on |
| `TODO_CONFIRM_LINKEDIN_URL` | 1 | Confirm which LinkedIn vanity URL is current |
| `TODO_CHURN_PRECISION_RECALL` | 1 | Add precision/recall if you have them |
| Real screenshots | 6 | Replace every `cover-*.webp`, then delete its `project-media--illustrative` class |

