"use client";

import React from "react";
import { statsData } from "@/content/data/stats";
import CountUp from "../animations/CountUp";
import FadeUp from "../animations/FadeUp";
import StaggerChildren from "../animations/StaggerChildren";

const industries = [
  "Manufacturing",
  "Healthcare",
  "Finance",
  "Legal Services",
  "Retail",
  "Logistics"
];

export default function StatsBar() {
  return (
    <section 
      className="relative border-y border-[#1e3a5f]/30 py-16 overflow-hidden bg-[#0a2540] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Stats Grid */}
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className="text-center flex flex-col items-center justify-center p-6 border-r border-[#1e3a5f]/40 last:border-r-0 max-lg:border-b max-lg:even:border-r-0 max-lg:last:border-b-0 max-lg:[&:nth-last-child(2)]:border-b-0"
            >
              <span className="font-sans font-bold text-white leading-none tracking-tighter" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-sans text-[14px] font-normal text-blue-100 mt-2 leading-tight">
                {stat.label}
              </span>
              <span className="text-[11px] text-blue-300 mt-1.5 uppercase font-mono font-medium tracking-wider">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </StaggerChildren>
      </div>

      {/* Infinite Logo Marquee */}
      <FadeUp delay={0.3} className="w-full relative flex items-center justify-center py-4 bg-black/15 border-t border-[#1e3a5f]/40">
        {/* Fade gradients using stats section background colors */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a2540] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a2540] to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-marquee overflow-hidden whitespace-nowrap">
          {/* First slide */}
          <div className="flex justify-around min-w-full items-center gap-12 text-blue-200/80 text-xs md:text-sm font-semibold tracking-widest uppercase">
            {industries.map((ind, idx) => (
              <span key={idx} className="transition-colors duration-300">
                {ind}
              </span>
            ))}
          </div>
          {/* Duplicate slide for loop */}
          <div className="flex justify-around min-w-full items-center gap-12 text-blue-200/80 text-xs md:text-sm font-semibold tracking-widest uppercase">
            {industries.map((ind, idx) => (
              <span key={idx + industries.length} className="transition-colors duration-300">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
