"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ExternalLink, ShieldCheck, Cpu, Database } from "lucide-react";
import { teamData, TeamMember } from "@/content/data/team";
import StaggerChildren from "@/components/animations/StaggerChildren";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
      {/* Metrics Banner */}
      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 p-8 rounded-2xl bg-surface/50 border border-border backdrop-blur-sm">
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text tracking-tight font-sans">7+ Enterprise Systems</h4>
              <p className="text-text-2 text-xs mt-1.5 leading-relaxed font-sans">
                Complex AI implementations and automated workflows running live across logistics, manufacturing, and law.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent">
              <Database className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text tracking-tight font-sans">100M+ Sync Processes</h4>
              <p className="text-text-2 text-xs mt-1.5 leading-relaxed font-sans">
                Nightly batch pipelines and multi-system data connectors running continuously with zero manual support.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-text tracking-tight font-sans">99.9% Pipeline Uptime</h4>
              <p className="text-text-2 text-xs mt-1.5 leading-relaxed font-sans">
                Automated error notifications, self-healing queues, and secure integrations keeping data flowing.
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Heading */}
      <div className="mb-16">
        <FadeUp delay={0.1}>
          <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Who We Are</span>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-text mt-2 font-sans">The Team</h2>
        </FadeUp>
      </div>

      {/* Grid of Team Cards */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedMember(member)}
            className="group cursor-pointer p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.15)] relative overflow-hidden"
          >
            {/* Hover subtle glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col items-center relative z-10">
              {/* Photo Frame */}
              <div className="relative h-28 w-28 rounded-2xl border border-border overflow-hidden mb-6 bg-surface-2 group-hover:border-accent/50 transition-all duration-300 shadow-inner">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text font-mono font-bold text-lg bg-gradient-to-br from-surface-2 to-surface">
                    {member.initials}
                  </div>
                )}
              </div>

              {/* Title Info */}
              <h4 className="text-base font-bold text-text font-sans group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h4>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent mt-2 px-2 py-0.5 rounded-[4px] bg-accent/10 border border-accent/20">
                {member.role}
              </span>

              {/* Truncated Bio */}
              <p className="text-text-2 text-xs mt-4 leading-relaxed text-center font-sans max-w-xs line-clamp-2">
                {member.bio}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center mt-5">
                {member.skills.slice(0, 3).map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-mono text-text-3 bg-bg px-2 py-1 rounded-[4px] border border-border"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 3 && (
                  <span className="text-[9px] font-mono text-accent bg-accent/5 px-2 py-1 rounded-[4px] border border-accent/10">
                    +{member.skills.length - 3} More
                  </span>
                )}
              </div>
            </div>

            {/* Read Bio indicator */}
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-center text-[10px] font-mono font-bold text-text-3 group-hover:text-text transition-colors duration-300 tracking-wider uppercase relative z-10">
              View Profile & Experience →
            </div>
          </div>
        ))}
      </StaggerChildren>

      {/* Modal Bio Details Drawer */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 font-sans">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-2xl bg-surface border border-border rounded-3xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 border border-border text-text-3 hover:text-text hover:bg-surface-3 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Left Column: Image & Contact links */}
              <div className="md:w-5/12 bg-surface-2 border-b md:border-b-0 md:border-r border-border p-8 flex flex-col items-center justify-center text-center">
                <div className="relative h-36 w-36 rounded-2xl border border-border overflow-hidden mb-6 bg-surface shadow-md">
                  {selectedMember.image ? (
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text font-mono font-bold text-2xl bg-gradient-to-br from-surface-2 to-surface">
                      {selectedMember.initials}
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-text tracking-tight font-sans">
                  {selectedMember.name}
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent mt-2 px-2 py-0.5 rounded-[4px] bg-accent/10 border border-accent/20">
                  {selectedMember.role}
                </span>

                {/* Direct Contact links */}
                <div className="flex gap-4 mt-6">
                    <Link
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border text-text-3 hover:text-accent hover:border-accent/30 transition-all shadow-sm"
                      title="LinkedIn Profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </Link>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border text-text-3 hover:text-accent hover:border-accent/30 transition-all shadow-sm"
                    title="Send Email"
                  >
                    <Mail className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Full details & Bio */}
              <div className="md:w-7/12 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono font-bold text-text-3 uppercase tracking-wider block mb-2">
                    Professional Biography
                  </span>
                  <p className="text-text-2 text-xs leading-relaxed font-sans mb-6">
                    {selectedMember.bio}
                  </p>

                  <span className="text-[9px] font-mono font-bold text-text-3 uppercase tracking-wider block mb-3">
                    Core Competencies & Tools
                  </span>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedMember.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono text-text bg-bg border border-border px-3 py-1.5 rounded-[6px] shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <CTAButton
                    href="/contact"
                    variant="primary"
                    className="w-full text-center flex justify-center py-3 text-xs md:text-sm rounded-[8px] font-medium"
                    onClick={() => setSelectedMember(null)}
                  >
                    Book Consultation with {selectedMember.name.split(" ")[0]} →
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
