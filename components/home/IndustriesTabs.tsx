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
    <section className="relative py-24 md:py-32 bg-bg border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Solutions by Industry</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Sector-Specific Deployments
            </h2>
          </FadeUp>
        </div>

        {/* Desktop Tab System */}
        <div className="hidden md:block">
          {/* Tabs Control Row */}
          <div className="flex justify-start mb-12">
            <div className="inline-flex gap-1 p-1 bg-surface border border-border rounded-[8px]">
              {tabData.map((tab, idx) => {
                const TabIcon = tab.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-4 py-2 text-[14px] font-sans font-medium rounded-[6px] transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-bg text-text shadow-[0_1px_4px_rgba(0,0,0,0.3)] border border-transparent"
                        : "text-text-2 hover:text-text bg-transparent border border-transparent"
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Tab Content Box */}
          <div className="bg-surface border border-border rounded-[12px] p-8 min-h-[380px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Left content */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-medium text-text mb-4 font-sans">
                      {active.title}
                    </h3>
                    <p className="text-text-2 text-[14px] leading-relaxed mb-6 font-sans">
                      {active.desc}
                    </p>

                    <ul className="grid gap-3 mb-8">
                      {active.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-[13px] text-text-2">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
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
                      icon={<ArrowRight className="h-3.5 w-3.5 text-accent" />}
                    >
                      {active.linkText}
                    </CTAButton>
                  </div>
                </div>

                {/* Right stats highlight */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="p-8 rounded-[8px] bg-bg border border-border text-center">
                    <span className="text-3xl font-bold text-accent block mb-2 font-sans">
                      {active.stat}
                    </span>
                    <span className="text-[11px] text-text-3 font-mono uppercase tracking-wider">
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
                className="bg-surface border border-border rounded-[8px] overflow-hidden"
              >
                <button
                  onClick={() => setMobileOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left text-text font-medium text-sm bg-surface-2 cursor-pointer border-none"
                >
                  <div className="flex items-center gap-2">
                    <TabIcon className="h-4 w-4 text-accent" />
                    <span>{tab.name}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-text-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-accent" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden bg-surface border-t border-border"
                    >
                      <div className="p-4 flex flex-col gap-6">
                        <div>
                          <h4 className="font-semibold text-text text-sm mb-2">{tab.title}</h4>
                          <p className="text-text-2 text-xs leading-relaxed mb-4">{tab.desc}</p>
                          <ul className="grid gap-2">
                            {tab.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2 items-center text-[11px] text-text-2">
                                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="py-4 border-y border-border text-center bg-bg-2 rounded-[6px]">
                          <span className="text-2xl font-bold text-accent block mb-1 font-sans">
                            {tab.stat}
                          </span>
                          <span className="text-[10px] text-text-3 font-mono uppercase tracking-wider block">
                            {tab.statLabel}
                          </span>
                        </div>

                        <Link
                          href={tab.linkHref}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-2 transition-colors"
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
