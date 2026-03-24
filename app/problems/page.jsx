"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";

const problemStatements = [
  {
    id: 1,
    title: "Smart Healthcare Assistant",
    domain: "Healthcare",
    description:
      "Build an AI-powered platform that helps patients self-diagnose minor health issues, book appointments, and get medication reminders. The solution should integrate with existing hospital APIs and provide multilingual support.",
    color: "cyan",
  },
  {
    id: 2,
    title: "Sustainable Campus Tracker",
    domain: "Environment",
    description:
      "Create a dashboard that tracks and visualizes the carbon footprint of a college campus. Include energy consumption monitoring, waste management analytics, and gamification to encourage eco-friendly behavior among students.",
    color: "purple",
  },
  {
    id: 3,
    title: "Peer-to-Peer Learning Platform",
    domain: "Education",
    description:
      "Develop a platform where students can teach and learn from each other through live sessions, shared notes, and collaborative projects. Include skill-based matchmaking and a reputation system.",
    color: "magenta",
  },
  {
    id: 4,
    title: "Micro-Finance for Students",
    domain: "FinTech",
    description:
      "Design a micro-lending platform tailored for college students. Features should include peer lending, financial literacy modules, credit scoring based on academic performance, and UPI integration.",
    color: "cyan",
  },
  {
    id: 5,
    title: "Smart Traffic Management",
    domain: "Smart City",
    description:
      "Build a real-time traffic monitoring and management system using IoT data. The system should predict congestion, suggest alternate routes, and integrate with emergency vehicle priority routing.",
    color: "purple",
  },
  {
    id: 6,
    title: "Mental Health & Wellness App",
    domain: "Healthcare",
    description:
      "Create an anonymous mental health support platform for college students. Include mood tracking, AI chatbot for initial support, peer support groups, and integration with professional counselors.",
    color: "magenta",
  },
];

const colorMap = {
  cyan: {
    border: "glow-border-cyan",
    text: "text-neon-cyan",
    neon: "neon-cyan",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  purple: {
    border: "glow-border-purple",
    text: "text-neon-purple",
    neon: "neon-purple",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
  magenta: {
    border: "glow-border-magenta",
    text: "text-neon-magenta",
    neon: "neon-magenta",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  },
};

export default function ProblemStatements() {
  return (
    <div className="relative min-h-screen grid-pattern">
      <ParticleBackground />

      <section className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold neon-cyan mb-4">
              PROBLEM STATEMENTS
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Choose a problem statement for the Hackathon. Build an innovative
              solution and present it to the judges. You may also come with your
              own idea.
            </p>
            <Link
              href="/register/hackathon"
              className="inline-block mt-6 glow-btn-cyan px-6 py-3 rounded-xl font-orbitron text-xs text-neon-cyan tracking-wider"
            >
              REGISTER FOR HACKATHON
            </Link>
          </motion.div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemStatements.map((ps, i) => {
              const c = colorMap[ps.color];
              return (
                <motion.div
                  key={ps.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glassmorphism ${c.border} rounded-2xl p-6 sm:p-8 flex flex-col`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className={`font-orbitron text-xs font-bold ${c.text} opacity-60`}
                    >
                      PS-{String(ps.id).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}
                    >
                      {ps.domain}
                    </span>
                  </div>
                  <h3
                    className={`font-orbitron text-lg sm:text-xl font-bold ${c.text} mb-3`}
                  >
                    {ps.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {ps.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Open Innovation note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 glassmorphism glow-border-cyan rounded-2xl p-6 sm:p-8 text-center"
          >
            <h3 className="font-orbitron text-lg font-bold neon-cyan mb-2">
              🚀 OPEN INNOVATION
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Don&apos;t see a problem that excites you? You&apos;re free to
              come up with your own problem statement and build a solution
              around it. Creativity is always welcome!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
