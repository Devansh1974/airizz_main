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
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-[6px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-1.5 text-[13px]",
    md: "px-[22px] py-[10px] text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: "bg-accent text-text-inv hover:bg-accent-2 font-medium",
    secondary: "bg-transparent border border-border-2 text-text hover:bg-surface hover:border-border-3",
    outline: "bg-transparent border border-border-2 text-text hover:bg-surface hover:border-border-3",
    ghost: "text-text-2 hover:text-text hover:bg-white/5",
  };

  const glowStyles = "";

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
