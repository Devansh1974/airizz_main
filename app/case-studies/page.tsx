import React from "react";
import { getAllCaseStudies } from "@/lib/content";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import CaseStudiesList from "./CaseStudiesList";

export const metadata = generateSeoMetadata({
  title: "Case Studies | AIRIZZ",
  description: "Real engagements. Real results. Every case study includes the challenge, our approach, and the measurable outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="bg-[#040d1a] text-white py-16 md:py-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <FadeUp delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Our Work</span>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Real Results, Real Impact</h1>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto">
            Every case study includes the problem, our approach, and the measurable outcome.
          </p>
        </FadeUp>
      </div>

      <CaseStudiesList initialStudies={studies} />
    </div>
  );
}
