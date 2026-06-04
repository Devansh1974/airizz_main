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
    <div className="bg-bg text-text py-16 md:py-24 min-h-[80vh] font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <FadeUp delay={0.1}>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Our Work</span>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mt-3 font-sans">Real Results, Real Impact</h1>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-text-2 text-[15px] font-normal mt-4 max-w-xl leading-relaxed">
            Every case study includes the problem, our approach, and the measurable outcome.
          </p>
        </FadeUp>
      </div>

      <CaseStudiesList initialStudies={studies} />
    </div>
  );
}
