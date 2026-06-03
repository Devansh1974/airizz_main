import React from "react";
import Link from "next/link";
import { Target, Eye, TrendingUp, Mail, MapPin, ArrowRight, Handshake, Zap, Rocket } from "lucide-react";
import { teamData } from "@/content/data/team";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

export const metadata = generateSeoMetadata({
  title: "About Us | AIRIZZ",
  description: "Learn about the mission, core values, and team behind AIRIZZ, India's leading AI consulting and business automation agency.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Outcomes Over Outputs",
    desc: "We measure success by the business results we deliver, not the reports we file or the hours we bill."
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No jargon, no hidden costs, no scope surprises. You know exactly what we're building and why at every step."
  },
  {
    icon: TrendingUp,
    title: "Build for the Long Term",
    desc: "Every system we design is built to scale with your business — not to create dependency on us."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white py-16 md:py-24">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 mb-24">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-10">
            <FadeUp delay={0.1}>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Our Story</span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-3 mb-6 font-sans">
                We started AIRIZZ because we were tired of watching good businesses lose to bad data.
              </h1>
            </FadeUp>
            <FadeUp delay={0.3} className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-4xl grid gap-6">
              <p>
                We'd seen it happen too many times — smart founders, great products, hardworking teams — losing deals and burning money because their data was scattered, their processes were manual, and their tools didn't talk to each other. We knew AI could fix this. Not the enterprise AI that costs crores and takes 18 months to deploy — practical, outcome-focused AI that Indian SMBs could actually use and afford. That's why we built AIRIZZ.
              </p>
              <p>
                Today, AIRIZZ works with manufacturers, legal firms, logistics companies, and scaling startups across India. We don't just consult — we build, implement, and stay until the outcomes are real and measurable.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="mb-16 text-center">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">What We Stand For</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Our Core Values</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const ValIcon = val.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl glass flex flex-col justify-between">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 border border-white/5 text-brand-cyan mb-6">
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

      {/* The AIRIZZ Way Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Client Edition</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">The AIRIZZ Way</h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-500 text-xs md:text-sm mt-3 italic">This is how we work with you.</p>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Dharma */}
          <div className="p-8 rounded-3xl bg-[#071428] border-t-4 border-blue-500 border-x border-b border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-6">
                <Handshake className="h-5 w-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-1">Pillar I</span>
              <h3 className="text-2xl font-bold text-white mb-1">Dharma</h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 block mb-4">Right Conduct</span>
              <p className="text-zinc-300 text-xs leading-relaxed mb-8">How we show up for you — from the very first conversation.</p>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 1</span>
                  <h4 className="text-xs font-bold text-white mb-2">We see your business, not just your brief</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    Before we propose anything, we take time to understand you — your business, your pressures, and what success truly looks like for you. The best solutions come from deep understanding, not quick assumptions.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 2</span>
                  <h4 className="text-xs font-bold text-white mb-2">We are transparent at every stage</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    If something isn&apos;t working, we tell you. If a scope is unclear, we clarify it. If we make a mistake, we own it and fix it. You will never be left guessing where your project stands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Karma */}
          <div className="p-8 rounded-3xl bg-[#071428] border-t-4 border-purple-500 border-x border-b border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 mb-6">
                <Zap className="h-5 w-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-1">Pillar II</span>
              <h3 className="text-2xl font-bold text-white mb-1">Karma</h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400 block mb-4">Right Action</span>
              <p className="text-zinc-300 text-xs leading-relaxed mb-8">How we deliver — the ownership and care behind every project.</p>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 3</span>
                  <h4 className="text-xs font-bold text-white mb-2">Complete ownership, start to finish</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    When we take on a project, we own it entirely. No handoffs, no blame, no excuses. We manage every detail so you don&apos;t have to — and we take full accountability for what we deliver.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 4</span>
                  <h4 className="text-xs font-bold text-white mb-2">Always ahead of the curve</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    We stay current so you don&apos;t have to. Every solution we build uses the latest thinking, tools, and approaches available. You get the benefit of a team that never stops learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Artha */}
          <div className="p-8 rounded-3xl bg-[#071428] border-t-4 border-brand-cyan border-x border-b border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan mb-6">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-1">Pillar III</span>
              <h3 className="text-2xl font-bold text-white mb-1">Artha</h3>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan block mb-4">Meaningful Outcome</span>
              <p className="text-zinc-300 text-xs leading-relaxed mb-8">What we create — value that is real, measurable, and yours.</p>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 5</span>
                  <h4 className="text-xs font-bold text-white mb-2">Value is the only measure</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    We don&apos;t measure our work by hours spent or tasks completed. We measure it by what it does for your business. If a deliverable doesn&apos;t move something forward for you, we want to know.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/40 border border-white/5">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Our Promise 6</span>
                  <h4 className="text-xs font-bold text-white mb-2">Our clients&apos; growth is our growth</h4>
                  <p className="text-zinc-400 text-[10.5px] leading-relaxed">
                    We succeed only when you succeed. That is not a tagline — it is how we are built. Every decision we make is with your outcome in mind. When you win, we win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StaggerChildren>

        {/* Bottom Statement Bar */}
        <FadeUp delay={0.4} className="p-6 rounded-3xl bg-[#071428] border border-white/5 text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-brand-cyan/5 pointer-events-none" />
          <h3 className="text-base md:text-lg font-bold text-white">This is how we work with you. Every project. Every time.</h3>
        </FadeUp>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Who We Are</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">The Team</h2>
          </FadeUp>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-950/20 border border-white/5 flex flex-col items-center text-center">
              {/* Initials in Teal circle */}
              <div className="h-20 w-20 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan font-bold text-lg mb-6">
                {member.initials}
              </div>
              <h4 className="text-base font-bold text-white">{member.name}</h4>
              <span className="text-xs text-brand-cyan mt-1 block font-medium">{member.role}</span>
              <p className="text-zinc-500 text-xs mt-4 leading-relaxed max-w-xs">{member.bio}</p>
              
              <Link href={member.linkedin} className="text-zinc-500 hover:text-white transition-colors mt-6 text-[10px] font-bold uppercase tracking-wider">
                LinkedIn Profile
              </Link>
            </div>
          ))}
        </StaggerChildren>

        {/* Placeholder Alert Note */}
        <FadeUp delay={0.4} className="mt-12 text-center text-zinc-600 text-xs italic">
          {/* TODO: Replace placeholder names and photos with real team data */}
          Note: Placeholder team representation. Real engineering bios loaded on project engagement.
        </FadeUp>
      </section>

      {/* Timeline Section */}
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
            <span className="text-xs font-bold text-brand-cyan uppercase">2023</span>
            <h4 className="text-base font-bold text-white mt-1">Founded</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              AIRIZZ Consultancy Services Private Limited incorporated.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-purple border-4 border-black" />
            <span className="text-xs font-bold text-brand-purple uppercase">2024</span>
            <h4 className="text-base font-bold text-white mt-1">First Enterprise Client</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              Delivered data integration for a Mumbai logistics firm.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-cyan border-4 border-black" />
            <span className="text-xs font-bold text-brand-cyan uppercase">2025</span>
            <h4 className="text-base font-bold text-white mt-1">Industry Expansion</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              Extended to Legal & Finance and Manufacturing verticals.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-brand-purple border-4 border-black" />
            <span className="text-xs font-bold text-brand-purple uppercase">2026</span>
            <h4 className="text-base font-bold text-white mt-1">Scaling Up</h4>
            <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
              7+ enterprise deployments, building proprietary AI products.
            </p>
          </div>
        </div>
      </section>

      {/* Location / CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 text-center">
        <FadeUp delay={0.1} className="max-w-xl mx-auto bg-zinc-950/40 border border-white/5 p-8 rounded-3xl">
          <MapPin className="h-8 w-8 text-brand-cyan mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white">Enterprise HQ, India</h3>
          <p className="text-zinc-400 text-xs mt-2 mb-6">
            Get in touch with our team directly at{" "}
            <a href="mailto:connect@airizz.co" className="text-brand-cyan underline">
              connect@airizz.co
            </a>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-white bg-brand-cyan/25 hover:bg-brand-cyan/40 border border-brand-cyan/45 px-5 py-3 rounded-full transition-all"
          >
            <span>Book a Discovery Call</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
