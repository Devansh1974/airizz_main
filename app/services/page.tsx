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
    <div className="bg-black text-white py-16 md:py-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Practice Areas</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-6">Our Services</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Four focused practice areas. Every engagement is outcome-driven, scoped, and delivered with full transparency.
            </p>
          </FadeUp>
        </div>

        {/* Services List Grid */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as IconNameType] || Brain;
            return (
              <div 
                key={service.id}
                className="group relative rounded-3xl glass p-8 md:p-10 flex flex-col justify-between overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 blur-2xl pointer-events-none" />

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 border border-white/5 text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>

                    {/* Stats pills */}
                    <div className="flex gap-3 text-right">
                      <div className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5">
                        <span className="text-xs font-extrabold text-white block">{service.stat1.value}</span>
                        <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">{service.stat1.label}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-zinc-900 border border-white/5">
                        <span className="text-xs font-extrabold text-brand-cyan block">{service.stat2.value}</span>
                        <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider block">{service.stat2.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {service.name}
                  </h3>
                  <h4 className="text-xs font-semibold text-zinc-400 mb-6 italic leading-relaxed">
                    {service.headline}
                  </h4>
                  
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-8 border-t border-white/5 pt-6">
                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-brand-purple mb-4">Core Deliverables</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-400">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex gap-2 items-center">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer link */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                  <span className="text-xs font-bold text-zinc-500">
                    Starting at {service.pricing.starting}+
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan group-hover:text-white transition-colors"
                  >
                    <span>View Engagement Playbook</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
