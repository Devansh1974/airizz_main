import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BarChart2, Calendar } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/content";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return generateSeoMetadata({
    title: `${study.title} | Case Study`,
    description: study.description,
    path: `/case-studies/${slug}`,
  });
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  if (studies.length === 0) {
    // Return mock static param to ensure dynamic paths build during compilation
    return [{ slug: "logistics-whatsapp-crm" }];
  }
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

function parseMarkdown(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-[17px] font-semibold text-text mt-8 mb-3 font-sans">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-lg font-semibold text-text mt-10 mb-4 border-b border-border pb-2 font-sans">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={index} className="text-[22px] font-semibold text-text mt-12 mb-6 font-sans">
          {trimmed.replace("# ", "")}
        </h1>
      );
    }
    if (trimmed.startsWith("- ")) {
      return (
        <li key={index} className="text-xs text-text-2 ml-4 list-disc mb-2 leading-relaxed font-sans">
          {trimmed.substring(2)}
        </li>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <li key={index} className="text-xs text-text-2 ml-4 list-decimal mb-2 leading-relaxed font-sans">
          {trimmed.replace(/^\d+\.\s/, "")}
        </li>
      );
    }
    if (trimmed === "") {
      return <div key={index} className="h-2" />;
    }
    return (
      <p key={index} className="text-xs text-text-2 leading-relaxed mb-4 font-sans">
        {trimmed}
      </p>
    );
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-bg text-text py-16 md:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Case Studies</span>
          </Link>
        </FadeUp>

        {/* Header Block */}
        <section className="mb-12">
          <FadeUp delay={0.2}>
            <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2 inline-block mb-4">
              {study.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mb-6 leading-tight font-sans">
              {study.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-wrap items-center gap-6 text-[11px] font-mono font-medium text-text-3 pb-8 border-b border-border uppercase">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-text-3" />
              {study.date}
            </span>
            <span>Client: {study.client}</span>
          </FadeUp>
        </section>

        {/* outcomes Callout Panel */}
        {study.results && (
          <FadeUp delay={0.3} className="p-6 rounded-[12px] bg-surface border border-border grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 shadow-none">
            {study.results.map((res: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-xs font-semibold text-text-2 font-sans">{res}</span>
              </div>
            ))}
          </FadeUp>
        )}

        {/* Content Render */}
        <FadeUp delay={0.4} className="prose prose-invert max-w-none">
          {parseMarkdown(study.content)}
        </FadeUp>

        {/* CTA Section */}
        <FadeUp delay={0.5} className="mt-16 pt-12 border-t border-border text-center">
          <h3 className="text-lg font-semibold text-text mb-4 font-sans">Looking for similar operational conversions?</h3>
          <CTAButton href="/contact" variant="primary">
            Schedule Assessment Session
          </CTAButton>
        </FadeUp>
      </div>
    </div>
  );
}
