"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

const pricingTiers = [
  {
    name: "Starter",
    price: "₹50K–₹2L",
    forWho: "Single service, defined scope, SMBs",
    features: [
      "Initial systems audit",
      "Scoped project delivery",
      "Comprehensive system documentation",
      "30-day post-delivery support"
    ],
    ctaText: "Get Starter Proposal →",
    popular: false
  },
  {
    name: "Growth Partnership",
    price: "₹2L–₹10L",
    forWho: "Multi-service, ongoing retainer, scaling companies",
    features: [
      "Everything in Starter",
      "Multi-service data integrations",
      "Dedicated Point of Contact (POC)",
      "Continuous monthly workflow optimisation"
    ],
    ctaText: "Get Growth Proposal →",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    forWho: "Full AI transformation, dedicated team pod",
    features: [
      "Everything in Growth",
      "Custom generative AI agents",
      "Strict Service Level Agreements (SLAs)",
      "Dedicated engineering pod",
      "Executive performance reporting"
    ],
    ctaText: "Talk to Enterprise Team →",
    popular: false
  }
];

const faqs = [
  {
    q: "What's included in the free strategy audit?",
    a: "A 30-minute call where we review your current systems, identify your top 3 automation opportunities, and give you a prioritised roadmap. No sales pitch — just actionable intelligence."
  },
  {
    q: "Do you offer payment in installments?",
    a: "Yes. For engagements above ₹1L, we offer a 50/50 split: 50% at kickoff, 50% on delivery. For retainer engagements, monthly billing is standard."
  },
  {
    q: "How long does a typical engagement last?",
    a: "Starter projects: 3–6 weeks. Growth partnerships: ongoing (minimum 3-month commitment). Enterprise engagements: scoped individually."
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, if there's a clear automation or integration challenge. We're most effective when there's an existing operation to optimise — even if it's small."
  },
  {
    q: "What industries do you serve?",
    a: "Manufacturing, logistics, legal services, finance, healthcare, retail, and traditional SMEs across India. We're expanding to SaaS and edtech in 2026."
  },
  {
    q: "Do I need a technical team to work with you?",
    a: "No. We handle all technical implementation. You describe the problem and approve the outputs — we handle everything in between."
  },
  {
    q: "What if my requirements change mid-project?",
    a: "We use a change request process. Small changes are absorbed; larger scope changes are costed transparently before any additional work begins."
  },
  {
    q: "Can I see examples of past work?",
    a: "Yes — visit our Case Studies page. We share anonymised case studies with full metrics for all client engagements."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#040d1a] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Pricing Options</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Transparent Investment</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Project-based pricing. Outcome-driven engagements. No hidden costs, no lock-ins.
            </p>
          </FadeUp>
        </div>

        {/* Pricing Cards Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border flex flex-col justify-between relative ${
                tier.popular
                  ? "bg-[#071428] border-brand-cyan/25 shadow-[0_8px_30px_rgba(0,243,255,0.05)]"
                  : "bg-zinc-950/20 border-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 right-6 bg-brand-cyan text-black text-[9px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <span className="text-[10px] text-brand-cyan font-mono block mb-4">{tier.forWho}</span>
                <span className="text-3xl md:text-4xl font-extrabold text-white block my-6">{tier.price}</span>
                
                <ul className="grid gap-3 pt-6 border-t border-white/5 text-xs text-zinc-400 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton
                href="/contact"
                variant={tier.popular ? "primary" : "outline"}
                className="w-full mt-auto"
              >
                {tier.ctaText}
              </CTAButton>
            </div>
          ))}
        </StaggerChildren>

        {/* How We Charge Section */}
        <section className="mb-24 py-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple font-mono">Engagement Models</span>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-6">How We Charge</h2>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  We believe in pricing that scales with your success. Every engagement starts with a scoped audit — you know the exact investment before any work begins. No hourly surprises. No scope creep without your approval.
                </p>
              </FadeUp>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              <FadeUp delay={0.2} className="p-6 rounded-2xl bg-[#071428] border border-white/5">
                <h4 className="text-sm font-bold text-white">Fixed Scope Project</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Ideal for first engagements, clear deliverable, fixed price.
                </p>
              </FadeUp>

              <FadeUp delay={0.3} className="p-6 rounded-2xl bg-[#071428] border border-white/5">
                <h4 className="text-sm font-bold text-white">Monthly Retainer</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Ongoing optimisation, dedicated hours, predictable cost.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="p-6 rounded-2xl bg-[#071428] border border-white/5">
                <h4 className="text-sm font-bold text-white">Dedicated Pod</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Enterprise scale, full-time AIRIZZ team embedded in your operations.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Accordion FAQ Section */}
        <section className="max-w-3xl mx-auto py-16 border-t border-white/5">
          <div className="text-center mb-12">
            <FadeUp delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </FadeUp>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <FadeUp key={idx} delay={0.05 * idx} className="border-b border-white/5 pb-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-4 text-sm font-bold text-white hover:text-brand-cyan transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-zinc-500 shrink-0" />
                      {faq.q}
                    </span>
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
                        <p className="text-xs text-zinc-400 leading-relaxed pb-4 pt-1 pl-6">
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
