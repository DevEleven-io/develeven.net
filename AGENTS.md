# DevEleven Agent Guidelines & Design System

This file serves as the persistent source of truth for all AI agents working on **DevEleven** (`develeven.net`). Any new page, component, or refactoring in this project must adhere strictly to the typography system, layout standards, iconography, and design preferences outlined below.

---

## 1. Skills & Methodologies Used

- **Skill**: `modern-web-guidance` (Modern Web Development Best Practices).
- **Core Principles**:
  - Prefer relative units (`rem`) over arbitrary `px` for font sizing.
  - Use unitless, proportional line-heights (`leading-[0.98]`, `leading-[1.08]`, `leading-tight`, `leading-relaxed`).
  - Standard Tailwind modular type scale (`text-xs` up to `text-8xl`), strictly eliminating arbitrary pixel font classes (`text-[...px]`).
  - Strong visual hierarchy through deliberate weight separation (Headings in `font-bold`, interactive in `font-semibold`, metadata in `font-medium`, reading copy in `font-normal`).
  - High accessible contrast across both dark (`#101211`) and light (`#E8EDE1`) background sections.

---

## 2. Typography Standard

### Font Configuration
- **Universal Typeface**: **Manrope** (`next/font/google`).
- **No Monospace**: Avoid monospace fonts (`IBM_Plex_Mono`, `font-mono`) across the entire website. All labels, tags, code snippets, numbers, and badges must use `font-sans` (Manrope).
- **No Arbitrary Sizes**: Never use arbitrary pixel classes (e.g., `text-[26px]`, `text-[11px]`). Use only standard Tailwind sizing classes.
- **Minimum Font Size Limit**: No text may ever be smaller than `text-xs` (12px / 0.75rem).
- **No All-Caps (Avoid Whole Uppercase)**: Never style whole phrases, section labels, deliverables, or badges in shouting all-caps (e.g., do NOT use `01 / WHAT WE BUILD` or `PROJECT BRIEF + ROADMAP`). Use clean sentence or title case (e.g., `01 / What we build`, `Marketing sites / E-commerce`, `Built with intent`). Standard industry acronyms are permitted (`SaaS`, `API`, `CMS`, `SEO`, `USD`, `MVP`, `FAQ`, `DevOps`).

### Typographic Scale & Hierarchy Table

| Tier | UI Role | Tailwind Size | Tailwind Weight | Tracking & Leading | Color Tokens |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L1: Display / H1** | Page & Hero main titles | `text-5xl sm:text-7xl lg:text-8xl` | `font-bold` (700) | `tracking-tight leading-[0.98]` | `#F2F4EC` |
| **L2: Section Headings / H2** | Major section headers (`h2`) | `text-4xl sm:text-5xl lg:text-6xl` | `font-bold` (700) | `tracking-tight leading-[1.08]` | `#F2F4EC` (dark) / `#11150E` (light) |
| **L3: Card Titles / H3** | Services, pricing tiers, showcase cases | `text-2xl font-bold` or `text-2xl sm:text-3xl` | `font-bold` (700) | `tracking-tight` | `#F2F4EC` (dark) / `#11150E` (light) |
| **L4: Prices & Large Stats** | Pricing tiers (`$4,500–7,500`), stat metrics | `text-3xl sm:text-4xl lg:text-5xl` | `font-bold` (700) | `tracking-tight` | `#F2F4EC` |
| **L5: Section Kickers / Labels** | Section overlines (`01 / What we build`) | `text-xs sm:text-sm` | `font-bold` (700) | `tracking-wider` | `#CEFF69` (dark) / `#2D3427` (light) |
| **L6: Lead Paragraphs** | Hero narrative & section intro leads | `text-base sm:text-lg lg:text-xl` | `font-normal` (400) | `leading-relaxed` | `#C5CDC1` (dark) / `#384031` (light) |
| **L7: Interactive & Navigation** | Nav links, buttons, CTA text, accordion triggers | `text-sm sm:text-base` / `text-lg sm:text-xl` | `font-semibold` (600) | `tracking-normal` / `hover:text-[#CEFF69]` | High-contrast interactive states |
| **L8: Badges, Pills & Numbers** | Tech pills, step numbers (`01`), service codes | `text-xs sm:text-sm` or `text-base sm:text-lg` | `font-bold` (700) or `font-semibold` (600) | `tracking-wide` | `#CEFF69`, `#F2F4EC`, `#A4ADA0` |
| **L9: Checklist Items** | Features list in pricing & service cards | `text-sm sm:text-base` | `font-medium` (500) | `leading-relaxed` | `#F2F4EC` |
| **L10: Body & Card Descriptions** | Standard explanatory paragraphs | `text-sm sm:text-base` | `font-normal` (400) | `leading-relaxed` | `#A4ADA0` |
| **L11: Micro-copy & Notes** | Subtitles, footnotes, legal disclaimer | `text-xs sm:text-sm` | `font-medium` (500) | `tracking-wide` | `#A4ADA0`, `#F2F4EC` |

> **Crucial Rule**: Never use `font-normal` on display titles, H2 headings, pricing numbers, or section overlines. Manrope requires `font-bold` at display scales to maintain architectural presence and avoid looking thin or washed-out.

---

## 3. Layout & Viewport Width Standards

### Full-Bleed Two-Tier Layout Pattern
Every section must follow this two-tier container structure:
```tsx
{/* 1. Outer Viewport Container: stretches 100vw, full-bleed background & border */}
<section className="w-full bg-[#101211] border-b border-[#343A33]">
  {/* 2. Inner Content Wrapper: standard Tailwind max-width with generous padding */}
  <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24">
    {/* Page content */}
  </div>
</section>
```

- **No Hard Caps on Outer Containers**: Never apply `max-w-[...]` to the outer `<section>` or background wrapper. Background colors (`#101211`, `#191C19`, `#E8EDE1`, `#CEFF69`) and section borders must extend full-width without cutoff on ultrawide monitors.
- **Inner Content Container**: Use standard Tailwind `max-w-screen-2xl` (1536px) centered with `mx-auto` and `px-6 sm:px-8 lg:px-16`.
- **Fluid & Responsive Layouts**: Use fluid grids (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4`) and flex layouts. Never use hardcoded pixel widths (`w-[760px]`, `w-[380px]`) that break mobile viewports or create horizontal scrollbars.

---

## 4. Iconography Standards

- **Centralized Wrapper**: All icons are imported from and encapsulated in `src/components/ui/Icons.tsx` using `lucide-react`.
- **Aesthetic Parameters**:
  - `strokeWidth={1.5}` as default for all feature and section icons.
  - Accent color: Lime `#CEFF69` on dark cards.
- **Every Clickable / Button Gets An Appropriate Icon**:
  - Interactive arrows (`ArrowIcon.tsx` / `ArrowUpRight`) for buttons, links, and cards.
  - Interactive hover translations: `transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`.
  - Icon mapping match:
    - Web Dev: `Layout`
    - Maintenance: `Wrench`
    - Custom Software: `CodeXml` / `Braces`
    - Game Dev: `Gamepad2`
    - Infrastructure: `Network`
    - Quality Inspection: `ScanLine`
    - Resilience: `ShieldCheck`
    - Foundation: `GitBranch`
    - Checklists: `Check` with `strokeWidth={2.0}`

---

## 5. Color Palette & Design Tokens

Defined in `src/app/globals.css`:
- **Page Background**: `--color-dv-bg: #101211`
- **Card Background**: `--color-dv-card: #191C19`
- **Borders & Dividers**: `--color-dv-border: #343A33`
- **Primary Lime Accent**: `--color-dv-lime: #CEFF69`
- **Primary Text**: `--color-dv-text: #F2F4EC`
- **Secondary / Muted Text**: `--color-dv-muted: #A4ADA0` (and `#C5CDC1` for high-contrast leads)
- **Light Sections (`WorkShowcase`, `PricingProcess`)**:
  - Background: `#E8EDE1`
  - Dark Headings: `#11150E`
  - Dark Labels: `#2D3427`
  - Body Text: `#384031` / `#353D2F`
  - Light Border: `#BCC5B3`
- **Lime Banner (`CTABanner`)**:
  - Background: `#CEFF69`
  - Dark Text: `#11150E`

---

## 6. Navbar & Navigation UX

- **Fluid Header Height**: `h-[72px] sm:h-[84px] lg:h-[100px]`, sticky at top (`z-50`).
- **Mobile Menu Drawer**:
  - Full-featured mobile drawer on `<lg` screens (`fixed inset-x-0 top-[72px] sm:top-[84px] bottom-0`).
  - Backdrop blur: `bg-[#101211]/98 backdrop-blur-md`.
  - Automatic body scroll lock (`overflow: hidden`) when open.
  - Automatic close on route navigation (`usePathname`), Escape key, or link click.
  - Touch targets minimum 44px with accessible padding.

---

## 7. Code Quality & Build Checks

Always verify these commands before concluding any task:
1. `npx tsc --noEmit` — must pass with 0 errors.
2. `grep -rn "font-mono" src/components/` — must return 0 results.
3. `grep -rn "text-\[[0-9]*px\]" src/` — must return 0 results.
4. Test HTTP 200 on all routes: `curl -I http://localhost:3000/` and `curl -I http://localhost:3000/pricing`.
