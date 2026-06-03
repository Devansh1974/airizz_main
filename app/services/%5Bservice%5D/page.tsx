import React from "react";
import { notFound } from "next/navigation";
import { Check, HelpCircle, ArrowRight, Zap, Users, Brain, TrendingUp } from "lucide-react";
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
  Users: Users,
  Brain: Brain,
  TrendingUp: TrendingUp,
};

type IconNameType = keyof typeof iconMap;

export async function generateMetadata({ params }: PageProps) {
  const { service } = await params;
  const data = servicesData.find((s) => s.id === service);
  if (!data) return {};

  return generateSeoMetadata({
    title: `${data.name} AI Integration`,
    description: data.description,
    path: `/services/${service}`,
  });
}

// Generate static params for faster builds
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    service: service.id,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const data = servicesData.find((s) => s.id === service);

  if (!data) {
    notFound();
  }

  const IconComponent = iconMap[data.iconName as IconNameType] || Brain;

  return (
    <div className="bg-black text-white py-16 md:py-24">
      {/* Page Hero */}
      <section className="relative max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6">
                <IconComponent className="h-6 w-6" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                {data.name}
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                {data.longDescription}
              </p>
            </FadeUp>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <FadeUp delay={0.4} className="bg-zinc-950/40 border border-white/5 p-8 rounded-3xl w-full max-w-sm text-center">
              <span className="text-zinc-500 text-xs uppercase font-bold tracking-wider">Pricing Starting From</span>
              <span className="text-3xl font-extrabold text-white block mt-2 mb-6">{data.pricing.starting}</span>
              <CTAButton href="/contact" variant="primary" className="w-full" glow>
                Schedule Assessment
              </CTAButton>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits and Features */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Key Benefits */}
          <div className="lg:col-span-6">
            <FadeUp delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Expected Business Outcomes</h2>
            </FadeUp>
            <StaggerChildren className="grid gap-4">
              {data.keyBenefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-sm text-zinc-300">{benefit}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>

          {/* Feature Checklist */}
          <div className="lg:col-span-6">
            <FadeUp delay={0.2}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Standard Integration Features</h2>
            </FadeUp>
            <StaggerChildren className="grid gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="h-2 w-2 rounded-full bg-brand-purple shrink-0 shadow-[0_0_8px_#bd00ff]" />
                  <span className="text-sm text-zinc-400">{feature}</span>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Integration Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our 4-Step Integration Plan</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-bold">From Setup to Production Deployment</p>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.processSteps.map((stepItem, idx) => (
            <div key={idx} className="relative bg-zinc-950/20 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple block mb-4">
                  {stepItem.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{stepItem.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{stepItem.description}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>
      </section>

      {/* pricing matrices */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Pricing & Engagement Tiers</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.pricing.tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                tier.price.includes("Custom") || idx === 1
                  ? "bg-zinc-950/60 border-brand-cyan/25 shadow-[0_8px_30px_rgba(0,243,255,0.02)]"
                  : "bg-zinc-950/20 border-white/5"
              }`}
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{tier.name}</h4>
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
                variant={tier.price.includes("Custom") || idx === 1 ? "primary" : "outline"}
                className="w-full mt-auto"
              >
                Select Tier
              </CTAButton>
            </div>
          ))}
        </StaggerChildren>
      </section>
    </div>
  );
}
