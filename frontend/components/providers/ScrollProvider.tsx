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
          if (node instanceof Element) {
            if (node.closest("[data-lenis-prevent]") !== null) {
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
