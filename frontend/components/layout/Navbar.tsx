"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import useScrolled from "@/hooks/useScrolled";
import CTAButton from "../shared/CTAButton";

const services = [
  { name: "All Services", href: "/services", desc: "Explore our four core practice areas and pricing." },
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
  const scrolled = useScrolled(80);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b",
          scrolled
            ? "border-border"
            : "border-transparent"
        )}
        style={{
          height: "60px",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AIRIZZ Logo"
              width={150}
              height={50}
              className="h-[45px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-[14px] transition-colors duration-200",
                isLinkActive("/") ? "text-text font-medium" : "text-text-2 hover:text-text"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 text-[14px] transition-colors duration-200 py-4 cursor-pointer",
                  pathname.startsWith("/services") ? "text-text font-medium" : "text-text-2 hover:text-text"
                )}
              >
                Services
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeDropdown === "services" && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-surface border border-border rounded-xl p-3 mt-1 shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-50 grid gap-1"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    {services.map((item) => (
                      <React.Fragment key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "group flex flex-col p-2 rounded-lg hover:bg-surface-2 transition-colors",
                            item.href === "/services" && "bg-accent/5 hover:bg-accent/10 border border-accent/10 mb-1"
                          )}
                        >
                          <span className={cn(
                            "text-[13px] font-semibold text-text group-hover:text-accent transition-colors flex items-center gap-1",
                            item.href === "/services" && "text-accent font-bold"
                          )}>
                            {item.name}
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-accent animate-none" />
                          </span>
                          <span className="text-[11px] text-text-2 mt-0.5 leading-relaxed">{item.desc}</span>
                        </Link>
                        {item.href === "/services" && <div className="h-[1px] bg-border my-1" />}
                      </React.Fragment>
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
              <button
                className={cn(
                  "flex items-center gap-1 text-[14px] transition-colors duration-200 py-4 cursor-pointer",
                  pathname.startsWith("/industries") ? "text-text font-medium" : "text-text-2 hover:text-text"
                )}
              >
                Industries
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", activeDropdown === "industries" && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-surface border border-border rounded-xl p-3 mt-1 shadow-[0_4px_24px_rgba(0,0,0,0.5)] z-50 grid gap-1"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex flex-col p-2 rounded-lg hover:bg-surface-2 transition-colors"
                      >
                        <span className="text-[13px] font-semibold text-text group-hover:text-accent transition-colors flex items-center gap-1">
                          {item.name}
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-accent" />
                        </span>
                        <span className="text-[11px] text-text-2 mt-0.5 leading-relaxed">{item.desc}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={cn(
                "text-[14px] transition-colors duration-200",
                isLinkActive("/about") ? "text-text font-medium" : "text-text-2 hover:text-text"
              )}
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className={cn(
                "text-[14px] transition-colors duration-200",
                isLinkActive("/case-studies") ? "text-text font-medium" : "text-text-2 hover:text-text"
              )}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={cn(
                "text-[14px] transition-colors duration-200",
                isLinkActive("/blog") ? "text-text font-medium" : "text-text-2 hover:text-text"
              )}
            >
              Blog
            </Link>

            <Link
              href="/estimate"
              className={cn(
                "text-[14px] transition-colors duration-200",
                isLinkActive("/estimate") ? "text-text font-medium" : "text-text-2 hover:text-text"
              )}
            >
              Estimator
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:block">
            <CTAButton
              href="/contact"
              variant="primary"
              size="sm"
              className="rounded-[6px] px-5 py-[10px] text-[13.5px] font-bold"
            >
              Book a Call
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-2 hover:text-text transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Slide in from right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-bg-2 border-l border-border z-50 lg:hidden flex flex-col p-6 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-text-2 hover:text-text transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text hover:text-accent transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-text-3 font-bold block mb-2">Services</span>
                  <div className="grid gap-3.5 pl-3 border-l border-border">
                    {services.map((item) => (
                      <React.Fragment key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex flex-col rounded-lg p-1.5 transition-all",
                            item.href === "/services" && "bg-accent/5 border border-accent/10 px-2.5 py-2 mb-1.5"
                          )}
                        >
                          <span className={cn(
                            "text-sm font-medium text-text hover:text-accent transition-colors flex items-center gap-1",
                            item.href === "/services" && "text-accent font-bold"
                          )}>
                            {item.name}
                            {item.href === "/services" && <ArrowRight className="h-3.5 w-3.5 text-accent inline" />}
                          </span>
                          <span className="text-[10px] text-text-2 mt-0.5 leading-relaxed">{item.desc}</span>
                        </Link>
                        {item.href === "/services" && <div className="h-[1px] bg-border my-1" />}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>

                {/* Industries */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-text-3 font-bold block mb-2">Industries</span>
                  <div className="grid gap-3.5 pl-3 border-l border-border">
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex flex-col"
                      >
                        <span className="text-sm font-medium text-text hover:text-accent transition-colors">{item.name}</span>
                        <span className="text-[10px] text-text-2 mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Flat Links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-4 pt-4 border-t border-border"
                >
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text hover:text-accent"
                  >
                    About
                  </Link>
                  <Link
                    href="/case-studies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text hover:text-accent"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text hover:text-accent"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/estimate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-text hover:text-accent"
                  >
                    Estimator
                  </Link>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-6 border-t border-border"
                >
                  <CTAButton
                    href="/contact"
                    variant="primary"
                    className="w-full justify-center font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Call
                  </CTAButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
