"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GridLines from "../animations/GridLines";
import CTAButton from "../shared/CTAButton";
import FadeUp from "../animations/FadeUp";

const phrases = [
  "kill manual work",
  "automate work",
  "scale intelligently",
  "faster decisions",
  "ERP systems",
  "build products"
];

const serviceImages = [
  {
    src: "/hero/product-engineering.png",
    alt: "Product Engineering Dashboard Mockup",
    title: "AI Product Engineering"
  },
  {
    src: "/hero/ai-consulting.png",
    alt: "AI Consulting Workflow Mockup",
    title: "AI Consulting & Workflows"
  },
  {
    src: "/hero/data-integration.png",
    alt: "Data Integration Pipeline Mockup",
    title: "Secure Data Integration"
  },
  {
    src: "/hero/marketing-automation.png",
    alt: "Marketing Automation Flow Mockup",
    title: "Marketing Automation"
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(phraseInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % serviceImages.length);
    }, 3800); // Shift every 3.8 seconds for an asynchronous premium feel
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section
      className="relative flex items-center overflow-hidden pt-8 pb-12 md:pt-10 md:pb-16 lg:pt-12 lg:pb-20"
      style={{
        backgroundColor: "var(--bg2)",
        background: "radial-gradient(ellipse 85% 45% at 50% -10%, rgba(0, 184, 172, 0.05) 0%, rgba(248, 250, 252, 0) 100%)"
      }}
    >
      {/* Grid Pattern overlay */}
      <GridLines />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-surface text-[11px] font-mono font-medium text-text-3 uppercase mb-6">
                AI · Data · Automation
              </div>
            </FadeUp>

            {/* Carousel Headline */}
            <FadeUp delay={0.2} className="w-full">
              <h1 className="text-text font-bold leading-[1.1] tracking-tighter mb-6 font-sans text-left flex flex-col items-start" style={{ fontSize: "clamp(2.0rem, 5vw, 4rem)" }}>
                <span className="block">Engineering</span>
                <span className="block">the Future</span>
                <span className="flex flex-wrap items-baseline gap-x-4">
                  <span>with AI for</span>
                  <span className="inline-block h-[1.15em] relative overflow-hidden min-w-[280px] sm:min-w-[440px] lg:min-w-[540px] text-accent align-bottom">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={index}
                        initial={{ y: "80%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-80%", opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute left-0 whitespace-nowrap"
                      >
                        {phrases[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
              </h1>
            </FadeUp>

            {/* Subheadline */}
            <FadeUp delay={0.3}>
              <p className="text-text-2 text-[15px] sm:text-base md:text-lg font-normal leading-[1.6] max-w-[540px] mb-8 text-left">
                We build scalable AI applications, integrate complex data systems, and automate core workflows to drive measurable efficiency.
              </p>
            </FadeUp>

            {/* CTA row */}
            <FadeUp delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 justify-start">
                <CTAButton
                  href="/estimate"
                  variant="primary"
                  className=" px-[25px] py-[15px] text-md font-bold rounded-[6px]"
                >
                Your Project Estimation
                </CTAButton>
                <CTAButton
                  href="/services"
                  variant="secondary"
                  className="px-[25px] py-[15px] text-md font-bold rounded-[6px]"
                >
                  Explore Services
                </CTAButton>
              </div>

              <div className="font-mono text-[11px] text-text-3 tracking-[0.05em] mt-6 text-left">
                Free Cost Estimation Tool· Book Free 30-min call · Response in 24hrs
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Carousel of Mockups */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            <FadeUp delay={0.3} className="w-full max-w-md lg:max-w-none">
              
              {/* Card Container Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface border border-border rounded-2xl p-2.5 shadow-[0_8px_30px_rgb(9,30,54,0.06)] flex flex-col justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-bg border border-border">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={imageIndex}
                      initial={{ x: 120, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -120, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <img
                        src={serviceImages[imageIndex].src}
                        alt={serviceImages[imageIndex].alt}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Dots and Active Title */}
              <div className="flex flex-col items-center gap-2.5 mt-4 w-full">
                <span className="text-[11px] font-mono text-text-3 uppercase tracking-wider font-semibold">
                  {serviceImages[imageIndex].title}
                </span>
                
                <div className="flex gap-1.5">
                  {serviceImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-250 cursor-pointer ${
                        imageIndex === i ? "w-6 bg-accent" : "w-1.5 bg-border-2"
                      }`}
                      title={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </FadeUp>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
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
