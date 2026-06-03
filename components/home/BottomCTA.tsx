"use client";

import React from "react";
import { Calendar } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

export default function BottomCTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[300px] bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeUp delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Get Started Today</span>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight max-w-2xl font-sans">
            Ready to build your AI advantage?
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-zinc-300 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
            Join forward-thinking Indian businesses leveraging AIRIZZ to automate operations, unify data, and accelerate growth. Let's map your AI roadmap in 30 minutes.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col items-center gap-6 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              glow
              icon={<Calendar className="h-4 w-4" />}
            >
              Book Your Free 30-Min Strategy Audit &rarr;
            </CTAButton>

            {/* Reassurance Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-500 text-xs mt-2 justify-center font-medium">
              <span>&bull; No commitment required</span>
              <span>&bull; Get a custom AI roadmap</span>
              <span>&bull; Response within 24 hours</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
