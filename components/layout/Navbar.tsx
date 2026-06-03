"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/useScrolled";
import CTAButton from "../shared/CTAButton";

const services = [
  { name: "Product Engineering", href: "/services/product-engineering", desc: "Build scalable AI-powered applications & SaaS." },
  { name: "AI Consulting", href: "/services/ai-consulting", desc: "Generative AI, analytics, & chatbots for SMBs." },
  { name: "Data Integration", href: "/services/data-integration", desc: "Eliminating data silos securely across APIs." },
  { name: "Marketing Automation", href: "/services/marketing-automation", desc: "Workflows that turn leads into loyal customers." },
];

const industries = [
  { name: "Traditional SME", href: "/industries/traditional-sme", desc: "Generative AI into legacy systems without disruption." },
  { name: "Legal & Finance", href: "/industries/legal-finance", desc: "AI agents for contracts, compliance & onboarding." },
  { name: "Manufacturing", href: "/industries/manufacturing", desc: "ERP integration, auto invoicing, & dashboards." },
];

export default function Navbar() {
  const scrolled = useScrolled(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-transparent",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="AiRIZZ Logo"
            width={120}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2 cursor-pointer">
              Services
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === "services" && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-zinc-950 border border-white/10 rounded-2xl p-4 mt-2 shadow-2xl z-50 grid gap-2"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <span className="text-xs font-semibold text-white group-hover:text-brand-cyan transition-colors flex items-center gap-1">
                        {item.name}
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1 leading-relaxed">{item.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors py-2 cursor-pointer">
              Industries
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === "industries" && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-zinc-950 border border-white/10 rounded-2xl p-4 mt-2 shadow-2xl z-50 grid gap-2"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex flex-col p-2.5 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <span className="text-xs font-semibold text-white group-hover:text-brand-purple transition-colors flex items-center gap-1">
                        {item.name}
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1 leading-relaxed">{item.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/products" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Case Studies
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <CTAButton 
            href="/contact" 
            variant="primary" 
            size="sm" 
            className="bg-gradient-to-r from-brand-cyan to-blue-600 hover:from-brand-cyan hover:to-blue-700 text-black font-semibold border-none rounded-full"
            glow
          >
            Book a Call
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[73px] bg-black/95 z-45 md:hidden flex flex-col p-6 overflow-y-auto w-full border-t border-white/5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-6 py-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-600 font-bold">Services</span>
                <div className="grid gap-4 mt-3 pl-2 border-l border-zinc-800">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col"
                    >
                      <span className="text-sm font-medium text-white hover:text-brand-cyan transition-colors">{item.name}</span>
                      <span className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-zinc-600 font-bold">Industries</span>
                <div className="grid gap-4 mt-3 pl-2 border-l border-zinc-800">
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-col"
                    >
                      <span className="text-sm font-medium text-white hover:text-brand-purple transition-colors">{item.name}</span>
                      <span className="text-[10px] text-zinc-500 mt-0.5">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-zinc-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Case Studies
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Pricing
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  Careers
                </Link>
              </div>

              <div className="pt-6">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  className="w-full bg-gradient-to-r from-brand-cyan to-blue-600 hover:from-brand-cyan hover:to-blue-700 text-black font-semibold border-none rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Call
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
