import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Store, Briefcase, Factory } from "lucide-react";
import { industriesData } from "@/content/data/industries";
import { servicesData } from "@/content/data/services";
import { generateSeoMetadata } from "@/lib/seo";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

interface PageProps {
  params: Promise<{ industry: string }>;
}

const iconMap = {
  Store: Store,
  Briefcase: Briefcase,
  Factory: Factory,
};

type IconNameType = keyof typeof iconMap;

export async function generateMetadata({ params }: PageProps) {
  const { industry } = await params;
  const data = industriesData.find((ind) => ind.id === industry);
  if (!data) return {};

  return generateSeoMetadata({
    title: `${data.name} AI Playbook | AIRIZZ`,
    description: data.sub,
    path: `/industries/${industry}`,
  });
}

export async function generateStaticParams() {
  return [
    { industry: "traditional-sme" },
    { industry: "legal-finance" },
    { industry: "manufacturing" }
  ];
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const data = industriesData.find((ind) => ind.id === industry);

  if (!data) {
    notFound();
  }

  const IconComponent = iconMap[data.iconName as IconNameType] || Briefcase;

  // Resolve matching service data objects for the services section
  const matchingServices = servicesData.filter((svc) => data.relevantServices.includes(svc.id));

  return (
    <div className="bg-bg text-text py-12 md:py-20 font-sans">
      {/* Breadcrumb & Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        {/* Breadcrumb */}
        <FadeUp delay={0.05} className="flex items-center gap-2 text-[12px] text-text-3 mb-6 font-mono uppercase tracking-wider">
          <Link href="/" className="hover:text-text transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-3">Industries</span>
          <span>/</span>
          <span className="text-text-2">{data.name}</span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent mb-6">
                <IconComponent className="h-6 w-6" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mb-6 leading-tight font-sans">
                {data.headline}
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-text-2 text-[15px] font-normal leading-relaxed max-w-3xl">
                {data.sub}
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-8">
              <CTAButton href="/contact" variant="primary">
                Book Your Free Audit
              </CTAButton>
              <CTAButton href="/services" variant="secondary">
                Explore Services
              </CTAButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Section 2: Pain Points / Problem Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-border">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Friction Points</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text mt-2 font-sans">Critical Industry Challenges</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.painPoints.map((pain, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-[12px] bg-surface border border-border flex flex-col justify-between shadow-none">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-red mb-6">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-[17px] font-medium text-text mb-3 font-sans">{pain.title}</h3>
                <p className="text-text-2 text-xs leading-relaxed font-sans">{pain.body}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Section 3: Relevant Services */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-border">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Solutions Matrix</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text mt-2 font-sans">Recommended Services</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchingServices.map((svc) => (
            <Link
              key={svc.id}
              href={svc.href}
              className="p-6 md:p-8 rounded-[12px] bg-surface border border-border flex flex-col justify-between min-h-[220px] hover:border-border-2 transition-colors font-sans shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2">
                    {svc.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-text-3" />
                </div>
                <h4 className="text-base font-semibold text-text mb-2 font-sans">{svc.headline}</h4>
                <p className="text-text-2 text-xs leading-relaxed line-clamp-3 font-sans">{svc.description}</p>
              </div>
              <div className="pt-4 border-t border-border mt-4 text-[10px] text-text-3 font-mono uppercase tracking-wider">
                Relevance: Ideal for solving data silos & automation
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </section>

      {/* Section 4: Mini Case Study Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <FadeUp delay={0.2}>
          <div className="relative rounded-[12px] bg-surface border border-border p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-none font-sans">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-3 py-1 rounded-[6px] border border-border-2 inline-block mb-4">
                Proven Result Highlight
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-text mb-4 font-sans">How we deployed custom automation for this industry</h3>
              <p className="text-text-2 text-xs leading-relaxed">{data.caseStudyTeaser}</p>
            </div>

            <div className="p-6 rounded-[8px] bg-bg border border-border text-center min-w-[200px] shrink-0">
              <div className="flex items-center justify-center gap-2 text-accent mb-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Verified Outcome</span>
              </div>
              <span className="text-xs text-text-3 font-mono uppercase mt-1 block">Deployed & running in production</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Section 5: Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border text-center">
        <FadeUp delay={0.1}>
          <h3 className="text-xl md:text-2xl font-semibold text-text mb-4 font-sans">Speak to our {data.name} specialist</h3>
          <p className="text-text-2 text-xs max-w-sm mx-auto mb-6 font-sans">
            Let&apos;s map out exactly where automation and unified data pipelines can streamline your {data.name} operations.
          </p>
          <CTAButton href="/contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Book a Call
          </CTAButton>
        </FadeUp>
      </section>
    </div>
  );
}
