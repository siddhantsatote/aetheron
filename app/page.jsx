"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import EventCard from "@/components/EventCard";

// SVG icons
const LightbulbIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const GamepadIcon = () => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c-1.588-.179-3.054.71-3.405 2.269l-.238 1.058c-.331 1.469.596 2.938 2.073 3.278l.495.11c1.07.238 2.197-.096 2.883-.895l.455-.53a1.003 1.003 0 011.528 0l.455.53c.686.8 1.814 1.133 2.883.895l.495-.11c1.477-.34 2.404-1.81 2.073-3.278l-.238-1.058c-.351-1.559-1.817-2.448-3.405-2.269a48.49 48.49 0 01-4.163.3v0A.64.64 0 0114.25 6.087z"
    />
  </svg>
);

const events = [
  {
    title: "IDEATHON",
    description:
      "Pitch your groundbreaking ideas to solve real-world problems. Innovate, present, and win!",
    icon: <LightbulbIcon />,
    color: "cyan",
    href: "/register/ideathon",
    date: "DAY 1",
  },
  {
    title: "HACKATHON",
    description:
      "Code. Build. Deploy. 24 hours of intense development to create solutions that matter.",
    icon: <CodeIcon />,
    color: "purple",
    href: "/register/hackathon",
    date: "DAY 2",
  },
  {
    title: "eSPORTS — BGMI",
    description:
      "Battle it out in Battlegrounds Mobile India. Solo or Squad — only the best survive.",
    icon: <GamepadIcon />,
    color: "magenta",
    href: "/register/esports",
    date: "DAY 3",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <ParticleBackground />

      {/* ===== HERO — FULL VIEWPORT ===== */}
      <section className="relative z-10 h-screen w-full overflow-hidden flex flex-col md:block">

        {/* ===== MOBILE LAYOUT (stacked) ===== */}
        <div className="flex flex-col items-center px-6 pt-24 pb-6 md:hidden flex-1">
          {/* Theme text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="self-start mb-8"
          >
            <h3 className="font-orbitron text-base font-bold text-white tracking-wide">
              Our Theme
            </h3>
            <p className="text-slate-400 text-sm italic mt-1">
              Where Ideas Ignite. Code Competes. Champions Rise.
            </p>
          </motion.div>

          {/* Center logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
            className="flex-1 flex items-center justify-center"
          >
            <motion.img
              src="/logo.png"
              alt="AETHERON"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>

          {/* When / Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="self-start mb-4"
          >
            <p className="font-orbitron text-lg font-extrabold text-white italic">When:</p>
            <p className="font-orbitron text-xl font-black text-white mt-1 tracking-wide">3-Day Event</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-neon-cyan text-base">📍</span>
              <p className="font-orbitron text-xs font-semibold text-slate-300 italic">Your College Campus</p>
            </div>
            <div className="flex gap-2 mt-3">
              {[
                { label: "Day 1", sub: "Ideathon", cls: "glow-border-cyan text-neon-cyan" },
                { label: "Day 2", sub: "Hackathon", cls: "glow-border-purple text-neon-purple" },
                { label: "Day 3", sub: "BGMI", cls: "glow-border-magenta text-neon-magenta" },
              ].map((d, i) => (
                <div key={i} className={`${d.cls} rounded-lg px-2.5 py-1 bg-navy-900/70 backdrop-blur-sm`}>
                  <p className="font-orbitron text-[9px] font-bold tracking-wider">{d.label}</p>
                  <p className="text-slate-400 text-[9px]">{d.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Register button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="my-4 self-stretch"
          >
            <Link
              href="/register"
              className="register-now-btn block text-center font-orbitron text-sm font-extrabold tracking-widest px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              REGISTER NOW
            </Link>
          </motion.div>

          {/* Bottom credits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-auto pt-4 text-center"
          >
            <p className="text-slate-500 text-[10px] font-orbitron tracking-wider">AETHERON TECH FEST © 2026</p>
          </motion.div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:flex absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-28 pointer-events-auto">
            {/* Theme text — top */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h3 className="font-orbitron text-lg font-bold text-white tracking-wide">
                Our Theme
              </h3>
              <p className="text-slate-400 text-base italic mt-1 max-w-[260px]">
                Where Ideas Ignite. Code Competes. Champions Rise.
              </p>
            </motion.div>

            {/* Bottom row — When/Dates left + Register right */}
            <div className="flex items-end justify-between">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <p className="font-orbitron text-2xl font-extrabold text-white italic">When:</p>
                <p className="font-orbitron text-4xl font-black text-white mt-1 tracking-wide">3-Day Event</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neon-cyan text-lg">📍</span>
                  <p className="font-orbitron text-base font-semibold text-slate-300 italic">Your College Campus</p>
                </div>
                <div className="flex gap-3 mt-4">
                  {[
                    { label: "Day 1", sub: "Ideathon", cls: "glow-border-cyan text-neon-cyan" },
                    { label: "Day 2", sub: "Hackathon", cls: "glow-border-purple text-neon-purple" },
                    { label: "Day 3", sub: "BGMI", cls: "glow-border-magenta text-neon-magenta" },
                  ].map((d, i) => (
                    <div key={i} className={`${d.cls} rounded-lg px-3 py-1.5 bg-navy-900/70 backdrop-blur-sm`}>
                      <p className="font-orbitron text-[10px] font-bold tracking-wider">{d.label}</p>
                      <p className="text-slate-400 text-[10px]">{d.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 1.0 }}
              >
                <Link
                  href="/register"
                  className="register-now-btn inline-block font-orbitron text-base font-extrabold tracking-widest px-12 py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
                >
                  REGISTER NOW
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Center logo — desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
          >
            <motion.img
              src="/logo.png"
              alt="AETHERON"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Bottom bar — credits (desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="hidden md:flex absolute bottom-6 left-0 right-0 z-20 items-center justify-center px-14"
        >
          <span className="text-slate-500 text-[10px] font-orbitron tracking-wider">AETHERON TECH FEST © 2026</span>
        </motion.div>
      </section>

      {/* ===== EVENTS SECTION (below fold) ===== */}
      <section className="relative z-10 py-24 px-4 grid-pattern" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              THREE DAYS. THREE BATTLES.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Choose your arena and prove your worth. Each event is designed to challenge your skills and push your limits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
