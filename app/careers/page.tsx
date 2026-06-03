"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, X, CheckCircle, Sparkles, Brain, Globe, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

const openRoles = [
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    team: "Product & Engineering",
    loc: "Remote, India",
    type: "Full-time",
    desc: "Build and deploy machine learning models, LLM integrations, and AI agents for enterprise clients. 2+ years experience with Python, PyTorch or TensorFlow, and API development."
  },
  {
    id: "automation-consultant",
    title: "Automation Consultant",
    team: "Consulting",
    loc: "Remote, India",
    type: "Full-time",
    desc: "Work directly with SMB clients to identify automation opportunities and implement solutions using n8n, Make, or custom code. Excellent communication required."
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer (Next.js)",
    team: "Product & Engineering",
    loc: "Remote, India",
    type: "Full-time / Internship",
    desc: "Build performant, accessible frontend interfaces using Next.js, TypeScript, and Tailwind CSS. Strong eye for design required."
  }
];

const perks = [
  {
    icon: Brain,
    title: "Real AI Work",
    desc: "Every project is a live client engagement. No tutorial-style tasks."
  },
  {
    icon: Globe,
    title: "Remote-First",
    desc: "Work from anywhere in India. We care about output, not office hours."
  },
  {
    icon: TrendingUp,
    title: "Grow Fast",
    desc: "Small team means you take on more, learn faster, and make a bigger impact."
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<typeof openRoles[0] | null>(null);
  const [appStatus, setAppStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/PLACEHOLDER";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setAppStatus("success");
      } else {
        const data = await response.json();
        setAppStatus("error");
        setErrorMessage(data.error || "Something went wrong while submitting the application.");
      }
    } catch (err: any) {
      setAppStatus("error");
      setErrorMessage(err.message || "Failed to connect to application server.");
    }
  };

  const closePortal = () => {
    setSelectedRole(null);
    setAppStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="bg-[#040d1a] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan font-mono">Careers</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Build the Future of AI in India. Join Us.</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-xl mx-auto font-medium">
              Small team. Massive ownership. Real enterprise AI problems from day one.
            </p>
          </FadeUp>
        </div>

        {/* Culture Description Section */}
        <section className="max-w-3xl mx-auto mb-20 p-8 rounded-3xl bg-[#071428] border border-white/5">
          <h2 className="text-xl font-bold mb-6 text-brand-cyan">Our Culture</h2>
          <ul className="grid gap-4">
            <li className="flex gap-3 items-start text-sm text-zinc-300">
              <span className="text-brand-purple shrink-0 mt-0.5">&bull;</span>
              <span>Work directly on live client engagements — no internal sandbox projects.</span>
            </li>
            <li className="flex gap-3 items-start text-sm text-zinc-300">
              <span className="text-brand-purple shrink-0 mt-0.5">&bull;</span>
              <span>Remote-first, async culture — work from anywhere in India.</span>
            </li>
            <li className="flex gap-3 items-start text-sm text-zinc-300">
              <span className="text-brand-purple shrink-0 mt-0.5">&bull;</span>
              <span>You&apos;ll see your work used by real businesses making real decisions.</span>
            </li>
          </ul>
        </section>

        {/* Perks Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Perks & Benefits</h2>
          </div>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="p-6 md:p-8 rounded-3xl bg-zinc-950/40 border border-white/5 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </StaggerChildren>
        </section>

        {/* Roles List */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="h-4 w-4 text-brand-cyan" />
            <span>Open Roles</span>
          </div>

          <StaggerChildren className="grid gap-6">
            {openRoles.map((role) => (
              <div 
                key={role.id} 
                className="p-6 md:p-8 rounded-3xl bg-[#071428] border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">{role.title}</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-cyan bg-brand-cyan/5 px-2 py-0.5 rounded border border-brand-cyan/15">
                      {role.team}
                    </span>
                  </div>
                  
                  <div className="flex gap-4 text-xs text-zinc-500 mb-4 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-zinc-600" /> {role.loc}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-zinc-600" /> {role.type}</span>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">{role.desc}</p>
                </div>

                <CTAButton
                  onClick={() => setSelectedRole(role)}
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto shrink-0"
                >
                  Apply Now &rarr;
                </CTAButton>
              </div>
            ))}
          </StaggerChildren>
        </div>

        {/* General Application Note */}
        <div className="text-center mt-16">
          <p className="text-sm text-zinc-500">
            Don&apos;t see your role?{" "}
            <button
              onClick={() => setSelectedRole({
                id: "general-application",
                title: "General Application",
                team: "All Departments",
                loc: "Remote, India",
                type: "Full-time",
                desc: "We are always looking for smart builders. Let us know what you do best!"
              })}
              className="text-brand-cyan hover:underline font-semibold cursor-pointer bg-transparent border-none"
            >
              Send an open application &rarr;
            </button>
          </p>
        </div>
      </div>

      {/* Application Popup Modal */}
      <AnimatePresence>
        {selectedRole && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={closePortal}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Sheet */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-[#071428] border-l border-white/5 shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white">Apply for {selectedRole.title}</h3>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block mt-1">
                      {selectedRole.team} &bull; {selectedRole.loc}
                    </span>
                  </div>
                  <button
                    onClick={closePortal}
                    className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {appStatus === "success" ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-brand-cyan mx-auto mb-6 animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Application Received!</h4>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                      We have successfully received your application files. Our recruiting team will review your profile and update you within 3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="grid gap-4" encType="multipart/form-data">
                    <input type="hidden" name="role" value={selectedRole.title} />

                    <div>
                      <label htmlFor="app-name" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Full Name</label>
                      <input
                        id="app-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ananya Sen"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-email" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Email Address</label>
                      <input
                        id="app-email"
                        name="email"
                        type="email"
                        required
                        placeholder="ananya@gmail.com"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-portfolio" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">LinkedIn URL</label>
                      <input
                        id="app-portfolio"
                        name="linkedin"
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/profile"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-bio" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Why AIRIZZ?</label>
                      <textarea
                        id="app-bio"
                        name="why_airizz"
                        rows={4}
                        required
                        placeholder="Tell us what excites you about this role and how you can add value..."
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-resume" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Resume Upload (PDF)</label>
                      <input
                        id="app-resume"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        required
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-zinc-400 focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>

                    {appStatus === "error" && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs leading-relaxed">
                        {errorMessage}
                      </div>
                    )}

                    <CTAButton
                      type="submit"
                      variant="primary"
                      className="w-full mt-4"
                      disabled={appStatus === "submitting"}
                    >
                      {appStatus === "submitting" ? "Submitting Application..." : "Submit Application →"}
                    </CTAButton>
                  </form>
                )}
              </div>

              <div className="text-center text-[10px] text-zinc-500 mt-8 pt-4 border-t border-white/5">
                AIRIZZ is an equal opportunity employer. We respect your privacy.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
