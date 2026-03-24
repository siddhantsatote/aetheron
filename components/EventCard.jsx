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
    purple: {
      accentLine: "from-[#7E49FF] to-[#A067FF]",
      badgeDot: "bg-[#8F5CFF]",
      badgeText: "text-[#A695C5]",
      iconTile: "bg-[#21133f] border-[#4d2d8c] text-[#b07eff]",
      button: "from-[#7E49FF] to-[#A067FF]",
    },
    cyan: {
      accentLine: "from-[#0ec6ff] to-[#28e6ff]",
      badgeDot: "bg-[#1ad4ff]",
      badgeText: "text-[#87b4c2]",
      iconTile: "bg-[#092735] border-[#0a4b66] text-[#18d4ff]",
      button: "from-[#07b9e8] to-[#1fd4ee]",
    },
    amber: {
      accentLine: "from-[#ff9e2c] to-[#ffcb57]",
      badgeDot: "bg-[#ffb22e]",
      badgeText: "text-[#baab8e]",
      iconTile: "bg-[#2a1f10] border-[#5e4417] text-[#ffb12b]",
      button: "from-[#ff8f27] to-[#ffb63f]",
    },
    emerald: {
      accentLine: "from-[#00d084] to-[#42f5a1]",
      badgeDot: "bg-[#1de39a]",
      badgeText: "text-[#8cae9f]",
      iconTile: "bg-[#0f2821] border-[#1b5b47] text-[#12df93]",
      button: "from-[#00c27b] to-[#2be29a]",
    },
    rose: {
      accentLine: "from-[#ff3f95] to-[#ff5ea9]",
      badgeDot: "bg-[#ff53a2]",
      badgeText: "text-[#c29ab0]",
      iconTile: "bg-[#2b1323] border-[#6d2453] text-[#ff4ca0]",
      button: "from-[#ff338c] to-[#ff5b9f]",
    },
    red: {
      accentLine: "from-[#ff3a35] to-[#ff5a4f]",
      badgeDot: "bg-[#ff544a]",
      badgeText: "text-[#c6a09e]",
      iconTile: "bg-[#2b1114] border-[#70232b] text-[#ff4a45]",
      button: "from-[#ff3a35] to-[#ff5a4f]",
    },
    violet: {
      accentLine: "from-[#7f61ff] to-[#9b7dff]",
      badgeDot: "bg-[#8d71ff]",
      badgeText: "text-[#b0a4cf]",
      iconTile: "bg-[#1d1730] border-[#4b3c84] text-[#9b84ff]",
      button: "from-[#7b5bff] to-[#9677ff]",
    },
  };

  const styles = colorMap[color] || colorMap.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link href={href} className="block group h-full">
        <div
          className="relative overflow-hidden h-full rounded-[26px] border border-white/10 bg-[linear-gradient(150deg,rgba(27,31,58,0.62)_0%,rgba(10,14,30,0.86)_60%,rgba(8,11,24,0.94)_100%)] backdrop-blur-xl p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_48px_rgba(24,201,255,0.16)]"
        >
          <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${styles.accentLine}`} />

          {date && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider mb-8">
              <span className={`h-2 w-2 rounded-full ${styles.badgeDot}`} />
              <span className={`${styles.badgeText}`}>{date.toUpperCase()}</span>
            </div>
          )}

          {/* Icon */}
          <div className="flex justify-start mb-7">
            <div className={`h-16 w-16 rounded-2xl border flex items-center justify-center [&>svg]:h-8 [&>svg]:w-8 ${styles.iconTile} shadow-[0_10px_24px_rgba(0,0,0,0.35)]`}>
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-sans text-[2rem] leading-tight font-extrabold text-slate-100 mb-3 tracking-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-[1.04rem] leading-relaxed mb-10 max-w-[28ch]">
            {description}
          </p>

          {/* CTA */}
          <div className="flex justify-start mt-auto">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans text-sm font-bold tracking-wide text-white bg-gradient-to-r ${styles.button} shadow-[0_10px_28px_rgba(14,182,255,0.28)] transition-all group-hover:brightness-110 group-hover:shadow-[0_14px_34px_rgba(14,182,255,0.4)]`}
            >
              REGISTER
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-5-5m5 5l-5 5" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
