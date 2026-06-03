"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, Mail, CheckCircle, BarChart2 } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/airizz/strategy-audit";
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/PLACEHOLDER";

  useEffect(() => {
    // Load Calendly script only if URL exists and is not placeholder
    if (calendlyUrl && !calendlyUrl.includes("placeholder")) {
      const script = document.createElement("script");
      script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
      script.setAttribute("async", "true");
      document.head.appendChild(script);
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [calendlyUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const isCalendlyConfigured = calendlyUrl && !calendlyUrl.includes("strategy-audit");

  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Operational Audit</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
              Let's Build Your AI Advantage
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute strategy audit. We'll map out exactly where AI can save your team time and grow your revenue — no commitment, no jargon.
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Calendly or Placeholder (60%) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="mb-4 flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="h-4 w-4 text-brand-cyan" />
                <span>Strategy Audit Booking</span>
              </div>
              
              {isCalendlyConfigured ? (
                <div 
                  className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-950" 
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "600px" }}
                />
              ) : (
                <div className="border border-brand-cyan/25 bg-brand-cyan/5 rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center items-center">
                  <span className="text-3xl mb-4 block">📅</span>
                  <h3 className="text-base font-bold text-white mb-2">Schedule your free strategy audit</h3>
                  <p className="text-zinc-500 text-xs max-w-sm mb-6 leading-relaxed">
                    Calendly will load here once process.env.NEXT_PUBLIC_CALENDLY_URL is configured in your environmental variables.
                  </p>
                  <div className="text-[10px] text-zinc-600 font-mono">
                    URL: {calendlyUrl}
                  </div>
                </div>
              )}

              {/* Reassurance Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-500 text-xs mt-6 font-medium">
                <span>✓ No commitment required</span>
                <span>✓ Get a custom AI roadmap</span>
                <span>✓ Response within 24 hours</span>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Trust Sidebar (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Testimonial Card */}
            <FadeUp delay={0.3} className="bg-zinc-950/40 border border-white/5 p-6 rounded-2xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cyan bg-brand-cyan/5 px-2.5 py-1 rounded border border-brand-cyan/15 inline-flex items-center gap-1.5 mb-4">
                <BarChart2 className="h-3.5 w-3.5" />
                Proven Results
              </span>
              <p className="text-zinc-300 text-xs italic leading-relaxed mb-4">
                &ldquo;AIRIZZ reduced our invoice processing errors by 62% — the results were visible within 3 weeks.&rdquo;
              </p>
              <div>
                <h5 className="text-xs font-bold text-white">Rajesh M.</h5>
                <span className="text-[10px] text-zinc-500 block">Operations Director</span>
              </div>
            </FadeUp>

            {/* What happens next */}
            <FadeUp delay={0.4} className="bg-zinc-950/20 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4">What happens next</h3>
              <ul className="grid gap-4 text-xs">
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-brand-purple font-bold">1</span>
                  <div>
                    <strong className="text-zinc-200 block">Context Ingestion</strong>
                    <span className="text-zinc-500 leading-relaxed block mt-0.5">We review your business context and systems before the call.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-brand-purple font-bold">2</span>
                  <div>
                    <strong className="text-zinc-200 block">30-Min Strategy Deep-Dive</strong>
                    <span className="text-zinc-500 leading-relaxed block mt-0.5">Focus strictly on your specific bottlenecks, data silos, and tasks.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-purple/20 text-brand-purple font-bold">3</span>
                  <div>
                    <strong className="text-zinc-200 block">Custom AI Roadmap</strong>
                    <span className="text-zinc-500 leading-relaxed block mt-0.5">Delivered to your email within 48 hours containing exact recommendations.</span>
                  </div>
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>

        {/* Backup Contact Form below */}
        <section className="max-w-xl mx-auto border-t border-white/5 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-white">Prefer to send a message?</h2>
            <p className="text-zinc-500 text-xs mt-2">
              Fill in your operational context below and our integrations specialist will reach out.
            </p>
          </div>

          <FadeUp delay={0.3} className="bg-zinc-950/40 border border-white/5 p-8 rounded-3xl relative">
            {formStatus === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-brand-cyan mx-auto mb-4 animate-bounce" />
                <h4 className="text-base font-bold text-white">Message sent!</h4>
                <p className="text-xs text-zinc-500 mt-2">We'll review your business details and reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="fullName" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Business Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company Pvt Ltd"
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Which service interests you?</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Not sure yet"
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all cursor-pointer"
                  >
                    <option value="Product Engineering">Product Engineering</option>
                    <option value="AI Consulting">AI Consulting for Small Business</option>
                    <option value="Data Integration">Data Integration Services</option>
                    <option value="Marketing Automation">Marketing Automation Agency</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your current systems and what processes run manually today..."
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                  />
                </div>

                {formStatus === "error" && (
                  <div className="text-xs text-red-400 mt-1">An error occurred. Please verify your connection and try again.</div>
                )}

                <CTAButton
                  type="submit"
                  variant="primary"
                  className="w-full mt-4"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message →"}
                </CTAButton>
              </form>
            )}
          </FadeUp>
        </section>
      </div>
    </div>
  );
}
