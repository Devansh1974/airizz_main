"use client";

import React, { useEffect } from "react";

interface CalendlyInlineProps {
  url?: string;
}

export default function CalendlyInline({ url }: CalendlyInlineProps) {
  const baseCalendlyUrl = url || process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/airizz/strategy-audit";
  const hasQueryParams = baseCalendlyUrl.includes("?");
  const calendlyUrl = baseCalendlyUrl + (hasQueryParams ? "&" : "?") + "background_color=0c0c0f&text_color=e4e4e7&primary_color=00c8b4&hide_gdpr_banner=1";

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("async", "true");
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-950" 
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: "600px" }}
    />
  );
}
