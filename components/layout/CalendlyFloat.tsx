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
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan text-black shadow-lg shadow-brand-cyan/20 focus:outline-none cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-25" />
        <Calendar className="h-6 w-6" />
      </motion.button>

      {/* Slide-over Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Slide-out Sheet */}
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-lg glass shadow-2xl p-6 flex flex-col justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Book a Strategy Session</h3>
                    <p className="text-xs text-zinc-400 mt-1">Select a time for a 1-on-1 AI assessment with our team.</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(100vh-140px)] rounded-xl">
                  <CalendlyInline />
                </div>
              </div>

              <div className="text-center text-[10px] text-zinc-500 mt-4">
                By booking, you agree to our Terms of Service and Privacy Policy.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
