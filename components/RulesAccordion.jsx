"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colorClasses = {
  red: {
    border: "border-neon-red",
    text: "text-neon-red",
    bg: "bg-neon-red/10",
    button: "hover:bg-neon-red/20",
    glow: "glow-border-red",
  },
  cyan: {
    border: "border-neon-cyan",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    button: "hover:bg-neon-cyan/20",
    glow: "glow-border-cyan",
  },
  rose: {
    border: "border-neon-rose",
    text: "text-neon-rose",
    bg: "bg-neon-rose/10",
    button: "hover:bg-neon-rose/20",
    glow: "glow-border-rose",
  },
  violet: {
    border: "border-neon-violet",
    text: "text-neon-violet",
    bg: "bg-neon-violet/10",
    button: "hover:bg-neon-violet/20",
    glow: "glow-border-violet",
  },
  emerald: {
    border: "border-neon-emerald",
    text: "text-neon-emerald",
    bg: "bg-neon-emerald/10",
    button: "hover:bg-neon-emerald/20",
    glow: "glow-border-emerald",
  },
  amber: {
    border: "border-neon-amber",
    text: "text-neon-amber",
    bg: "bg-neon-amber/10",
    button: "hover:bg-neon-amber/20",
    glow: "glow-border-amber",
  },
  purple: {
    border: "border-neon-purple",
    text: "text-neon-purple",
    bg: "bg-neon-purple/10",
    button: "hover:bg-neon-purple/20",
    glow: "glow-border-purple",
  },
};

export default function RulesAccordion({
  rules,
  codeOfConduct = [],
  color = "cyan",
  title = "Event Rules",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("rules");
  const colors = colorClasses[color] || colorClasses.cyan;

  const hasCodeOfConduct = codeOfConduct && codeOfConduct.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className={`glassmorphism ${colors.glow} rounded-2xl overflow-hidden mb-6`}
    >
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 sm:p-6 transition-colors ${colors.button}`}
      >
        <span
          className={`font-orbitron text-base sm:text-lg font-bold ${colors.text}`}
        >
          {title}
        </span>
        <div
          className={`w-10 h-10 rounded-full border ${colors.border} ${colors.bg} flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            className={`w-5 h-5 ${colors.text}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-6">
              {/* Tabs */}
              {hasCodeOfConduct && (
                <div className="flex gap-2 mb-4 border-b border-slate-700/50 pb-3">
                  <button
                    onClick={() => setActiveTab("rules")}
                    className={`px-4 py-2 rounded-lg font-orbitron text-xs sm:text-sm tracking-wider transition-all ${
                      activeTab === "rules"
                        ? `${colors.bg} ${colors.text} border ${colors.border}`
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Rules & Guidelines
                  </button>
                  <button
                    onClick={() => setActiveTab("conduct")}
                    className={`px-4 py-2 rounded-lg font-orbitron text-xs sm:text-sm tracking-wider transition-all ${
                      activeTab === "conduct"
                        ? `${colors.bg} ${colors.text} border ${colors.border}`
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Code of Conduct
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="space-y-3">
                {activeTab === "rules" ? (
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm sm:text-base">
                    {rules.map((rule, index) => (
                      <li key={index} className="leading-relaxed">
                        {rule}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm sm:text-base">
                    {codeOfConduct.map((item, index) => (
                      <li key={index} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
