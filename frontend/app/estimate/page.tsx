"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Clock, 
  TrendingUp, 
  Laptop, 
  CheckCircle,
  Briefcase, 
  Cpu, 
  Layers, 
  Users, 
  Calendar,
  AlertTriangle,
  Code,
  DollarSign
} from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";

// Step 1: Project Type options
const projectTypes = [
  { id: "SaaS Platform", title: "SaaS Platform", desc: "Multi-tenant software-as-a-service application." },
  { id: "AI-Powered SaaS", title: "AI-Powered SaaS", desc: "Software utilizing intelligent machine learning algorithms." },
  { id: "AI Agent", title: "AI Agent", desc: "Autonomous bots that execute complex multi-step workflows." },
  { id: "AI Chatbot", title: "AI Chatbot", desc: "Intelligent conversational interfaces for custom support." },
  { id: "Internal Business Tool", title: "Internal Tool", desc: "Admin panels and dashboards to optimize operations." },
  { id: "Customer Portal", title: "Customer Portal", desc: "Secure dashboard for customer accounts and communication." },
  { id: "Marketplace", title: "Marketplace", desc: "Platforms connecting buyers and sellers directly." },
  { id: "E-Commerce Platform", title: "E-Commerce", desc: "Digital storefronts with checkout and inventory." },
  { id: "Mobile App", title: "Mobile App", desc: "Native or cross-platform iOS & Android application." },
  { id: "CRM", title: "Custom CRM", desc: "Custom contact and relationship management software." },
  { id: "Marketing Platform", title: "Marketing Platform", desc: "Tools for automation, tracking, and campaign metrics." },
  { id: "Other", title: "Other / Custom", desc: "A bespoke custom software concept." }
];

// Step 2: Stage options
const stages = [
  { id: "Just an Idea", title: "Just an Idea", desc: "Conceptual stage. Needs requirements definition and UX designs." },
  { id: "Requirements Document Ready", title: "PRD Ready", desc: "Clear specifications and features list compiled." },
  { id: "Wireframes Available", title: "Wireframes Ready", desc: "Layout sketches and low-fidelity prototypes created." },
  { id: "Figma Designs Ready", title: "High-Fi Designs Ready", desc: "Developer-ready UI assets and design systems prepared." },
  { id: "Existing Product Needing Improvements", title: "Refactoring/Iterating", desc: "An active codebase requiring additions or optimization." }
];

// Step 3: Monetization options
const monetizationOptions = [
  { id: "Subscription", title: "Subscription / recurring recurring billing models." },
  { id: "Usage Based", title: "Usage-based or metered consumption fees." },
  { id: "Commission", title: "Transactional commission or marketplace fees." },
  { id: "One-Time Purchase", title: "One-time perpetual software purchase." },
  { id: "Licensing / White Label", title: "White-label deployment or institutional licensing." },
  { id: "Advertising", title: "Ad-revenue, sponsor banners, or user monetization." },
  { id: "Internal Tool (No Revenue)", title: "Internal utility with no commercial model." },
  { id: "Not Sure Yet", title: "Commercial strategy not fully defined yet." },
  { id: "Other", title: "Other customized revenue structure." }
];

// Step 4: Platforms
const platforms = [
  { id: "Web Application", title: "Web Application", desc: "Responsive browser-based portal." },
  { id: "iOS Application", title: "iOS App", desc: "Mobile client for iPhone and iPad devices." },
  { id: "Android Application", title: "Android App", desc: "Mobile client for Google Play Store ecosytem." },
  { id: "Admin Dashboard", title: "Admin Portal", desc: "Centralized panel for backend administration." },
  { id: "Browser Extension", title: "Browser Extension", desc: "Chrome, Safari, or Firefox desktop add-ons." },
  { id: "Desktop Application", title: "Desktop App", desc: "Standalone client for macOS and Windows systems." }
];

// Step 5: Features categorized
const featureCategories = [
  {
    category: "USER MANAGEMENT",
    items: [
      { id: "Login / Signup", title: "Email / Password Signup" },
      { id: "Social Login", title: "Social Authentication (Google, Apple)" },
      { id: "Multi Role Access", title: "Role-Based Access Control (RBAC)" }
    ]
  },
  {
    category: "PAYMENTS",
    items: [
      { id: "Stripe", title: "Stripe Gateway Integration" },
      { id: "Razorpay", title: "Razorpay Gateway Integration" },
      { id: "Subscription Billing", title: "Automated Recurring Subscriptions" }
    ]
  },
  {
    category: "AI FEATURES",
    items: [
      { id: "AI Chatbot", title: "Support Conversational Agent" },
      { id: "AI Assistant", title: "Co-pilot helper inside application editor" },
      { id: "AI Agent", title: "Autonomous multi-step worker integrations" },
      { id: "Document Analysis", title: "PDF / CSV Data ingest & summarization" },
      { id: "Knowledge Base Search", title: "RAG Semantic search / vector DB query" },
      { id: "Voice AI", title: "Text-to-speech & audio voice synthesis" }
    ]
  },
  {
    category: "BUSINESS FEATURES",
    items: [
      { id: "Analytics Dashboard", title: "Visual Charts and Activity metrics" },
      { id: "Reporting", title: "PDF / CSV Report download engine" },
      { id: "CRM", title: "Customer profiling & history pipelines" },
      { id: "Notifications", title: "In-app alerts, email, or SMS triggers" },
      { id: "User Management Panel", title: "Admin user moderation dashboard" }
    ]
  }
];

// Step 6: Integrations
const integrations = [
  "Groq", "OpenAI", "Anthropic", "Stripe", "Razorpay", 
  "HubSpot", "Salesforce", "WhatsApp", "Gmail", "Slack", 
  "Shopify", "Google Maps", "Custom API Integrations"
];

// Step 7: Technical requirements
const technicalRequirements = [
  { id: "Real-Time Updates", title: "Real-Time Updates", desc: "Live web sockets sync without refreshes." },
  { id: "Offline Support", title: "Offline Functionality", desc: "Local data synchronization and service worker caching." },
  { id: "Enterprise Security", title: "Enterprise Grade Security", desc: "Penetration-ready encryption, data hashing, & headers." },
  { id: "Audit Logs", title: "Audit Logging", desc: "Strict tracking of all administrative database writes." },
  { id: "Multi-Language Support", title: "Multi-Language Localization", desc: "Internationalization translations framework." },
  { id: "High Scalability", title: "High Scalability architecture", desc: "Serverless scaling and auto-balancing setups." },
  { id: "Millions Of Records", title: "Millions of records optimization", desc: "Database query tuning, indexing, and partitions." },
  { id: "On-Premise Hosting", title: "On-Premise / Private Cloud Hosting", desc: "Deployment inside private client servers." },
  { id: "SSO Authentication", title: "Single Sign-On (SSO / SAML)", desc: "Enterprise corporate accounts integration." },
  { id: "Advanced Analytics", title: "Advanced BI Analytics", desc: "Predictive dashboards and complex data visualization." }
];

// Step 9: Budget expectations
const budgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const TOTAL_STEPS = 10;

// Dynamic loader micro-copy messages
const loadingMessages = [
  "Structuring project scope metadata...",
  "Applying mathematical complexity scoring model...",
  "Compiling technical recommendations...",
  "Consulting Groq LLM architecture agent...",
  "Drafting potential project challenges...",
  "Formatting custom AIRIZZ roadmap..."
];

export default function CostEstimatorPage() {
  const [step, setStep] = useState(1);
  
  // Wizard state values
  const [formData, setFormData] = useState({
    projectType: "",
    stage: "",
    monetization: [] as string[],
    platforms: [] as string[],
    features: [] as string[],
    integrations: [] as string[],
    technicalRequirements: [] as string[],
    description: "",
    budgetExpectation: "",
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  // Client response and loading status
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [aiReport, setAiReport] = useState<string>("");
  const [estimatedRange, setEstimatedRange] = useState<string>("");
  const [activeLoaderMsg, setActiveLoaderMsg] = useState(loadingMessages[0]);

  // Handle single select changes
  const handleSingleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle multi select additions/deletions
  const handleMultiSelect = (field: "monetization" | "platforms" | "features" | "integrations" | "technicalRequirements", value: string) => {
    setFormData(prev => {
      const current = [...prev[field]];
      const index = current.indexOf(value);
      if (index > -1) {
        current.splice(index, 1);
      } else {
        current.push(value);
      }
      return { ...prev, [field]: current };
    });
  };

  // Nav actions
  const nextStep = () => {
    if (step < TOTAL_STEPS) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Input validation per step
  const isStepValid = () => {
    switch (step) {
      case 1: return formData.projectType !== "";
      case 2: return formData.stage !== "";
      case 3: return formData.monetization.length > 0;
      case 4: return formData.platforms.length > 0;
      case 5: return formData.features.length > 0;
      case 8: return formData.description.trim().length >= 50;
      case 9: return formData.budgetExpectation !== "";
      case 10: return formData.name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      default: return true; // Steps 6 & 7 integrations/technicalRequirements are optional
    }
  };

  // Submit form data to Node.js backend
  const handleSubmit = async () => {
    if (!isStepValid()) return;
    setStatus("submitting");

    // Dynamic loader loader text cycles
    let loaderIndex = 0;
    const loaderInterval = setInterval(() => {
      loaderIndex = (loaderIndex + 1) % loadingMessages.length;
      setActiveLoaderMsg(loadingMessages[loaderIndex]);
    }, 2500);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

    try {
      const response = await fetch(`${API_URL}/api/estimate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      clearInterval(loaderInterval);

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Internal Server Error");
      }

      const resData = await response.json();
      setAiReport(resData.report);
      setEstimatedRange(resData.budgetRange.displayString);
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      clearInterval(loaderInterval);
      console.error(err);
      setErrorMessage(err.message || "Something went wrong while connecting to the backend. Please ensure the server is running.");
      setStatus("error");
    }
  };

  // Simple custom Markdown rendering to display headers, bullet points, and inline styling
  const renderFormattedReport = (text: string) => {
    if (!text) return null;

    const sections = text.split(/(?=##\s+)/);

    return (
      <div className="grid grid-cols-1 gap-8 font-sans">
        {sections.map((section, idx) => {
          const lines = section.trim().split("\n");
          let heading = lines[0].replace(/^##\s+/, "").trim();
          const restText = lines.slice(1).join("\n").trim();

          if (!heading) return null;

          // Render specific cards depending on headings
          let cardIcon = <Layers className="h-5 w-5 text-accent" />;
          let accentGlow = "hover:shadow-[0_8px_30px_rgba(0,184,172,0.06)]";
          
          if (heading.includes("Complexity")) {
            cardIcon = <Cpu className="h-5 w-5 text-accent" />;
          } else if (heading.includes("Timeline")) {
            cardIcon = <Calendar className="h-5 w-5 text-accent" />;
          } else if (heading.includes("Team")) {
            cardIcon = <Users className="h-5 w-5 text-accent" />;
          } else if (heading.includes("Recommendations")) {
            cardIcon = <Code className="h-5 w-5 text-accent" />;
          } else if (heading.includes("Risks") || heading.includes("Challenges")) {
            cardIcon = <AlertTriangle className="h-5 w-5 text-amber-500" />;
            accentGlow = "hover:shadow-[0_8px_30px_rgba(245,158,11,0.06)] border-amber-500/20";
          } else if (heading.includes("AIRIZZ") || heading.includes("Advantage")) {
            cardIcon = <Sparkles className="h-5 w-5 text-accent animate-pulse" />;
            accentGlow = "border-accent bg-accent-bg/10 shadow-[0_8px_30px_rgba(0,184,172,0.08)]";
          } else if (heading.includes("Investment") || heading.includes("Budget")) {
            // We'll skip the default rendering of investment range here because we display a massive summary card
            return null; 
          }

          // Parse markdown content locally into bullets or paragraphs
          const paragraphs = restText.split("\n\n");

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className={`bg-surface border border-border p-6 md:p-8 rounded-[12px] transition-all ${accentGlow}`}
            >
              <div className="flex items-center gap-3 mb-4 border-b border-border pb-3">
                {cardIcon}
                <h3 className="text-[17px] font-bold text-text tracking-tight font-sans">{heading}</h3>
              </div>
              <div className="text-text-2 text-sm leading-relaxed space-y-4 font-sans">
                {paragraphs.map((p, pIdx) => {
                  if (p.trim().startsWith("-") || p.trim().startsWith("*")) {
                    const listItems = p.trim().split(/\n[\-*]\s+/);
                    return (
                      <ul key={pIdx} className="list-none space-y-2.5 my-2">
                        {listItems.map((li, liIdx) => {
                          const cleanItem = li.replace(/^[\-*]\s+/, "").trim();
                          if (!cleanItem) return null;
                          return (
                            <li key={liIdx} className="flex gap-2.5 items-start text-xs sm:text-sm">
                              <span className="h-5 w-5 shrink-0 rounded-full bg-accent-bg border border-accent/20 flex items-center justify-center text-accent mt-0.5 font-mono text-[9px] font-bold">✓</span>
                              <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(cleanItem) }} />
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                  
                  return (
                    <p 
                      key={pIdx} 
                      className="text-xs sm:text-sm leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(p) }} 
                    />
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const formatInlineMarkdown = (str: string) => {
    return str
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-surface-2 px-1.5 py-0.5 rounded text-accent font-mono text-xs">$1</code>');
  };

  return (
    <div className="min-h-screen bg-bg text-text py-16 md:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* State: Estimating Wizard */}
        {status === "idle" && (
          <div>
            {/* Steps Progress Tracker */}
            <div className="mb-12 flex flex-col items-center">
              {/* Desktop Progress Indicators */}
              <div className="hidden md:flex items-center gap-1.5 w-full justify-center">
                {Array.from({ length: TOTAL_STEPS }).map((_, idx) => {
                  const sNum = idx + 1;
                  const isCompleted = step > sNum;
                  const isActive = step === sNum;
                  
                  return (
                    <React.Fragment key={idx}>
                      <button 
                        onClick={() => sNum < step && setStep(sNum)}
                        disabled={sNum >= step}
                        className={`h-8 w-8 rounded-full border flex items-center justify-center text-xs font-semibold transition-all ${
                          isCompleted 
                            ? "bg-transparent border-accent text-accent cursor-pointer hover:bg-accent-bg" 
                            : isActive 
                            ? "bg-accent border-accent text-text-inv font-bold shadow-[0_0_15px_rgba(0,184,172,0.3)]" 
                            : "bg-surface border-border-2 text-text-3 cursor-not-allowed"
                        }`}
                      >
                        {sNum}
                      </button>
                      {idx < TOTAL_STEPS - 1 && (
                        <div className={`h-[1px] w-8 lg:w-12 transition-colors duration-300 ${
                          step > sNum ? "bg-accent" : "bg-border-2"
                        }`} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Mobile Progress Indicator */}
              <div className="md:hidden flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-mono tracking-wider uppercase text-text-3 font-semibold">
                  Step {step} of {TOTAL_STEPS}
                </span>
                <div className="flex gap-1 h-1 w-48 bg-surface-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Steps Rendering */}
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="bg-surface border border-border rounded-[16px] p-6 md:p-10 shadow-[0_8px_30px_rgba(9,30,54,0.02)] min-h-[420px] flex flex-col justify-between"
              >
                <div>
                  {/* Step 1: Project Type */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        What are you looking to build?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Select the option that matches your product category description.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectTypes.map(item => {
                          const isActive = formData.projectType === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleSingleSelect("projectType", item.id)}
                              className={`border rounded-[10px] p-4 cursor-pointer transition-all duration-200 ${
                                isActive 
                                  ? "border-accent bg-accent-bg text-text shadow-[0_4px_20px_rgba(0,184,172,0.06)]" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text"
                              }`}
                            >
                              <h4 className="text-xs font-semibold uppercase font-sans tracking-wide mb-1.5 flex justify-between items-center">
                                <span>{item.title}</span>
                                {isActive && <Check className="h-3.5 w-3.5 text-accent shrink-0" />}
                              </h4>
                              <p className="text-text-3 text-[11px] leading-relaxed">{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Stage */}
                  {step === 2 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        What stage are you currently at?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        This details design readiness which impacts engineering scoping.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {stages.map(item => {
                          const isActive = formData.stage === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleSingleSelect("stage", item.id)}
                              className={`border rounded-[10px] p-5 cursor-pointer transition-all duration-200 ${
                                isActive 
                                  ? "border-accent bg-accent-bg shadow-[0_4px_20px_rgba(0,184,172,0.06)]" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2"
                              }`}
                            >
                              <h4 className="text-xs font-semibold uppercase tracking-wide mb-1.5 flex justify-between items-center">
                                <span>{item.title}</span>
                                {isActive && <Check className="h-3.5 w-3.5 text-accent shrink-0" />}
                              </h4>
                              <p className="text-text-3 text-[11px] leading-relaxed">{item.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Monetization */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        How do you plan to monetize your product?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Select all monetization strategies that apply.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {monetizationOptions.map(item => {
                          const isActive = formData.monetization.includes(item.id);
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleMultiSelect("monetization", item.id)}
                              className={`border rounded-[10px] p-4 cursor-pointer transition-all duration-200 flex justify-between items-start ${
                                isActive 
                                  ? "border-accent bg-accent-bg text-text shadow-[0_4px_20px_rgba(0,184,172,0.06)]" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text"
                              }`}
                            >
                              <div className="pr-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wide mb-1">{item.id}</h4>
                                <p className="text-text-3 text-[10px] leading-relaxed">{item.title}</p>
                              </div>
                              <div className={`h-4 w-4 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                                isActive ? "bg-accent border-accent text-text-inv" : "border-border-2 bg-transparent"
                              }`}>
                                {isActive && <Check className="h-2.5 w-2.5" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Platforms */}
                  {step === 4 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        Where should your product work?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-2">
                        Select target devices and client screens.
                      </p>
                      <p className="text-amber-500 font-mono text-[10px] text-center uppercase tracking-wider mb-8">
                        ⚠️ Each additional platform increases development effort and project cost.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {platforms.map(item => {
                          const isActive = formData.platforms.includes(item.id);
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleMultiSelect("platforms", item.id)}
                              className={`border rounded-[10px] p-4 cursor-pointer transition-all duration-200 flex justify-between items-start ${
                                isActive 
                                  ? "border-accent bg-accent-bg text-text shadow-[0_4px_20px_rgba(0,184,172,0.06)]" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text"
                              }`}
                            >
                              <div>
                                <h4 className="text-xs font-semibold uppercase tracking-wide mb-1">{item.title}</h4>
                                <p className="text-text-3 text-[10px] leading-relaxed">{item.desc}</p>
                              </div>
                              <div className={`h-4 w-4 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                                isActive ? "bg-accent border-accent text-text-inv" : "border-border-2 bg-transparent"
                              }`}>
                                {isActive && <Check className="h-2.5 w-2.5" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Features categorized */}
                  {step === 5 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        What key features will your product require?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Choose necessary building blocks of your technical architecture.
                      </p>
                      
                      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                        {featureCategories.map(cat => (
                          <div key={cat.category} className="border-t border-border pt-4 first:border-0 first:pt-0">
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent mb-3">{cat.category}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {cat.items.map(item => {
                                const isActive = formData.features.includes(item.id);
                                return (
                                  <div
                                    key={item.id}
                                    onClick={() => handleMultiSelect("features", item.id)}
                                    className={`border rounded-[8px] p-3 cursor-pointer text-xs transition-all flex justify-between items-center ${
                                      isActive 
                                        ? "border-accent bg-accent-bg font-medium text-text shadow-[0_4px_12px_rgba(0,184,172,0.04)]" 
                                        : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text"
                                    }`}
                                  >
                                    <span className="pr-1">{item.title}</span>
                                    <div className={`h-3.5 w-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                      isActive ? "bg-accent border-accent text-text-inv" : "border-border-2 bg-transparent"
                                    }`}>
                                      {isActive && <Check className="h-2 w-2" />}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 6: Integrations */}
                  {step === 6 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        What integrations will your project require?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Connecting to existing platforms (Optional).
                      </p>
                      <div className="flex flex-wrap gap-2.5 justify-center max-w-2xl mx-auto">
                        {integrations.map(item => {
                          const isActive = formData.integrations.includes(item);
                          return (
                            <button
                              key={item}
                              onClick={() => handleMultiSelect("integrations", item)}
                              className={`px-4 py-2 rounded-full border text-xs font-sans font-medium transition-all cursor-pointer ${
                                isActive 
                                  ? "border-accent bg-accent text-text-inv font-semibold shadow-[0_4px_12px_rgba(0,184,172,0.15)]" 
                                  : "border-border bg-surface text-text-2 hover:border-border-2 hover:text-text"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 7: Advanced requirements */}
                  {step === 7 && (
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        Do you have any advanced technical requirements?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        These constraints affect database and pipeline configuration (Optional).
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {technicalRequirements.map(item => {
                          const isActive = formData.technicalRequirements.includes(item.id);
                          return (
                            <div
                              key={item.id}
                              onClick={() => handleMultiSelect("technicalRequirements", item.id)}
                              className={`border rounded-[10px] p-4 cursor-pointer transition-all duration-200 flex justify-between items-start ${
                                isActive 
                                  ? "border-accent bg-accent-bg text-text shadow-[0_4px_20px_rgba(0,184,172,0.06)]" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text"
                              }`}
                            >
                              <div className="pr-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wide mb-1">{item.title}</h4>
                                <p className="text-text-3 text-[10px] leading-relaxed">{item.desc}</p>
                              </div>
                              <div className={`h-4 w-4 rounded border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                                isActive ? "bg-accent border-accent text-text-inv" : "border-border-2 bg-transparent"
                              }`}>
                                {isActive && <Check className="h-2.5 w-2.5" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 8: Project Scope description */}
                  {step === 8 && (
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        Describe Your Project
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Provide as much context as possible to help our AI architect analyze your requirements.
                      </p>
                      <div className="relative">
                        <textarea
                          value={formData.description}
                          onChange={(e) => handleSingleSelect("description", e.target.value)}
                          rows={6}
                          placeholder="Describe your idea in as much detail as possible. Explain your users, workflows, goals, competitors, and functionality you'd like to include."
                          className="w-full bg-bg border border-border rounded-[12px] p-5 text-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none font-sans leading-relaxed"
                        />
                        <div className="absolute bottom-4 right-4 text-[10px] font-mono font-medium text-text-3">
                          {formData.description.trim().length} / 50 characters min
                        </div>
                      </div>
                      {formData.description.trim().length > 0 && formData.description.trim().length < 50 && (
                        <p className="text-[10px] text-amber-500 font-mono mt-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                          <AlertCircle className="h-3.5 w-3.5" />
                          <span>Requires {50 - formData.description.trim().length} more characters to validate</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Step 9: Budget expectations */}
                  {step === 9 && (
                    <div className="max-w-xl mx-auto">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        What is your budget expectation?
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-2">
                        This parameters aligns development phase priorities.
                      </p>
                      <p className="text-accent font-mono text-[10px] text-center uppercase tracking-wider mb-8">
                        💡 This helps us provide a more realistic recommendation.
                      </p>
                      <div className="grid gap-3">
                        {budgets.map(b => {
                          const isActive = formData.budgetExpectation === b;
                          return (
                            <div
                              key={b}
                              onClick={() => handleSingleSelect("budgetExpectation", b)}
                              className={`border rounded-[10px] px-5 py-4 cursor-pointer transition-all flex justify-between items-center ${
                                isActive 
                                  ? "border-accent bg-accent-bg text-text shadow-[0_4px_12px_rgba(0,184,172,0.06)] font-medium" 
                                  : "border-border bg-surface hover:border-border-2 hover:bg-surface-2 text-text-2"
                              }`}
                            >
                              <span>{b}</span>
                              <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isActive ? "bg-accent border-accent text-text-inv" : "border-border-2 bg-transparent"
                              }`}>
                                {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Step 10: Lead Information */}
                  {step === 10 && (
                    <div className="max-w-md mx-auto">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-text text-center mb-2">
                        Secure Your AI Estimate
                      </h2>
                      <p className="text-text-2 text-xs md:text-sm text-center mb-8">
                        Enter your contact details. The analysis report will load instantly.
                      </p>
                      <div className="grid gap-4">
                        <div>
                          <label htmlFor="name" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1.5">Full Name *</label>
                          <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleSingleSelect("name", e.target.value)}
                            placeholder="Enter your name"
                            className="w-full bg-bg border border-border rounded-[8px] px-4 py-3.5 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1.5">Business Email *</label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleSingleSelect("email", e.target.value)}
                            placeholder="you@company.com"
                            className="w-full bg-bg border border-border rounded-[8px] px-4 py-3.5 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1.5">Company Name</label>
                            <input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleSingleSelect("company", e.target.value)}
                              placeholder="Your Company Pvt Ltd"
                              className="w-full bg-bg border border-border rounded-[8px] px-4 py-3.5 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1.5">WhatsApp Number</label>
                            <input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleSingleSelect("phone", e.target.value)}
                              placeholder="+91 99000 00000"
                              className="w-full bg-bg border border-border rounded-[8px] px-4 py-3.5 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Next / Back navigation row */}
                <div className="flex items-center justify-between border-t border-border pt-6 mt-8 font-sans">
                  <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-border-2 rounded-[6px] transition-colors cursor-pointer ${
                      step === 1 
                        ? "text-text-3 opacity-40 cursor-not-allowed" 
                        : "text-text hover:bg-surface-2 hover:border-border-3"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>

                  {step < TOTAL_STEPS ? (
                    <button
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-[6px] transition-all cursor-pointer ${
                        isStepValid()
                          ? "bg-accent text-text-inv hover:bg-accent-2 shadow-[0_4px_12px_rgba(0,184,172,0.15)]"
                          : "bg-surface-3 border border-border text-text-3 cursor-not-allowed"
                      }`}
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={!isStepValid()}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-6 py-3 rounded-[6px] transition-all cursor-pointer ${
                        isStepValid()
                          ? "bg-accent text-text-inv hover:bg-accent-2 shadow-[0_4px_15px_rgba(0,184,172,0.25)]"
                          : "bg-surface-3 border border-border text-text-3 cursor-not-allowed"
                      }`}
                    >
                      <Sparkles className="h-4 w-4 animate-pulse" />
                      <span>✨ Generate AI Estimate</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* State: Loading/Generating */}
        {status === "submitting" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface border border-border rounded-[16px] p-12 text-center shadow-[0_8px_30px_rgba(9,30,54,0.02)] min-h-[400px] flex flex-col justify-center items-center"
          >
            <div className="relative mb-6">
              <div className="h-16 w-16 rounded-full border-2 border-border-2 border-t-accent animate-spin" />
              <Sparkles className="h-6 w-6 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <h3 className="text-[17px] font-bold text-text mb-2 font-sans">Analyzing Project Architecture</h3>
            <p className="text-text-2 text-xs md:text-sm max-w-sm mb-6 leading-relaxed">
              Our AI estimator is parsing your metrics and calculating resources required to deliver this build.
            </p>
            <div className="bg-surface-2 border border-border rounded-lg px-4 py-2 text-[11px] font-mono text-text-3 tracking-wider">
              {activeLoaderMsg}
            </div>
          </motion.div>
        )}

        {/* State: Error */}
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface border border-border rounded-[16px] p-12 text-center shadow-[0_8px_30px_rgba(9,30,54,0.02)] min-h-[400px] flex flex-col justify-center items-center"
          >
            <AlertCircle className="h-16 w-16 text-red mb-4" />
            <h3 className="text-[17px] font-bold text-text mb-2 font-sans">Estimation Failed</h3>
            <p className="text-text-2 text-xs md:text-sm max-w-sm mb-6 leading-relaxed">
              {errorMessage}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 bg-accent text-text-inv rounded-[6px] hover:bg-accent-2 transition-all cursor-pointer shadow-[0_4px_12px_rgba(0,184,172,0.15)]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retry Wizard</span>
            </button>
          </motion.div>
        )}

        {/* State: Success Consulting Report */}
        {status === "success" && (
          <div>
            {/* Investment Summary Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface border-2 border-accent/30 p-8 rounded-[16px] text-center mb-10 shadow-[0_16px_36px_rgba(0,184,172,0.08)] relative overflow-hidden"
              style={{
                background: "radial-gradient(circle at top, rgba(0, 184, 172, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-accent" />
              
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-accent-bg px-2.5 py-1 rounded-[6px] border border-accent/10 inline-flex items-center gap-1.5 mb-4">
                <DollarSign className="h-3.5 w-3.5" />
                Target Investment Estimate
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-text tracking-tight mt-1 mb-2 font-sans">
                {estimatedRange}
              </h1>
              
              <p className="text-text-2 text-xs md:text-sm max-w-lg mx-auto leading-relaxed mb-4">
                This project scope estimate represents a realistic, professional investment window based on calculated work hours.
              </p>
              
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-3 uppercase tracking-wider">
                <span>✓ Final pricing is negotiable and may vary after a discovery call.</span>
              </div>
            </motion.div>

            {/* Structured AI Report blocks */}
            <div className="mb-12">
              {renderFormattedReport(aiReport)}
            </div>

            {/* Bottom Bookings Call-To-Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-surface border border-border p-8 md:p-12 rounded-[16px] text-center shadow-[0_8px_30px_rgba(9,30,54,0.03)]"
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text mb-2 font-sans">
                Ready to discuss your project?
              </h3>
              <p className="text-text-2 text-xs md:text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Book a free 30-minute scoping workshop. We will review your technical classification, refine details, and draft a final fixed-fee quote.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  className="px-6 py-3 text-xs md:text-sm font-semibold rounded-[6px]"
                >
                  Book A Discovery Call
                </CTAButton>
                <CTAButton
                  href="/contact"
                  variant="secondary"
                  className="px-6 py-3 text-xs md:text-sm font-semibold rounded-[6px]"
                >
                  Get Detailed Proposal
                </CTAButton>
              </div>
              
              <div className="flex justify-center gap-6 text-[10px] font-mono tracking-wider uppercase text-text-3 font-semibold mt-6">
                <span>✓ RESPONSE WITHIN 24 HOURS</span>
                <span>✓ NO-STRINGS SCRATCH PROPOSAL</span>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
}
