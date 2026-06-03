"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

export default function CaseStudyTeaser() {
  return (
    <section className="relative py-24 md:py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeUp delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Success Stories</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                Proven Consulting Outcomes
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>

        {/* Highlight Banner */}
        <FadeUp delay={0.3}>
          <div className="relative rounded-3xl overflow-hidden glass p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Soft lighting */}
            <div className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="lg:max-w-xl relative z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/15 inline-flex items-center gap-1.5 mb-6">
                <BarChart2 className="h-3 w-3" />
                Logistics &bull; Data Integration
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                How We Reduced Invoice Processing Errors by 62% for a Mumbai Logistics Firm
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                By integrating a real-time data sync pipeline across custom database structures, we automated the freight audit process, eliminating manual data reconciliation loops.
              </p>

              <CTAButton
                href="/case-studies/logistics-billing-automation"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Read Case Study &rarr;
              </CTAButton>
            </div>

            {/* Metrics cards */}
            <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col gap-4 relative z-10">
              <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/5 text-center lg:text-left min-w-[180px]">
                <span className="text-2xl md:text-3xl font-extrabold text-white block">62%</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1 block">Fewer errors</span>
              </div>
              
              <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/5 text-center lg:text-left min-w-[180px]">
                <span className="text-2xl md:text-3xl font-extrabold text-brand-cyan block">3-day &rarr; overnight</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1 block">Reconciliation speed</span>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950/50 border border-white/5 text-center lg:text-left col-span-2 md:col-span-1 min-w-[180px]">
                <span className="text-2xl md:text-3xl font-extrabold text-brand-purple block">₹18L</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1 block">Saved annually</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
