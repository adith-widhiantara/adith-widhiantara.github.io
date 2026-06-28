# CLAUDE.md — Portfolio: adith-widhiantara.github.io

> This file is the single source of truth for Claude Code when working on this project.
> Read it fully before touching any file.

---

## Project Overview

A personal portfolio website for **Aditya Saktyawan Widhiantara** — a Software Engineer and Open-Source creator with 5+ years of backend-heavy experience. The site must communicate technical depth and engineering precision without feeling corporate or over-designed.

**Live target:** `https://adith-widhiantara.github.io`
**Data source:** `src/data/cv-data.json` (single source of truth — never hardcode content)

---

## Tech Stack (non-negotiable)

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Latest stable, RSC support, best static export DX |
| Language | TypeScript (strict mode) | Type safety on cv-data.json shapes |
| Styling | Tailwind CSS v3 + CSS Variables | Utility-first + theming without JS |
| Package manager | pnpm | Fastest, disk-efficient |
| Icons | `lucide-react` | Lightweight, consistent |
| Animation | `framer-motion` | Subtle scroll reveals only |
| Deploy | GitHub Pages via GitHub Actions | Static export to `/out` |

**next.config.ts:**
```ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  trailingSlash: true,
}
```

---

## Data Architecture

All content is driven by `src/data/cv-data.json`. Never hardcode strings that exist in this file.

Define TypeScript interfaces in `src/types/cv.ts` mirroring the JSON structure. Example:

```ts
export interface Experience {
  id: string
  title: string
  company: string
  period: { start: string; end: string | null; current: boolean }
  highlights: string[]
  techStack: string[]
  practices: string[]
}
```

Import data statically:
```ts
import cvData from '@/data/cv-data.json'
```

---

## Design System

### Philosophy
The design should feel like the work of an engineer who has taste — precise, purposeful, never decorative for its own sake. Think: monospaced details in the right places, generous whitespace, and one signature element that makes it memorable.

### Color Palette

Use CSS variables on `:root` and `[data-theme="dark"]`. Default: **light mode**.

```css
:root {
  --bg:           #F7F7F5;   /* warm off-white, not pure white */
  --bg-subtle:    #EFEFEC;   /* card/section backgrounds */
  --border:       #E0DED8;
  --text-primary: #1A1A1A;
  --text-muted:   #6B6B6B;
  --accent:       #2563EB;   /* blue — engineering, trust */
  --accent-dim:   #DBEAFE;   /* accent tints for tags/badges */
  --mono:         #3D3D3D;   /* for code-like UI elements */
}

[data-theme="dark"] {
  --bg:           #0F0F0E;
  --bg-subtle:    #1A1A18;
  --border:       #2A2A28;
  --text-primary: #F0EFE9;
  --text-muted:   #888884;
  --accent:       #60A5FA;
  --accent-dim:   #1E3A5F;
  --mono:         #C0BEB8;
}
```

### Typography

- **Display/Heading:** `Inter` (variable font) — precise, technical, widely legible
- **Body:** `Inter` — consistent stack
- **Monospace:** `JetBrains Mono` — used for tech stack tags, terminal-style labels, dates

Load via `next/font/google`. Example:
```ts
import { Inter, JetBrains_Mono } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
```

### Signature Element (the one thing to remember)
A **terminal-style typewriter** in the hero section that cycles through role titles from `cv-data.json` experience entries, rendered in `JetBrains Mono` with a blinking cursor. This is the only "expressive" UI moment — everything else is calm.

### Spacing & Layout
- Max content width: `768px` centered (readable, editorial)
- Section padding: `py-20` top/bottom
- Use a single-column layout — no grids except for Skills and Certifications
- Generous line-height: `1.7` for body text

### Animation Rules (minimal)
- Scroll-triggered fade-up on section entry only (`framer-motion`, `initial: { opacity: 0, y: 16 }`, `animate: { opacity: 1, y: 0 }`, `duration: 0.4`)
- Respect `prefers-reduced-motion` — wrap all animations in a check
- No parallax, no heavy transitions
- Hover states: simple `opacity` or `color` transition, `150ms ease`

---

## Site Structure

### Pages (App Router)

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, theme provider, metadata
│   ├── page.tsx            # Single page — all sections rendered here
│   └── globals.css         # CSS variables, base styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Nav + theme toggle
│   │   └── Footer.tsx      # Minimal: copyright + links
│   └── sections/
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── OpenSource.tsx
│       ├── Skills.tsx
│       ├── Certifications.tsx
│       └── Contact.tsx
├── data/
│   └── cv-data.json
├── types/
│   └── cv.ts
├── hooks/
│   └── useTheme.ts         # Dark/light toggle logic
└── lib/
    └── utils.ts            # formatPeriod(), getDuration(), cn() helper
```

### Section Order (top to bottom)
1. **Hero** — name, typewriter role, short bio from `objective`, CTA buttons (GitHub, LinkedIn, Email)
2. **Experience** — timeline, most recent first
3. **Open Source** — highlight cards (2 packages)
4. **Projects** — grid of cards, filterable by company (optional enhancement)
5. **Skills** — grouped: Backend / Frontend / Databases / Tools
6. **Certifications** — grouped by category
7. **Contact** — email + LinkedIn + GitHub links, no form needed beyond that

---

## Section-by-Section Implementation Notes

### Hero
- Name: large, weight 700, `--font-inter`
- Typewriter: cycles through unique job titles from `experiences[].title` — implemented with `useEffect` + `useState`, no library needed
- Objective text: truncate to 2 sentences max in the hero, not the full paragraph
- CTA: 3 icon+text buttons — GitHub, LinkedIn, Email

### Experience
- Render as a **vertical timeline** with a left-side line
- Each entry: `title` + `company` (linked if possible) + `period` formatted as `"Dec 2025 – Present"` using `lib/utils.ts formatPeriod()`
- Tech stack: rendered as monospace badges (`bg-[--accent-dim] font-mono text-xs`)
- `current: true` entries get an accent-colored dot indicator

### Open Source
- Two prominent cards — these deserve more visual weight than project cards
- Show `name`, `role`, `description` (full)
- Link to GitHub

### Projects
- Card layout: `name`, `company`, `description` (truncated to 3 lines, expandable on click), `techStack` badges
- Don't show all 12 at once — show 6 by default with a "Show more" toggle

### Skills
- Backend and Frontend: show name + bullet highlights
- Databases / Tools: simple tag cloud in mono font

### Certifications
- Group by `category`
- Simple list, no overkill

### Contact
- Pull from `personal` object in JSON: `email`, `linkedin`, `github`
- A short, human sentence intro ("Here's where to find me")
- 3 large icon links — nothing else

---

## Theme Toggle

Implement in `useTheme.ts`:
- Read/write `localStorage` key `"theme"`
- Apply `data-theme="dark"` to `<html>`
- Default: `"light"`
- SSR-safe: use `useEffect` to avoid hydration mismatch

Header component: a single icon button (sun/moon from lucide-react), no label.

---

## GitHub Actions (CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## Code Quality Rules

- **TypeScript strict mode** — no `any`, no type assertions without comment
- All components are **Server Components by default** — add `'use client'` only when needed (hooks, event handlers)
- Use `cn()` utility (from `clsx` + `tailwind-merge`) for conditional classnames
- No inline styles — use Tailwind classes or CSS variables
- Data is **never mutated** — treat `cv-data.json` as read-only

---

## Utility Functions (`src/lib/utils.ts`)

```ts
// Format "2025-12" + null → "Dec 2025 – Present"
export function formatPeriod(start: string, end: string | null, current: boolean): string

// Calculate duration: "2 yrs 3 mos"
export function getDuration(start: string, end: string | null): string

// Tailwind class merger
export function cn(...inputs: ClassValue[]): string
```

---

## What NOT to do

- Do not add a blog section (deferred)
- Do not use `getServerSideProps` or API routes (static export incompatible)
- Do not use Next.js `<Image>` with a remote loader (unoptimized mode only)
- Do not install `axios` — use native `fetch` or just static imports
- Do not add a contact form with a backend — contact section is links only
- Do not over-animate — if you're adding more than 3 animated elements per section, stop
- Do not hardcode any text that exists in `cv-data.json`
- Do not use `default export` for types — named exports only

---

## First Run Checklist

When starting fresh on this project, do this in order:

1. `pnpm create next-app@latest . --typescript --tailwind --app --no-src-dir` (then move to `src/`)
2. Add `cv-data.json` to `src/data/`
3. Create `src/types/cv.ts` with all interfaces
4. Set up CSS variables in `globals.css`
5. Configure `next.config.ts` with static export
6. Build `Header` with theme toggle first — test dark/light before building sections
7. Build sections top-to-bottom: Hero → Experience → OpenSource → Projects → Skills → Certifications → Contact
8. Add `framer-motion` last — after all content is correct
9. Test `pnpm build` locally before pushing
10. Push → confirm GitHub Actions deploys successfully

---

*Last updated: June 2026*
*Maintained by: Aditya Saktyawan Widhiantara*