"use client";

import React from "react";
import Link from "next/link";
import { Zap, Users, Brain, TrendingUp, ArrowRight } from "lucide-react";
import { servicesData } from "@/content/data/services";
import FadeUp from "../animations/FadeUp";
import StaggerChildren from "../animations/StaggerChildren";

const iconMap = {
  Zap: Zap,
  Users: Users,
  Brain: Brain,
  TrendingUp: TrendingUp,
};

type IconNameType = keyof typeof iconMap;

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-zinc-950/20 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <FadeUp delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Core Expertise</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
                Bespoke AI Solutions
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base max-w-md">
              We design and construct operational integrations tailored to your specific database structures and standard guidelines.
            </p>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName as IconNameType] || Brain;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative rounded-3xl glass-interactive p-8 flex flex-col justify-between min-h-[300px] overflow-hidden"
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
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 group-hover:text-white transition-colors mt-auto">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
