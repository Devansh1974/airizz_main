import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";

export const metadata = generateSeoMetadata({
  title: "Privacy Policy | AIRIZZ",
  description: "Read the Privacy Policy and data governance practices at AIRIZZ Consultancy Services Private Limited.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#040d1a] text-white py-16 md:py-24">
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
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block font-mono">
            Last Updated: June 2026
          </span>
        </FadeUp>

        {/* Legal Text */}
        <FadeUp delay={0.3} className="grid gap-8 text-xs text-zinc-400 leading-relaxed">
          <div>
            <h3 className="text-sm font-bold text-white mb-3">1. Who We Are</h3>
            <p>
              AIRIZZ Consultancy Services Private Limited (&ldquo;AIRIZZ&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) operates airizz.co.
              <br />
              Contact details: connect@airizz.co, Enterprise HQ, India.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">2. Information We Collect</h3>
            <p>
              We collect the following personal and corporate information:
            </p>
            <ul className="list-disc pl-4 mt-2 grid gap-1.5">
              <li>Name and email address (when you fill our contact form or book a call).</li>
              <li>Business name and query details (via our contact form).</li>
              <li>Cookie and analytics data (see the Cookies section below).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">3. How We Use Your Information</h3>
            <p>
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-4 mt-2 grid gap-1.5">
              <li>To respond directly to your business enquiry.</li>
              <li>To send you the free AI roadmap or audit findings you requested.</li>
              <li>To send occasional updates about AIRIZZ services (you can unsubscribe at any time).</li>
              <li>To analyse website traffic patterns and improve our user interface.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">4. Third-Party Services</h3>
            <p>
              We use trusted third-party services to run our digital infrastructure:
            </p>
            <ul className="list-disc pl-4 mt-2 grid gap-1.5">
              <li><strong>Google Analytics:</strong> traffic analysis.</li>
              <li><strong>Calendly:</strong> meeting scheduling.</li>
              <li><strong>Formspree:</strong> secure contact form submissions.</li>
            </ul>
            <p className="mt-2">
              Each third-party service provider operates under its own separate privacy policy rules.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">5. Cookies</h3>
            <p>
              We use functional cookies (required for the website to load and function properly) and analytics cookies (Google Analytics, optional). You can manage cookie preferences via the consent banner.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">6. Your Rights</h3>
            <p>
              You have the right to access, correct, or delete any personal data we hold about you. Email connect@airizz.co to make a request, and we will process it promptly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-3">7. Governing Law</h3>
            <p>
              This privacy policy is governed by and construed in accordance with the Information Technology Act, 2000 (India).
            </p>
          </div>

          <p className="mt-8 pt-6 border-t border-white/5 text-[10px] text-zinc-500 font-mono">
            For specific data access requests or questions regarding governance, please contact **connect@airizz.co**.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
