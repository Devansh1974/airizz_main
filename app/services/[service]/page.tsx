import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, Brain, Zap, Database, Users, BarChart2 } from "lucide-react";
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
    <div className="bg-bg text-text py-12 md:py-16 font-sans">
      {/* Breadcrumb & Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-20">
        {/* Breadcrumb */}
        <FadeUp delay={0.05} className="flex items-center gap-2 text-[12px] text-text-3 mb-6 font-mono uppercase tracking-wider">
          <Link href="/services" className="hover:text-text transition-colors">Services</Link>
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
                {data.description}
              </p>
            </FadeUp>

            {/* Hero Stats */}
            <FadeUp delay={0.4} className="flex gap-8 mt-10 font-sans">
              <div className="flex flex-col border-l border-accent pl-4">
                <span className="text-2xl font-bold text-text">{data.stat1.value}</span>
                <span className="text-[10px] text-text-3 font-mono uppercase tracking-wider mt-1.5">{data.stat1.label}</span>
              </div>
              <div className="flex flex-col border-l border-accent pl-4">
                <span className="text-2xl font-bold text-accent">{data.stat2.value}</span>
                <span className="text-[10px] text-text-3 font-mono uppercase tracking-wider mt-1.5">{data.stat2.label}</span>
              </div>
            </FadeUp>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeUp delay={0.4} className="bg-surface border border-border p-8 rounded-[12px] w-full max-w-sm text-center shadow-none">
              <span className="text-text-3 text-[11px] font-mono uppercase tracking-wider block">Pricing starting from</span>
              <span className="text-3xl font-bold text-text block mt-2 mb-6 font-sans">{data.pricing.starting}</span>
              <CTAButton href="/contact" variant="primary" className="w-full">
                Book Free Audit
              </CTAButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Feature Grid (3 columns, 6 features) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Core Deliverables</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text mt-2 font-sans">Practice Capabilities</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-[12px] bg-surface border border-border flex gap-3 items-start shadow-none">
              <div className="h-6 w-6 rounded-full bg-surface-2 border border-border-2 text-accent flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs md:text-sm text-text-2 font-sans leading-relaxed">{feature}</span>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* Process Steps Component (5 steps, vertical timeline layout) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-16">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Methodology</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text mt-2 font-sans">Our 5-Step Process</h2>
          </FadeUp>
        </div>

        <div className="relative max-w-3xl mx-auto pl-8 border-l border-border flex flex-col gap-12">
          {data.process.map((stepItem, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-accent border-4 border-bg" />
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Step {stepItem.step} &bull; {stepItem.time}</span>
              </div>
              <h4 className="text-base font-semibold text-text mt-1 font-sans">{stepItem.title}</h4>
              <p className="text-text-2 text-xs mt-1.5 leading-relaxed font-sans">{stepItem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inline Mini Case Study Card */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-border">
        <FadeUp delay={0.2}>
          <div className="relative rounded-[12px] bg-surface border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-none">
            <div className="max-w-xl font-sans">
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-0.5 rounded-[6px] border border-border-2 inline-flex items-center gap-1.5 mb-4">
                <BarChart2 className="h-3.5 w-3.5" />
                Featured Result
              </span>
              <h4 className="text-[18px] font-semibold text-text mb-2 font-sans">{data.miniCaseStudy.title}</h4>
              <p className="text-text-2 text-xs leading-relaxed">{data.miniCaseStudy.description}</p>
            </div>
            
            <div className="p-5 rounded-[8px] bg-bg border border-border text-center min-w-[200px] shrink-0">
              <span className="text-2xl font-bold text-accent block font-sans">{data.miniCaseStudy.outcome}</span>
              <span className="text-[10px] text-text-3 font-mono uppercase tracking-wider block mt-1">Measured conversion</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Pricing Tier Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text font-sans">Pricing & Engagement Models</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pricing.tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-[12px] border flex flex-col justify-between shadow-none ${
                idx === 1
                  ? "bg-surface border-border-3"
                  : "bg-surface border-border"
              }`}
            >
              <div>
                <h4 className="text-[18px] font-semibold text-text mb-2 font-sans">{tier.name}</h4>
                <p className="text-text-2 text-xs leading-relaxed mb-6 font-sans">{tier.description}</p>
                <span className="text-2xl md:text-3xl font-bold text-text block mt-4 mb-6 font-sans">{tier.price}</span>
                
                <ul className="grid gap-3 pt-6 border-t border-border text-xs text-text-2 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <Check className="h-4 w-4 text-accent shrink-0" />
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
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="mb-12">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Explore Capabilities</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text mt-2 font-sans">Related Practice Areas</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              href={rel.href}
              className="p-6 rounded-[12px] bg-surface border border-border flex flex-col justify-between min-h-[180px] hover:border-border-2 transition-colors font-sans"
            >
              <div>
                <h4 className="text-[16px] font-semibold text-text mb-2 font-sans">{rel.name}</h4>
                <p className="text-text-2 text-xs leading-relaxed line-clamp-3">{rel.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-accent mt-4 uppercase tracking-wider">
                Explore playbook &rarr;
              </span>
            </Link>
          ))}
        </StaggerChildren>
      </section>

      {/* Bottom CTA Band */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border text-center">
        <FadeUp delay={0.1}>
          <h3 className="text-xl md:text-2xl font-semibold text-text mb-4 font-sans">Ready to automate your operations?</h3>
          <p className="text-text-2 text-xs max-w-sm mx-auto mb-6 font-sans">Schedule an audit session to analyze how we connect your database models.</p>
          <CTAButton href="/contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Request System Audit
          </CTAButton>
        </FadeUp>
      </section>
    </div>
  );
}
