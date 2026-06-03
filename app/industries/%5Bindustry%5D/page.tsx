import React from "react";
import { notFound } from "next/navigation";
import { HelpCircle, CheckCircle, ArrowRight, Store, Briefcase, Factory } from "lucide-react";
import { industriesData } from "@/content/data/industries";
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
    title: `${data.name} AI Playbook`,
    description: data.description,
    path: `/industries/${industry}`,
  });
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    industry: ind.id,
  }));
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const data = industriesData.find((ind) => ind.id === industry);

  if (!data) {
    notFound();
  }

  const IconComponent = iconMap[data.iconName as IconNameType] || Briefcase;

  return (
    <div className="bg-black text-white py-16 md:py-24">
      {/* Page Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-24 text-center lg:text-left">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple mb-6">
                <IconComponent className="h-6 w-6" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                {data.name} Playbook
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
                {data.description} {data.details}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Grid: Challenges vs Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Challenges */}
          <FadeUp delay={0.2} className="flex flex-col gap-8 bg-zinc-950/40 p-8 rounded-3xl border border-red-500/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Vertical Challenges</h3>
            </div>

            <div className="grid gap-6">
              {data.painPoints.map((pain, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="h-2 w-2 rounded-full bg-red-500 shrink-0 mt-2" />
                  <p className="text-zinc-300 text-xs leading-relaxed">{pain}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Solutions */}
          <FadeUp delay={0.4} className="flex flex-col gap-8 bg-zinc-950/40 p-8 rounded-3xl border border-brand-cyan/15 relative">
            <div className="absolute inset-0 bg-brand-cyan/2 blur-[80px] pointer-events-none rounded-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Target AI Integrations</h3>
              </div>

              <div className="grid gap-6">
                {data.solutions.map((sol, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-2 w-2 rounded-full bg-brand-cyan shrink-0 mt-2 shadow-[0_0_8px_#00f3ff]" />
                    <div>
                      <h4 className="font-semibold text-white text-xs">{sol.title}</h4>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Success Study Summary Box */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <FadeUp delay={0.2} className="relative rounded-3xl overflow-hidden glass p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-3 py-1 rounded-full border border-brand-cyan/15 inline-block mb-4">
              Proven Playbook Outcome
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{data.clientCase.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{data.clientCase.description}</p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-white/5 text-center min-w-[200px] shrink-0">
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple block mb-1">
              {data.clientCase.stat}
            </span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
              Measured Efficiency Boost
            </span>
          </div>
        </FadeUp>
      </section>

      {/* call to action */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <FadeUp delay={0.1}>
          <h3 className="text-xl font-bold text-white mb-4">Deploy These Frameworks in Your Business</h3>
          <p className="text-zinc-500 text-xs max-w-sm mx-auto mb-6">Schedule an audit session to analyze how we connect your database models.</p>
          <CTAButton href="/contact" variant="primary" glow icon={<ArrowRight className="h-4 w-4" />}>
            Request System Audit
          </CTAButton>
        </FadeUp>
      </section>
    </div>
  );
}
