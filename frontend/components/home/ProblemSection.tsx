"use client";

import React from "react";
import { Database, Clock, Puzzle } from "lucide-react";
import FadeUp from "../animations/FadeUp";

const painPoints = [
  {
    icon: Database,
    title: "Scattered Data Silos",
    body: "Your CRM, ERP, and marketing tools don't talk to each other. Decisions are made on incomplete, stale information.",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #3b82f6 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  },
  {
    icon: Clock,
    title: "Manual Tasks Eating Hours",
    body: "Your team spends more time on repetitive data entry and reporting than on work that actually grows revenue.",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #0099ff 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  },
  {
    icon: Puzzle,
    title: "Fragmented Tools, No Unified View",
    body: "Dozens of disconnected platforms mean no single source of truth — and no way to measure what's actually working.",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #6366f1 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  }
];

export default function ProblemSection() {
  return (
    <section className="relative py-16 md:py-20 bg-bg-2 overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
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
                  className="group service-card flex gap-5 p-6 rounded-[12px] bg-surface border border-border items-start"
                  style={{
                    "--card-hover-shadow": item.shadow,
                    "--card-accent-rgb": item.rgb,
                    "--card-accent-color": item.color,
                    "--card-bg-glow": item.bgGlow,
                    "--card-gradient": item.gradient,
                  } as React.CSSProperties}
                >
                  {/* Custom glowing accent border lines */}
                  <div className="service-card-accent-line-t" />
                  <div className="service-card-accent-line-l" />

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-2 service-card-icon relative z-10">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-sans font-medium text-text text-[15px]">{item.title}</h4>
                    <p className="text-text-2 text-[14px] mt-2 leading-relaxed">{item.body}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Right Column: Connected Growth Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <FadeUp delay={0.2} className="w-full max-w-[480px]">
              <div className="relative w-full overflow-hidden bg-surface border border-border rounded-2xl p-2.5 shadow-[0_8px_30px_rgba(9,30,54,0.03)] flex flex-col justify-center">
                <img
                  src="/connected-growth.png"
                  alt="Stop Guessing. Start Scaling. Data Connected, Growth Unlocked."
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
