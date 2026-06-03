"use client";

import React from "react";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import FadeUp from "../animations/FadeUp";

const bottlenecks = [
  {
    title: "Manual Copy-Pasting",
    desc: "Staff spend hours migrating customer sheets to invoice files and ERP pipelines daily."
  },
  {
    title: "Missed WhatsApp Callbacks",
    desc: "Inquiries sit overnight without replies, resulting in customers moving to competitors."
  },
  {
    title: "Siloed Contract Files",
    desc: "Searching historical agreements or policies takes legal/finance hours of scanning."
  },
  {
    title: "Blind Operations",
    desc: "Management lacks central, real-time analytics to spot machine bottlenecks or sales leaks."
  }
];

const remedies = [
  {
    title: "API-Driven Autopilot",
    desc: "Trigger automatic invoicing and CRM updates immediately upon transaction events."
  },
  {
    title: "24/7 AI Catalog Responders",
    desc: "WhatsApp bots programmed with your price sheets response instantly to stock queries."
  },
  {
    title: "Semantic Search Indexing",
    desc: "Isolated vector databases allow staff to query document details in plain English."
  },
  {
    title: "Actionable BI Panels",
    desc: "Real-time Looker Studio dashboards displaying live shift logs and sales pipelines."
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Operational Friction</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Why Traditional Workflows Leak Revenue
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Compare the costs of manual operational lags against modern AI integrations.
            </p>
          </FadeUp>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bottlenecks */}
          <FadeUp delay={0.2} className="flex flex-col gap-8 bg-zinc-950/40 p-8 rounded-3xl border border-red-500/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Legacy Operations</h3>
            </div>

            <div className="grid gap-6">
              {bottlenecks.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="h-2 w-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <div>
                    <h4 className="font-semibold text-zinc-200 text-sm">{item.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right Column: Remedies */}
          <FadeUp delay={0.4} className="flex flex-col gap-8 bg-zinc-950/40 p-8 rounded-3xl border border-brand-cyan/15 relative">
            <div className="absolute inset-0 bg-brand-cyan/2 blur-[80px] pointer-events-none rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">AIRIZZ Integration</h3>
              </div>

              <div className="grid gap-6">
                {remedies.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-2 w-2 rounded-full bg-brand-cyan shrink-0 mt-2 shadow-[0_0_8px_#00f3ff]" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
