"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticleCanvas from "../animations/ParticleCanvas";
import GlowBackground from "../animations/GlowBackground";
import GridLines from "../animations/GridLines";
import CTAButton from "../shared/CTAButton";
import FadeUp from "../animations/FadeUp";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#040d1a" }}
    >
      {/* Background aesthetics */}
      <GridLines />
      <GlowBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.08)_0%,transparent_60%)] pointer-events-none z-0" />
      <ParticleCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 text-xs text-brand-cyan font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Enterprise-Grade AI Solutions</span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.2}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-tight font-sans">
            We help Indian SMBs and scaling enterprises eliminate manual work, unify their data, and grow revenue — with bespoke AI.
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.3}>
          <p className="text-zinc-400 text-sm md:text-lg max-w-3xl mb-10 leading-relaxed">
            From CRM integrations and marketing automation to custom AI agents — AIRIZZ is the technical partner that turns your data into decisions.
          </p>
        </FadeUp>

        {/* Action CTAs */}
        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              glow
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Book Your Free Strategy Audit &rarr;
            </CTAButton>
            <CTAButton
              href="/services"
              variant="secondary"
              size="lg"
            >
              Explore Our Services
            </CTAButton>
          </div>
        </FadeUp>

        {/* Trust line below buttons */}
        <FadeUp delay={0.5} className="mt-12 text-zinc-500 text-xs md:text-sm max-w-2xl leading-relaxed">
          Trusted by innovative startups and scaling enterprises across Manufacturing &bull; Healthcare &bull; Finance &bull; Legal Services &bull; Retail &bull; Logistics
        </FadeUp>
      </div>
    </section>
  );
}
