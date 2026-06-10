"use client";

import React, { useState } from "react";
import { Calendar, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CalendlyInline from "../shared/CalendlyInline";

export default function CalendlyFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-surface border border-accent/30 text-accent shadow-lg shadow-black/40 focus:outline-none cursor-pointer hover:border-accent/60 hover:bg-surface-2 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-25" />
        <Calendar className="h-6 w-6" />
      </motion.button>

      {/* Slide-over Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-out Sheet */}
            <motion.div
              data-lenis-prevent
              className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-bg-2 border-l border-border shadow-2xl p-6 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text">Book a Strategy Session</h3>
                    <p className="text-xs text-text-2 mt-1">Select a time for a 1-on-1 AI assessment with our team.</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-surface-2 text-text-2 hover:text-text transition-colors cursor-pointer border-none bg-transparent"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(100vh-140px)] rounded-[12px] border border-border bg-surface p-2">
                  <CalendlyInline />
                </div>
              </div>

              <div className="text-center text-[10px] text-text-3 font-mono uppercase tracking-wider mt-4">
                By booking, you agree to our Terms of Service and Privacy Policy.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
