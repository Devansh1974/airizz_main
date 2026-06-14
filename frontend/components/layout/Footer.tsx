"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051329] border-t border-[#1e3a5f]/30 pt-16 pb-8 font-sans text-slate-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Logo & Social */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="AIRIZZ Logo"
              width={128}
              height={32}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-slate-400 text-[14px] leading-relaxed max-w-xs">
            Empowering Indian SMEs, traditional businesses, and enterprises with custom AI consulting, workflow automation, and CRM intelligence to scale revenue.
          </p>
          <div className="flex gap-4 items-center mt-1">
            <a
              href="https://linkedin.com/company/airizz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/airizz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              title="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Solutions */}
        <div>
          <h4 className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 mb-5">
            Solutions
          </h4>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <Link href="/services/product-engineering" className="text-slate-400 hover:text-white transition-colors">
                Product Engineering
              </Link>
            </li>
            <li>
              <Link href="/services/ai-consulting" className="text-slate-400 hover:text-white transition-colors">
                AI Consulting for SMB
              </Link>
            </li>
            <li>
              <Link href="/services/data-integration" className="text-slate-400 hover:text-white transition-colors">
                Data Integration
              </Link>
            </li>
            <li>
              <Link href="/services/marketing-automation" className="text-slate-400 hover:text-white transition-colors">
                Marketing Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-slate-400 hover:text-white transition-colors">
                Pricing Plans
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/estimate" className="text-slate-400 hover:text-white transition-colors">
                Cost Estimator
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400 mb-5">
            Contact
          </h4>
          <div className="flex flex-col gap-3.5 text-[14px] text-slate-400">
            <a href="mailto:connect@airizz.co" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4 text-slate-500" />
              connect@airizz.co
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4 text-slate-500" />
              +91 98765 43210
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
              <span>Enterprise HQ, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 pt-6 border-t border-[#1e3a5f]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-slate-500">
        <div>
          &copy; {currentYear} AIRIZZ Consultancy Services Private Limited. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
