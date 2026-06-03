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
      className="relative border-y border-white/5 py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: "#071428" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Stats Grid */}
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className="text-center flex flex-col items-center justify-center p-6 rounded-2xl glass-interactive"
            >
              <span className="text-3xl md:text-5xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-white font-semibold mt-2 tracking-wider">
                {stat.label}
              </span>
              <span className="text-[10px] text-zinc-400 mt-1 uppercase font-mono tracking-widest">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </StaggerChildren>
      </div>

      {/* Infinite Logo Marquee */}
      <FadeUp delay={0.3} className="w-full relative flex items-center justify-center py-4 bg-black/40 border-t border-white/5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#071428] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#071428] to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-marquee overflow-hidden whitespace-nowrap">
          {/* First slide */}
          <div className="flex justify-around min-w-full items-center gap-12 text-zinc-500 text-xs md:text-sm font-semibold tracking-widest uppercase">
            {industries.map((ind, idx) => (
              <span key={idx} className="hover:text-brand-cyan transition-colors duration-300">
                {ind}
              </span>
            ))}
          </div>
          {/* Duplicate slide for loop */}
          <div className="flex justify-around min-w-full items-center gap-12 text-zinc-500 text-xs md:text-sm font-semibold tracking-widest uppercase">
            {industries.map((ind, idx) => (
              <span key={idx + industries.length} className="hover:text-brand-cyan transition-colors duration-300">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
