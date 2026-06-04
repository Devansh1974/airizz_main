"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/content/data/testimonials";
import FadeUp from "../animations/FadeUp";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000); // Auto-scroll slide every 5 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0
    })
  };

  return (
    <section className="relative py-24 md:py-32 bg-bg-2 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">What Our Clients Say</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Delivering Measured Results
            </h2>
          </FadeUp>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Wrapper */}
          <div className="relative min-h-[320px] md:min-h-[260px] overflow-hidden bg-surface border border-border rounded-xl p-8 md:p-12 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col h-full justify-between items-center text-center"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex gap-1 justify-center mb-6 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-sans text-base md:text-lg font-normal leading-relaxed text-text-2 italic max-w-2xl">
                    &ldquo;{testimonialsData[index].quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-8">
                  <cite className="not-italic font-sans text-[15px] font-semibold text-text">
                    {testimonialsData[index].author}
                  </cite>
                  <p className="font-mono text-[11px] text-text-3 mt-1.5 uppercase tracking-wide">
                    {testimonialsData[index].role} &bull; {testimonialsData[index].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-border-2 bg-surface text-text-2 hover:text-text transition-all cursor-pointer focus:outline-none"
              title="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-1.5">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-250 cursor-pointer ${
                    index === i ? "w-6 bg-accent" : "w-1.5 bg-border-2"
                  }`}
                  title={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-border-2 bg-surface text-text-2 hover:text-text transition-all cursor-pointer focus:outline-none"
              title="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
