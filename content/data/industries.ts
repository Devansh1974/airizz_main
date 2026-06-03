export interface IndustryDetail {
  id: string;
  name: string;
  href: string;
  iconName: string;
  headline: string;
  sub: string;
  description: string;
  painPoints: { title: string; body: string }[];
  relevantServices: string[];
  caseStudyTeaser: string;
}

export const industriesData: IndustryDetail[] = [
  {
    id: "traditional-sme",
    name: "Traditional SME",
    href: "/industries/traditional-sme",
    iconName: "Store",
    headline: "AI Built for Traditional Businesses — Without the Disruption",
    sub: "We bring generative AI, CRM automation, and intelligent data management to SMEs running on legacy systems. No rip-and-replace. Just measurable improvements layered on top of what you already have.",
    description: "Bringing modern digital automation and CRM processes to legacy trade, retail, and regional networks.",
    painPoints: [
      {
        title: "Legacy Systems That Don't Talk",
        body: "Your accounting software, CRM, and inventory tools were built in different decades. Connecting them manually costs hours every week."
      },
      {
        title: "Manual Quoting & Invoicing",
        body: "Sales teams spending half their day on quotes and invoices instead of selling is a solved problem — we solve it."
      },
      {
        title: "No Customer Service Automation",
        body: "Every customer query routed to a human, even the repetitive ones. AI agents can handle 60%+ of tier-1 support."
      }
    ],
    relevantServices: ["data-integration", "ai-consulting", "marketing-automation"],
    caseStudyTeaser: "Delhi Trading Firm: Automated invoicing process, saving 22 hours per week."
  },
  {
    id: "legal-finance",
    name: "Legal & Finance",
    href: "/industries/legal-finance",
    iconName: "Briefcase",
    headline: "AI Solutions Built for Compliance-First Industries",
    sub: "We help legal firms and financial services companies automate the repetitive without compromising the rigorous.",
    description: "Empowering law firms, wealth managers, and audits with secure, vector-indexed research agents.",
    painPoints: [
      {
        title: "Manual Contract Review Bottlenecks",
        body: "Associates spending 40+ hours reviewing standard contracts that AI can pre-screen in minutes."
      },
      {
        title: "Compliance Tracking Across Jurisdictions",
        body: "Manual compliance monitoring is error-prone and expensive. We build dashboards that track it automatically."
      },
      {
        title: "Client Onboarding Taking Weeks",
        body: "KYC, document collection, and system setup that takes 2 weeks can be automated to 2 days."
      }
    ],
    relevantServices: ["ai-consulting", "data-integration", "product-engineering"],
    caseStudyTeaser: "Bangalore Law Firm: Reduced client onboarding time from 14 days to 2 days."
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    href: "/industries/manufacturing",
    iconName: "Factory",
    headline: "Precision Automation for Complex Operations",
    sub: "From ERP integrations to predictive analytics — we help manufacturers and logistics operators make faster decisions with cleaner data.",
    description: "Streamlining material orders, shift logs, and quality check schedules with clean ETL databases.",
    painPoints: [
      {
        title: "Supply Chain Data Silos",
        body: "Procurement, warehouse, and dispatch data living in 3 different systems with no unified view."
      },
      {
        title: "Manual Billing & Invoice Errors",
        body: "Billing errors costing 2-3% of revenue annually — fully preventable with automated reconciliation."
      },
      {
        title: "Slow Decision Cycles",
        body: "Waiting for end-of-week reports to make decisions that need real-time data."
      }
    ],
    relevantServices: ["data-integration", "product-engineering", "ai-consulting"],
    caseStudyTeaser: "Pune Manufacturer: Unified supply chain data, reducing reporting time by 80%."
  }
];
