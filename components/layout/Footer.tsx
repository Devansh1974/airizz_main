"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="AiRIZZ Logo"
              width={100}
              height={30}
              className="h-6 w-auto object-contain"
            />
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Empowering Indian SMEs, traditional businesses, and enterprises with custom AI consulting, workflow automation, and CRM intelligence to scale revenue.
          </p>
          <div className="flex flex-col gap-3 text-sm text-zinc-500">
            <a href="mailto:connect@airizz.co" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              connect@airizz.co
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Enterprise HQ, India</span>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Services</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li>
              <Link href="/services/product-engineering" className="hover:text-brand-cyan transition-colors">
                Product Engineering
              </Link>
            </li>
            <li>
              <Link href="/services/ai-consulting" className="hover:text-brand-cyan transition-colors">
                AI Consulting for SMB
              </Link>
            </li>
            <li>
              <Link href="/services/data-integration" className="hover:text-brand-cyan transition-colors">
                Data Integration
              </Link>
            </li>
            <li>
              <Link href="/services/marketing-automation" className="hover:text-brand-cyan transition-colors">
                Marketing Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Industries */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Industries</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li>
              <Link href="/industries/traditional-sme" className="hover:text-brand-purple transition-colors">
                Traditional SME
              </Link>
            </li>
            <li>
              <Link href="/industries/legal-finance" className="hover:text-brand-purple transition-colors">
                Legal & Finance
              </Link>
            </li>
            <li>
              <Link href="/industries/manufacturing" className="hover:text-brand-purple transition-colors">
                Manufacturing & Logistics
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-zinc-400">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing Plans
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
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
