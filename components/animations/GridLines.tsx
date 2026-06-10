"use client";

import React from "react";

export default function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-background opacity-[0.03]" />
      
      {/* Subtle bottom fade to create depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
