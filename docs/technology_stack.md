# AIRIZZ Website Technology Stack Documentation

This document explains the technical architecture, framework configurations, and software libraries utilized to build and compile the **AIRIZZ** website (airizz.co).

---

## 1. Core Framework & Engine
*   **Next.js 16.2 (App Router)**:
    *   Used for page routing, SEO layouts, metadata configuration, and Static Site Generation (SSG).
    *   **React Server Components (RSC)** are used for the main listing pages, MDX detail pages, layouts, and sitemap builders to minimize client-side bundle size, maximize load speeds (Core Web Vitals), and optimize SEO crawlability.
    *   **React Client Components** are selectively applied using `"use client"` for dynamic animations, form validations, tab filters, and toggle states (e.g. `AnimatePresence` and scroll hooks).
*   **React 19**:
    *   Provides runtime compiler elements, dynamic context hooks, and native resource loading.
*   **Webpack Bundler Override**:
    *   Configured inside `package.json` as `next build --webpack` to resolve native Turbopack SWC compiler memory segments mismatch issues under Mac ARM64 (Apple Silicon) local developer machines.

---

## 2. Programming Languages & Structuring
*   **TypeScript 5.x**:
    *   Strict type safety configured across the repository.
    *   Declared strict data schemas (in `content/data/`) for services, industries, team, stats, and testimonials. Ensures compile-time errors flag any missing or mismatch attributes.

---

## 3. Styling & Branded Theming
*   **Tailwind CSS v4 (with PostCSS)**:
    *   Utilized Tailwind v4 theme mapping (`@theme` variables block) inside [globals.css](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/app/globals.css) to build a unified design system.
    *   Design variables mapped:
        *   `--color-background`: `#040d1a` (deep dark navy).
        *   `--color-dark-card`: `#071428` (slightly lighter card navy).
        *   `--color-brand-cyan`: `#00f3ff` (electric brand cyan).
        *   `--color-brand-purple`: `#bd00ff` (glow brand purple).
        *   `--color-muted-text`: `#94a3b8` (Slate 400 for high readability on dark backdrops).
*   **Custom CSS Modules & Rules**:
    *   *Glassmorphism*: Frosted overlay class `.glass` and transition effects `.glass-interactive` using HSL transparency and `-webkit-backdrop-filter`.
    *   *Grid backgrounds*: Clean tech grid class `.grid-background` and dot indicators `.dot-background` rendered using repeating radial gradients.

---

## 4. Typography & Font Integration
*   **Clash Display (ITF)**:
    *   Loaded programmatically from Fontshare CDN at the top of `globals.css` to render all corporate header typography (`h1` through `h6`) with custom letter-spacings.
*   **Bricolage Grotesque (Google Fonts)**:
    *   Loaded via `next/font/google` in `layout.tsx` and mapped to `--font-bricolage`. Serves as the primary body font (`font-sans`).
*   **JetBrains Mono (Google Fonts)**:
    *   Loaded in `layout.tsx` as `--font-jetbrains-mono` for monospaced metrics, pills, badges, and code snippets.

---

## 5. Animation & Scroll Performance
*   **Framer Motion 12.x**:
    *   Used for micro-interactions, layout morph transitions, routing page revelations (`FadeUp` scroll transitions), accordion drawers, modal popups, and the mobile hamburger overlay drawer.
*   **GSAP 3.x (GreenSock)**:
    *   Used inside count-up components to animate numerical values on scroll triggers using local state interpolation.
*   **Lenis Scroll (Inertia Smooth Scroll)**:
    *   Wrapped globally via a `ScrollProvider` using `@lenis/react` to enforce smooth, momentum-based scrolling transitions.

---

## 6. Local Database & Content Loading
*   **Gray-Matter Parser & Node FS**:
    *   Replaced heavy build dependencies like Contentlayer (which fails on React 19) with a lightweight, browser-safe, native Node.js filesystem loader utility ([lib/content.ts](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/lib/content.ts)).
    *   Reads and parses MDX metadata frontmatter (using `gray-matter`) and content fields, feeding the dynamic routes safely at compile time.

---

## 7. Forms, Scheduling & Integrations
*   **Formspree Endpoint Integrations**:
    *   Used to collect contacts and resumes from forms. Forms submit standard requests or multi-part form payloads to `FORMSPREE_ENDPOINT`.
*   **Calendly Widget Embeds**:
    *   Integrates Calendly schedules inline inside [CalendlyInline.tsx](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/components/shared/CalendlyInline.tsx) and dynamically overlays booking frames via [CalendlyFloat.tsx](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/components/layout/CalendlyFloat.tsx).
*   **Lucide React**:
    *   Standardized vector icons package used across the entire application interface.

---

## 8. SEO & Crawler Optimizations
*   **Dynamic Next.js Sitemap**:
    *   Configured inside [sitemap.ts](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/app/sitemap.ts) to compile and list all 22 dynamic and static URLs under the domain.
*   **Robots.txt Crawl Directives**:
    *   Configured crawling standards in the `public/robots.txt` file and pointed crawlers to the sitemap XML link.
