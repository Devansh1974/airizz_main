import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";

export const metadata = generateSeoMetadata({
  title: "Terms of Service | AIRIZZ",
  description: "Read the Terms of Service governing the consulting and integration services at AIRIZZ.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
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
            <BookOpen className="h-5 w-5" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">Terms of Service</h1>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
            Last Updated: June 3, 2026
          </span>
        </FadeUp>

        {/* Legal Text */}
        <FadeUp delay={0.3} className="grid gap-6 text-xs text-zinc-400 leading-relaxed">
          <p>
            Welcome to the **AIRIZZ Technologies** website (airizz.co). By visiting our website, booking an operational strategy audit session, or engaging us for consulting, you agree to comply with and be bound by the following Terms of Service.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">1. Scope of Service</h3>
          <p>
            AIRIZZ provides custom technical consulting, API integrations, data warehouse builds, and custom RAG model configurations. Each engagement is governed by a separate, signed Master Services Agreement (MSA) and Statement of Work (SOW) detailing exact database parameters and SLA milestones.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">2. Intellectual Property</h3>
          <p>
            Unless specified in a signed SOW, all generic pipeline designs, custom scripts, and integrations built using public SDKs are intellectual property of AIRIZZ. Upon final payment of an project, the client receives non-exclusive ownership licenses to execute the specific scripts inside their systems.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">3. Calendar Bookings & Audits</h3>
          <p>
            Our 20-minute audit sessions are provided free of charge for Indian businesses matching our qualification criteria. We reserve the right to reschedule or cancel appointments that do not qualify.
          </p>

          <h3 className="text-sm font-bold text-white mt-4">4. Liability & Guarantees</h3>
          <p>
            While we construct workflows with retry mechanisms and error alerts, third-party API changes (e.g. Meta WhatsApp Business API updates, CRM schema updates) can cause system pauses. AIRIZZ is not liable for data loss or operational interruptions resulting from third-party API updates.
          </p>

          <p className="mt-8 pt-6 border-t border-white/5 text-[10px] text-zinc-500">
            For questions about our service agreements, please contact **hello@airizz.co**.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
