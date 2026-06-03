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
          
          <div className="flex gap-4 mt-2">
            <a 
              href="https://linkedin.com/company/airizz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-8 w-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/airizz.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-8 w-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="https://facebook.com/airizz.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-8 w-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
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
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
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
