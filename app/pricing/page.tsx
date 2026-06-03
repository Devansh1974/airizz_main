"use client";

import React, { useState } from "react";
import { Check, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

const pricingTiers = [
  {
    name: "Workflow Automations",
    starting: "₹45,000 / month",
    description: "Best for connecting APIs, automating daily spreadsheets, and building WhatsApp alerts.",
    features: [
      "Custom Zapier / Make.com flows",
      "Spreadsheet-to-invoice automation",
      "WhatsApp dispatch alerts",
      "API failure monitoring",
      "Bi-weekly system updates"
    ]
  },
  {
    name: "AI & Custom LLM Core",
    starting: "₹90,000 / month",
    description: "Best for law panels, wealth managers, and firms looking to query private SOP archives.",
    features: [
      "Secure Vector DB chunking",
      "RAG document search widgets",
      "Custom prompt guardrails",
      "24/7 client auto-responders",
      "PII redaction validation",
      "Weekly analytics dashboards"
    ]
  },
  {
    name: "Enterprise Architecture",
    starting: "Custom Quote",
    description: "Best for factories, multi-branch distributors, and high-frequency background queues.",
    features: [
      "On-premise / private cloud deploy",
      "Real-time event ETL streaming",
      "Custom Looker Studio BI panels",
      "Dedicated developer support SLA",
      "99.9% uptime guarantees",
      "Regulatory audit compliance"
    ]
  }
];

const faqs = [
  {
    q: "How do you ensure data security with internal documents?",
    a: "We configure isolated vector namespaces and localized enterprise servers. Your operational SOPs, contracts, and emails are never mixed with public training sets or shared APIs."
  },
  {
    q: "What happens if an API connection breaks after deployment?",
    a: "All our workflows are engineered with automatic retry-queues, fallback paths, and alert triggers. Retainer plans include continuous background check auditing and maintenance."
  },
  {
    q: "Can you connect with legacy software like Tally or custom local ERPs?",
    a: "Yes! We build bridge scripts that export local file schedules (like XML/CSV) and ingest them into cloud databases via secure webhooks, bridging legacy setups with modern AI dashboards."
  },
  {
    q: "How long does a typical workflow project take?",
    a: "Standard API automations and dashboard connections are deployed in 2 to 4 weeks. Bespoke multi-agent RAG search engines typically require 6 to 8 weeks of prompt staging."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Clear Models</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Pragmatic Engagement Plans</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Select an ongoing integration plan or book a consultation to map custom project scopes.
            </p>
          </FadeUp>
        </div>

        {/* Pricing Cards Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                idx === 1
                  ? "bg-zinc-950/60 border-brand-cyan/25 shadow-[0_8px_30px_rgba(0,243,255,0.02)]"
                  : "bg-zinc-950/20 border-white/5"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-6">{tier.description}</p>
                <span className="text-2xl md:text-3xl font-extrabold text-white block mt-4 mb-6">{tier.starting}</span>
                
                <ul className="grid gap-3 pt-6 border-t border-white/5 text-xs text-zinc-400 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <Check className="h-4 w-4 text-brand-cyan shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton
                href="/contact"
                variant={idx === 1 ? "primary" : "outline"}
                className="w-full mt-auto"
              >
                Get Started
              </CTAButton>
            </div>
          ))}
        </StaggerChildren>

        {/* Engagement Models Explanation */}
        <section className="mb-24 py-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple font-mono">Our Methods</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-6">How We Work With You</h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  AI operations scale over time. We structure our consulting to support you at every stage, from initial database audits to continuous monthly pipeline improvements.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              <FadeUp delay={0.2} className="p-6 rounded-2xl bg-zinc-950/40 border border-white/5">
                <h4 className="text-sm font-bold text-white">Project-Based Setup (Fixed Scope)</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Best for well-defined integrations (e.g. setting up a Looker Studio data warehouse or building a custom RAG search widget for standard law manuals). We scope, design, test, and hand over the keys in 4 to 8 weeks.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="p-6 rounded-2xl bg-zinc-950/40 border border-white/5">
                <h4 className="text-sm font-bold text-white">Ongoing Integration Retainer</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Best for businesses expanding their AI footprint continuously. We act as your on-call AI automation team, monitoring webhook logs, updating vector database archives, adding new WhatsApp sequences, and optimizing system prompts monthly.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Accordion FAQ Section */}
        <section className="max-w-3xl mx-auto py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <FadeUp delay={0.1}>
              <h2 className="text-2xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
            </FadeUp>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeUp key={idx} delay={0.1 * idx} className="border-b border-white/5 pb-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-4 text-sm font-bold text-white hover:text-brand-cyan transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-350 ${isOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-zinc-400 leading-relaxed pb-2 pt-1 pr-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FadeUp>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
