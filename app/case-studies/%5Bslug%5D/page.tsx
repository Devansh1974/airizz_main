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
        <h3 key={index} className="text-lg font-bold text-white mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-xl font-bold text-white mt-10 mb-4 border-b border-white/5 pb-2">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h1 key={index} className="text-2xl font-bold text-white mt-12 mb-6">
          {trimmed.replace("# ", "")}
        </h1>
      );
    }
    if (trimmed.startsWith("- ")) {
      return (
        <li key={index} className="text-xs text-zinc-400 ml-4 list-disc mb-2 leading-relaxed">
          {trimmed.substring(2)}
        </li>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      return (
        <li key={index} className="text-xs text-zinc-400 ml-4 list-decimal mb-2 leading-relaxed">
          {trimmed.replace(/^\d+\.\s/, "")}
        </li>
      );
    }
    if (trimmed === "") {
      return <div key={index} className="h-2" />;
    }
    return (
      <p key={index} className="text-xs text-zinc-400 leading-relaxed mb-4">
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
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Case Studies</span>
          </Link>
        </FadeUp>

        {/* Header Block */}
        <section className="mb-12">
          <FadeUp delay={0.2}>
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded border border-brand-purple/15 inline-block mb-4">
              {study.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {study.title}
            </h1>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-wrap items-center gap-6 text-xs text-zinc-500 font-medium pb-8 border-b border-white/5">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-zinc-600" />
              {study.date}
            </span>
            <span>Client: {study.client}</span>
          </FadeUp>
        </section>

        {/* outcomes Callout Panel */}
        {study.results && (
          <FadeUp delay={0.3} className="p-6 rounded-2xl bg-zinc-950/40 border border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {study.results.map((res: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <BarChart2 className="h-5 w-5 text-brand-cyan shrink-0" />
                <span className="text-xs font-bold text-zinc-200">{res}</span>
              </div>
            ))}
          </FadeUp>
        )}

        {/* Content Render */}
        <FadeUp delay={0.4} className="prose prose-invert max-w-none">
          {parseMarkdown(study.content)}
        </FadeUp>

        {/* CTA Section */}
        <FadeUp delay={0.5} className="mt-16 pt-12 border-t border-white/5 text-center">
          <h3 className="text-lg font-bold text-white mb-4">Looking for similar operational conversions?</h3>
          <CTAButton href="/contact" variant="primary" glow>
            Schedule Assessment Session
          </CTAButton>
        </FadeUp>
      </div>
    </div>
  );
}
