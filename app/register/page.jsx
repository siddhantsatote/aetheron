"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";

const LightbulbIcon = () => (
  <svg
    className="w-12 h-12"
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
    className="w-12 h-12"
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
    className="w-12 h-12"
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

const PencilIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a2.121 2.121 0 113 3L10.582 16.768a4.5 4.5 0 01-1.897 1.13L6 18.75l.853-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487z"
    />
  </svg>
);

const FlyerIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 4.5h16.5v15h-16.5v-15zM7.5 8.25h9m-9 3h9m-9 3h6"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5L21 7.5v9l-5.25-3m0 0h-9A2.25 2.25 0 014.5 11.25v-3A2.25 2.25 0 016.75 6h9A2.25 2.25 0 0118 8.25v3A2.25 2.25 0 0115.75 13.5z"
    />
  </svg>
);

const TreasureIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 9.75h18M4.5 9.75l1.2 9a2.25 2.25 0 002.228 1.95h7.144A2.25 2.25 0 0017.3 18.75l1.2-9M9 9.75V6.75A3 3 0 0112 3.75a3 3 0 013 3v3"
    />
  </svg>
);

const events = [
  {
    title: "IDEATHON",
    description:
      "Present innovative solutions to real-world problems. Think big, pitch bold.",
    icon: <LightbulbIcon />,
    color: "cyan",
    href: "/register/ideathon",
    date: "Day 1",
    borderClass: "glow-border-cyan",
    textClass: "text-neon-cyan",
    btnClass: "glow-btn-cyan",
  },
  {
    title: "HACKATHON",
    description:
      "24 hours of non-stop coding. Team size 6 with minimum 1 girl member mandatory.",
    icon: <CodeIcon />,
    color: "purple",
    href: "/register/hackathon",
    date: "Day 2",
    borderClass: "glow-border-purple",
    textClass: "text-neon-purple",
    btnClass: "glow-btn-purple",
  },
  {
    title: "eSPORTS — BGMI",
    description:
      "Gear up for the ultimate BGMI showdown. Solo or Squad — may the best player win.",
    icon: <GamepadIcon />,
    color: "magenta",
    href: "/register/esports",
    date: "Day 3",
    borderClass: "glow-border-magenta",
    textClass: "text-neon-magenta",
    btnClass: "glow-btn-magenta",
  },
  {
    title: "BLOG WRITING",
    description:
      "Showcase your writing and technical storytelling skills across your chosen domain.",
    icon: <PencilIcon />,
    color: "cyan",
    href: "/register/blog-writing",
    date: "Day 1",
    borderClass: "glow-border-cyan",
    textClass: "text-neon-cyan",
    btnClass: "glow-btn-cyan",
  },
  {
    title: "FLYER MAKING",
    description:
      "Create impactful visual communication with your flyer design skills.",
    icon: <FlyerIcon />,
    color: "cyan",
    href: "/register/flyer-making",
    date: "Day 3",
    borderClass: "glow-border-cyan",
    textClass: "text-neon-cyan",
    btnClass: "glow-btn-cyan",
  },
  {
    title: "REEL MAKING",
    description:
      "Create creative short videos and showcase your storytelling skills.",
    icon: <VideoIcon />,
    color: "purple",
    href: "/register/reel-making",
    date: "Day 2",
    borderClass: "glow-border-purple",
    textClass: "text-neon-purple",
    btnClass: "glow-btn-purple",
  },
  {
    title: "TECH TREASURE HUNT",
    description:
      "Solve clues as a team and race to uncover the final tech treasure.",
    icon: <TreasureIcon />,
    color: "magenta",
    href: "/register/tech-treasure-hunt",
    date: "Day 2",
    borderClass: "glow-border-magenta",
    textClass: "text-neon-magenta",
    btnClass: "glow-btn-magenta",
  },
];

export default function RegisterHub() {
  return (
    <div className="relative min-h-screen grid-pattern">
      <ParticleBackground />

      <section className="relative z-10 pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              CHOOSE YOUR <span className="neon-cyan">ARENA</span>
            </h1>
            <p className="text-slate-400 max-w-lg mx-auto">
              Select an event to register. Each competition offers a unique
              challenge for you to conquer.
            </p>
          </motion.div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link href={event.href} className="block group">
                  <div
                    className={`${event.borderClass} glassmorphism rounded-2xl p-8 text-center transition-all duration-300 hover:scale-[1.04] hover:bg-navy-700/50 h-full flex flex-col items-center`}
                  >
                    <div className={`mb-5 ${event.textClass}`}>
                      {event.icon}
                    </div>
                    <h3
                      className={`font-orbitron text-xl font-bold mb-1 ${event.textClass}`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-orbitron tracking-wider mb-4">
                      {event.date}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                      {event.description}
                    </p>
                    <span
                      className={`inline-block ${event.btnClass} px-8 py-3 rounded-xl font-orbitron text-sm ${event.textClass} tracking-wider`}
                    >
                      REGISTER
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/"
              className="text-slate-500 hover:text-neon-cyan text-sm transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
