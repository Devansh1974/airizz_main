export interface IndustryDetail {
  id: string;
  name: string;
  href: string;
  iconName: string;
  description: string;
  details: string;
  painPoints: string[];
  solutions: { title: string; desc: string }[];
  clientCase: {
    title: string;
    description: string;
    stat: string;
  };
}

export const industriesData: IndustryDetail[] = [
  {
    id: "traditional-sme",
    name: "Traditional SME",
    href: "/industries/traditional-sme",
    iconName: "Store",
    description: "Bringing modern digital automation and CRM processes to legacy trade, retail, and regional networks.",
    details: "Traditional businesses often lose growth opportunities to manual order tracking, missing lead callbacks, and disconnected stock sheets. We implement automated lead tracking and WhatsApp notifications to convert local buyers systematically.",
    painPoints: [
      "Leads lost in unmonitored WhatsApp threads or paper logs",
      "Manual inventory spreadsheets causing stock errors",
      "Slow response times to inquiries outside of work hours",
      "Inefficient manual billing and billing verification"
    ],
    solutions: [
      { title: "WhatsApp CRM Integration", desc: "Sync customer orders directly from WhatsApp chats to a central CRM database." },
      { title: "Automated Lead Responders", desc: "Instant AI responses to customer catalogs, availability, and prices 24/7." },
      { title: "Stock Sheets Autopilot", desc: "Automated alerts when inventory reaches thresholds, prompting vendor orders." }
    ],
    clientCase: {
      title: "Regional Distributor Scales Conversions",
      description: "Implemented custom WhatsApp lead tracking and unified orders dashboard, removing manual record entries.",
      stat: "85% faster callbacks"
    }
  },
  {
    id: "legal-finance",
    name: "Legal & Finance",
    href: "/industries/legal-finance",
    iconName: "Briefcase",
    description: "Empowering law firms, wealth managers, and audits with secure, vector-indexed research agents.",
    details: "Legal and financial analysis requires reading long agreements, searching regulations, and cross-matching historical case filings. We set up closed-cloud semantic research portals to fetch clauses and summarize risk factors instantly.",
    painPoints: [
      "Hundreds of hours spent scanning long agreements for risk clauses",
      "Fragmented regulatory change updates across multiple government portals",
      "Manual preparation of standard legal and financial client briefings",
      "Risk of client data leaks on public generative AI portals"
    ],
    solutions: [
      { title: "Semantic SOP Portal", desc: "A closed-network search tool to query and summarize historical briefs and court files." },
      { title: "Smart Clause Extractor", desc: "Upload agreements to scan, flag, and summarize liability limit clauses instantly." },
      { title: "Automated Client Summaries", desc: "AI-generated summaries of market updates and changes tailored to client portfolios." }
    ],
    clientCase: {
      title: "Multi-Partner Firm Cuts Audit Time",
      description: "Configured secure, offline-first vector search across historical dispute records, simplifying discovery.",
      stat: "65% research time saved"
    }
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    href: "/industries/manufacturing",
    iconName: "Factory",
    description: "Streamlining material orders, shift logs, and quality check schedules with clean ETL databases.",
    details: "Silos in parts tracking, vendor contracts, and shift sheets disrupt assembly lines. We connect production databases with real-time Looker Studio reports and email alerts to keep inventory optimal.",
    painPoints: [
      "Assembly line disruptions caused by delayed parts shipping",
      "Manual shift logs stored in notebooks, making patterns hard to spot",
      "Inefficient vendor communication regarding batch compliance",
      "Delayed reports causing lag in identifying machine failures"
    ],
    solutions: [
      { title: "Supply Chain Alert System", desc: "Predictive triggers that notify vendor dispatchers when raw stock runs thin." },
      { title: "Automated Shift Summary Bots", desc: "Transcribe voice logs of factory floor supervisors into clean database records." },
      { title: "Predictive Quality Dashboards", desc: "Looker Studio charts plotting machinery temperatures to highlight maintenance windows." }
    ],
    clientCase: {
      title: "Auto Components Supplier Cuts Delay",
      description: "Deployed supply chain trigger scripts and interactive production monitor dashboards to highlight bottlenecks.",
      stat: "30% drop in downtime"
    }
  }
];
