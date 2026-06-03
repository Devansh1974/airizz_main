"use client";

import React from "react";
import { Database, Clock, Puzzle, ArrowRight } from "lucide-react";
import FadeUp from "../animations/FadeUp";

const painPoints = [
  {
    icon: Database,
    title: "Scattered Data Silos",
    body: "Your CRM, ERP, and marketing tools don't talk to each other. Decisions are made on incomplete, stale information."
  },
  {
    icon: Clock,
    title: "Manual Tasks Eating Hours",
    body: "Your team spends more time on repetitive data entry and reporting than on work that actually grows revenue."
  },
  {
    icon: Puzzle,
    title: "Fragmented Tools, No Unified View",
    body: "Dozens of disconnected platforms mean no single source of truth — and no way to measure what's actually working."
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Operational Hurdles</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              The Real Cost of Fragmented Systems
            </h2>
          </FadeUp>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pain Point Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {painPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <FadeUp 
                  key={idx} 
                  delay={0.1 * idx} 
                  className="flex gap-5 p-6 rounded-2xl bg-zinc-950/40 border border-white/5 items-start"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-zinc-400 text-xs mt-2 leading-relaxed">{item.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Right Column: Statement & Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeUp delay={0.2}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">
                Stop Guessing. Start Scaling.
              </h3>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                Is your business trapped in data silos? Are your marketing and sales teams wasting hours on manual tasks? In the modern digital landscape, fragmented systems and outdated processes don't just cost time — they cost revenue.
              </p>
              <p className="text-zinc-400 text-xs md:text-sm mt-4 leading-relaxed">
                At AIRIZZ, we bridge the gap between your raw data and actionable growth.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
