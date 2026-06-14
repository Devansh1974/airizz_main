# AIRIZZ Website Pages Documentation

This document provides a detailed breakdown of what was built for every page on the **AIRIZZ** website (airizz.co), including structural layout, components, interactive state, and copy.

---

## 1. Homepage (`/`)
*   **Hero Section**:
    *   *Eyebrow Badge*: "Enterprise-Grade AI Solutions" with pulsing glow.
    *   *Headline*: "We help Indian SMBs and scaling enterprises eliminate manual work, unify their data, and grow revenue — with bespoke AI." (Clash Display font)
    *   *Subheadline*: "From CRM integrations and marketing automation to custom AI agents — AIRIZZ is the technical partner that turns your data into decisions." (Bricolage Grotesque font)
    *   *CTAs*: "Book Your Free Strategy Audit →" (primary gradient glow link to `/contact`) and "Explore Our Services" (secondary outline link to `/services`).
    *   *Trust Line*: "Trusted by innovative startups and scaling enterprises across Manufacturing · Healthcare · Finance · Legal · Retail · Logistics"
    *   *Aesthetics*: Deep dark navy background (`#040d1a`) with a canvas-based particle connector grid and radial teal glows behind text.
*   **Stats Bar**:
    *   *Background*: Slightly lighter dark navy (`#071428`).
    *   *Metric Cards*: 4 viewport-triggered count-up cards.
*   **Problem Section**:
    *   *Left Column (Pain Cards)*: 3 structured cards (data-silos, clock, puzzle) explaining operational hurdles.
    *   *Right Column*: Bold headline ("Your data is an untapped goldmine. We mine it for you.") and problem description paragraphs.
*   **Services Grid**:
    *   *Layout*: 2x2 grid containing the 4 core playbooks: Product Engineering, AI Consulting, Data Integration, Marketing Automation.
*   **Industries Tabs**:
    *   *Interaction*: Interactive tab switches between: *Traditional SME*, *Legal & Finance*, and *Manufacturing & Logistics*. Resolves to an accordion view on mobile.
*   **Testimonials Slider**:
    *   *Interaction*: Auto-rotates every 5 seconds, pauses on hover, and features dot navigation indicators.
*   **Featured Case Study Teaser**:
    *   *Headline*: "How We Reduced Invoice Processing Errors by 62% for a Mumbai Logistics Firm"
*   **Bottom CTA Band**:
    *   *Headline*: "Ready to build your AI advantage?"

---

## 2. Services Index (`/services`)
*   **Header**: Clean title and subhead stating practice area coordinates.
*   **Grid Layout**: Large 2-column card grid mapping the 4 core services.

---

## 3. Product Engineering Playbook (`/services/product-engineering`)
*   **PageHero**: Breadcrumb trails, bold capability headline, delivery stats, starting price ₹75,000.
*   **Capabilities Checklist**: Lists MVP scoping, API integrations, performance optimization.
*   **5-Step Timeline**: An animated vertical line linking 5 milestone steps from Discovery to Launch.
*   **Pricing Cards**: Starter MVP, Growth SaaS, and Custom Enterprise tiers.

---

## 4. AI Consulting for SMB Playbook (`/services/ai-consulting`)
*   **PageHero**: Highlights consulting strategy, starting price ₹50,000.
*   **Capabilities Checklist**: Covers LLM prompting, custom RAG, chatbots, and workshops.

---

## 5. Data Integration Playbook (`/services/data-integration`)
*   **PageHero**: Details unified data systems, starting price ₹60,000.
*   **Capabilities Checklist**: Covers HubSpot, Zoho, SAP, Tally, Odoo connectors.

---

## 6. Marketing Automation Playbook (`/services/marketing-automation`)
*   **PageHero**: Explains automated customer pipelines, starting price ₹40,000.
*   **Capabilities Checklist**: Covers lead scoring, email triggers, CRM routing, SMS campaigns.

---

## 7. Products page (`/products`)
*   **Product Catalog**: 3 core SaaS/automation tools under active R&D:
    1. **AiriFlow**: Low-code agentic workflow scheduler.
    2. **AiriRAG**: Secure vector workspace for private documents.
    3. **AiriSync**: Legacy ERP (Tally) bridge pipeline.

---

## 8. About Us (`/about`)
*   **Founding Story**: Two-paragraph description outlining why the founders built AIRIZZ.
*   **Mission & Values**: 3 value cards: *Outcomes Over Outputs*, *Radical Transparency*, and *Build for the Long Term*.
*   **The AIRIZZ Way**: Maps dharma ( conduct), karma (action), and artha (outcome).
*   **Team Grid**: 3 bio cards with initials-in-circle graphics.
*   **Journey Timeline**: Tracking dates from founding (2023) to expansion and product builds (2026).

---

## 9. Contact Page (`/contact`)
*   **Left Column**: A placeholder frame mapping the Calendly booking page URL.
*   **Right Column**: Trust sidebar showing steps to onboarding and a client testimonial.
*   **Backup form**: A 5-field React form posting details directly to a Formspree endpoint.

---

## 10. Pricing Plans (`/pricing`)
*   **Pricing Matrices**: 3 cards (Starter: ₹50K–₹2L, Growth: ₹2L–₹10L, Enterprise: Custom) showing scopes.
*   **How We Charge Section**: Details Project, Retainer, and Dedicated Pod billing models.
*   **FAQ Accordion**: 8 interactive dropdowns detailing security, timelines, legal, and platforms.

---

## 11. Traditional SME Verticals (`/industries/traditional-sme`)
*   **PageHero**: "AI Built for Traditional Businesses — Without the Disruption" H1.
*   **Pillars of Friction**: Outlines legacy system silos, manual invoicing, and lack of customer support.

---

## 12. Legal & Finance Verticals (`/industries/legal-finance`)
*   **PageHero**: "AI Solutions Built for Compliance-First Industries" H1.
*   **Pillars of Friction**: Outlines contract review, compliance audit costs, and client onboarding.

---

## 13. Manufacturing Verticals (`/industries/manufacturing`)
*   **PageHero**: "Precision Automation for Complex Operations" H1.
*   **Pillars of Friction**: Outlines supply chain silos, manual invoicing errors, and slow weekly decision reporting.

---

## 14. Careers page (`/careers`)
*   **Roles Grid**: Lists open positions: *AI/ML Engineer, Automation Consultant, Frontend Developer (Next.js)*.
*   **Application Drawer**: Slides in a Formspree-enabled submission sheet with PDF Resume upload fields.

---

## 15. Case Studies Index & Slugs (`/case-studies`)
*   **Layout**: Dynamic Server Component listing dynamic MDX studies.
*   **Slugs**: `logistics-billing-automation` | `legal-onboarding-automation` | `manufacturer-data-unification`.

---

## 16. Blog Index & Slugs (`/blog`)
*   **Layout**: Lists dynamic articles parsed from the blog MDX catalog.
*   **Slugs**: `ai-automation-indian-smbs` | `marketing-automation-legal-firms`.

---

## 17. Legal Pages (`/privacy-policy` & `/terms-of-service`)
*   **Layout**: Clean, reading-optimized single-column dark layout containing official legal terms.

---

## 18. Project Cost Estimator (`/estimate`)
*   **Layout**: Single-page multi-step survey wizard component with micro-animations and validation.
*   **Wizard survey structure**:
    1. **What are you looking to build?** (Single select cards: SaaS, AI Agent, Portal, etc.)
    2. **Current stage?** (Single select cards: Idea, Wireframes, Figma designs ready, etc.)
    3. **Monetization strategy?** (Multi-select checkboxes)
    4. **Target platforms?** (Multi-select checkboxes: Web, iOS, Android, Desktop, etc.)
    5. **Required key features** (Checklists grouped by Auth, Billing, AI, and Business parameters)
    6. **Third-party integrations** (Tag pills: OpenAI, WhatsApp, Salesforce, HubSpot, Shopify)
    7. **Advanced Technical Requirements** (Checkboxes: Real-Time, Offline, Enterprise Security, Scale)
    8. **Project Scope description** (Textarea field with a required 50 characters validation)
    9. **Budget expectations** (Single select target pricing)
    10. **Lead contact details** (Full Name, Business Email, Company, WhatsApp phone - with validity checks)
*   **Generating State**: Shows custom loader animation displaying dynamic scoping checks micro-copy.
*   **Consulting Report Dashboard**:
    *   **Investment summary**: Large glowing card displaying calculated price ranges (e.g. $2,500 - $4,000) with legal disclaimer.
    *   **Architecture blocks**: Custom-rendered report cards listing Project Overview, Complexity, Timelines, Team structures, Tech Recommendations, Risks & Challenges, and AIRIZZ Recommendations.
    *   **Call-To-Actions**: Core CTAs to book discovery strategy audits.
