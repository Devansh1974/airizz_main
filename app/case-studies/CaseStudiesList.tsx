"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPost } from "@/lib/content";
import FadeUp from "@/components/animations/FadeUp";

interface CaseStudiesListProps {
  initialStudies: ContentPost[];
}

export default function CaseStudiesList({ initialStudies }: CaseStudiesListProps) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Manufacturing", "Legal & Finance", "Traditional SME", "Logistics"];

  // Filter based on the 'industry' frontmatter field
  const filteredCaseStudies = filter === "All"
    ? initialStudies
    : initialStudies.filter((cs) => cs.industry === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Filter Bar */}
      <FadeUp delay={0.2} className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12">
        <Filter className="h-4 w-4 text-zinc-500 mr-2" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-350 cursor-pointer ${
              filter === cat
                ? "bg-brand-cyan/15 border-brand-cyan text-white shadow-[0_0_10px_rgba(0,243,255,0.05)]"
                : "border-white/5 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </FadeUp>

      {/* List Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredCaseStudies.map((study) => (
            <motion.div
              layout
              key={study.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group p-6 rounded-3xl bg-[#071428] border border-white/5 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded border border-brand-purple/15 inline-block mb-4">
                  {study.industry} &bull; {study.service}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-zinc-500 text-[10px] mt-1 block font-mono">
                  {study.client}
                </p>

                <p className="text-zinc-400 text-xs mt-4 leading-relaxed line-clamp-3">
                  {study.description || (study.content ? study.content.substring(0, 150) + "..." : "")}
                </p>

                {/* Highlights metrics */}
                {study.metrics && (
                  <ul className="grid gap-2 text-[10px] text-zinc-500 mt-6 pt-4 border-t border-white/5">
                    {study.metrics.map((res: string, i: number) => (
                      <li key={i} className="flex gap-2 items-center">
                        <BarChart2 className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 group-hover:text-white transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-20 text-zinc-500 text-sm">
          No case studies found for this category. Check back soon!
        </div>
      )}
    </div>
  );
}
