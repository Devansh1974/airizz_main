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
    <div className="max-w-7xl mx-auto px-6 font-sans">
      {/* Filter Bar */}
      <FadeUp delay={0.2} className="flex flex-wrap justify-start items-center gap-2 mb-12">
        <div className="flex items-center gap-2 mr-2 text-text-3">
          <Filter className="h-4 w-4" />
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider">Filter:</span>
        </div>
        
        <div className="inline-flex flex-wrap gap-1 p-1 bg-surface border border-border rounded-[8px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-sans font-medium rounded-[6px] transition-all duration-200 cursor-pointer border border-transparent ${
                filter === cat
                  ? "bg-bg text-text shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
                  : "text-text-2 hover:text-text bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeUp>

      {/* List Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              className="group p-6 rounded-[12px] bg-surface border border-border flex flex-col justify-between shadow-none"
            >
              <div>
                <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2 inline-block mb-4">
                  {study.industry} &bull; {study.service}
                </span>

                <h3 className="text-[17px] font-semibold text-text mb-2 group-hover:text-accent transition-colors leading-snug font-sans">
                  {study.title}
                </h3>

                <p className="text-text-3 text-[10px] mt-1 block font-mono uppercase tracking-wide">
                  {study.client}
                </p>

                <p className="text-text-2 text-xs mt-4 leading-relaxed font-sans line-clamp-3">
                  {study.description || (study.content ? study.content.substring(0, 150) + "..." : "")}
                </p>

                {/* Highlights metrics */}
                {study.metrics && (
                  <ul className="grid gap-2 text-xs text-text-2 mt-6 pt-4 border-t border-border font-sans">
                    {study.metrics.map((res: string, i: number) => (
                      <li key={i} className="flex gap-2 items-center">
                        <BarChart2 className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-2 transition-colors font-sans"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCaseStudies.length === 0 && (
        <div className="text-center py-20 text-text-3 text-sm font-sans">
          No case studies found for this category. Check back soon!
        </div>
      )}
    </div>
  );
}
