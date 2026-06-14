"use client";

import React from "react";
import Link from "next/link";
import { Code, Brain, Database, TrendingUp, ArrowRight } from "lucide-react";
import FadeUp from "../animations/FadeUp";
import StaggerChildren from "../animations/StaggerChildren";
import CTAButton from "../shared/CTAButton";

const servicesList = [
  {
    id: "product-engineering",
    name: "Product Engineering",
    icon: Code,
    desc: "We build scalable AI-powered applications, high-performance SaaS platforms, and bespoke mobile solutions.",
    stat: "Avg. 3-week MVP delivery",
    href: "/services/product-engineering",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #0099ff 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  },
  {
    id: "ai-consulting",
    name: "AI Consulting for SMB",
    icon: Brain,
    desc: "ROI-focused AI consulting to help SMBs leverage Generative AI, predictive analytics, and intelligent chatbots.",
    stat: "ROI visible in 60 days",
    href: "/services/ai-consulting",
    featured: true,
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #10b981 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  },
  {
    id: "data-integration",
    name: "Data Integration Services",
    icon: Database,
    desc: "We eliminate data silos by securely integrating your CRMs, ERPs, APIs, and marketing platforms into a unified source.",
    stat: "Avg. 2-week integration",
    href: "/services/data-integration",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #3b82f6 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation Agency",
    icon: TrendingUp,
    desc: "Turn leads into loyal customers while you sleep. We design, implement, and optimise robust marketing automation workflows.",
    stat: "3X average lead conversion",
    href: "/services/marketing-automation",
    color: "#00b8ac", // Teal
    rgb: "0, 184, 172",
    gradient: "linear-gradient(135deg, #00b8ac 0%, #6366f1 100%)",
    shadow: "0 16px 36px rgba(0, 184, 172, 0.08)",
    bgGlow: "rgba(0, 184, 172, 0.012)"
  }
];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = React.useState("product-engineering");
  return (
    <section id="services" className="relative py-24 md:py-32 bg-bg border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">What We Do</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mt-3">
              Tailored Solutions for Modern Businesses
            </h2>
          </FadeUp>
        </div>

        {/* Services Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={`group service-card rounded-[12px] p-6 flex flex-col justify-between min-h-[260px] ${
                  service.featured 
                    ? "bg-surface border border-border-3" 
                    : "bg-surface border border-border"
                }`}
                style={{
                  "--card-hover-shadow": service.shadow,
                  "--card-accent-rgb": service.rgb,
                  "--card-accent-color": service.color,
                  "--card-bg-glow": service.bgGlow,
                  "--card-gradient": service.gradient,
                } as React.CSSProperties}
              >
                {/* Custom glowing accent border lines */}
                <div className="service-card-accent-line-t" />
                <div className="service-card-accent-line-l" />

                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-start mb-6 service-card-icon">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-[16px] font-medium text-text mb-2 font-sans">
                    {service.name}
                  </h3>
                  <p className="text-text-2 text-[14px] leading-relaxed max-w-md mb-6 font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Footer link & stat */}
                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <span className="text-[11px] uppercase font-mono tracking-wider text-text-3 font-medium">
                    {service.stat}
                  </span>
                  <div className="flex items-center gap-1 text-[13px] font-normal service-card-learn-more transition-transform duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </StaggerChildren>

        {/* Service Explorer Panel */}
        <div className="mt-20 border-t border-border pt-16">
          <FadeUp delay={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent bg-accent-bg px-2.5 py-1 rounded-[6px] border border-accent-border inline-flex items-center gap-1.5 mb-4">
                Service Explorer
              </span>
              <h3 className="text-xl md:text-3xl font-bold tracking-tight text-text mb-4 font-sans">
                Interactive Playbook Explorer
              </h3>
              <p className="text-text-2 text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-6">
                Select a service from the dropdown below to view a detailed breakdown, operational overview, and real-world mockups of how we engineer results.
              </p>

              {/* Styled Dropdown Selector */}
              <div className="relative inline-block w-full max-w-md">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full bg-surface border border-border hover:border-border-2 rounded-[8px] px-4 py-3.5 text-xs md:text-sm text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer font-sans appearance-none shadow-none"
                >
                  {servicesList.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-3">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Explorer Detail Panel */}
          {(() => {
            const activeService = servicesList.find(s => s.id === activeTab) || servicesList[0];
            const mockupImage = activeService.id === "product-engineering" ? "/hero/product-engineering.png"
                              : activeService.id === "ai-consulting" ? "/hero/ai-consulting.png"
                              : activeService.id === "data-integration" ? "/hero/data-integration.png"
                              : "/hero/marketing-automation.png";
            
            // Small paragraph describing service playbooks
            const detailedParagraphs = {
              "product-engineering": "We design, architect, and compile custom digital solutions from scratch. We skip heavy frameworks and use next-generation architectures (like Next.js React Server Components and fast Express backends) to deliver high-performance, responsive MVPs in weeks rather than months. We provide comprehensive Figma designs, detailed technical recommendations, and clean codebases.",
              "ai-consulting": "Our AI consulting focus is strictly outcome-driven. We help small and medium businesses identify bottleneck tasks, audit manual workflows, and safely deploy conversational agents, custom LLM configurations (using Groq, OpenAI, or Anthropic), and secure semantic vector search (RAG) to automate customer support and operational decisions.",
              "data-integration": "Data silos cause operational lag and invoicing errors. We securely bridge the gap between your platforms (including CRM systems, ERPs like Tally, databases, and custom APIs). We build continuous ETL data pipelines that synchronize records overnight, giving your executives a unified dashboard and single source of truth.",
              "marketing-automation": "Turn lead generation into an automated engine. We mapping-integrate status changes in your CRM, trigger targeted multi-channel messaging flows (WhatsApp API, SMS, Email), and score leads dynamically based on site engagement. We ensure your sales and marketing teams focus strictly on qualified opportunities."
            };

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
                {/* Left side: Description & CTA */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <FadeUp key={`title-${activeService.id}`} delay={0.1}>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-text font-sans">
                      {activeService.name} Playbook
                    </h4>
                  </FadeUp>
                  <FadeUp key={`desc-${activeService.id}`} delay={0.2}>
                    <p className="text-text-2 text-xs md:text-sm leading-relaxed font-sans">
                      {detailedParagraphs[activeService.id as keyof typeof detailedParagraphs]}
                    </p>
                  </FadeUp>
                  <FadeUp key={`cta-${activeService.id}`} delay={0.3} className="pt-2">
                    <CTAButton
                      href={activeService.href}
                      variant="primary"
                      className="px-5 py-2.5 text-xs md:text-sm rounded-[6px] font-medium"
                    >
                      Explore Full Playbook & Pricing →
                    </CTAButton>
                  </FadeUp>
                </div>

                {/* Right side: Mockup image visual */}
                <div className="lg:col-span-6">
                  <FadeUp key={`img-${activeService.id}`} delay={0.2}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface border border-border rounded-2xl p-2.5 shadow-[0_8px_30px_rgba(9,30,54,0.03)] flex flex-col justify-center">
                      <div className="relative w-full h-full overflow-hidden rounded-xl bg-bg border border-border">
                        <img
                          src={mockupImage}
                          alt={activeService.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </FadeUp>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
