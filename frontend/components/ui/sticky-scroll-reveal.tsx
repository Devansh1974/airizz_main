"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestCardIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;
        const rect = cardRef.getBoundingClientRect();
        // Calculate distance from viewport center to the vertical center of the card
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - centerY);

        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = index;
        }
      });

      setActiveCard(closestCardIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Soft premium light theme background colors
  const backgroundColors = [
    "#ffffff", // Product Engineering - Pure White
    "#f8fafc", // AI Consulting - Soft Slate Tint
    "#f0fdfa", // Data Integration - Soft Teal Tint
    "#eff6ff", // Marketing Automation - Soft Blue Tint
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--color-accent, #00b8ac), #0099ff)", 
    "linear-gradient(to bottom right, #10b981, #059669)", 
    "linear-gradient(to bottom right, #3b82f6, #1d4ed8)", 
    "linear-gradient(to bottom right, #6366f1, #4f46e5)", 
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative w-full flex justify-center py-12 lg:py-20 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left column: Text content */}
        <div className="relative flex flex-col items-start w-full lg:col-span-6 z-10">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              ref={(el) => { cardRefs.current[index] = el; }}
              className="py-16 lg:py-24 first:pt-0 last:pb-0 w-full min-h-[300px] flex flex-col justify-center transition-all duration-300"
            >
              <motion.h2
                initial={{ opacity: 0.15 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.15,
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl font-bold tracking-tight text-text mb-4 font-sans"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0.15 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.15,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base leading-relaxed text-text-2 max-w-lg font-sans"
              >
                {item.description}
              </motion.div>
              
              {/* Mobile visual content displayed inline */}
              <div className="mt-8 block lg:hidden w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-border shadow-md">
                {item.content}
              </div>
            </div>
          ))}
        </div>

        {/* Right column: Sticky visual card for desktop */}
        <div className="hidden lg:block lg:col-span-6 sticky top-36 z-20">
          <div
            style={{ background: backgroundGradient }}
            className={cn(
              "h-[350px] xl:h-[400px] w-full overflow-hidden rounded-2xl border border-border/80 bg-white shadow-xl flex items-center justify-center p-3 transition-all duration-500",
              contentClassName
            )}
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-bg border border-border">
              {content[activeCard]?.content ?? null}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
