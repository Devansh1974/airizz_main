import React from "react";
import Image from "next/image";
import { ShieldCheck, Heart, Sparkles, Zap, Star } from "lucide-react";
import { teamData } from "@/content/data/team";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

export const metadata = generateSeoMetadata({
  title: "About Us | AIRIZZ",
  description: "Learn about the mission, core values, and expert team behind AIRIZZ, India's leading AI consulting and business automation agency.",
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Isolated Security",
    desc: "We configure isolated vector namespaces and local enterprise servers so your operational data never mixes with public APIs.",
  },
  {
    icon: Zap,
    title: "Pragmatic Automation",
    desc: "We focus on real outcomes (time saved, orders synced, errors reduced) instead of hype-based integrations.",
  },
  {
    icon: Star,
    title: "Indian SME Dedication",
    desc: "We understand localized trade patterns, regional distribution models, and the importance of WhatsApp outreach workflows.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white py-16 md:py-24">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 mb-24 text-center lg:text-left">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Our Mission</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-3 mb-6">
                Automating Operations for Local Businesses
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl">
                AIRIZZ was founded with a singular purpose: to bring the benefits of modern workflow automation, LLM database querying, and AI consulting to regional distributors, manufacturing floors, legal panels, and traditional SMEs across India. We bridge the gap between high-level AI research and practical everyday business execution.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Our Core Commitments</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const ValIcon = val.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl glass-interactive flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-white/5 text-brand-cyan mb-6">
                    <ValIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </StaggerChildren>
      </section>

      {/* Corporate Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Our Journey</h2>
          </FadeUp>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 border-l border-zinc-800 flex flex-col gap-12">
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-cyan border-4 border-black" />
            <span className="text-xs font-bold text-brand-cyan uppercase">Q1 2025</span>
            <h4 className="text-base font-bold text-white mt-1">Foundation & Launch</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              AIRIZZ bootstrapped by Devansh Singh to support SMEs with simple Make/Zapier workflow automations in regional trade hubs.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-purple border-4 border-black" />
            <span className="text-xs font-bold text-brand-purple uppercase">Q3 2025</span>
            <h4 className="text-base font-bold text-white mt-1">LLM Agent Core Deployment</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              Expanded core capabilities to include Retrieval-Augmented Generation (RAG) models for legal research firms and custom WhatsApp catalog responder integrations.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-cyan border-4 border-black" />
            <span className="text-xs font-bold text-brand-cyan uppercase">2026</span>
            <h4 className="text-base font-bold text-white mt-1">SME Autopilot Integration</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              Serving dozens of clients across logistics, manufacturing, and law sectors. Deployed custom pipelines processing millions of background tasks monthly.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Our Engineering Team</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-950/20 border border-white/5 flex flex-col items-center text-center">
              {/* Profile Image fallback */}
              <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1px] mb-6">
                <div className="h-full w-full rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 font-bold text-lg">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <h4 className="text-base font-bold text-white">{member.name}</h4>
              <span className="text-xs text-brand-cyan mt-1 block font-medium">{member.role}</span>
              <p className="text-zinc-500 text-xs mt-4 leading-relaxed max-w-xs">{member.bio}</p>
            </div>
          ))}
        </StaggerChildren>
      </section>
    </div>
  );
}
