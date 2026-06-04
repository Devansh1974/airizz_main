"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GridLines from "../animations/GridLines";
import CTAButton from "../shared/CTAButton";
import FadeUp from "../animations/FadeUp";

const phrases = [
  "kill manual work",
  "unify scattered data",
  "automate work",
  "scale intelligently",
  "faster decisions",
  "build products"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 md:py-32"
      style={{
        backgroundColor: "var(--bg)",
        background: "radial-gradient(ellipse 80% 40% at 50% -10%, rgba(0, 200, 180, 0.07) 0%, transparent 100%)"
      }}
    >
      {/* Grid Pattern overlay */}
      <GridLines />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border-2 bg-surface text-[11px] font-mono font-medium text-text-3 uppercase mb-8">
            AI · Data · Automation
          </div>
        </FadeUp>

        {/* Carousel Headline */}
        <FadeUp delay={0.2} className="w-full">
          <h1 className="flex flex-col items-center justify-center text-center text-text font-semibold leading-[1.05] tracking-tighter mb-8 font-sans" style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}>
            <span className="block text-text">We help businesses</span>
            <span className="block h-[1.15em] relative overflow-hidden w-full flex items-center justify-center my-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: "80%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-80%", opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute text-accent block"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block text-text">with AI.</span>
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.3}>
          <p className="text-text-2 text-[17px] font-normal leading-[1.65] max-w-[520px] mx-auto mb-10">
            From CRM integrations to custom AI agents — we're the technical partner that turns your data into revenue.
          </p>
        </FadeUp>

        {/* CTA row */}
        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              className="px-[22px] py-[10px] text-sm font-medium rounded-[6px]"
            >
              Book Free Strategy Audit
            </CTAButton>
            <CTAButton
              href="/case-studies"
              variant="secondary"
              className="px-[22px] py-[10px] text-sm font-medium rounded-[6px]"
            >
              See Our Work
            </CTAButton>
          </div>

          <div className="font-mono text-[11px] text-text-3 tracking-[0.05em] mt-6">
            No commitment · Free 30-min call · Response in 24hrs
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-text-3 cursor-pointer"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
