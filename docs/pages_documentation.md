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
    *   *Metric Cards*: 4 viewport-triggered count-up cards:
        1. **44%** - "Reduction in Manual Task Time" (Per client engagement)
        2. **7+** - "Enterprise Deployments" (And counting)
        3. **2X** - "Faster Decision Cycle Times" (Avg across engagements)
        4. **12+** - "Industries Served" (Manufacturing to Legal)
    *   *Infinite Marquee*: CSS-animated looping text listing target verticals: *Manufacturing · Healthcare · Finance · Legal Services · Retail · Logistics*.
*   **Problem Section**:
    *   *Left Column (Pain Cards)*: 3 structured cards (data-silos, clock, puzzle) explaining why scattered data, manual tasks, and fragmented tools leak business revenue.
    *   *Right Column*: Bold headline ("Your data is an untapped goldmine. We mine it for you.") and the problem description paragraph from the core company copy.
*   **Services Grid**:
    *   *Layout*: 2x2 grid containing the 4 core playbooks.
    *   *AI Consulting for SMB Card*: Featured with a cyan left-accent highlight.
    *   *Card Content*: Icon, service name, 2-line description, delivery stat line (e.g. "ROI visible in 60 days"), and "Learn More →" links.
*   **Industries Tabs**:
    *   *Interaction*: Interactive tab switches between: *Traditional SME*, *Legal & Finance*, and *Manufacturing & Logistics*. Resolves to an accordion view on mobile.
    *   *Content*: Sector pain points (e.g. manual quoting), targeted integrations (e.g. contract review agents), and playbooks links.
*   **Testimonials Slider**:
    *   *Interaction*: Auto-rotates every 5 seconds, pauses on hover, and features dot navigation indicators.
    *   *Quotes*: Deployed Rajesh M. (Logistics, Mumbai), Priya S. (CEO, Bangalore), and Anil K. (CTO, Pune) quotes.
*   **Featured Case Study Teaser**:
    *   *Badge*: "Logistics · Data Integration"
    *   *Headline*: "How We Reduced Invoice Processing Errors by 62% for a Mumbai Logistics Firm"
    *   *Metrics*: "62% fewer errors" | "3-day → overnight" | "₹18L saved annually"
    *   *CTA*: "Read Full Case Study →" linking to `/case-studies/logistics-billing-automation`.
*   **Bottom CTA Band**:
    *   *Headline*: "Ready to build your AI advantage?"
    *   *Action*: Centered scheduling CTA with reassuring checkmarks: "No commitment required", "Get a custom AI roadmap", "Response within 24 hours".

---

## 2. Services Index (`/services`)
*   **Header**: Clean title and subhead stating: "Four focused practice areas. Every engagement is outcome-driven, scoped, and delivered with full transparency."
*   **Grid Layout**: Large 2-column card grid mapping the 4 core services.
*   *Interaction*: Micro-animations on hover with glow shadows, linking directly to individual service playbook routes.

---

## 3. Product Engineering Playbook (`/services/product-engineering`)
*   **PageHero**: Breadcrumb trails, bold capability headline, delivery stats (3-week MVP, 10+ shipped), and a callout card displaying "Starting from ₹75,000".
*   **Capabilities Checklist**: 3-column list outlining deliverables: *AI-Powered SaaS Platforms, Mobile-First Applications, API & Integration Layer, Performance Optimization, Tech Stack Advisory, Ongoing Support*.
*   **5-Step Timeline**: An animated vertical line linking 5 milestone steps from Discovery Call to Launch & Handoff.
*   **Result Callout**: Highlights the "MVP Delivered in 18 Days" SaaS outcome.
*   **Pricing Cards**: 3 tier blocks (Starter MVP, Growth SaaS, Enterprise custom) outlining scopes and CTAs.

---

## 4. AI Consulting for SMB Playbook (`/services/ai-consulting`)
*   **PageHero**: Highlights consulting strategy, featuring "60d ROI visibility" and "3X lead conversion lift" stats. Starting price: ₹50,000.
*   **Capabilities Checklist**: Lists readiness assessments, LLM prompting, custom RAG pipelines, WhatsApp chatbots, and enablement workshops.
*   **Timeline**: 5 steps from business audit to model enablement.
*   **Featured Result**: Spotlights Whatsapp chatbot response coverage.
*   **Pricing Cards**: Starter Strategy, Growth Implementation, and Enterprise Suite.

---

## 5. Data Integration Playbook (`/services/data-integration`)
*   **PageHero**: Details unified data systems, featuring "2wk integration time" and "6+ connected platforms" stats. Starting price: ₹60,000.
*   **Capabilities Checklist**: Covers HubSpot, Zoho, SAP, Tally, Odoo connectors, nightly ETL pipelines, and Looker Studio BI setup.
*   **Timeline**: 5 steps from platform audit to UAT reconciliation.
*   **Featured Result**: Spotlights the "62% Billing Errors Reduced" logistics case.
*   **Pricing Cards**: Starter Connector, Growth Pipeline, and Enterprise Warehouse.

---

## 6. Marketing Automation Playbook (`/services/marketing-automation`)
*   **PageHero**: Explains automated customer pipelines, featuring "3X conversion lift" and "40% task time reduction" stats. Starting price: ₹40,000.
*   **Capabilities Checklist**: Covers lead scoring, email nurture triggers, CRM status routing, SMS/WhatsApp marketing.
*   **Timeline**: 5 steps from sequence design to live split-testing.
*   **Featured Result**: Spotlights the "3X Lead Conversions Achieved" metric.
*   **Pricing Cards**: Starter Campaigns, Growth Flows, and Enterprise Systems.

---

## 7. Products page (`/products`)
*   **Header**: Eyebrow "Proprietary Technology" and title "Bespoke AI Products".
*   **Product Catalog**: 3 core SaaS/automation tools under active R&D:
    1. **AiriFlow**: Low-code agentic workflow scheduler.
    2. **AiriRAG**: Secure vector workspace for private documents.
    3. **AiriSync**: Legacy ERP (Tally) bridge pipeline.
*   **CTA Linkage**: Redirects users back to the Product Engineering playbook page for booking.

---

## 8. About Us (`/about`)
*   **Founding Story**: Two-paragraph description outlining why the founders built AIRIZZ (to solve legacy data gaps and manual overhead with practical, outcome-focused AI).
*   **Mission & Values**: 3 value cards: *Outcomes Over Outputs*, *Radical Transparency*, and *Build for the Long Term*.
*   **The AIRIZZ Way (Pillars of Work)**:
    *   *Layout*: 3 distinct columns corresponding to:
        1. **Dharma (Right Conduct)**: Promise 1 (Business-first understanding) & Promise 2 (Stage-by-stage transparency).
        2. **Karma (Right Action)**: Promise 3 (Complete end-to-end ownership) & Promise 4 (Always ahead of the tech curve).
        3. **Artha (Meaningful Outcome)**: Promise 5 (Value as the only metric) & Promise 6 (Clients' growth is our growth).
    *   *Visuals*: Color-coded top borders (Blue, Purple, Teal/Cyan) and handshake, zap, and rocket icons.
*   **Team Grid**: Prompts 3 bio cards with initials-in-circle graphics, mapping placeholder team variables.
*   **Journey Timeline**: Animated vertical timeline tracking dates from founding (2023) to expansion and product builds (2026).

---

## 9. Contact Page (`/contact`)
*   **Left Column**: A placeholder frame mapping the Calendly booking page URL (`NEXT_PUBLIC_CALENDLY_URL`).
*   **Right Column**: Trust sidebar showing steps to onboarding and a client testimonial.
*   **Backup form**: A 5-field React form (Full Name, Business Email, Company, Select Service Dropdown, Message) posting details directly to a Formspree endpoint (`FORMSPREE_ENDPOINT`).

---

## 10. Pricing Plans (`/pricing`)
*   **Pricing Matrices**: 3 cards (Starter: ₹50K–₹2L, Growth: ₹2L–₹10L with Popular badge, Enterprise: Custom) showing scopes, capabilities, and distinct proposals CTAs.
*   **How We Charge Section**: Details pricing models: *Fixed Scope Project*, *Monthly Retainer*, and *Dedicated Pod*.
*   **FAQ Accordion**: 8 interactive dropdowns with smooth height animations detailing security, installment schedules, legal, and tools coverage.

---

## 11. Traditional SME Verticals (`/industries/traditional-sme`)
*   **PageHero**: "AI Built for Traditional Businesses — Without the Disruption" H1 and CTA actions.
*   **Pillars of Friction**: 3 red-bordered cards explaining legacy system silos, manual invoicing, and lack of customer support.
*   **Recommended Solutions**: Links to recommended playbooks (Data Integration, AI Consulting, Marketing Automation).
*   **Result Teaser**: Highlights Delhi-based trading invoicing success.

---

## 12. Legal & Finance Verticals (`/industries/legal-finance`)
*   **PageHero**: "AI Solutions Built for Compliance-First Industries" H1 and CTAs.
*   **Pillars of Friction**: Outlines manual contract review, compliance audit costs, and lengthy client onboarding.
*   **Recommended Solutions**: Links to AI Consulting, Data Integration, and Product Engineering playbooks.
*   **Result Teaser**: Highlights Bangalore law firm onboarding success.

---

## 13. Manufacturing Verticals (`/industries/manufacturing`)
*   **PageHero**: "Precision Automation for Complex Operations" H1 and CTAs.
*   **Pillars of Friction**: Outlines supply chain silos, manual invoicing errors, and slow weekly decision reporting.
*   **Recommended Solutions**: Links to Data Integration, Product Engineering, and AI Consulting playbooks.
*   **Result Teaser**: Highlights Pune manufacturer reporting automation success.

---

## 14. Careers page (`/careers`)
*   **Header**: "Build the Future of AI in India. Join Us."
*   **Culture & Perks**: Outlines live client deployment culture and perks (Real AI Work, Remote-First, Grow Fast).
*   **Roles Grid**: lists 3 open positions: *AI/ML Engineer, Automation Consultant, Frontend Developer (Next.js)*.
*   **Application Drawer**: Clicking "Apply Now" slides in a Formspree-enabled submission sheet with Full Name, Email, LinkedIn, Textarea description, and PDF Resume upload field.

---

## 15. Case Studies Index (`/case-studies`)
*   **Layout**: Dynamic Server Component listing dynamic MDX studies.
*   **Category Filters**: Client-side filtering bar (All | Manufacturing | Legal & Finance | Traditional SME | Logistics) modifying the visible list.

---

## 16-18. Case Study Detail Pages (`/case-studies/[slug]`)
*   **Dynamic Slugs**: `logistics-billing-automation` | `legal-onboarding-automation` | `manufacturer-data-unification`.
*   **Structure**: Dynamic header, client details, metrics summary bar, MDX content parsed to HTML, and contact footer.

---

## 19. Blog Index (`/blog`)
*   **Layout**: Displays dynamic articles parsed from the blog MDX catalog with date and read times.

---

## 20-21. Blog Detail Pages (`/blog/[slug]`)
*   **Dynamic Slugs**: `ai-automation-indian-smbs` | `marketing-automation-legal-firms`.
*   **Structure**: Double-column layout. Main article content rendered on the left; sticky author card and consulting CTA on the right.

---

## 22-23. Legal Pages (`/privacy-policy` & `/terms-of-service`)
*   **Layout**: Clean, reading-optimized single-column dark layout containing official legal terms, Bangalore courts jurisdiction, and privacy coordinates.
