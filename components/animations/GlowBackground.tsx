"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cyan Glow Blob */}
      <motion.div
        className="absolute top-[10%] left-[-10%] md:left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-brand-cyan/10 blur-[100px] md:blur-[160px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Purple Glow Blob */}
      <motion.div
        className="absolute top-[40%] right-[-10%] md:right-[5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-brand-purple/10 blur-[100px] md:blur-[160px]"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Central Cyan Glow */}
      <div className="absolute top-[75%] left-[30%] w-[200px] md:w-[450px] h-[200px] md:h-[450px] rounded-full bg-brand-cyan/5 blur-[80px] md:blur-[140px]" />
    </div>
  );
}
