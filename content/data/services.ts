export interface ServiceDetail {
  id: string;
  name: string;
  href: string;
  iconName: string;
  headline: string;
  description: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  features: string[];
  process: { step: number; title: string; desc: string; time: string }[];
  miniCaseStudy: { title: string; outcome: string; description: string };
  pricing: {
    starting: string;
    tiers: { name: string; price: string; description: string; features: string[] }[];
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "product-engineering",
    name: "Product Engineering",
    href: "/services/product-engineering",
    iconName: "Zap",
    headline: "Build AI-Powered Products That Scale — From Prototype to Production",
    description: "We build scalable AI-powered applications, high-performance SaaS platforms, and bespoke mobile solutions. From your first MVP to a production system handling thousands of users — AIRIZZ engineers it.",
    stat1: { value: "3wk", label: "Avg. MVP Delivery" },
    stat2: { value: "10+", label: "Products Shipped" },
    features: [
      "AI-Powered SaaS Platforms",
      "Mobile-First Applications",
      "API & Integration Layer",
      "Performance Optimization",
      "Tech Stack Advisory",
      "Ongoing Support & Scaling"
    ],
    process: [
      { step: 1, title: "Discovery Call", desc: "We map your idea, users, and technical requirements.", time: "Day 1" },
      { step: 2, title: "Scope & Roadmap", desc: "Detailed tech spec, timeline, and milestone plan.", time: "Days 2-3" },
      { step: 3, title: "Build Sprint", desc: "Agile development with weekly demos.", time: "Weeks 1-4" },
      { step: 4, title: "Review & Iterate", desc: "UAT, feedback, and refinement.", time: "Week 5" },
      { step: 5, title: "Launch & Handoff", desc: "Deployment, documentation, knowledge transfer.", time: "Week 6" }
    ],
    miniCaseStudy: {
      title: "SaaS Launch Outcome",
      outcome: "MVP Delivered in 18 Days",
      description: "Successfully engineered a fully functional AI SaaS product, meeting type-safety requirements."
    },
    pricing: {
      starting: "₹75,000",
      tiers: [
        {
          name: "Starter MVP",
          price: "₹75K+",
          description: "Ideal for proof of concept and basic interactive prototype builds.",
          features: ["3-week delivery", "1 core feature path", "Basic cloud deployment", "Weekly progress reviews"]
        },
        {
          name: "Growth SaaS",
          price: "₹3L+",
          description: "Best for full SaaS launches and production-grade software projects.",
          features: ["6-week delivery", "API integration layer", "Performance audits", "24/7 priority support"]
        },
        {
          name: "Enterprise custom",
          price: "Custom",
          description: "Bespoke high-performance SaaS development and support plans.",
          features: ["Dedicated dev pod", "Custom AI agent suites", "99.9% uptime SLA", "Continuous systems monitoring"]
        }
      ]
    }
  },
  {
    id: "ai-consulting",
    name: "AI Consulting for Small Business",
    href: "/services/ai-consulting",
    iconName: "Brain",
    headline: "ROI-Focused AI Strategy Built for Indian SMBs",
    description: "We cut through AI hype and deliver real, measurable automation wins. Generative AI, predictive analytics, intelligent chatbots — all scoped to your budget and business model.",
    stat1: { value: "60d", label: "ROI Visibility" },
    stat2: { value: "3X", label: "Avg. Lead Conversion Lift" },
    features: [
      "AI Readiness Assessment",
      "Generative AI Implementation",
      "Predictive Analytics Setup",
      "Intelligent Chatbot Deployment",
      "AI Workflow Automation",
      "Training & Enablement"
    ],
    process: [
      { step: 1, title: "Discovery Call", desc: "Understand your business and operational challenges.", time: "Day 1" },
      { step: 2, title: "AI Assessment", desc: "Identify top ROI opportunities and evaluate data readiness.", time: "Days 2-4" },
      { step: 3, title: "Roadmap Design", desc: "Create a tailored AI implementation spec and model selection guide.", time: "Week 2" },
      { step: 4, title: "Prototype Demo", desc: "Showcase early-stage custom chatbot or workflow prototype.", time: "Weeks 3-4" },
      { step: 5, title: "Enablement & Handoff", desc: "Staff training, prompt guidelines, and governance handoff.", time: "Week 5" }
    ],
    miniCaseStudy: {
      title: "Retailer Conversion",
      outcome: "ROI Visible in 45 Days",
      description: "Configured target RAG chatbots on WhatsApp, enabling 24/7 support response coverage."
    },
    pricing: {
      starting: "₹50,000",
      tiers: [
        {
          name: "Starter Strategy",
          price: "₹50K+",
          description: "Ideal for AI strategy planning and initial readiness check audits.",
          features: ["AI readiness assessment", "1 basic chatbot stub", "Handoff workshop", "30-day email support"]
        },
        {
          name: "Growth Implementation",
          price: "₹2L+",
          description: "Best for custom LLM integration and prompt optimization runs.",
          features: ["2 production-ready integrations", "Custom prompt tuning", "Staff training workshop", "Priority chat support"]
        },
        {
          name: "Enterprise Suite",
          price: "Custom",
          description: "Full scale custom Generative AI strategy and continuous optimizations.",
          features: ["Self-hosted open source models", "Unlimited vector indexes", "Ongoing prompt tuning", "Direct technical consultation"]
        }
      ]
    }
  },
  {
    id: "data-integration",
    name: "Data Integration Services",
    href: "/services/data-integration",
    iconName: "TrendingUp",
    headline: "One Unified Data Layer. Zero More Silos.",
    description: "We securely connect your CRMs, ERPs, APIs, and marketing platforms into a single, reliable data source — so your team makes decisions on real-time, accurate information.",
    stat1: { value: "2wk", label: "Avg. Integration Time" },
    stat2: { value: "6+", label: "Connected Platforms" },
    features: [
      "CRM Integration (HubSpot, Salesforce, Zoho)",
      "ERP Connectivity (SAP, Tally, Odoo)",
      "Marketing Platform Unification",
      "Real-Time Data Sync",
      "Custom API Development",
      "Data Quality & Governance"
    ],
    process: [
      { step: 1, title: "Systems Audit", desc: "Inventory all active platforms, ERPs, databases, and APIs.", time: "Day 1" },
      { step: 2, title: "Schema Design", desc: "Map how data moves and define a single source of truth schema.", time: "Days 2-3" },
      { step: 3, title: "Sync Engineering", desc: "Build robust API connections, sync scripts, and webhook logs.", time: "Weeks 1-2" },
      { step: 4, title: "Dashboard Setup", desc: "Construct central reporting charts (Looker Studio or Power BI).", time: "Week 3" },
      { step: 5, title: "UAT & Live Launch", desc: "Reconciliation testing and handoff of sync logs.", time: "Week 4" }
    ],
    miniCaseStudy: {
      title: "Reconciliation Outcome",
      outcome: "62% Billing Errors Reduced",
      description: "Mapped disjointed carrier systems into one single unified dashboard interface."
    },
    pricing: {
      starting: "₹60,000",
      tiers: [
        {
          name: "Starter Connector",
          price: "₹60K+",
          description: "Ideal for connecting up to 3 core databases or marketing systems.",
          features: ["Up to 3 system integrations", "Reconciliation testing", "Looker Studio dashboard", "30-day support"]
        },
        {
          name: "Growth Pipeline",
          price: "₹2.5L+",
          description: "Best for custom ERP linkages and continuous data warehousing flows.",
          features: ["Up to 8 system integrations", "Nightly sync pipelines", "Custom webhook handlers", "Priority SLA support"]
        },
        {
          name: "Enterprise Warehouse",
          price: "Custom",
          description: "Bespoke high-availability database unification and streaming sync.",
          features: ["Unlimited integrations", "Real-time query streaming", "Continuous monitoring & alerts", "SLA guarantees"]
        }
      ]
    }
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation Agency",
    href: "/services/marketing-automation",
    iconName: "Users",
    headline: "Turn Leads Into Loyal Customers. While You Sleep.",
    description: "We design, implement, and continuously optimise marketing automation workflows that nurture leads, recover lost customers, and drive repeat revenue — on autopilot.",
    stat1: { value: "3X", label: "Avg. Lead Conversion Lift" },
    stat2: { value: "40%", label: "Reduction in Manual Follow-ups" },
    features: [
      "Email Nurture Sequences",
      "Lead Scoring & Routing",
      "CRM Automation",
      "Behavioural Trigger Campaigns",
      "Reporting & Analytics Dashboards",
      "WhatsApp & SMS Automation"
    ],
    process: [
      { step: 1, title: "Outreach Audit", desc: "Review current lead capture, email nurture, and sales follow-ups.", time: "Day 1" },
      { step: 2, title: "Sequence Mapping", desc: "Design customer journey maps, trigger signals, and scoring rules.", time: "Days 2-3" },
      { step: 3, title: "Flow Construction", desc: "Build email, SMS, and WhatsApp sequences in CRM platforms.", time: "Weeks 1-2" },
      { step: 4, title: "Data Integration", desc: "Sync CRM contact states and pipeline routing triggers.", time: "Week 3" },
      { step: 5, title: "Launch & Optimize", desc: "Activate workflows and set up continuous conversion tracking.", time: "Week 4" }
    ],
    miniCaseStudy: {
      title: "Outreach Conversion",
      outcome: "3X Lead Conversions Achieved",
      description: "Successfully deployed target nurture loops across email and WhatsApp API systems."
    },
    pricing: {
      starting: "₹40,000",
      tiers: [
        {
          name: "Starter Campaigns",
          price: "₹40K+",
          description: "Ideal for setting up a single core email sequence and form loops.",
          features: ["1 core sequence setup", "Form submission tracking", "Standard templates", "30-day support"]
        },
        {
          name: "Growth Flows",
          price: "₹1.5L+",
          description: "Best for full omnichannel triggers, WhatsApp API, and lead scoring rules.",
          features: ["3 complex sequences", "WhatsApp/SMS integrations", "Lead scoring systems", "Priority SLA support"]
        },
        {
          name: "Enterprise Systems",
          price: "Custom",
          description: "Full scale automated buyer journeys and CRM optimization setups.",
          features: ["Unlimited sequences", "Bespoke custom handlers", "Weekly optimizations", "Full campaign dashboard"]
        }
      ]
    }
  }
];
