# AIRIZZ Website Technology Stack Documentation

This document explains the technical architecture, framework configurations, and software libraries utilized to build and compile the **AIRIZZ** codebase (consisting of Next.js frontend client and Node.js Express backend).

---

## 1. Core Framework & Engine

### 1.1 Frontend Client
*   **Next.js 16.2 (App Router)**:
    *   Used for page routing, SEO layouts, metadata configuration, and Static Site Generation (SSG).
    *   **React Server Components (RSC)** are used for the main listing pages, MDX detail pages, layouts, and sitemap builders to minimize client-side bundle size, maximize load speeds (Core Web Vitals), and optimize SEO crawlability.
    *   **React Client Components** are selectively applied using `"use client"` for dynamic animations, form validations, tab filters, and toggle states (e.g. the 10-step Estimator wizard).
*   **React 19**:
    *   Provides runtime compiler elements, dynamic context hooks, and native resource loading.
*   **Webpack Bundler Override**:
    *   Configured inside `package.json` as `next build --webpack` to resolve native Turbopack compiler memory segment limitations under Mac developer machines.

### 1.2 Backend API Server
*   **Node.js / Express**:
    *   Lightweight web application server mounting routes (such as `/api/estimate`) to handle lead processing, price calculation, and external LLM/Sheets integrations.
    *   Uses `cors` middleware to enable cross-origin requests from the client.
    *   Uses `dotenv` to manage secrets.

---

## 2. Programming Languages & Structuring
*   **TypeScript 5.x**:
    *   Strict type safety configured across both projects.
    *   **Frontend**: Paths mapped using tsconfig aliases (e.g. `@/*` targeting folder roots).
    *   **Backend**: Targeted to compile to standard `CommonJS` modules with `node` resolution rules to support dynamic on-the-fly execution in `ts-node-dev`.

---

## 3. Styling & Branded Theming
*   **Tailwind CSS v4 (with PostCSS)**:
    *   Utilized Tailwind v4 theme mapping (`@theme` variables block) inside [globals.css](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/frontend/app/globals.css) to build a unified design system.
    *   Design variables mapped:
        *   `--color-background`: `#ffffff` (slate navy on white background theme).
        *   `--color-accent`: `#00b8ac` (vibrant brand teal).
        *   `--color-accent-bg`: `rgba(0, 184, 172, 0.06)` (light teal tint).
        *   `--color-text`: `#0f172a` (navy slate dark text).
        *   `--color-text-2`: `#475569` (secondary slate text).
*   **Custom CSS Modules & Rules**:
    *   *Glassmorphism*: Frosted overlay class `.glass` and transition effects `.glass-interactive` using HSL transparency and `-webkit-backdrop-filter`.
    *   *Grid backgrounds*: Clean tech grid class `.grid-background` and dot indicators `.dot-background` rendered using repeating radial gradients.

---

## 4. Typography & Font Integration
*   **Clash Display (ITF)**:
    *   Loaded programmatically from Fontshare CDN at the top of `globals.css` to render header typography (`h1` through `h6`).
*   **Bricolage Grotesque & Plus Jakarta Sans (Google Fonts)**:
    *   Loaded via `next/font/google` in `layout.tsx` serving as body fonts (`font-sans`).
*   **JetBrains Mono (Google Fonts)**:
    *   Loaded in `layout.tsx` for monospaced metrics, progress numbers, and code snippets (`font-mono`).

---

## 5. Animation & Scroll Performance
*   **Framer Motion 12.x**:
    *   Used for micro-interactions, layout transitions, wizard step animations (`AnimatePresence`), and sliding drawer panels.
*   **Lenis Scroll (Inertia Smooth Scroll)**:
    *   Wrapped globally via a `ScrollProvider` using `@lenis/react` to enforce smooth, momentum-based scrolling transitions.

---

## 6. Local Database & Content Loading
*   **Gray-Matter Parser & Node FS**:
    *   Replaced heavy build dependencies like Contentlayer with a lightweight, browser-safe, native Node.js filesystem loader utility ([lib/content.ts](file:///Users/devanshsingh/Desktop/Airizz_main/airizz-website/frontend/lib/content.ts)).
    *   Reads and parses MDX metadata frontmatter and content fields, feeding the dynamic routes safely at compile time.

---

## 7. Integrations & Third-Party APIs

### 7.1 Groq Llama-3 API
*   Used by the backend to generate consulting-style scoped reports. Calls Chat Completions endpoint (`https://api.groq.com/openai/v1/chat/completions`) server-side via Node's native `fetch` client using `GROQ_API_KEY`.

### 7.2 Google Sheets Apps Script API
*   Used to append submission metrics directly to your Google Sheets without using GCP private service account keys or dependencies. Sends simple JSON `POST` requests to `GOOGLE_SCRIPT_URL` on Google's Apps Script Web App service.

### 7.3 Formspree Endpoint Integrations
*   Used to collect contacts and resumes from static contact/career forms. Forms submit standard requests or multi-part form payloads to `FORMSPREE_ENDPOINT`.
