"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import useRegistration from "@/hooks/useRegistration";

const teamSizes = ["2", "3", "4"];

export default function HackathonForm() {
  const { submit, loading, success, error, fieldErrors, reset } =
    useRegistration("hackathon");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    college: "",
    team_name: "",
    team_size: "",
    member_1: "",
    member_2: "",
    member_3: "",
    member_4: "",
    problem_statement: "",
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
    const { agree, member_1, member_2, member_3, member_4, ...data } = form;
    data.team_size = parseInt(data.team_size, 10);
    // Combine team members into a comma-separated string
    data.team_members = [member_1, member_2, member_3, member_4]
      .filter(Boolean)
      .join(", ");
    await submit(data);
  };

  if (success) {
    return (
      <div className="relative min-h-screen grid-pattern">
        <ParticleBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="glassmorphism glow-border-purple rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-purple"
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
            <h2 className="font-orbitron text-2xl font-bold neon-purple mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              You&apos;ll receive a confirmation email shortly. Get your dev
              environment ready!
            </p>
            <Link
              href="/register"
              className="glow-btn-purple px-6 py-3 rounded-xl font-orbitron text-xs text-neon-purple tracking-wider inline-block"
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
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <Link
              href="/register"
              className="text-slate-500 hover:text-neon-purple text-sm transition-colors inline-flex items-center gap-2"
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-neon-purple">
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
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-purple">
                HACKATHON
              </h1>
              <p className="text-slate-400 text-sm">
                Day 2 — Build. Code. Deploy.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-purple rounded-2xl p-6 sm:p-8 space-y-5"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Full Name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                error={fieldErrors.full_name}
                placeholder="John Doe"
                required
                color="purple"
                index={0}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={fieldErrors.email}
                placeholder="john@email.com"
                required
                color="purple"
                index={1}
              />
              <FormInput
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                error={fieldErrors.phone}
                placeholder="+91 9876543210"
                required
                color="purple"
                index={2}
              />
              <FormInput
                label="College / Institution"
                name="college"
                value={form.college}
                onChange={handleChange}
                error={fieldErrors.college}
                placeholder="MIT Bangalore"
                required
                color="purple"
                index={3}
              />
              <FormInput
                label="Team Name"
                name="team_name"
                value={form.team_name}
                onChange={handleChange}
                error={fieldErrors.team_name}
                placeholder="CodeBreakers"
                required
                color="purple"
                index={4}
              />
              <FormInput
                label="Team Size"
                name="team_size"
                type="select"
                value={form.team_size}
                onChange={handleChange}
                error={fieldErrors.team_size}
                placeholder="Select team size"
                options={teamSizes}
                required
                color="purple"
                index={5}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Team Member 1 (Optional)"
                name="member_1"
                value={form.member_1}
                onChange={handleChange}
                placeholder="Member name"
                color="purple"
                index={6}
              />
              <FormInput
                label="Team Member 2 (Optional)"
                name="member_2"
                value={form.member_2}
                onChange={handleChange}
                placeholder="Member name"
                color="purple"
                index={7}
              />
              <FormInput
                label="Team Member 3 (Optional)"
                name="member_3"
                value={form.member_3}
                onChange={handleChange}
                placeholder="Member name"
                color="purple"
                index={8}
              />
              <FormInput
                label="Team Member 4 (Optional)"
                name="member_4"
                value={form.member_4}
                onChange={handleChange}
                placeholder="Member name"
                color="purple"
                index={9}
              />
            </div>

            <div className="space-y-2">
              <FormInput
                label="Selected Problem Statement"
                name="problem_statement"
                type="select"
                value={form.problem_statement}
                onChange={handleChange}
                error={fieldErrors.problem_statement}
                placeholder="Select a problem statement"
                options={[
                  "Smart Healthcare Assistant",
                  "Sustainable Campus Tracker",
                  "Peer-to-Peer Learning Platform",
                  "Micro-Finance for Students",
                  "Smart Traffic Management",
                  "Mental Health & Wellness App",
                ]}
                required
                color="purple"
                index={10}
              />
              <Link
                href="/problems"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                View Problem Statements
              </Link>
            </div>

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="purple"
              index={14}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="purple"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                REGISTER TEAM
              </GlowButton>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
