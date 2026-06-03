"use client";

import React, { useState } from "react";
import { Briefcase, MapPin, Clock, X, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";
import FadeUp from "@/components/animations/FadeUp";
import StaggerChildren from "@/components/animations/StaggerChildren";

const openRoles = [
  {
    id: "ai-engineer",
    title: "AI Integration Engineer",
    dept: "Engineering",
    loc: "Bangalore (Hybrid)",
    type: "Full-Time",
    desc: "Design and implement custom RAG workflows, vector database storage, and fine-tune models on internal corporate SOPs.",
    requirements: ["2+ years experience building LangChain, LlamaIndex, or raw vector DB apps", "Proficient in Python, Node.js, and TypeScript", "Experience scaling LLM calls in production environments"]
  },
  {
    id: "automation-dev",
    title: "Workflow Automation Developer",
    dept: "Integrations",
    loc: "Remote (India)",
    type: "Full-Time",
    desc: "Build highly resilient webhooks, map APIs across ERP/CRM systems, and customize background worker queues.",
    requirements: ["Deep expertise in Make.com, Zapier, and custom Node.js/Python API handlers", "Familiarity with database queries and JSON/CSV sanitization", "Strong client-facing process audit capability"]
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<typeof openRoles[0] | null>(null);
  const [appStatus, setAppStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleApplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitting();
  };

  const setFormSubmitting = () => {
    setAppStatus("submitting");
    setTimeout(() => {
      setAppStatus("success");
    }, 1500);
  };

  const closePortal = () => {
    setSelectedRole(null);
    setAppStatus("idle");
  };

  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Join AIRIZZ</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Shape the Future of SME AI</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
              We are building the technical infrastructure that brings automated workflows and local database intelligence to traditional Indian businesses.
            </p>
          </FadeUp>
        </div>

        {/* Roles List */}
        <div className="max-w-4xl mx-auto">
          <FadeUp delay={0.2} className="mb-8 flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="h-4 w-4 text-brand-cyan" />
            <span>Current Openings</span>
          </FadeUp>

          <StaggerChildren className="grid gap-6">
            {openRoles.map((role) => (
              <div 
                key={role.id} 
                className="p-6 md:p-8 rounded-3xl bg-zinc-950/40 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-white">{role.title}</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-cyan bg-brand-cyan/5 px-2 py-0.5 rounded border border-brand-cyan/15">
                      {role.dept}
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
                  Apply Now
                </CTAButton>
              </div>
            ))}
          </StaggerChildren>
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
              className="fixed inset-y-0 right-0 z-50 w-full max-w-lg glass shadow-2xl p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
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
                      {selectedRole.dept} &bull; {selectedRole.loc}
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
                    <h4 className="text-lg font-bold text-white">Application Deployed</h4>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                      We have received your application profile. Our engineering team will audit your CV and contact you within 3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="grid gap-4">
                    <div>
                      <label htmlFor="app-name" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Full Name</label>
                      <input
                        id="app-name"
                        type="text"
                        required
                        placeholder="Ananya Sen"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="app-email" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Email Address</label>
                        <input
                          id="app-email"
                          type="email"
                          required
                          placeholder="ananya@gmail.com"
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="app-phone" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Phone Number</label>
                        <input
                          id="app-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="app-portfolio" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">GitHub / LinkedIn URL</label>
                      <input
                        id="app-portfolio"
                        type="url"
                        required
                        placeholder="https://github.com/profile"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="app-bio" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Relevant Projects</label>
                      <textarea
                        id="app-bio"
                        rows={4}
                        required
                        placeholder="Detail custom automations or AI systems you have deployed in production..."
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                      />
                    </div>

                    <div className="mt-4 p-4 rounded-xl border border-brand-purple/15 bg-brand-purple/5">
                      <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-purple flex items-center gap-1">
                        <Sparkles className="h-3 w-3" />
                        Selected Requirements
                      </h5>
                      <ul className="grid gap-1 text-[10px] text-zinc-500 mt-2 list-disc pl-3">
                        {selectedRole.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <CTAButton
                      type="submit"
                      variant="primary"
                      className="w-full mt-4"
                      disabled={appStatus === "submitting"}
                    >
                      {appStatus === "submitting" ? "Submitting..." : "Submit Application"}
                    </CTAButton>
                  </form>
                )}
              </div>

              <div className="text-center text-[10px] text-zinc-500 mt-4 pt-4 border-t border-white/5">
                AIRIZZ is an equal opportunity employer. We respect your privacy.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
