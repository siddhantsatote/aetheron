"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import RulesAccordion from "@/components/RulesAccordion";
import useRegistration from "@/hooks/useRegistration";

export default function TechTreasureHuntForm() {
  const whatsappLink = "https://chat.whatsapp.com/DJ6k8znu2cyCUgFqOrZOcv?mode=gi_t";
  const { submit, loading, success, error, fieldErrors } =
    useRegistration("tech-treasure-hunt");
  const [form, setForm] = useState({
    team_lead_name: "",
    team_lead_email: "",
    team_lead_phone: "",
    member_2_name: "",
    member_3_name: "",
    member_4_name: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) return;
    const { agree, ...data } = form;
    await submit(data);
  };

  const rules = [
    "Team Size: Minimum 2, Maximum 4 members per team.",
    "Reporting Time: The event begins at 9:00 AM sharp. Late arrivals will be disqualified.",
    "Duration: The treasure hunt will run for the entire day until 6:00 PM.",
    "Use of Technology: Participants must use their mobile devices and QR scanning abilities.",
    "Fair Play: No cheating, hacking, or using unfair means. Teams found violating will be disqualified.",
    "Clue Solving: Teams must solve clues in sequence. Skipping clues is not allowed.",
    "Final Destination: First team to reach the final destination wins.",
    "Judging: Based on time taken, clue-solving efficiency, and teamwork.",
  ];

  if (success) {
    return (
      <div className="relative min-h-screen grid-pattern">
        <ParticleBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="glassmorphism glow-border-red rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-red"
              viewBox="0 0 52 52"
            >
              <circle
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.3"
              />
              <path
                className="animate-check"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l7 7 16-16"
              />
            </svg>
            <h2 className="font-orbitron text-2xl font-bold neon-red mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              Your team has been registered for Tech Treasure Hunt.
            </p>
            <Link
              href="/register"
              className="glow-btn-red px-6 py-3 rounded-xl font-orbitron text-xs text-neon-red tracking-wider inline-block"
            >
              BACK TO EVENTS
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen grid-pattern">
      <ParticleBackground />

      <section className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <Link
              href="/register"
              className="text-slate-500 hover:text-neon-red text-sm transition-colors inline-flex items-center gap-2"
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
              Back to Events
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-neon-red">
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
                  d="M3 9.75h18M4.5 9.75l1.2 9a2.25 2.25 0 002.228 1.95h7.144A2.25 2.25 0 0017.3 18.75l1.2-9M9 9.75V6.75A3 3 0 0112 3.75a3 3 0 013 3v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-red">
                TECH TREASURE HUNT
              </h1>
              <p className="text-slate-400 text-sm">
                Team Members: Minimum 2, Maximum 4.
              </p>
            </div>
          </motion.div>

          {/* Rules Accordion */}
          <RulesAccordion rules={rules} color="red" title="Event Rules & Guidelines" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glassmorphism glow-border-red rounded-2xl p-4 sm:p-5 mb-6"
          >
            <h2 className="font-orbitron text-sm sm:text-base text-neon-red tracking-wider mb-3">
              MAP DISPLAY
            </h2>
            <img
              src="/map.jpg"
              alt="Campus Map"
              className="w-full rounded-xl border border-slate-700 object-cover"
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-red rounded-2xl p-6 sm:p-8 space-y-7"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <h2 className="font-orbitron text-sm text-neon-red mb-3 tracking-wider">Team Lead (Required)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <FormInput
                  label="Name"
                  name="team_lead_name"
                  value={form.team_lead_name}
                  onChange={handleChange}
                  error={fieldErrors.team_lead_name}
                  required
                  color="red"
                  index={0}
                />
                <FormInput
                  label="Email"
                  name="team_lead_email"
                  type="email"
                  value={form.team_lead_email}
                  onChange={handleChange}
                  error={fieldErrors.team_lead_email}
                  required
                  color="red"
                  index={1}
                />
                <FormInput
                  label="Wp Number"
                  name="team_lead_phone"
                  type="tel"
                  value={form.team_lead_phone}
                  onChange={handleChange}
                  error={fieldErrors.team_lead_phone}
                  required
                  color="red"
                  index={2}
                />
              </div>
            </div>

            <div>
              <h2 className="font-orbitron text-sm text-neon-red mb-3 tracking-wider">Team Member 2 (Required)</h2>
              <div className="grid grid-cols-1 gap-5">
                <FormInput
                  label="Name"
                  name="member_2_name"
                  value={form.member_2_name}
                  onChange={handleChange}
                  error={fieldErrors.member_2_name}
                  required
                  color="red"
                  index={3}
                />
              </div>
            </div>

            <div>
              <h2 className="font-orbitron text-sm text-neon-red mb-3 tracking-wider">Team Member 3 (Optional)</h2>
              <div className="grid grid-cols-1 gap-5">
                <FormInput
                  label="Name"
                  name="member_3_name"
                  value={form.member_3_name}
                  onChange={handleChange}
                  error={fieldErrors.member_3_name}
                  color="red"
                  index={4}
                />
              </div>
            </div>

            <div>
              <h2 className="font-orbitron text-sm text-neon-red mb-3 tracking-wider">Team Member 4 (Optional)</h2>
              <div className="grid grid-cols-1 gap-5">
                <FormInput
                  label="Name"
                  name="member_4_name"
                  value={form.member_4_name}
                  onChange={handleChange}
                  error={fieldErrors.member_4_name}
                  color="red"
                  index={5}
                />
              </div>
            </div>

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="red"
              index={6}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="red"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                REGISTER TEAM
              </GlowButton>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glassmorphism glow-border-red rounded-2xl p-6 sm:p-8 mt-6"
          >
            <h2 className="font-orbitron text-lg sm:text-xl font-bold neon-red mb-3">
              JOIN WHATSAPP GROUP
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Follow this link to join the Tech Treasure Hunt WhatsApp group.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-red px-5 py-3 rounded-xl font-orbitron text-xs text-neon-red tracking-wider inline-flex items-center gap-2"
            >
              JOIN GROUP
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
