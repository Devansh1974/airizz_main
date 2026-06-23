"use client";

import React from "react";
import { Code, Brain, Database, TrendingUp } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const servicesList = [
  {
    id: "product-engineering",
    name: "Product Engineering",
    icon: Code,
    desc: "We build scalable AI-powered applications, high-performance SaaS platforms, and bespoke mobile solutions.",
    stat: "Avg. 3-week MVP delivery",
    href: "/services/product-engineering",
    mockup: "/hero/product-engineering.png"
  },
  {
    id: "ai-consulting",
    name: "AI Consulting for SMB",
    icon: Brain,
    desc: "ROI-focused AI consulting to help SMBs leverage Generative AI, predictive analytics, and intelligent chatbots.",
    stat: "ROI visible in 60 days",
    href: "/services/ai-consulting",
    mockup: "/hero/ai-consulting.png"
  },
  {
    id: "data-integration",
    name: "Data Integration Services",
    icon: Database,
    desc: "We eliminate data silos by securely integrating your CRMs, ERPs, APIs, and marketing platforms into a unified source.",
    stat: "Avg. 2-week integration",
    href: "/services/data-integration",
    mockup: "/hero/data-integration.png"
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation Agency",
    icon: TrendingUp,
    desc: "Turn leads into loyal customers while you sleep. We design, implement, and optimise robust marketing automation workflows.",
    stat: "3X average lead conversion",
    href: "/services/marketing-automation",
    mockup: "/hero/marketing-automation.png"
  }
];

export default function ServicesGrid() {
  const content = servicesList.map((service) => {
    const IconComponent = service.icon;
    return {
      title: service.name,
      description: (
        <div className="flex flex-col items-start gap-4">
          <p className="text-text-2 text-sm md:text-base leading-relaxed">
            {service.desc}
          </p>
          
          {/* Stat indicator */}
          <div className="inline-flex items-center px-2.5 py-1 rounded-[6px] border border-accent-border bg-accent-bg text-[10px] font-mono font-medium text-accent uppercase tracking-wider">
            {service.stat}
          </div>

          {/* Action button */}
          <div className="pt-4">
            <CTAButton
              href={service.href}
              variant="primary"
              className="px-5 py-2.5 text-xs md:text-sm rounded-[6px] font-medium"
            >
              Explore Full Playbook & Pricing →
            </CTAButton>
          </div>
        </div>
      ),
      content: (
        <div className="relative w-full h-full overflow-hidden bg-bg flex items-center justify-center p-1.5">
          <img
            src={service.mockup}
            alt={service.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )
    };
  });

  return (
    <section id="services" className="relative bg-bg border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        {/* Section Header */}
        <div>
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">What We Do</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Tailored Solutions for Modern Businesses
            </h2>
          </FadeUp>
        </div>
      </div>

      {/* Sticky Scroll Reveal */}
      <StickyScroll content={content} />
    </section>
  );
}
