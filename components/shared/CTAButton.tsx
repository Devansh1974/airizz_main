"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
}

export default function CTAButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  glow = false,
  ...props
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: "shimmer-button text-black font-semibold",
    secondary: "glass-interactive text-white hover:text-brand-cyan",
    outline: "border border-brand-cyan/35 text-white hover:bg-brand-cyan/10 hover:border-brand-cyan",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const glowStyles = glow ? "shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]" : "";

  const content = (
    <motion.span 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && iconPosition === "left" && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          glowStyles,
          "group",
          className
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        glowStyles,
        "group",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
}
