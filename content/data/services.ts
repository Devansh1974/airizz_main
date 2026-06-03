export interface ServiceDetail {
  id: string;
  name: string;
  href: string;
  iconName: string;
  description: string;
  longDescription: string;
  keyBenefits: string[];
  processSteps: { step: string; title: string; description: string }[];
  features: string[];
  pricing: {
    starting: string;
    tiers: { name: string; price: string; features: string[] }[];
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "workflow-automation",
    name: "Workflow Automation",
    href: "/services/workflow-automation",
    iconName: "Zap",
    description: "Automate manual tasks, sync disparate apps, and standardize business operations.",
    longDescription: "Manual data entry, repetitive document processing, and fragmented applications cause massive operational friction. Our Workflow Automation service maps out your standard operating procedures (SOPs) and replaces manual interventions with seamless, error-free automated tasks that run 24/7.",
    keyBenefits: [
      "Reduce human error by up to 99%",
      "Save hundreds of team hours weekly",
      "Connect legacy software with modern APIs",
      "Instant triggers for client notifications and reporting"
    ],
    processSteps: [
      { step: "01", title: "Process Audit", description: "We analyze your team's daily routines to locate bottlenecks." },
      { step: "02", title: "API Mapping", description: "Identify integration points across ERP, email, sheets, and Slack." },
      { step: "03", title: "Flow Construction", description: "We build reliable automation scripts with retry mechanisms." },
      { step: "04", title: "Monitoring", description: "Deploy automated alerts for any API failures." }
    ],
    features: [
      "Custom Zapier / Make.com integration",
      "Automated document generation (PDF invoices, contracts)",
      "Legacy database-to-cloud sync pipelines",
      "Web scraping & auto-reporting bots",
      "Slack / MS Teams automation systems"
    ],
    pricing: {
      starting: "₹45,000 / month",
      tiers: [
        {
          name: "Standard Flow",
          price: "₹45,000/mo",
          features: ["Up to 5 active workflows", "Bi-weekly maintenance", "Email support", "Zapier/Make setup"]
        },
        {
          name: "Growth Scale",
          price: "₹85,000/mo",
          features: ["Up to 15 active workflows", "Custom webhook handlers", "Weekly maintenance", "Priority chat support"]
        },
        {
          name: "Enterprise Custom",
          price: "Custom",
          features: ["Unlimited workflows", "Dedicated developer support", "Direct API integrations", "99.9% uptime SLA"]
        }
      ]
    }
  },
  {
    id: "ai-crm",
    name: "AI-Powered CRM",
    href: "/services/ai-crm",
    iconName: "Users",
    description: "Intelligent pipelines, lead scoring, and automated customer profiling.",
    longDescription: "Unify customer touchpoints and score leads automatically. We transform standard databases into live intelligence engines that predict customer churn, profile buyers, and generate custom-tailored outreach sequences.",
    keyBenefits: [
      "Boost sales conversions by 30%+",
      "Automated prompt replies to incoming queries",
      "Segment buyers based on live behavior data",
      "Centralized context dashboards for account executives"
    ],
    processSteps: [
      { step: "01", title: "CRM Sync", description: "Unify contacts from Salesforce, HubSpot, or custom databases." },
      { step: "02", title: "LLM Enrichment", description: "Configure AI algorithms to scan lead data and append intent scores." },
      { step: "03", title: "Sequence Build", description: "Craft automated, personalized email and WhatsApp outreach." },
      { step: "04", title: "Conversion Track", description: "Refine prompts based on closed-won data signals." }
    ],
    features: [
      "AI-driven lead scoring and qualification",
      "WhatsApp & Email outreach automation",
      "Auto-populated notes and summary fields in customer cards",
      "Customer churn prediction analytics",
      "Omnichannel communication synchronization"
    ],
    pricing: {
      starting: "₹60,000 / month",
      tiers: [
        {
          name: "Starter Sync",
          price: "₹60,000/mo",
          features: ["HubSpot/Zoho configuration", "Basic auto-enrichment", "Monthly updates", "Standard conversion reports"]
        },
        {
          name: "Omnichannel AI",
          price: "₹1,10,000/mo",
          features: ["Deep WhatsApp API sync", "Predictive scoring algorithms", "Weekly prompt refinement", "Priority Support"]
        },
        {
          name: "Custom Enterprise",
          price: "Custom",
          features: ["Full database integration", "Self-hosted LLM setups", "Unlimited agent instances", "SLA & security guarantees"]
        }
      ]
    }
  },
  {
    id: "custom-llm",
    name: "Custom LLM Solutions",
    href: "/services/custom-llm",
    iconName: "Brain",
    description: "SOP-trained chat bots and smart data extraction from unstructured files.",
    longDescription: "General AI tools lack company context. We train, prompt-engineer, and deploy specialized language models (using RAG frameworks) directly on your company's SOPs, internal documents, and past tickets, giving your staff an omniscient virtual assistant.",
    keyBenefits: [
      "Answers based strictly on corporate documentation",
      "Instant extraction of terms from 100+ page contracts",
      "Secure, isolated enterprise data namespaces",
      "Redaction of PII to maintain strict data compliance"
    ],
    processSteps: [
      { step: "01", title: "Document Ingestion", description: "Collect PDFs, SOPs, Notion spaces, and past emails." },
      { step: "02", title: "Vector Database Setup", description: "We chunk, embed, and store context inside isolated vector clouds." },
      { step: "03", title: "Agent Programming", description: "Apply strict system rules to guide behavior and output formats." },
      { step: "04", title: "Deployment", description: "Integrate chat widgets in Slack, web apps, or internal tools." }
    ],
    features: [
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Custom system prompt optimization",
      "Automated document summarization & comparison tools",
      "PII redaction and security guardrails",
      "Integration with OpenAI, Anthropic, or self-hosted open-source models"
    ],
    pricing: {
      starting: "₹90,000 / month",
      tiers: [
        {
          name: "Standard RAG",
          price: "₹90,000/mo",
          features: ["Up to 100 documents parsed", "Single channel (Slack or Web)", "Monthly Vector DB sync", "Standard latency monitoring"]
        },
        {
          name: "Multi-Agent System",
          price: "₹1,80,000/mo",
          features: ["Unlimited documents", "Staged multi-agent workflows", "Weekly vector syncs", "Real-time moderation layer"]
        },
        {
          name: "Dedicated Cloud",
          price: "Custom",
          features: ["On-premise / private cloud deploy", "Custom model fine-tuning", "Dedicated engineering team", "Custom security audits"]
        }
      ]
    }
  },
  {
    id: "data-strategy",
    name: "Data Strategy & Integration",
    href: "/services/data-strategy",
    iconName: "TrendingUp",
    description: "Unify business logs into a single analytical truth source.",
    longDescription: "Most businesses are rich in data but poor in insights. We design robust pipelines that extract, transform, and load (ETL) data from all operations into beautiful, interactive analytics dashboards, ready to feed into AI models.",
    keyBenefits: [
      "Consolidate multiple database silos into one view",
      "Real-time operational dashboards",
      "Clean datasets ready for AI training",
      "Reliable backups and security compliance"
    ],
    processSteps: [
      { step: "01", title: "Silo Mapping", description: "Locate where all analytical files and logs are stored." },
      { step: "02", title: "ETL Configuration", description: "Build data extraction scripts with schema validation." },
      { step: "03", title: "Warehouse Setup", description: "Load clean data structures into central query databases." },
      { step: "04", title: "Dashboard Design", description: "Build simple, actionable BI views for management." }
    ],
    features: [
      "Custom ETL pipeline engineering",
      "Data lake and warehouse architecture (BigQuery, Snowflake)",
      "Interactive Looker Studio / PowerBI designs",
      "GDPR & DPDP compliance consulting",
      "AI-ready training data pipeline setup"
    ],
    pricing: {
      starting: "₹50,000 / month",
      tiers: [
        {
          name: "Basic Sync",
          price: "₹50,000/mo",
          features: ["Up to 3 data sources synced", "Looker Studio dashboard", "Monthly updates", "Basic security checks"]
        },
        {
          name: "Warehouse Core",
          price: "₹1,00,000/mo",
          features: ["Up to 8 data sources synced", "Centralized data warehouse", "Weekly pipeline audits", "Custom BI panels"]
        },
        {
          name: "Enterprise Architecture",
          price: "Custom",
          features: ["Unlimited sources", "Real-time event streaming", "Continuous monitoring & alerts", "Regulatory compliance compliance"]
        }
      ]
    }
  }
];
