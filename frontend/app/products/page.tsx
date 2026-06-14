"use client";

import React from "react";
import { ArrowRight, Bot, Database, Repeat, Sparkles } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

const productsList = [
  {
    icon: Bot,
    name: "AiriFlow",
    tagline: "Agentic Operations Workflow Builder",
    description: "Connect your emails, WhatsApp API, and transactional databases to execute routine business logic in background loops — without manual oversight.",
    badge: "Beta Release",
    benefits: ["Reclaims 12+ staff hours weekly", "Zero message dropouts", "Instant notification alerts"]
  },
  {
    icon: Database,
    name: "AiriRAG",
    tagline: "Secure Private Knowledge Workspace",
    description: "Ingest PDFs, client records, and legal archives into an isolated vector storage layer. Query private SOP data using advanced Prompt Guardrails.",
    badge: "Enterprise Ready",
    benefits: ["100% data residency guarantee", "Pre-screen contracts in seconds", "PII redaction verification"]
  },
  {
    icon: Repeat,
    name: "AiriSync",
    tagline: "ERP & Analytics Warehouse Sync",
    description: "Bridges legacy software systems (such as Tally, SAP, or local CSV inventories) with modern cloud databases and real-time BI reporting boards.",
    badge: "Standard Connector",
    benefits: ["Nightly automated sync cycles", "Reconciliation error logging", "Looker Studio templates"]
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-bg text-text py-16 md:py-24 min-h-[90vh] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-20">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Proprietary Technology
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mt-3 font-sans leading-tight">
              Bespoke AI Products
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-text-2 text-[15px] font-normal mt-4 max-w-xl leading-relaxed">
              We design and compile custom software products to solve critical data silos and automate manual workflows for scaling Indian enterprises.
            </p>
          </FadeUp>
        </div>

        {/* Products Grid */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {productsList.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <div 
                key={idx} 
                className="p-8 rounded-[12px] bg-surface border border-border flex flex-col justify-between shadow-none"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-10 w-10 rounded-lg bg-surface-2 border border-border-2 text-accent flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-1 rounded-[6px] border border-border-2">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-text mb-1 font-sans">{prod.name}</h3>
                  <span className="text-xs text-text-3 font-mono uppercase tracking-wider block mb-4">{prod.tagline}</span>
                  <p className="text-text-2 text-[14px] leading-relaxed mb-6 font-sans">{prod.description}</p>

                  <ul className="grid gap-2 border-t border-border pt-6 text-[13px] text-text-2 mb-8 list-disc pl-4 font-sans">
                    {prod.benefits.map((ben, i) => (
                      <li key={i}>{ben}</li>
                    ))}
                  </ul>
                </div>

                <CTAButton
                  href="/services/product-engineering"
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                >
                  Explore Playbook &rarr;
                </CTAButton>
              </div>
            );
          })}
        </StaggerChildren>

        {/* Bottom Callout */}
        <section className="p-8 md:p-12 rounded-[12px] bg-surface border border-border text-center max-w-3xl mx-auto shadow-none">
          <FadeUp delay={0.1}>
            <h3 className="text-[18px] font-semibold text-text mb-4 font-sans">Need a custom product engineered?</h3>
            <p className="text-text-2 text-xs max-w-md mx-auto mb-6 leading-relaxed font-sans">
              Our engineering team builds scalable SaaS applications, customized AI platforms, and bespoke API systems. Let&apos;s map out your project details.
            </p>
            <CTAButton href="/contact" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Schedule Product Briefing
            </CTAButton>
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
