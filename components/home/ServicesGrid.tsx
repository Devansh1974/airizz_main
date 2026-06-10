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
    <section id="services" className="relative py-24 md:py-32 bg-bg border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">What We Do</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Tailored Solutions for Modern Businesses
            </h2>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative rounded-[12px] p-6 flex flex-col justify-between min-h-[260px] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,184,172,0.06)] hover:translate-y-[-4px] ${
                  service.featured 
                    ? "bg-surface border border-border-3" 
                    : "bg-surface border border-border"
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-start text-accent mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-[16px] font-medium text-text mb-2 font-sans">
                    {service.name}
                  </h3>
                  <p className="text-text-2 text-[14px] leading-relaxed max-w-md mb-6 font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Footer link & stat */}
                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-text-3 font-medium">
                    {service.stat}
                  </span>
                  <div className="flex items-center gap-1 text-[13px] font-normal text-accent group-hover:text-accent-2 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
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
