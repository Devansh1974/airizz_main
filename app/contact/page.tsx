"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Clock } from "lucide-react";
import CalendlyInline from "@/components/shared/CalendlyInline";
import FadeUp from "@/components/animations/FadeUp";
import CTAButton from "@/components/shared/CTAButton";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "placeholder_formspree_id";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
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

  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Operational Audit</span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">Book Your AI Strategy Call</h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-zinc-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Select a slot on the calendar for a 20-minute operational assessment, or drop us a query using the form below.
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Calendly Embed */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="mb-4 flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider">
                <Clock className="h-4 w-4 text-brand-cyan" />
                <span>1-on-1 Interactive Booking</span>
              </div>
              <CalendlyInline />
            </FadeUp>
          </div>

          {/* Right Column: contact Details & backup Formspree Form */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* contact Details */}
            <FadeUp delay={0.3} className="bg-zinc-950/20 border border-white/5 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-white mb-4">Direct contact</h3>
              <div className="grid gap-3 text-xs text-zinc-400">
                <a href="mailto:hello@airizz.co" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-brand-cyan" />
                  hello@airizz.co
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-brand-cyan" />
                  +91 98765 43210
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </FadeUp>

            {/* Form */}
            <FadeUp delay={0.4} className="bg-zinc-950/40 border border-white/5 p-8 rounded-3xl relative">
              <h3 className="text-lg font-bold text-white mb-6">Send an Inquiry</h3>

              {formStatus === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-brand-cyan mx-auto mb-4 animate-bounce" />
                  <h4 className="text-base font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-zinc-500 mt-2">We will review your business operational details and get back in 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Devansh Singh"
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Work Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="dev@company.com"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Business Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Traditional Trade Corp"
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-1">Friction Bottlenecks</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Describe what parts of your database, billing, or shipping systems run manually today..."
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                    />
                  </div>

                  {formStatus === "error" && (
                    <div className="text-xs text-red-400 mt-1">An error occurred. Please verify your internet connection or email and try again.</div>
                  )}

                  <CTAButton
                    type="submit"
                    variant="primary"
                    className="w-full mt-4"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </CTAButton>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
