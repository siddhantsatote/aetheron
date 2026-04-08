"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import EventCard from "@/components/EventCard";
import RulesAccordion from "@/components/RulesAccordion";
import {
  LightBulbIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  VideoCameraIcon,
  PuzzlePieceIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const LightbulbIcon = () => (
  <LightBulbIcon className="w-10 h-10" strokeWidth={1.8} />
);
const CodeIcon = () => (
  <CodeBracketIcon className="w-10 h-10" strokeWidth={1.8} />
);
const GamepadIcon = () => (
  <DevicePhoneMobileIcon className="w-10 h-10" strokeWidth={1.8} />
);
const PencilIcon = () => (
  <PencilSquareIcon className="w-10 h-10" strokeWidth={1.8} />
);
const VideoIcon = () => (
  <VideoCameraIcon className="w-10 h-10" strokeWidth={1.8} />
);
const TreasureIcon = () => (
  <PuzzlePieceIcon className="w-10 h-10" strokeWidth={1.8} />
);
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
    date: "DAY 1",
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
    date: "DAY 1",
  },
  {
    title: "TECH TREASURE HUNT",
    description:
      "Decode clues, solve technical puzzles, and race to the final discovery.",
    icon: <TreasureIcon />,
    color: "red",
    href: "/register/tech-treasure-hunt",
    date: "DAY 1",
  },
  {
    title: "FLYER MAKING",
    description:
      "Design eye-catching flyers that communicate ideas with style and precision.",
    icon: <FlyerIcon />,
    color: "violet",
    href: "/register/flyer-making",
    date: "DAY 1",
  },
];

const eventRules = [
  {
    title: "IDEATHON",
    color: "purple",
    rules: [
      "Eligibility: Open to all Alard Students.",
      "Team Size: 1–3 members per team.",
      "Registration: Must register before deadline.",
      "Rounds: Idea submission → Final presentation.",
      "PPT Max 6 Slides.",
      "PPT should contain: Title Slide, Problem Statement, Proposed Solution, Feasibility & Implementation, Revenue Model, Impact & Scalability.",
      "Presentation Time: 5 minutes.",
      "QnA: 3 minutes per team.",
      "Judging: Innovation & Creativity, Relevance of Problem, Feasibility & Practicality, Impact & Scalability, Revenue Model / Sustainability, Clarity of Presentation & Pitch.",
      "Plagiarism: Not allowed (leads to disqualification).",
      "Discipline: Maintain proper behavior during event.",
      "Decision: Judges' decision is final. No arguments with the judges will be tolerated.",
    ],
  },
  {
    title: "HACKATHON",
    color: "cyan",
    rules: [
      "Team must have 6 members, including at least 1 female member.",
      "Teams must work on the pre-selected problem statement; changes are not allowed.",
      "Software Hackathon duration is typically 6 hours of continuous coding.",
      "Core solution must be developed during the event; plagiarism leads to disqualification.",
      "Mentors/judges evaluate understanding, tech stack, demo/prototype, and impact.",
      "Submission must include source code (GitHub/repo), pitch deck, and working demo/prototype.",
      "Source code must be pushed to GitHub before deadline, otherwise disqualification may apply.",
      "No unfair practices or unauthorized help; follow venue rules and schedule.",
      "Final pitch: ~5 minutes presentation + 3 minutes Q&A.",
      "Winning criteria: innovation, technical depth, implementation, scalability, and impact.",
      "Prizes include cash rewards, certificates, and possible incubation opportunities.",
    ],
  },
  {
    title: "eSPORTS — BGMI",
    color: "amber",
    rules: [
      "Team Size: Squad format (4 players per team).",
      "Game Mode: BGMI (Battlegrounds Mobile India) only.",
      "Device: Players must bring their own mobile devices (Android/iOS).",
      "Fair Play: Use of hacks, mods, or any unfair means leads to immediate disqualification.",
      "Connectivity: Players are responsible for their own internet connection.",
      "Registration: All squad members must be registered before the deadline.",
      "Match Format: Matches will follow tournament rules announced on the day.",
      "Decision: Organizers' decision is final in all disputes.",
    ],
  },
  {
    title: "BLOG WRITING",
    color: "emerald",
    rules: [
      "Eligibility: Open to all students.",
      "Participation: Individual participation only.",
      "Registration: Participants must register before the given deadline.",
      "Domains: Participants must choose any one domain from the provided list.",
      "Submission: Blogs must be submitted through the provided Google Form within thegiven deadline.",
      "Word Limit: Maximum 600 words.",
      "Plagiarism & AI Usage: Strictly prohibited. The content must be original. Any plagiarism",
      "or use of AI-generated content will lead to disqualification.",
      "Judging Criteria: Based on originality, creativity and alignment with the chosen domain.",
      "Decision: Judge’s decision will be final.",
    ],
  },
  {
    title: "REEL MAKING",
    color: "rose",
    rules: [
      "Reporting Time: The competition begins at 9:00 AM sharp. Late arrivals will be disqualified.",
      "Submission Deadline: All reels must be fully completed and submitted by 6:00 PM sharp.",
      "Theme: The theme of the reel must be strictly related to the Tech Fest and announced on the spot.",
      "On-Site Production Only: Participants must shoot, edit, and finalise their reel entirely within competition hours.",
      "No External Material: Use of stock footage, pre-recorded/third-party work is prohibited.",
      "Submission Process: Use official email with name, registration number, and institution.",
      "Fair Play: Violations lead to immediate disqualification. Organiser decisions are final.",
    ],
  },
  {
    title: "FLYER MAKING",
    color: "violet",
    rules: [
      "Maximum participants: 1.",
      "Flyer should be made digitally and include university logo.",
      "Each participant composes on any 1 selected topic and explains in 3 minutes.",
    ],
  },
  {
    title: "TECH TREASURE HUNT",
    color: "red",
    rules: [
      "Team Size: Minimum 2, Maximum 4 members per team.",
      "Reporting Time: The event begins at 9:00 AM sharp. Late arrivals are disqualified.",
      "Duration: Event runs until 6:00 PM.",
      "Use of Technology: Participants use mobiles and QR scanning.",
      "Fair Play: No cheating; violators are disqualified.",
      "Clue Solving: Must solve in sequence; cannot skip clues.",
      "Final Destination: First team to finish wins.",
      "Judging: Based on time, clue-solving, and teamwork.",
    ],
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
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
              delay: 0.1,
            }}
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
            <p className="font-orbitron text-xl font-extrabold text-white italic">
              When:
            </p>
            <p className="font-orbitron text-xl font-black text-white mt-1 tracking-wide">
              From 9th April to 11th April
            </p>
            <p className="font-orbitron text-2xl font-black text-white mt-1 tracking-wide">
              3-Day Event
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-neon-cyan text-lg">📍</span>
              <p className="font-orbitron text-sm font-semibold text-slate-300 italic">
                Your College Campus
              </p>
            </div>
          </motion.div>

          {/* Register button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="my-4 self-stretch"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/register"
                className="register-now-btn block text-center font-orbitron text-base font-extrabold tracking-widest px-10 py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
              >
                REGISTER NOW
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1s58dONPEVsohDz6q9x8tWKrdIGb2cyAM?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="block text-center font-orbitron text-sm font-semibold tracking-wide px-10 py-3 rounded-full border border-white/20 text-white bg-white/10 hover:bg-white/20 transition-colors"
              >
                VIEW PROBLEM STATEMENT
              </Link>
            </div>
          </motion.div>

          {/* Bottom credits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-auto pt-4 text-center"
          >
            <p className="text-slate-500 text-[10px] font-orbitron tracking-wider">
              AETHERON TECH FEST © 2026
            </p>
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
                <p className="font-orbitron text-2xl font-extrabold text-white italic">
                  When:
                </p>
                <p className="font-orbitron text-2xl font-black text-white mt-1 tracking-wide">
                  From 9th April to 11th April
                </p>
                <p className="font-orbitron text-4xl font-black text-white mt-1 tracking-wide">
                  3-Day Event
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-neon-cyan text-lg">📍</span>
                  <p className="font-orbitron text-base font-semibold text-slate-300 italic">
                    Your College Campus
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 1.0 }}
              >
                <div className="flex flex-col gap-3">
                  <Link
                    href="/register"
                    className="register-now-btn inline-block font-orbitron text-base font-extrabold tracking-widest px-12 py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
                  >
                    REGISTER NOW
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/1s58dONPEVsohDz6q9x8tWKrdIGb2cyAM?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block font-orbitron text-sm font-semibold tracking-wide px-10 py-3 rounded-full border border-white/20 text-white bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    VIEW PROBLEM STATEMENT
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Center logo — desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 14,
              delay: 0.1,
            }}
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
          <span className="text-slate-500 text-[10px] font-orbitron tracking-wider">
            AETHERON TECH FEST © 2026
          </span>
        </motion.div>
      </section>

      {/* ===== EVENT RULES SECTION (below hero) ===== */}
      <section className="relative z-10 py-20 px-4" id="event-rules">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              EVENT RULES AT A GLANCE
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Expand each competition to read the full rules before you
              register. All contests follow a clear, fair structure.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eventRules.map((item, index) => (
              <RulesAccordion
                key={item.title}
                title={`${item.title} Rules & Guidelines`}
                color={item.color}
                rules={item.rules}
              />
            ))}
          </div>
        </div>
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
              Choose your arena and prove your worth. Each event is designed to
              challenge your skills and push your limits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {additionalEvents.map((event, i) => (
              <EventCard
                key={event.title}
                {...event}
                index={events.length + i}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
