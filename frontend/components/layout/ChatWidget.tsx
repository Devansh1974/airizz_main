"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  AlertCircle, 
  ArrowRight,
  Loader2,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- CLIENT-SIDE NAVIGATION CONFIGURATION ---
const navMap: Record<string, { url: string; label: string }> = {
  careers: { url: "/careers", label: "Careers Page" },
  jobs: { url: "/careers", label: "Careers Page" },
  internships: { url: "/careers", label: "Careers Page" },
  hiring: { url: "/careers", label: "Careers Page" },
  about: { url: "/about", label: "About AIRIZZ" },
  team: { url: "/about#team", label: "Leadership Team" },
  services: { url: "/services", label: "Our Services" },
  contact: { url: "/contact", label: "Contact Us" },
  portfolio: { url: "/case-studies", label: "Case Studies" },
  work: { url: "/case-studies", label: "Case Studies" },
  pricing: { url: "/pricing", label: "Pricing Calculator" },
  calculator: { url: "/estimate", label: "Estimator" },
  estimate: { url: "/estimate", label: "Estimator" },
  "cost estimation": { url: "/estimate", label: "Estimator" },
  blog: { url: "/blog", label: "Blog" }
};

interface LeadContext {
  name: string;
  company: string;
  email: string;
  productBrief: string;
  pageSource: string;
  sessionStart: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// --- CLIENT-SIDE INTENT DETECTOR ---
function detectIntent(message: string, isLeadSubmitted: boolean) {
  const lowercase = message.toLowerCase().trim();

  // Navigation verbs representing explicit navigation intents
  const navVerbs = [
    "take me to", "go to", "show me", "open", "visit", 
    "navigate to", "where is", "redirect to"
  ];

  // Exact page matches that trigger instant redirection
  const exactPageMatches = [
    "careers", "jobs", "internships", "hiring", "about", 
    "team", "services", "contact", "portfolio", "work", 
    "pricing", "calculator", "estimate", "cost estimation", "blog"
  ];

  const hasNavVerb = navVerbs.some(verb => lowercase.includes(verb));
  const isExactPageMatch = exactPageMatches.includes(lowercase);

  // Trigger navigation ONLY if user explicitly commands it or types the exact page name
  if (hasNavVerb || isExactPageMatch) {
    for (const [key, value] of Object.entries(navMap)) {
      if (lowercase.includes(key)) {
        return { type: "NAVIGATION" as const, targetUrl: value.url, label: value.label };
      }
    }
  }

  // 2. LEAD_FOLLOWUP Intent
  if (isLeadSubmitted) {
    const followUpKeywords = [
      "build", "make", "create", "develop", "feature", "integration", 
      "need", "want to", "designed", "requirements", "database", 
      "frontend", "backend", "app", "website", "software", "system", 
      "platform", "ai", "llm", "workflow", "actually", "also", "additionally"
    ];
    const hasFollowUpKeyword = followUpKeywords.some(keyword => lowercase.includes(keyword));
    if (hasFollowUpKeyword && message.length > 15) {
      return { type: "LEAD_FOLLOWUP" as const };
    }
  }

  // 3. GENERAL Intent
  return { type: "GENERAL" as const };
}

// --- UI SUB-COMPONENT: LEAD FORM ---
interface LeadFormProps {
  onSubmit: (lead: Omit<LeadContext, "pageSource" | "sessionStart">) => void;
  isLoading: boolean;
}

function LeadForm({ onSubmit, isLoading }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    productBrief: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.productBrief.trim()) {
      newErrors.productBrief = "Please describe what you are trying to build";
    } else if (formData.productBrief.trim().length < 10) {
      newErrors.productBrief = "Please provide a bit more detail (min 10 chars)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5 font-sans">
      <div className="text-center mb-1">
        <h3 className="text-base font-bold text-text">Consult an AI Architect</h3>
        <p className="text-text-3 text-xs mt-1">Tell us briefly about your project goals to initiate chat.</p>
      </div>

      <div>
        <label className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Your Name *</label>
        <input 
          type="text" 
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          disabled={isLoading}
          className={cn(
            "w-full h-10 px-3.5 bg-bg3 border text-xs text-text rounded-[6px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-sans",
            errors.name ? "border-red" : "border-border"
          )}
        />
        {errors.name && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{errors.name}</span>}
      </div>

      <div>
        <label className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Company Name *</label>
        <input 
          type="text" 
          value={formData.company}
          onChange={e => setFormData({ ...formData, company: e.target.value })}
          placeholder="Enter company name"
          disabled={isLoading}
          className={cn(
            "w-full h-10 px-3.5 bg-bg3 border text-xs text-text rounded-[6px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-sans",
            errors.company ? "border-red" : "border-border"
          )}
        />
        {errors.company && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{errors.company}</span>}
      </div>

      <div>
        <label className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Work Email *</label>
        <input 
          type="email" 
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@company.com"
          disabled={isLoading}
          className={cn(
            "w-full h-10 px-3.5 bg-bg3 border text-xs text-text rounded-[6px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-sans",
            errors.email ? "border-red" : "border-border"
          )}
        />
        {errors.email && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{errors.email}</span>}
      </div>

      <div>
        <label className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">What are you trying to build? *</label>
        <textarea 
          value={formData.productBrief}
          onChange={e => setFormData({ ...formData, productBrief: e.target.value })}
          rows={3}
          disabled={isLoading}
          placeholder="e.g. a mobile app, an e-commerce platform, a SaaS product..."
          className={cn(
            "w-full p-3 bg-bg3 border text-xs text-text rounded-[6px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all font-sans resize-none",
            errors.productBrief ? "border-red" : "border-border"
          )}
        />
        {errors.productBrief && <span className="text-[10px] text-red-500 font-mono mt-0.5 block">{errors.productBrief}</span>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-11 bg-accent text-text-inv font-bold text-sm rounded-[6px] hover:bg-accent-2 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Connecting...</span>
          </>
        ) : (
          <>
            <span>Start chatting</span>
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <span className="text-[10px] text-text-3 text-center -mt-1 leading-relaxed">
        We'll use this to personalise your experience. No spam, ever.
      </span>
    </form>
  );
}

// --- MAIN PORTABLE WIDGET COMPONENT ---
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLead] = useState<LeadContext | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

  // Load Lead on session initialization
  useEffect(() => {
    const saved = sessionStorage.getItem("airizz_chatbot_lead");
    if (saved) {
      try {
        const leadObj = JSON.parse(saved) as LeadContext;
        setLead(leadObj);
        
        // Populate initial greeting history since they are recurring
        const personalMsg: Message = {
          role: "assistant",
          content: `Welcome back, ${leadObj.name}! How can AIRIZZ help you scale or optimize your system today?`,
          timestamp: new Date()
        };
        setMessages([personalMsg]);
      } catch (err) {
        console.error("Error reading sessionStorage lead", err);
      }
    }
  }, []);

  // Scroll to bottom whenever messages list grows
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isBotTyping]);

  const handleLeadSubmit = async (formData: Omit<LeadContext, "pageSource" | "sessionStart">) => {
    setIsSubmittingLead(true);
    const newLeadObj: LeadContext = {
      ...formData,
      pageSource: window.location.pathname,
      sessionStart: new Date().toISOString()
    };

    try {
      // 1. Save locally
      setLead(newLeadObj);
      sessionStorage.setItem("airizz_chatbot_lead", JSON.stringify(newLeadObj));

      // 2. POST Lead immediately
      await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeadObj)
      });

      // 3. Initiate first message in Chat View
      const welcomeMessage: Message = {
        role: "assistant",
        content: `Hi ${formData.name}! Great to meet you. So you're working on ${formData.productBrief} — that's exactly the kind of project we love at AIRIZZ. What would you like to know first?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    } catch (err) {
      console.error("Failed to post lead info", err);
      // Still allow the user to transition to chat to not block UX
      const welcomeMessage: Message = {
        role: "assistant",
        content: `Hi ${formData.name}! Great to meet you. So you're working on ${formData.productBrief} — that's exactly the kind of project we love at AIRIZZ. What would you like to know first?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const sendMessageToBackend = async (chatMessages: Message[], currentLead: LeadContext) => {
    setIsBotTyping(true);
    const startTime = Date.now();
    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatMessages.map(m => ({ role: m.role, content: m.content })),
          leadContext: {
            name: currentLead.name,
            company: currentLead.company,
            productBrief: currentLead.productBrief,
            pageSource: currentLead.pageSource
          }
        })
      });

      // Ensure a natural delay of at least 1000ms
      const elapsedTime = Date.now() - startTime;
      const minDelay = 1200;
      if (elapsedTime < minDelay) {
        await new Promise(resolve => setTimeout(resolve, minDelay - elapsedTime));
      }

      if (response.status === 429) {
        const errJson = await response.json();
        const limitMessage: Message = {
          role: "assistant",
          content: errJson.message || "Too many messages — please wait a moment.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, limitMessage]);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const resData = await response.json();
      const botReply: Message = {
        role: "assistant",
        content: resData.content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botReply]);

    } catch (err) {
      console.error("Failed to fetch chat response", err);
      // Wait for at least some delay if error happened instantly
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < 1000) {
        await new Promise(resolve => setTimeout(resolve, 1000 - elapsedTime));
      }
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm having a brief technical moment — here's what I know: Please contact the AIRIZZ team directly at connect@airizz.co for accurate details.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  };

  const handleUserMessageSend = async (textToSend: string) => {
    if (!textToSend.trim() || !lead) return;

    // A. Add message to local UI
    const newUserMsg: Message = {
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setInputVal("");

    // B. Detect Intent
    const intent = detectIntent(textToSend, !!lead);

    if (intent.type === "NAVIGATION") {
      setIsBotTyping(true);
      // Canned response buffer delay for natural flow
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsBotTyping(false);

      // Open link in new tab
      window.open(intent.targetUrl, "_blank");
      
      // Add feedback chat message immediately
      const navReplyMsg: Message = {
        role: "assistant",
        content: `Opening ${intent.label} for you in a new tab!`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, navReplyMsg]);
      return;
    }

    if (intent.type === "LEAD_FOLLOWUP") {
      // Append product details to lead context and silent re-POST
      const updatedBrief = `${lead.productBrief}\nFollow-up: ${textToSend}`;
      const enrichedLeadObj = {
        ...lead,
        productBrief: updatedBrief
      };
      setLead(enrichedLeadObj);
      sessionStorage.setItem("airizz_chatbot_lead", JSON.stringify(enrichedLeadObj));

      // Post in background silently
      fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrichedLeadObj)
      }).catch(err => console.error("Silent lead enrichment post failed", err));

      // Proceed to Groq with updated context
      await sendMessageToBackend(updatedMessages, enrichedLeadObj);
      return;
    }

    // GENERAL intent
    await sendMessageToBackend(updatedMessages, lead);
  };

  const handleQuickOptionClick = async (path: string, label: string) => {
    // Log user choice
    const userClickMsg: Message = {
      role: "user",
      content: `Let's explore ${label}`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userClickMsg]);

    setIsBotTyping(true);
    // Simulate typing buffer
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsBotTyping(false);

    window.open(path, "_blank");
    
    const botNavMsg: Message = {
      role: "assistant",
      content: `Opening ${label} for you in a new tab!`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botNavMsg]);
  };

  return (
    <>
      {/* ── FLOAT CHAT BUBBLE ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-accent hover:bg-accent-2 text-text-inv flex items-center justify-center shadow-[0_4px_20px_rgba(0,184,172,0.35)] transition-all z-40 cursor-pointer group hover:scale-105"
        aria-label="Open Chat Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <MessageSquare className="h-6 w-6 transition-transform group-hover:scale-110 duration-200" />
        )}
      </button>

      {/* ── OVERLAY CHAT DIALOG CONTAINER ── */}
      <div
        className={cn(
          "fixed bottom-24 right-6 w-[380px] h-[580px] bg-surface border border-border shadow-[0_8px_40px_rgba(9,30,54,0.18)] rounded-2xl flex flex-col overflow-hidden z-40 transition-all duration-300 transform font-sans",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
          // Mobile Responsive Full-screen override
          "max-sm:fixed max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:z-50"
        )}
      >
        {/* Header (Matching AIRIZZ site navbar glass styling) */}
        <div className="h-14 border-b border-border bg-bg/95 backdrop-blur-md px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent-bg flex items-center justify-center border border-accent/25">
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
            <div>
              <span className="text-sm font-bold text-text block leading-none">AIRIZZ Assistant</span>
              <span className="text-[10px] text-accent font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                AI Consultant Active
              </span>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-text-2 hover:text-text hover:bg-surface-2 rounded-lg transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-hidden bg-bg/50">
          {!lead ? (
            // LEAD FORM SUBVIEW
            <div className="h-full overflow-y-auto" data-lenis-prevent>
              <LeadForm onSubmit={handleLeadSubmit} isLoading={isSubmittingLead} />
            </div>
          ) : (
            // CONVERSATION VIEW
            <div className="flex flex-col h-full">
              {/* Message scroll container */}
              <div 
                className="flex-grow overflow-y-auto p-4 space-y-4"
                data-lenis-prevent
              >
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex items-start gap-2.5 max-w-[85%]",
                      msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto flex-row"
                    )}
                  >
                    {/* Avatar */}
                    <div 
                      className={cn(
                        "h-8 w-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold font-mono border",
                        msg.role === "user" 
                          ? "bg-surface-3 text-text border-border" 
                          : "bg-accent-bg text-accent border-accent/20"
                      )}
                    >
                      {msg.role === "user" ? (
                        lead?.name ? lead.name.charAt(0).toUpperCase() : "U"
                      ) : (
                        <Sparkles className="h-4 w-4 text-accent" />
                      )}
                    </div>

                    {/* Bubble + Timestamp */}
                    <div className={cn("flex flex-col", msg.role === "user" ? "items-end" : "items-start")}>
                      <div 
                        className={cn(
                          "p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm",
                          msg.role === "user" 
                            ? "bg-accent text-text-inv rounded-tr-none" 
                            : "bg-surface text-text border border-border rounded-tl-none"
                        )}
                      >
                        {msg.content}
                      </div>
                      <span className="text-[9px] text-text-3 font-mono mt-1 px-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Bot Typing Simulator */}
                {isBotTyping && (
                  <div className="flex items-start gap-2.5 max-w-[85%] mr-auto flex-row">
                    <div className="h-8 w-8 rounded-full shrink-0 flex items-center justify-center text-xs bg-accent-bg text-accent border border-accent/20">
                      <Sparkles className="h-4 w-4 text-accent" />
                    </div>
                    <div className="p-3.5 bg-surface border border-border text-text rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
                      <span className="h-2 w-2 bg-accent rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-2 w-2 bg-accent rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-2 w-2 bg-accent rounded-full animate-bounce" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions Panel (Hides after first user prompt is sent) */}
              {messages.length === 1 && !isBotTyping && (
                <div className="px-4 py-2 bg-bg2/80 border-t border-border flex flex-col gap-2 shrink-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-3 block mb-0.5">Quick Actions</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleQuickOptionClick("/estimate", "Estimator")}
                      className="px-2.5 py-1.5 border border-border bg-surface hover:border-accent hover:text-accent rounded-lg text-left text-xs font-medium text-text-2 flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <span>Estimated Prices</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                    <button 
                      onClick={() => handleQuickOptionClick("/careers", "Careers")}
                      className="px-2.5 py-1.5 border border-border bg-surface hover:border-accent hover:text-accent rounded-lg text-left text-xs font-medium text-text-2 flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <span>Careers Page</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                    <button 
                      onClick={() => handleQuickOptionClick("/about", "About")}
                      className="px-2.5 py-1.5 border border-border bg-surface hover:border-accent hover:text-accent rounded-lg text-left text-xs font-medium text-text-2 flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <span>About AIRIZZ</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                    <button 
                      onClick={() => handleQuickOptionClick("/services", "Services")}
                      className="px-2.5 py-1.5 border border-border bg-surface hover:border-accent hover:text-accent rounded-lg text-left text-xs font-medium text-text-2 flex items-center justify-between group transition-all cursor-pointer"
                    >
                      <span>Our Services</span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Input Box */}
              <div className="p-3 bg-surface border-t border-border shrink-0">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === "Enter") handleUserMessageSend(inputVal);
                    }}
                    placeholder="Type your message..."
                    disabled={isBotTyping}
                    className="w-full h-10 pl-3.5 pr-10 bg-bg2 border border-border text-xs text-text rounded-[6px] focus:outline-none focus:border-accent transition-all font-sans"
                  />
                  <button
                    onClick={() => handleUserMessageSend(inputVal)}
                    disabled={!inputVal.trim() || isBotTyping}
                    className="absolute right-2.5 text-accent hover:text-accent-2 disabled:text-text-3 transition-colors cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
