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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Background aesthetics */}
      <GridLines />
      <GlowBackground />
      <ParticleCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/25 bg-brand-cyan/5 text-xs text-brand-cyan font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>AI Operations & Workflows On Autopilot</span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Automate Your Operations. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple glow-cyan">
              Scale Your Revenue.
            </span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.3}>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mb-10 leading-relaxed">
            We integrate custom AI agents, automated CRM pipelines, and vector-backed knowledge portals specifically designed for Indian SMEs, legal teams, and manufacturers.
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
              Get Free AI Audit
            </CTAButton>
            <CTAButton
              href="#services"
              variant="secondary"
              size="lg"
            >
              Explore Services
            </CTAButton>
          </div>
        </FadeUp>

        {/* Subtle Tech Indicators */}
        <FadeUp delay={0.5} className="mt-16 text-zinc-600 text-[10px] uppercase tracking-widest flex items-center gap-3">
          <span>Enterprise Secure</span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
          <span>React 19 Ready</span>
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
          <span>Local Data Compliance</span>
        </FadeUp>
      </div>
    </section>
  );
}
