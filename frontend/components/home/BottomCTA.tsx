"use client";

import React from "react";
import { Calendar } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import CTAButton from "../shared/CTAButton";

export default function BottomCTA() {
  return (
    <section className="relative py-24 bg-surface border-y border-border">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeUp delay={0.1}>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Get Started Today</span>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-4 mb-6 leading-tight max-w-2xl font-sans">
            Ready to build your AI advantage?
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-text-2 text-[15px] font-normal max-w-xl mb-10 leading-relaxed font-sans">
            Join forward-thinking Indian businesses leveraging AIRIZZ to automate operations, unify data, and accelerate growth. Let's map your AI roadmap in 30 minutes.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-col items-center gap-6 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              className="px-[22px] py-[10px] text-sm font-medium rounded-[6px]"
              icon={<Calendar className="h-4 w-4" />}
            >
              Book Your Free 30-Min Strategy Audit
            </CTAButton>

            {/* Reassurance Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-3 text-[11px] font-mono tracking-wider mt-2 justify-center font-medium">
              <span>NO COMMITMENT REQUIRED</span>
              <span>GET A CUSTOM AI ROADMAP</span>
              <span>RESPONSE WITHIN 24 HOURS</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
