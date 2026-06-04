"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

export default function CaseStudyTeaser() {
  return (
    <section className="relative py-24 md:py-32 bg-bg border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <FadeUp delay={0.1}>
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Success Stories</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
                Proven Consulting Outcomes
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2 transition-colors group"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </FadeUp>
        </div>

        {/* Highlight Banner */}
        <FadeUp delay={0.3}>
          <div className="relative rounded-[12px] bg-surface border border-border p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-xl relative z-10">
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-3 py-1 rounded-[6px] border border-border-2 inline-flex items-center gap-1.5 mb-6">
                <BarChart2 className="h-3.5 w-3.5" />
                Logistics &bull; Data Integration
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-text mb-4 leading-snug font-sans">
                How We Reduced Invoice Processing Errors by 62% for a Mumbai Logistics Firm
              </h3>

              <p className="text-text-2 text-[14px] leading-relaxed mb-6 font-sans">
                By integrating a real-time data sync pipeline across custom database structures, we automated the freight audit process, eliminating manual data reconciliation loops.
              </p>

              <CTAButton
                href="/case-studies/logistics-billing-automation"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="h-3.5 w-3.5 text-accent" />}
              >
                Read Case Study
              </CTAButton>
            </div>

            {/* Metrics cards */}
            <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col gap-4 relative z-10">
              <div className="p-5 rounded-[8px] bg-bg border border-border text-center lg:text-left min-w-[180px]">
                <span className="text-2xl md:text-3xl font-bold text-text block font-sans">62%</span>
                <span className="text-[11px] text-text-3 font-mono uppercase tracking-wider mt-1 block">Fewer errors</span>
              </div>
              
              <div className="p-5 rounded-[8px] bg-bg border border-border text-center lg:text-left min-w-[180px]">
                <span className="text-2xl md:text-3xl font-bold text-accent block font-sans">3-day &rarr; overnight</span>
                <span className="text-[11px] text-text-3 font-mono uppercase tracking-wider mt-1 block">Reconciliation speed</span>
              </div>

              <div className="p-5 rounded-[8px] bg-bg border border-border text-center lg:text-left col-span-2 md:col-span-1 min-w-[180px]">
                <span className="text-2xl md:text-3xl font-bold text-text block font-sans">₹18L</span>
                <span className="text-[11px] text-text-3 font-mono uppercase tracking-wider mt-1 block">Saved annually</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
