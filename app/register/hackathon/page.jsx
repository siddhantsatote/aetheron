"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import useRegistration from "@/hooks/useRegistration";

const teamSizes = ["6"];

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
    member_5: "",
    problem_statement: "",
    girl_member_confirm: false,
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
    if (!form.agree || !form.girl_member_confirm) return;
    const { agree, ...data } = form;
    data.team_size = parseInt(data.team_size, 10);
    // Combine team members into a comma-separated string
    data.team_members = [
      data.member_1,
      data.member_2,
      data.member_3,
      data.member_4,
      data.member_5,
    ]
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
            className="glassmorphism glow-border-cyan rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-cyan"
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
            <h2 className="font-orbitron text-2xl font-bold neon-cyan mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              You&apos;ll receive a confirmation email shortly. Get your dev
              environment ready!
            </p>
            <Link
              href="/register"
              className="glow-btn-cyan px-6 py-3 rounded-xl font-orbitron text-xs text-neon-cyan tracking-wider inline-block"
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
              Back to Events
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-neon-cyan">
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
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-cyan">
                HACKATHON
              </h1>
              <p className="text-slate-400 text-sm">
                Team size 6 — minimum 1 girl member mandatory.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-cyan rounded-2xl p-6 sm:p-8 space-y-5"
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
                color="cyan"
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
                color="cyan"
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
                color="cyan"
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
                color="cyan"
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
                color="cyan"
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
                color="cyan"
                index={5}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="Team Member 1"
                name="member_1"
                value={form.member_1}
                onChange={handleChange}
                error={fieldErrors.member_1}
                placeholder="Member name"
                required
                color="cyan"
                index={6}
              />
              <FormInput
                label="Team Member 2"
                name="member_2"
                value={form.member_2}
                onChange={handleChange}
                error={fieldErrors.member_2}
                placeholder="Member name"
                required
                color="cyan"
                index={7}
              />
              <FormInput
                label="Team Member 3"
                name="member_3"
                value={form.member_3}
                onChange={handleChange}
                error={fieldErrors.member_3}
                placeholder="Member name"
                required
                color="cyan"
                index={8}
              />
              <FormInput
                label="Team Member 4 (Optional)"
                name="member_4"
                value={form.member_4}
                onChange={handleChange}
                placeholder="Member name"
                color="cyan"
                index={9}
              />
              <FormInput
                label="Team Member 5 (Optional)"
                name="member_5"
                value={form.member_5}
                onChange={handleChange}
                placeholder="Member name"
                color="cyan"
                index={10}
              />
            </div>

            <div className="space-y-2">
              <FormInput
                label="Problem Statement"
                name="problem_statement"
                type="textarea"
                value={form.problem_statement}
                onChange={handleChange}
                error={fieldErrors.problem_statement}
                placeholder="Enter your problem statement"
                rows={4}
                required
                color="cyan"
                index={11}
              />
              <a
                href="https://drive.google.com/drive/folders/1s58dONPEVsohDz6q9x8tWKrdIGb2cyAM?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-orbitron tracking-wider text-neon-cyan hover:opacity-90 transition-opacity"
              >
                VIEW PROBLEM STATEMENTS
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L10 14" />
                </svg>
              </a>
            </div>

            <FormInput
              type="checkbox"
              name="girl_member_confirm"
              label="Minimum 1 girl member is mandatory per team"
              value={form.girl_member_confirm}
              onChange={handleChange}
              error={fieldErrors.girl_member_confirm}
              required
              color="cyan"
              index={12}
            />

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="cyan"
              index={13}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="cyan"
                loading={loading}
                disabled={!form.agree || !form.girl_member_confirm}
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
