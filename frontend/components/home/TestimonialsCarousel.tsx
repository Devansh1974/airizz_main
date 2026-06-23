"use client";

import React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "@/content/data/testimonials";
import FadeUp from "../animations/FadeUp";

export default function TestimonialsCarousel() {
  return (
    <section className="relative py-24 md:py-32 bg-bg-2 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent bg-accent-bg px-2.5 py-1 rounded-[6px] border border-accent-border inline-flex items-center gap-1.5 mb-4">
              What Our Clients Say
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Delivering Measured Results
            </h2>
          </FadeUp>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => {
            // Get initials for the avatar placeholder
            const initials = testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("");

            // Assign distinct accent tints for each avatar background to look premium
            const avatarBgs = [
              "bg-teal-50 text-teal-600 border-teal-100",
              "bg-emerald-50 text-emerald-600 border-emerald-100",
              "bg-blue-50 text-blue-600 border-blue-100"
            ];

            return (
              <FadeUp 
                key={testimonial.author + index} 
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <div className="group h-full flex flex-col justify-between bg-surface border border-border hover:border-accent-border/40 rounded-2xl p-6 lg:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(0,184,172,0.04)] hover:-translate-y-1.5">
                  
                  {/* Decorative background quote mark */}
                  <div className="absolute right-6 top-6 text-accent/5 pointer-events-none transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-10.961l.696 1.259c-4.012 1.22-6.685 4.354-6.702 9.16h4.869v8.132h-7.863zm-14 0v-7.391c0-5.704 3.748-9.762 9-10.961l.696 1.259c-4.012 1.22-6.685 4.354-6.702 9.16h4.869v8.132h-7.863z" />
                    </svg>
                  </div>

                  <div>
                    {/* 5 Stars */}
                    <div className="flex gap-0.5 mb-6 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-sans text-[13.5px] leading-relaxed text-text-2 mb-8 font-normal">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author Info block */}
                  <div className="flex items-center gap-3 border-t border-border pt-5 mt-auto">
                    {/* Avatar */}
                    <div className={`h-9 w-9 rounded-full border flex items-center justify-center font-sans font-bold text-xs uppercase ${avatarBgs[index % avatarBgs.length]}`}>
                      {initials}
                    </div>

                    <div>
                      <cite className="not-italic font-sans text-xs font-semibold text-text block">
                        {testimonial.author}
                      </cite>
                      <p className="font-mono text-[9px] text-text-3 mt-0.5 uppercase tracking-wider">
                        {testimonial.role} &bull; {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
