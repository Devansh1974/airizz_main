"use client";

import React, { useState } from "react";
import { Store, Briefcase, Factory, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { industriesData } from "@/content/data/industries";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

const iconMap = {
  Store: Store,
  Briefcase: Briefcase,
  Factory: Factory,
};

type IconNameType = keyof typeof iconMap;

export default function IndustriesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const activeIndustry = industriesData[activeTab];
  const IconComponent = iconMap[activeIndustry.iconName as IconNameType] || Briefcase;

  return (
    <section className="relative py-24 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Target Sectors</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Tailored Industry Frameworks
            </h2>
          </FadeUp>
        </div>

        {/* Tabs Control Row */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {industriesData.map((ind, idx) => {
            const TabIcon = iconMap[ind.iconName as IconNameType] || Briefcase;
            const isSelected = activeTab === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border-brand-cyan text-white shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                    : "border-white/5 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-white/10"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Box */}
        <div className="glass rounded-3xl p-6 md:p-10 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left detail column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      AI Solutions for {activeIndustry.name}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                    {activeIndustry.details}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pain Points */}
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-red-400/80 mb-3 flex items-center gap-1.5">
                        <HelpCircle className="h-3.5 w-3.5" />
                        Key Friction Points
                      </h4>
                      <ul className="grid gap-2 text-xs text-zinc-500">
                        {activeIndustry.painPoints.map((pt, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400/40 shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Systems */}
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-brand-cyan/80 mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Target Solutions
                      </h4>
                      <ul className="grid gap-2 text-xs text-zinc-400">
                        {activeIndustry.solutions.map((sol, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5 shadow-[0_0_4px_#00f3ff]" />
                            <div>
                              <strong className="text-zinc-200">{sol.title}:</strong> {sol.desc}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <CTAButton
                    href={`/industries/${activeIndustry.id}`}
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    View Industry Playbook
                  </CTAButton>
                </div>
              </div>

              {/* Right highlights column */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 blur-2xl rounded-full" />
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-1 rounded-full border border-brand-cyan/15 inline-block mb-4">
                    Client Case Highlight
                  </span>

                  <h4 className="text-base font-bold text-white mb-2">
                    {activeIndustry.clientCase.title}
                  </h4>
                  
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {activeIndustry.clientCase.description}
                  </p>

                  <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
                    <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                      {activeIndustry.clientCase.stat}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                      Measured Outcome
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
