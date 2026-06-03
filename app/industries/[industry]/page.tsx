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
    <div className="bg-[#040d1a] text-white py-12 md:py-20">
      {/* Breadcrumb & Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Breadcrumb */}
        <FadeUp delay={0.05} className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-500">Industries</span>
          <span>/</span>
          <span className="text-zinc-300">{data.name}</span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6">
                <IconComponent className="h-6 w-6" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {data.headline}
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl">
                {data.sub}
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-8">
              <CTAButton href="/contact" variant="primary" glow>
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
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-white/5">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple font-mono">Friction Points</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Critical Industry Challenges</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.painPoints.map((pain, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-3xl bg-[#071428] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400 mb-6">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{pain.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{pain.body}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Section 3: Relevant Services */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-t border-white/5">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Solutions Matrix</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Recommended Services</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matchingServices.map((svc) => (
            <Link
              key={svc.id}
              href={svc.href}
              className="p-6 md:p-8 rounded-3xl glass-interactive flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-0.5 rounded border border-brand-cyan/15">
                    {svc.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-500" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{svc.headline}</h4>
                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{svc.description}</p>
              </div>
              <div className="pt-4 border-t border-white/5 mt-4 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                Relevance: Ideal for solving data silos & automation
              </div>
            </Link>
          ))}
        </StaggerChildren>
      </section>

      {/* Section 4: Mini Case Study Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
        <FadeUp delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden bg-[#071428] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/15 inline-block mb-4">
                Proven Result Highlight
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">How we deployed custom automation for this industry</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{data.caseStudyTeaser}</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/5 text-center min-w-[200px] shrink-0">
              <div className="flex items-center justify-center gap-2 text-brand-cyan mb-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Verified Outcome</span>
              </div>
              <span className="text-xs text-zinc-400">Deployed & running in production</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Section 5: Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 text-center">
        <FadeUp delay={0.1}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Speak to our {data.name} specialist</h3>
          <p className="text-zinc-500 text-xs max-w-sm mx-auto mb-6">
            Let&apos;s map out exactly where automation and unified data pipelines can streamline your {data.name} operations.
          </p>
          <CTAButton href="/contact" variant="primary" glow icon={<ArrowRight className="h-4 w-4" />}>
            Book a Call
          </CTAButton>
        </FadeUp>
      </section>
    </div>
  );
}
