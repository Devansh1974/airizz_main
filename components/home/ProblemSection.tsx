"use client";

import React from "react";
import { Database, Clock, Puzzle } from "lucide-react";
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
    <section className="relative py-24 md:py-32 bg-bg-2 overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Operational Hurdles</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              The Real Cost of Fragmented Systems
            </h2>
          </FadeUp>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pain Point Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {painPoints.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <FadeUp 
                  key={idx} 
                  delay={0.1 * idx} 
                  className="flex gap-5 p-6 rounded-[12px] bg-surface border border-border items-start transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,184,172,0.06)] hover:translate-y-[-4px]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-text text-[15px]">{item.title}</h4>
                    <p className="text-text-2 text-[14px] mt-2 leading-relaxed">{item.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Right Column: Statement & Copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeUp delay={0.2}>
              <h3 className="font-sans font-semibold text-text tracking-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Stop Guessing. <span className="text-accent">Start Scaling.</span>
              </h3>
            </FadeUp>
            <FadeUp delay={0.3} className="flex flex-col gap-4 text-text-2 text-[15px] font-normal leading-relaxed">
              <p>
                Is your business trapped in data silos? Are your marketing and sales teams wasting hours on manual tasks? In the modern digital landscape, fragmented systems and outdated processes don't just cost time — they cost revenue.
              </p>
              <p className="text-[14px] text-text-3">
                At AIRIZZ, we bridge the gap between your raw data and actionable growth.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
