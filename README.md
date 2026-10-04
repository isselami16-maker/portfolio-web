# ISHAK — Cybersecurity Student & Developer Landing Page

A professional, modern, responsive personal developer landing page built with **only HTML5, CSS3, and minimal vanilla JavaScript**. No frameworks, no libraries — just the fundamentals.

## How to Run

Open `index.html` in any modern web browser. That's it.

No build system, no dependencies, no installation required.

## File Structure

```
ishak-portfolio/
├── index.html          # Main HTML page — all sections
├── css/
│   └── style.css       # All styles — design system, layout, responsive
├── js/
│   └── script.js       # Minimal JS — mobile nav toggle + form demo
├── images/
│   ├── eagle.svg       # Large eagle motif for hero section
│   └── logo.svg        # Compact eagle mark for navigation + footer
└── README.md           # This file
```

## Sections Overview

| Section | Purpose |
|---|---|
| **Navigation** | Sticky bar with eagle logo and 6 nav links. Mobile hamburger menu. |
| **Hero** | Name, professional identity, two-CTA buttons, and eagle visual with decorative ring. |
| **About** | Short biography + three fact cards (Focus, Direction, Approach). |
| **Skills** | Five category cards (Programming, Web, Cybersecurity, Systems, Tools) with tech tags. |
| **Projects** | Five project cards with category, description, tech tags, and GitHub buttons. |
| **Roadmap** | Six-stage vertical timeline from fundamentals to security engineering. |
| **Target Roles** | Pill-shaped cards showing long-term career directions. |
| **Philosophy** | Full-width statement: "Build. Break. Understand. Secure." |
| **Contact** | Social links + a demo contact form (name, email, message). |
| **Footer** | Brand, links, and copyright. |

## HTML/CSS Concepts Demonstrated

This project is built for learning. Each section demonstrates specific web fundamentals:

### HTML
- **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`
- **Heading hierarchy**: Single `<h1>`, then `<h2>` per section, `<h3>` for cards
- **Accessible forms**: `<label>` paired with `<input>` via `for`/`id`, `aria-label`, `aria-expanded`, `aria-live`
- **Alt text**: All images have descriptive `alt` attributes
- **Keyboard-friendly**: Navigation and form are fully usable via keyboard

### CSS
- **Custom Properties (Variables)**: Colors, spacing, radii, and transitions defined in `:root`
- **Box Model**: `box-sizing: border-box`, padding/margin throughout
- **Flexbox**: Navigation, button groups, tag lists, footer layout
- **CSS Grid**: Hero (2-column), About, Skills, Projects, Contact sections
- **Media Queries**: Responsive breakpoints at 768px, 480px, and 1440px
- **Positioning**: `position: fixed` for sticky header, `position: absolute` for decorative elements
- **Typography**: Two font families (Inter + JetBrains Mono), responsive font sizes with `clamp()`
- **Transitions**: Hover states on buttons, cards, links, and tags
- **Pseudo-elements**: `::before`, `::after` for nav underlines, roadmap lines, decorative rings
- **Animations**: Subtle keyframe animations (pulse dot, rotating ring) — all disabled via `prefers-reduced-motion`
- **CSS Functions**: `clamp()`, `linear-gradient()`, `radial-gradient()`, `rgba()`, `calc()`
- **Responsive Units**: `rem`, `vw`, `ch`, `%`

### JavaScript
- DOM selection with `getElementById` and `querySelector`
- Event listeners (`click`, `submit`)
- Class toggling for mobile menu state
- ARIA attribute updates for accessibility
- Basic form validation (required fields + email format check)
- IIFE pattern to avoid global scope pollution

## Design System

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0a0c0b` | Page background (near-black) |
| `--surface` | `#141816` | Card backgrounds |
| `--text` | `#f0f2f1` | Primary text |
| `--muted` | `#8b9590` | Secondary text |
| `--accent` | `#10b981` | Emerald green — buttons, highlights, borders |
| `--border` | `#1f2624` | Subtle borders |

Spacing follows an **8px grid**: `--space-1` through `--space-9`.
Border radii: `8px`, `12px`, `16px`.
Fonts: **Inter** (body/headings) + **JetBrains Mono** (code/labels).

## Responsive Breakpoints

| Width | Behavior |
|---|---|
| 320px | Single column, stacked buttons, compact roadmap |
| 375px | Single column, full-width project cards |
| 425px | Same as 375 — touch-friendly tap targets |
| 768px | Hamburger menu, hero collapses to one column |
| 1024px | Full two-column layouts, all grids active |
| 1440px+ | Expanded container width (1280px) |

## Notes

- The contact form is a **demo** — it validates inputs and shows a confirmation message but does not send data anywhere.
- The eagle visuals are hand-crafted SVG files (no external images required).
- GitHub/LinkedIn/email links are placeholders — replace with real URLs.
- All animations respect `prefers-reduced-motion` for accessibility.

---

© 2026 ISHAK. All rights reserved.
