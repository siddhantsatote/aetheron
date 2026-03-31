"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import RulesAccordion from "@/components/RulesAccordion";
import useRegistration from "@/hooks/useRegistration";

const domains = ["Healthcare", "Education", "Environment", "FinTech", "Other"];
const teamSizes = ["1", "2", "3", "4"];

export default function IdeathonForm() {
  const { submit, loading, success, error, fieldErrors, reset } =
    useRegistration("ideathon");
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
    idea_title: "",
    problem_statement: "",
    domain: "",
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
    data.team_size = parseInt(data.team_size, 10);
    await submit(data);
  };

  const rules = [
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
              You&apos;ll receive a confirmation email shortly. Get ready to
              innovate!
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-cyan">
                IDEATHON
              </h1>
              <p className="text-slate-400 text-sm">
                Day 1 — Pitch your innovative ideas
              </p>
            </div>
          </motion.div>

          {/* Rules Accordion */}
          <RulesAccordion
            rules={rules}
            color="purple"
            title="Event Rules & Guidelines"
          />

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
                placeholder="InnoVators"
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

            <FormInput
              label="Idea Title"
              name="idea_title"
              value={form.idea_title}
              onChange={handleChange}
              error={fieldErrors.idea_title}
              placeholder="AI-powered Health Monitor"
              required
              color="cyan"
              index={6}
            />
            <FormInput
              label="Problem Statement"
              name="problem_statement"
              type="textarea"
              value={form.problem_statement}
              onChange={handleChange}
              error={fieldErrors.problem_statement}
              placeholder="Describe the problem you're solving..."
              required
              color="cyan"
              rows={4}
              index={7}
            />
            <FormInput
              label="Domain / Track"
              name="domain"
              type="select"
              value={form.domain}
              onChange={handleChange}
              error={fieldErrors.domain}
              placeholder="Select domain"
              options={domains}
              required
              color="cyan"
              index={8}
            />

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="cyan"
              index={9}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="cyan"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                SUBMIT IDEA
              </GlowButton>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
