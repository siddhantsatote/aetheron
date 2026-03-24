"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import EventCard from "@/components/EventCard";
import {
  LightBulbIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  VideoCameraIcon,
  PuzzlePieceIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const LightbulbIcon = () => <LightBulbIcon className="w-10 h-10" strokeWidth={1.8} />;
const CodeIcon = () => <CodeBracketIcon className="w-10 h-10" strokeWidth={1.8} />;
const GamepadIcon = () => <DevicePhoneMobileIcon className="w-10 h-10" strokeWidth={1.8} />;
const PencilIcon = () => <PencilSquareIcon className="w-10 h-10" strokeWidth={1.8} />;
const VideoIcon = () => <VideoCameraIcon className="w-10 h-10" strokeWidth={1.8} />;
const TreasureIcon = () => <PuzzlePieceIcon className="w-10 h-10" strokeWidth={1.8} />;
const FlyerIcon = () => <PhotoIcon className="w-10 h-10" strokeWidth={1.8} />;

const events = [
  {
    title: "IDEATHON",
    description:
      "Pitch your groundbreaking ideas to solve real-world problems. Innovate, present, and win!",
    icon: <LightbulbIcon />,
    color: "purple",
    href: "/register/ideathon",
    date: "DAY 1",
  },
  {
    title: "HACKATHON",
    description:
      "Code. Build. Deploy. 24 hours of intense development to create solutions that matter.",
    icon: <CodeIcon />,
    color: "cyan",
    href: "/register/hackathon",
    date: "DAY 2",
  },
  {
    title: "eSPORTS — BGMI",
    description:
      "Battle it out in Battlegrounds Mobile India. Solo or Squad — only the best survive.",
    icon: <GamepadIcon />,
    color: "amber",
    href: "/register/esports",
    date: "DAY 3",
  },
];

const additionalEvents = [
  {
    title: "BLOG WRITING",
    description:
      "Craft engaging tech stories and share your perspective with clarity and creativity.",
    icon: <PencilIcon />,
    color: "emerald",
    href: "/register/blog-writing",
    date: "DAY 1",
  },
  {
    title: "REEL MAKING",
    description:
      "Create impactful short-form content that captures innovation in seconds.",
    icon: <VideoIcon />,
    color: "rose",
    href: "/register/reel-making",
    date: "DAY 2",
  },
  {
    title: "TECH TREASURE HUNT",
    description:
      "Decode clues, solve technical puzzles, and race to the final discovery.",
    icon: <TreasureIcon />,
    color: "red",
    href: "/register/tech-treasure-hunt",
    date: "DAY 2",
  },
  {
    title: "FLYER MAKING",
    description:
      "Design eye-catching flyers that communicate ideas with style and precision.",
    icon: <FlyerIcon />,
    color: "violet",
    href: "/register/flyer-making",
    date: "DAY 3",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <ParticleBackground />

      {/* ===== HERO — FULL VIEWPORT ===== */}
      <section className="relative z-10 h-dvh w-full overflow-hidden flex flex-col md:block">

        {/* ===== MOBILE LAYOUT (stacked) ===== */}
        <div className="flex flex-col items-center px-6 pt-20 pb-4 md:hidden h-dvh">
          {/* Theme text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="self-start mb-4"
          >
            <h3 className="font-orbitron text-lg font-bold text-white tracking-wide">
              Our Theme
            </h3>
            <p className="text-slate-400 text-base italic mt-1">
              Where Ideas Ignite. Code Competes. Champions Rise.
            </p>
          </motion.div>

          {/* Center logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.1 }}
            className="flex-1 flex items-center justify-center py-2"
          >
            <motion.img
              src="/logo.png"
              alt="AETHERON"
              className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
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
            <p className="font-orbitron text-xl font-extrabold text-white italic">When:</p>
            <p className="font-orbitron text-xl font-black text-white mt-1 tracking-wide">From 9th April to 11th April</p>
            <p className="font-orbitron text-2xl font-black text-white mt-1 tracking-wide">3-Day Event</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-neon-cyan text-lg">📍</span>
              <p className="font-orbitron text-sm font-semibold text-slate-300 italic">Your College Campus</p>
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
              className="register-now-btn block text-center font-orbitron text-base font-extrabold tracking-widest px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
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
                <p className="font-orbitron text-2xl font-black text-white mt-1 tracking-wide">From 9th April to 11th April</p>
                <p className="font-orbitron text-4xl font-black text-white mt-1 tracking-wide">3-Day Event</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neon-cyan text-lg">📍</span>
                  <p className="font-orbitron text-base font-semibold text-slate-300 italic">Your College Campus</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {additionalEvents.map((event, i) => (
              <EventCard key={event.title} {...event} index={events.length + i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
