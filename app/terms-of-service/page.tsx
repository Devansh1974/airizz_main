import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { generateSeoMetadata } from "@/lib/seo";
import FadeUp from "@/components/animations/FadeUp";

export const metadata = generateSeoMetadata({
  title: "Terms of Service | AIRIZZ",
  description: "Read the Terms of Service governing the consulting and integration services at AIRIZZ Consultancy Services Private Limited.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="bg-bg text-text py-16 md:py-24 font-sans">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Link */}
        <FadeUp delay={0.1} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.2} className="mb-12 border-b border-border pb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 border border-border-2 text-accent mb-4">
            <BookOpen className="h-5 w-5" />
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-text mb-2 font-sans">Terms of Service</h1>
          <span className="text-[10px] text-text-3 font-mono uppercase tracking-wider block mt-1">
            Last Updated: June 2026
          </span>
        </FadeUp>

        {/* Legal Text */}
        <FadeUp delay={0.3} className="grid gap-8 text-xs text-text-2 leading-relaxed font-sans">
          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">1. Use of Website</h3>
            <p>
              By accessing and using airizz.co, you represent that you are at least 18 years of age and agree to comply with these Terms of Service. If you do not agree to these terms, please discontinue use of our website immediately.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">2. Intellectual Property</h3>
            <p>
              Unless otherwise indicated, all content on this website—including copy, code, logos, designs, layouts, graphics, and illustrations—is the exclusive intellectual property of AIRIZZ Consultancy Services Private Limited. You may not distribute, reproduce, or modify any content without our prior written consent.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">3. No Warranties</h3>
            <p>
              This website and all information provided herein are offered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without warranties of any kind, either express or implied, including but not limited to suitability, completeness, security, or accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">4. Limitation of Liability</h3>
            <p>
              In no event shall AIRIZZ Consultancy Services Private Limited, its directors, employees, or partners be liable for any direct, indirect, incidental, or consequential damages arising out of your access to, or inability to access, this website.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">5. Governing Law</h3>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka, India.
            </p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-text mb-3 font-sans">6. Contact</h3>
            <p>
              If you have any questions or concerns about these Terms of Service, please contact us at **connect@airizz.co**.
            </p>
          </div>

          <p className="mt-8 pt-6 border-t border-border text-[10px] text-text-3 font-mono">
            For formal legal notices, please write to **connect@airizz.co**.
          </p>
        </FadeUp>
      </div>
    </div>
  );
}
