"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EventCard({
  title,
  description,
  icon,
  color,
  href,
  date,
  index = 0,
}) {
  const colorMap = {
    cyan: {
      border: "glow-border-cyan",
      text: "text-neon-cyan",
      neon: "neon-cyan",
      btn: "glow-btn-cyan",
    },
    purple: {
      border: "glow-border-purple",
      text: "text-neon-purple",
      neon: "neon-purple",
      btn: "glow-btn-purple",
    },
    magenta: {
      border: "glow-border-magenta",
      text: "text-neon-magenta",
      neon: "neon-magenta",
      btn: "glow-btn-magenta",
    },
  };

  const styles = colorMap[color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link href={href} className="block group">
        <div
          className={`${styles.border} glassmorphism rounded-2xl p-8 transition-all duration-300 hover:scale-[1.03] hover:bg-navy-700/50 h-full`}
        >
          {/* Icon */}
          <div className={`text-4xl mb-4 ${styles.text}`}>{icon}</div>

          {/* Title */}
          <h3 className={`font-orbitron text-xl font-bold mb-2 ${styles.text}`}>
            {title}
          </h3>

          {/* Date */}
          {date && (
            <p className="text-slate-400 text-xs font-orbitron tracking-wider mb-3">
              {date}
            </p>
          )}

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* CTA */}
          <span
            className={`inline-block ${styles.btn} px-5 py-2 rounded-lg font-orbitron text-xs ${styles.text} tracking-wider`}
          >
            REGISTER →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
