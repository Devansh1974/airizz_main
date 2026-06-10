"use client";

import React from "react";
import { ReactLenis } from "lenis/react";

interface ScrollProviderProps {
  children: React.ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        duration: 1.2, 
        smoothWheel: true,
        wheelMultiplier: 1.0,
        prevent: (node) => {
          // Allow native scrolling inside Typebot chat widgets (bubble & inline standards)
          const nodeNameLower = node?.nodeName?.toLowerCase();
          if (nodeNameLower?.startsWith("typebot-")) {
            return true;
          }
          if (node instanceof Element) {
            if (
              node.closest("typebot-bubble") !== null ||
              node.closest("typebot-standard") !== null ||
              node.closest("[data-lenis-prevent]") !== null
            ) {
              return true;
            }
          }
          return false;
        }
      }}
    >
      {children}
    </ReactLenis>
  );
}
