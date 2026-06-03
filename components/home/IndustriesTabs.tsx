"use client";

import React, { useState } from "react";
import { Store, Briefcase, Factory, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

const tabData = [
  {
    id: "traditional-sme",
    name: "Traditional SME",
    icon: Store,
    title: "Modernizing the Operations of Tomorrow",
    desc: "We recognize that traditional businesses face unique hurdles. Our localized approach brings tailored data management, seamless CRM automation, and generative AI into legacy systems without disrupting your ongoing business.",
    bullets: [
      "Legacy system integrations",
      "Automated quoting & invoicing workflows",
      "Customer service AI agents"
    ],
    linkText: "Explore SME Solutions →",
    linkHref: "/industries/traditional-sme",
    stat: "44% Less Work",
    statLabel: "Manual task time reduction"
  },
  {
    id: "legal-finance",
    name: "Legal & Finance",
    icon: Briefcase,
    title: "AI Built for Compliance-First Industries",
    desc: "We help legal firms and financial services companies automate the repetitive without compromising the rigorous. Secure, vector-indexed semantic portals speed up research and onboarding compliance checks.",
    bullets: [
      "Contract review automation",
      "Compliance tracking dashboards",
      "Client onboarding AI agents"
    ],
    linkText: "Explore Legal & Finance Solutions →",
    linkHref: "/industries/legal-finance",
    stat: "2X Speed",
    statLabel: "Faster onboarding cycles"
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Logistics",
    icon: Factory,
    title: "Precision Automation for Complex Operations",
    desc: "From ERP integrations to predictive analytics — we help manufacturers and logistics operators make faster decisions with cleaner data, reducing shipment reconciliation lags.",
    bullets: [
      "ERP and supply chain integration",
      "Automated billing & invoicing",
      "Predictive analytics dashboards"
    ],
    linkText: "Explore Manufacturing Solutions →",
    linkHref: "/industries/manufacturing",
    stat: "62% Fewer Errors",
    statLabel: "Billing reconciliation audit"
  }
];

export default function IndustriesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(0);

  const active = tabData[activeTab];

  return (
    <section className="relative py-24 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Solutions by Industry</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Sector-Specific Deployments
            </h2>
          </FadeUp>
        </div>

        {/* Desktop Tab System */}
        <div className="hidden md:block">
          {/* Tabs Control Row */}
          <div className="flex justify-center gap-4 mb-12">
            {tabData.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isSelected = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border-brand-cyan text-white shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                      : "border-white/5 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  <TabIcon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Tab Content Box */}
          <div className="glass rounded-3xl p-10 min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              >
                {/* Left content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {active.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {active.desc}
                    </p>

                    <ul className="grid gap-3 mb-8">
                      {active.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-xs text-zinc-300">
                          <CheckCircle className="h-4 w-4 text-brand-cyan shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <CTAButton
                      href={active.linkHref}
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      {active.linkText}
                    </CTAButton>
                  </div>
                </div>

                {/* Right stats highlight */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="p-8 rounded-2xl bg-zinc-950/60 border border-white/5 text-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple block mb-2">
                      {active.stat}
                    </span>
                    <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                      {active.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion System */}
        <div className="md:hidden grid gap-4">
          {tabData.map((tab, idx) => {
            const TabIcon = tab.icon;
            const isOpen = mobileOpenIdx === idx;
            return (
              <div 
                key={tab.id} 
                className="glass rounded-2xl border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-sm bg-zinc-950/40 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <TabIcon className="h-4 w-4 text-brand-cyan" />
                    <span>{tab.name}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform ${isOpen ? "rotate-180 text-brand-cyan" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-zinc-950/10 border-t border-white/5"
                    >
                      <div className="p-5 flex flex-col gap-6">
                        <div>
                          <h4 className="font-bold text-white text-base mb-2">{tab.title}</h4>
                          <p className="text-zinc-400 text-xs leading-relaxed mb-4">{tab.desc}</p>
                          <ul className="grid gap-2">
                            {tab.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2 items-center text-[11px] text-zinc-300">
                                <CheckCircle className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="py-4 border-y border-white/5 text-center">
                          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple block mb-1">
                            {tab.stat}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                            {tab.statLabel}
                          </span>
                        </div>

                        <Link
                          href={tab.linkHref}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
                        >
                          <span>{tab.linkText}</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
