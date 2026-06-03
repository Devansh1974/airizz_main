"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

export default function BottomCTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[280px] bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeUp delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Get Started Today</span>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight max-w-2xl">
            Let&rsquo;s Build Your Business Autopilot
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            Schedule a free 20-minute operational assessment. We will audit your current workflows, locate bottlenecks, and propose an implementation plan.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              glow
              icon={<Calendar className="h-4 w-4" />}
            >
              Book Audit Session
            </CTAButton>
            <CTAButton
              href="/pricing"
              variant="secondary"
              size="lg"
            >
              View Pricing Models
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
