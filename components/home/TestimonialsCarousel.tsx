"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { testimonialsData } from "@/content/data/testimonials";
import FadeUp from "../animations/FadeUp";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index, isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[index];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="relative py-24 md:py-32 bg-zinc-950/20 border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">What Our Clients Say</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              Delivering Measured Results
            </h2>
          </FadeUp>
        </div>

        {/* Carousel Box */}
        <div 
          className="relative min-h-[250px] flex items-center justify-center p-6 md:p-12 glass rounded-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Quote className="absolute top-6 left-6 h-12 w-12 text-white/5 select-none pointer-events-none" />

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col items-center"
            >
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl mb-8">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div>
                <h4 className="text-sm font-bold text-white">{active.author}</h4>
                <p className="text-zinc-500 text-xs mt-1">
                  {active.role} &bull; {active.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Row */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 hover:border-white/15 bg-zinc-950/40 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-1.5">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === i ? "w-6 bg-brand-cyan" : "w-1.5 bg-zinc-800"
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 hover:border-white/15 bg-zinc-950/40 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
