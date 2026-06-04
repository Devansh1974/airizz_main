"use client";

import React, { useState, useEffect } from "react";
import { Clock, CheckCircle, BarChart2 } from "lucide-react";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const baseCalendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/airizz/strategy-audit";
  const hasQueryParams = baseCalendlyUrl.includes("?");
  const calendlyUrl = baseCalendlyUrl + (hasQueryParams ? "&" : "?") + "background_color=0c0c0f&text_color=e4e4e7&primary_color=00c8b4&hide_gdpr_banner=1";
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

  const isCalendlyConfigured = calendlyUrl && !calendlyUrl.includes("placeholder");

  return (
    <div className="bg-bg text-text py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <FadeUp delay={0.1}>
            <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-accent">Operational Audit</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mt-3 font-sans leading-tight">
              Let's Build Your AI Advantage
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-text-2 text-[15px] font-normal mt-4 max-w-xl leading-relaxed">
              Book a free 30-minute strategy audit. We'll map out exactly where AI can save your team time and grow your revenue — no commitment, no jargon.
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Left Column: Calendly or Placeholder (60%) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="mb-4 flex items-center gap-2 text-text-3 text-[11px] font-mono font-medium uppercase tracking-wider">
                <Clock className="h-4 w-4 text-accent" />
                <span>Strategy Audit Booking</span>
              </div>
              
              {isCalendlyConfigured ? (
                <div 
                  className="calendly-inline-widget w-full rounded-[12px] overflow-hidden border border-border bg-surface" 
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "600px" }}
                />
              ) : (
                <div className="border border-border bg-surface rounded-[12px] p-8 text-center min-h-[400px] flex flex-col justify-center items-center shadow-none">
                  <span className="text-3xl mb-4 block">📅</span>
                  <h3 className="text-[17px] font-semibold text-text mb-2 font-sans">Schedule your free strategy audit</h3>
                  <p className="text-text-2 text-xs max-w-sm mb-6 leading-relaxed">
                    Calendly will load here once process.env.NEXT_PUBLIC_CALENDLY_URL is configured in your environmental variables.
                  </p>
                  <div className="text-[10px] text-text-3 font-mono">
                    URL: {calendlyUrl}
                  </div>
                </div>
              )}

              {/* Reassurance Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-3 text-[11px] font-mono tracking-wider mt-6 font-medium">
                <span>✓ NO COMMITMENT REQUIRED</span>
                <span>✓ GET A CUSTOM AI ROADMAP</span>
                <span>✓ RESPONSE WITHIN 24 HOURS</span>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Trust Sidebar (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Testimonial Card */}
            <FadeUp delay={0.3} className="bg-surface border border-border p-6 rounded-[12px] shadow-none">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-accent bg-surface-2 px-2.5 py-1 rounded-[6px] border border-border-2 inline-flex items-center gap-1.5 mb-4">
                <BarChart2 className="h-3.5 w-3.5" />
                Proven Results
              </span>
              <p className="text-text-2 text-[14px] italic leading-relaxed mb-4 font-sans">
                &ldquo;AIRIZZ reduced our invoice processing errors by 62% — the results were visible within 3 weeks.&rdquo;
              </p>
              <div>
                <h5 className="text-xs font-semibold text-text font-sans">Rajesh M.</h5>
                <span className="text-[10px] text-text-3 font-mono block mt-1 uppercase">Operations Director</span>
              </div>
            </FadeUp>

            {/* What happens next */}
            <FadeUp delay={0.4} className="bg-surface border border-border p-6 rounded-[12px] shadow-none">
              <h3 className="text-[15px] font-semibold text-text mb-4 font-sans">What happens next</h3>
              <ul className="grid gap-4 text-xs font-sans">
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border-2 text-accent font-bold font-mono">1</span>
                  <div>
                    <strong className="text-text block font-semibold">Context Ingestion</strong>
                    <span className="text-text-2 leading-relaxed block mt-0.5 text-xs">We review your business context and systems before the call.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border-2 text-accent font-bold font-mono">2</span>
                  <div>
                    <strong className="text-text block font-semibold">30-Min Strategy Deep-Dive</strong>
                    <span className="text-text-2 leading-relaxed block mt-0.5 text-xs">Focus strictly on your specific bottlenecks, data silos, and tasks.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-2 border border-border-2 text-accent font-bold font-mono">3</span>
                  <div>
                    <strong className="text-text block font-semibold">Custom AI Roadmap</strong>
                    <span className="text-text-2 leading-relaxed block mt-0.5 text-xs">Delivered to your email within 48 hours containing exact recommendations.</span>
                  </div>
                </li>
              </ul>
            </FadeUp>

            {/* Social Connect Links */}
            <FadeUp delay={0.5} className="bg-surface border border-border p-6 rounded-[12px] shadow-none font-sans">
              <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">Follow our journey</h3>
              <p className="text-text-2 text-xs leading-relaxed mb-4">
                We share workflow automations, custom AI agents case reviews, and digital system playbooks weekly.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/airizz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-text-3 hover:text-text-2 transition-colors uppercase tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://instagram.com/airizz.co" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-text-3 hover:text-text-2 transition-colors uppercase tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com/airizz.co" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-text-3 hover:text-text-2 transition-colors uppercase tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Backup Contact Form below */}
        <section className="max-w-xl mx-auto border-t border-border pt-16 font-sans">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-text font-sans">Prefer to send a message?</h2>
            <p className="text-text-2 text-xs mt-2">
              Fill in your operational context below and our integrations specialist will reach out.
            </p>
          </div>

          <FadeUp delay={0.3} className="bg-surface border border-border p-8 rounded-[12px] relative shadow-none">
            {formStatus === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4 animate-bounce" />
                <h4 className="text-base font-semibold text-text font-sans">Message sent!</h4>
                <p className="text-xs text-text-2 mt-2">We'll review your business details and reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="fullName" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Full Name *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-bg border border-border rounded-[8px] px-4 py-3 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Business Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-bg border border-border rounded-[8px] px-4 py-3 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company Pvt Ltd"
                      className="w-full bg-bg border border-border rounded-[8px] px-4 py-3 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Which service interests you?</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Not sure yet"
                    className="w-full bg-bg border border-border rounded-[8px] px-4 py-3 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer font-sans"
                  >
                    <option value="Product Engineering">Product Engineering</option>
                    <option value="AI Consulting">AI Consulting for Small Business</option>
                    <option value="Data Integration">Data Integration Services</option>
                    <option value="Marketing Automation">Marketing Automation Agency</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-[10px] font-mono font-medium uppercase tracking-wider text-text-3 block mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your current systems and what processes run manually today..."
                    className="w-full bg-bg border border-border rounded-[8px] px-4 py-3 text-xs text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none font-sans"
                  />
                </div>

                {formStatus === "error" && (
                  <div className="text-xs text-red-400 mt-1 font-sans">An error occurred. Please verify your connection and try again.</div>
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
