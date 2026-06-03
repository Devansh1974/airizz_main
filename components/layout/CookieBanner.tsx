"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Settings, Check } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytical: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("airizz-cookie-consent");
    if (!consent) {
      // Delay visibility for premium load experience
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const fullConsent = { essential: true, analytical: true, marketing: true };
    localStorage.setItem("airizz-cookie-consent", JSON.stringify(fullConsent));
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    const essentialOnly = { essential: true, analytical: false, marketing: false };
    localStorage.setItem("airizz-cookie-consent", JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("airizz-cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 rounded-2xl glass p-5 shadow-2xl flex flex-col gap-4 text-sm"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">We Value Your Privacy</h4>
              <p className="text-xs text-zinc-400 mt-1">
                We use cookies to optimize site features, compile analytics, and customize your experience.
              </p>
            </div>
          </div>

          {showPreferences ? (
            <motion.div 
              className="flex flex-col gap-3 pt-2 border-t border-white/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-semibold text-white">Essential Cookies</h5>
                  <p className="text-[10px] text-zinc-500">Required for the core functionality of the website.</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                  <Check className="h-4 w-4" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-semibold text-white">Analytics Cookies</h5>
                  <p className="text-[10px] text-zinc-500">To monitor site traffic and behavior anonymously.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytical}
                  onChange={(e) => setPreferences({ ...preferences, analytical: e.target.checked })}
                  className="rounded border-zinc-700 bg-zinc-900 text-brand-cyan focus:ring-brand-cyan h-4 w-4 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-semibold text-white">Marketing Cookies</h5>
                  <p className="text-[10px] text-zinc-500">Used to deliver target campaigns and updates.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="rounded border-zinc-700 bg-zinc-900 text-brand-cyan focus:ring-brand-cyan h-4 w-4 cursor-pointer"
                />
              </div>

              <div className="flex gap-2 mt-2 pt-2 border-t border-white/5">
                <CTAButton
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(false)}
                  className="flex-1"
                >
                  Back
                </CTAButton>
                <CTAButton
                  variant="primary"
                  size="sm"
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Save Selection
                </CTAButton>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-wrap gap-2 pt-1">
              <CTAButton
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
                className="flex-1"
              >
                Accept All
              </CTAButton>
              <CTAButton
                variant="outline"
                size="sm"
                onClick={handleDeclineAll}
                className="flex-1"
              >
                Essential Only
              </CTAButton>
              <button
                onClick={() => setShowPreferences(true)}
                className="flex items-center justify-center p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Customize preferences"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
