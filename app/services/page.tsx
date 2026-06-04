import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain, Zap, Database, Users } from "lucide-react";
import { servicesData } from "@/content/data/services";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

export const metadata = generateSeoMetadata({
  title: "Our Services | AIRIZZ",
  description: "Explore our four core AI consulting, product engineering, data integration, and marketing automation practice areas.",
  path: "/services",
});

const iconMap = {
  Zap: Zap,
  Brain: Brain,
  TrendingUp: Database, // Map TrendingUp to Database for data integration icon
  Users: Users
};

type IconNameType = keyof typeof iconMap;

export default function ServicesPage() {
  return (
    <div className="bg-bg text-text py-16 md:py-24 min-h-[80vh] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Practice Areas</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mt-3 mb-6 font-sans">Our Services</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-text-2 text-[15px] font-normal max-w-2xl leading-relaxed">
              Four focused practice areas. Every engagement is outcome-driven, scoped, and delivered with full transparency.
            </p>
          </FadeUp>
        </div>

        {/* Services List Grid */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as IconNameType] || Brain;
            return (
              <div 
                key={service.id}
                className="group relative rounded-[12px] bg-surface border border-border p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-none"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Stats pills */}
                    <div className="flex gap-3 text-right">
                      <div className="px-3 py-1 rounded-[6px] bg-bg border border-border">
                        <span className="text-xs font-bold text-text block font-sans">{service.stat1.value}</span>
                        <span className="text-[8px] text-text-3 font-mono uppercase tracking-wider block mt-0.5">{service.stat1.label}</span>
                      </div>
                      <div className="px-3 py-1 rounded-[6px] bg-bg border border-border">
                        <span className="text-xs font-bold text-accent block font-sans">{service.stat2.value}</span>
                        <span className="text-[8px] text-text-3 font-mono uppercase tracking-wider block mt-0.5">{service.stat2.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-[20px] font-semibold text-text mb-2 font-sans">
                    {service.name}
                  </h3>
                  <h4 className="text-[13px] font-normal text-text-2 mb-6 italic leading-relaxed font-sans">
                    {service.headline}
                  </h4>
                  
                  <p className="text-text-2 text-xs md:text-sm leading-relaxed mb-8 font-sans">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-8 border-t border-border pt-6">
                    <h5 className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent mb-4">Core Deliverables</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-text-2 font-sans">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex gap-2 items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer link */}
                <div className="flex items-center justify-between border-t border-border pt-6 mt-auto font-sans">
                  <span className="text-xs font-medium text-text-3">
                    Starting at {service.pricing.starting}+
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-2 transition-colors"
                  >
                    <span>View Engagement Playbook</span>
                    <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </div>
    </div>
  );
}
