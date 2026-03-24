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
  PhotoIcon,
  VideoCameraIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const LightbulbIcon = () => <LightBulbIcon className="w-12 h-12" strokeWidth={1.8} />;
const CodeIcon = () => <CodeBracketIcon className="w-12 h-12" strokeWidth={1.8} />;
const GamepadIcon = () => <DevicePhoneMobileIcon className="w-12 h-12" strokeWidth={1.8} />;
const PencilIcon = () => <PencilSquareIcon className="w-12 h-12" strokeWidth={1.8} />;
const FlyerIcon = () => <PhotoIcon className="w-12 h-12" strokeWidth={1.8} />;
const VideoIcon = () => <VideoCameraIcon className="w-12 h-12" strokeWidth={1.8} />;
const TreasureIcon = () => <PuzzlePieceIcon className="w-12 h-12" strokeWidth={1.8} />;

const events = [
  {
    title: "IDEATHON",
    description:
      "Present innovative solutions to real-world problems. Think big, pitch bold.",
    icon: <LightbulbIcon />,
    color: "purple",
    href: "/register/ideathon",
    date: "Day 1",
  },
  {
    title: "HACKATHON",
    description:
      "24 hours of non-stop coding. Team size 6 with minimum 1 girl member mandatory.",
    icon: <CodeIcon />,
    color: "cyan",
    href: "/register/hackathon",
    date: "Day 2",
  },
  {
    title: "eSPORTS — BGMI",
    description:
      "Gear up for the ultimate BGMI showdown. Solo or Squad — may the best player win.",
    icon: <GamepadIcon />,
    color: "amber",
    href: "/register/esports",
    date: "Day 3",
  },
  {
    title: "BLOG WRITING",
    description:
      "Showcase your writing and technical storytelling skills across your chosen domain.",
    icon: <PencilIcon />,
    color: "emerald",
    href: "/register/blog-writing",
    date: "Day 1",
  },
  {
    title: "FLYER MAKING",
    description:
      "Create impactful visual communication with your flyer design skills.",
    icon: <FlyerIcon />,
    color: "violet",
    href: "/register/flyer-making",
    date: "Day 3",
  },
  {
    title: "REEL MAKING",
    description:
      "Create creative short videos and showcase your storytelling skills.",
    icon: <VideoIcon />,
    color: "rose",
    href: "/register/reel-making",
    date: "Day 2",
  },
  {
    title: "TECH TREASURE HUNT",
    description:
      "Solve clues as a team and race to uncover the final tech treasure.",
    icon: <TreasureIcon />,
    color: "red",
    href: "/register/tech-treasure-hunt",
    date: "Day 2",
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
              <EventCard key={event.title} {...event} index={i} />
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
