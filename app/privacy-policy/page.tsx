import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";

export const metadata = generateSeoMetadata({
  title: "Privacy Policy | AIRIZZ",
  description: "Read the privacy policy and data governance practices at AIRIZZ Technologies.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.2} className="mb-12 border-b border-white/5 pb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan mb-4">
            <Shield className="h-5 w-5" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Privacy Policy</h1>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
            Effective Date: June 3, 2026
          </span>
        </FadeUp>

        {/* Legal Text */}
        <FadeUp delay={0.3} className="grid gap-6 text-xs text-zinc-400 leading-relaxed">
          <p>
            At **AIRIZZ Technologies Private Limited** (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we prioritize the confidentiality and security of our clients&apos; corporate operations and database logs. This Privacy Policy details how we handle information gathered via our website (airizz.co) and during our consulting engagements.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">1. Data Ingestion & Isolation</h3>
          <p>
            For client-side implementations (RAG pipelines, vector storage, CRM mapping), we deploy isolated vector namespaces and closed cloud infrastructure. We do not use your private SOPs, templates, contracts, or transaction sheets to train public models. All data processing is confined within your designated cloud instances (AWS, GCP, Azure, or on-premise servers).
          </p>

          <h3 className="text-sm font-bold text-white mt-4">2. Information We Collect</h3>
          <p>
            When you schedule an audit session on our calendar or complete an inquiry form, we collect your name, company name, work email address, phone number, and details regarding your operational friction points. We use this information solely to customize your strategy session.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">3. GDPR & DPDP Compliance</h3>
          <p>
            We adhere to the European Union GDPR standards and the Digital Personal Data Protection Act (DPDPA) of India. We do not share, sell, or license corporate details or personal contact records to third-party brokers.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">4. Cookies & Analytics</h3>
          <p>
            We use essential cookies to maintain site security. Analytical cookies are loaded only after your explicit opt-in consent via our Cookie Consent banner, helping us monitor site load behaviors and click metrics anonymously.
          </p>

          <p className="mt-8 pt-6 border-t border-white/5 text-[10px] text-zinc-500">
            For specific data access requests or security questions, please reach out to our team at **hello@airizz.co**.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
