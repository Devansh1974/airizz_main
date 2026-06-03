"use client";

import React from "react";
import Link from "next/link";
import { Code, Brain, Database, TrendingUp, ArrowRight } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import StaggerChildren from "../animations/StaggerChildren";

const servicesList = [
  {
    id: "product-engineering",
    name: "Product Engineering",
    icon: Code,
    desc: "We build scalable AI-powered applications, high-performance SaaS platforms, and bespoke mobile solutions.",
    stat: "Avg. 3-week MVP delivery",
    href: "/services/product-engineering"
  },
  {
    id: "ai-consulting",
    name: "AI Consulting for SMB",
    icon: Brain,
    desc: "ROI-focused AI consulting to help SMBs leverage Generative AI, predictive analytics, and intelligent chatbots.",
    stat: "ROI visible in 60 days",
    href: "/services/ai-consulting",
    featured: true
  },
  {
    id: "data-integration",
    name: "Data Integration Services",
    icon: Database,
    desc: "We eliminate data silos by securely integrating your CRMs, ERPs, APIs, and marketing platforms into a unified source.",
    stat: "Avg. 2-week integration",
    href: "/services/data-integration"
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation Agency",
    icon: TrendingUp,
    desc: "Turn leads into loyal customers while you sleep. We design, implement, and optimise robust marketing automation workflows.",
    stat: "3X average lead conversion",
    href: "/services/marketing-automation"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-zinc-950/20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <FadeUp delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">What We Do</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                Tailored Solutions for Modern Businesses
              </h2>
            </FadeUp>
          </div>
        </div>

        {/* Services Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative rounded-3xl glass-interactive p-8 flex flex-col justify-between min-h-[300px] overflow-hidden ${
                  service.featured ? "border-l-4 border-l-brand-cyan" : ""
                }`}
              >
                {/* Background soft glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-white/5 text-brand-cyan group-hover:text-white group-hover:bg-brand-cyan/25 transition-all duration-300 mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-sm mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Footer link & stat */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold">
                    {service.stat}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
