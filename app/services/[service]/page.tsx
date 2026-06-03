import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight, Zap, Brain, Database, Users, Sparkles, BarChart2 } from "lucide-react";
import { servicesData } from "@/content/data/services";
import { generateSeoMetadata } from "@/lib/seo";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

interface PageProps {
  params: Promise<{ service: string }>;
}

const iconMap = {
  Zap: Zap,
  Brain: Brain,
  TrendingUp: Database,
  Users: Users,
};

type IconNameType = keyof typeof iconMap;

export async function generateMetadata({ params }: PageProps) {
  const { service } = await params;
  const data = servicesData.find((s) => s.id === service);
  if (!data) return {};

  return generateSeoMetadata({
    title: `${data.name} | AIRIZZ`,
    description: data.description,
    path: `/services/${service}`,
  });
}

// Generate static params to match the required dynamic slugs exactly
export async function generateStaticParams() {
  return [
    { service: "product-engineering" },
    { service: "ai-consulting" },
    { service: "data-integration" },
    { service: "marketing-automation" }
  ];
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const data = servicesData.find((s) => s.id === service);

  if (!data) {
    notFound();
  }

  const IconComponent = iconMap[data.iconName as IconNameType] || Brain;
  const relatedServices = servicesData.filter((s) => s.id !== service).slice(0, 3);

  return (
    <div className="bg-black text-white py-12 md:py-16">
      {/* Breadcrumb & Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Breadcrumb */}
        <FadeUp delay={0.05} className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
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
                {data.description}
              </p>
            </FadeUp>

            {/* Hero Stats */}
            <FadeUp delay={0.4} className="flex gap-8 mt-10">
              <div className="flex flex-col border-l border-brand-cyan pl-4">
                <span className="text-2xl font-extrabold text-white">{data.stat1.value}</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">{data.stat1.label}</span>
              </div>
              <div className="flex flex-col border-l border-brand-purple pl-4">
                <span className="text-2xl font-extrabold text-brand-cyan">{data.stat2.value}</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-1">{data.stat2.label}</span>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeUp delay={0.4} className="bg-zinc-950/40 border border-white/5 p-8 rounded-3xl w-full max-w-sm text-center">
              <span className="text-zinc-500 text-xs uppercase font-bold tracking-wider">Pricing starting from</span>
              <span className="text-3xl font-extrabold text-white block mt-2 mb-6">{data.pricing.starting}</span>
              <CTAButton href="/contact" variant="primary" className="w-full" glow>
                Book Free Audit
              </CTAButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Feature Grid (3 columns, 6 features) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Core Deliverables</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Practice Capabilities</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-zinc-950/30 border border-white/5 flex gap-3 items-start">
              <div className="h-6 w-6 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs md:text-sm text-zinc-300">{feature}</span>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Process Steps Component (5 steps, animated vertical line) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Methodology</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Our 5-Step Process</h2>
          </FadeUp>
        </div>

        <div className="relative max-w-3xl mx-auto pl-8 border-l border-zinc-800 flex flex-col gap-12">
          {data.process.map((stepItem, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-cyan border-4 border-black" />
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-brand-cyan uppercase">Step {stepItem.step} &bull; {stepItem.time}</span>
              </div>
              <h4 className="text-base font-bold text-white mt-1">{stepItem.title}</h4>
              <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">{stepItem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inline Mini Case Study Card */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
        <FadeUp delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden glass p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-purple bg-brand-purple/10 px-2.5 py-0.5 rounded border border-brand-purple/15 inline-flex items-center gap-1.5 mb-4">
                <BarChart2 className="h-3.5 w-3.5" />
                Featured Result
              </span>
              <h4 className="text-lg font-bold text-white mb-2">{data.miniCaseStudy.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{data.miniCaseStudy.description}</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 text-center min-w-[200px] shrink-0">
              <span className="text-2xl font-extrabold text-brand-cyan block">{data.miniCaseStudy.outcome}</span>
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block mt-1">Measured conversion</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Pricing Tier Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pricing & Engagement Models</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.pricing.tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                idx === 1
                  ? "bg-zinc-950/60 border-brand-cyan/25 shadow-[0_8px_30px_rgba(0,243,255,0.02)]"
                  : "bg-zinc-950/20 border-white/5"
              }`}
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{tier.name}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-6">{tier.description}</p>
                <span className="text-2xl md:text-3xl font-extrabold text-white block mt-4 mb-6">{tier.price}</span>
                
                <ul className="grid gap-3 pt-6 border-t border-white/5 text-xs text-zinc-400 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <Check className="h-4 w-4 text-brand-cyan shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CTAButton
                href="/contact"
                variant={idx === 1 ? "primary" : "outline"}
                className="w-full mt-auto"
              >
                Select {tier.name}
              </CTAButton>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Related Services (3 cross-links) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Explore Capabilities</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Related Practice Areas</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              href={rel.href}
              className="p-6 rounded-2xl glass-interactive flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <h4 className="text-base font-bold text-white mb-2">{rel.name}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">{rel.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-cyan mt-4">
                Explore playbook &rarr;
              </span>
            </Link>
          ))}
        </StaggerChildren>
      </section>

      {/* Bottom CTA Band */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 text-center">
        <FadeUp delay={0.1}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to automate your operations?</h3>
          <p className="text-zinc-500 text-xs max-w-sm mx-auto mb-6">Schedule an audit session to analyze how we connect your database models.</p>
          <CTAButton href="/contact" variant="primary" glow icon={<ArrowRight className="h-4 w-4" />}>
            Request System Audit
          </CTAButton>
        </FadeUp>
      </section>
    </div>
  );
}
