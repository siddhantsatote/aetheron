"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import RulesAccordion from "@/components/RulesAccordion";
import useRegistration from "@/hooks/useRegistration";

export default function BlogWritingForm() {
  const { submit, loading, success, error, fieldErrors } =
    useRegistration("blog-writing");
  const [form, setForm] = useState({
    full_name: "",
    college: "",
    branch_year: "",
    phone: "",
    email: "",
    domain: "",
    blog_title: "",
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
    "Eligibility: Open to all students.",
    "Participation: Individual participation only.",
    "Registration: Participants must register before the given deadline.",
    "Domains: Participants must choose any one domain from the provided list.",
    "Mode: The competition will be conducted using laptops. Participants must bring their own device.",
    "Time Limit: As announced during the event.",
    "Word Limit: Maximum 600 words.",
    "Plagiarism & AI Usage: Strictly prohibited. The content must be original. Any plagiarism or use of AI-generated content will lead to disqualification.",
    "Internet Usage: Use of the internet during the competition is not allowed.",
    "Judging Criteria: Based on creativity, clarity, relevance to the domain and originality.",
    "Decision: Judge's decision will be final.",
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
            className="glassmorphism glow-border-emerald rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-emerald"
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
            <h2 className="font-orbitron text-2xl font-bold neon-emerald mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              You&apos;ll receive a confirmation email shortly. All the best for
              Blog Writing!
            </p>
            <Link
              href="/register"
              className="glow-btn-emerald px-6 py-3 rounded-xl font-orbitron text-xs text-neon-emerald tracking-wider inline-block"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <Link
              href="/register"
              className="text-slate-500 hover:text-neon-emerald text-sm transition-colors inline-flex items-center gap-2"
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
            <div className="text-neon-emerald">
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
                  d="M16.862 4.487l1.687-1.688a2.121 2.121 0 113 3L10.582 16.768a4.5 4.5 0 01-1.897 1.13L6 18.75l.853-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-emerald">
                BLOG WRITING
              </h1>
              <p className="text-slate-400 text-sm">
                Showcase your writing and technical storytelling skills.
              </p>
            </div>
          </motion.div>

          {/* Rules Accordion */}
          <RulesAccordion rules={rules} color="emerald" title="Event Rules & Guidelines" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glassmorphism glow-border-emerald rounded-2xl p-6 sm:p-8 mb-6"
          >
            <h2 className="font-orbitron text-lg sm:text-xl font-bold neon-emerald mb-4">
              BLOG WRITING DOMAINS
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm sm:text-base">
              <li>Technology &amp; Society</li>
              <li>Reality vs Perception</li>
              <li>Power &amp; Influence</li>
              <li>Freedom vs Limitation</li>
              <li>Media &amp; Communication</li>
            </ol>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-emerald rounded-2xl p-6 sm:p-8 space-y-5"
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
                color="emerald"
                index={0}
              />
              <FormInput
                label="College Name"
                name="college"
                value={form.college}
                onChange={handleChange}
                error={fieldErrors.college}
                placeholder="MIT Bangalore"
                required
                color="emerald"
                index={1}
              />
              <FormInput
                label="Branch / Year"
                name="branch_year"
                value={form.branch_year}
                onChange={handleChange}
                error={fieldErrors.branch_year}
                placeholder="CSE / 3rd Year"
                required
                color="emerald"
                index={2}
              />
              <FormInput
                label="Contact Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                error={fieldErrors.phone}
                placeholder="+91 9876543210"
                required
                color="emerald"
                index={3}
              />
              <FormInput
                label="Email ID"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={fieldErrors.email}
                placeholder="john@email.com"
                required
                color="emerald"
                index={4}
              />
              <FormInput
                label="Selected Domain"
                name="domain"
                value={form.domain}
                onChange={handleChange}
                error={fieldErrors.domain}
                placeholder="AI, Web Dev, Cybersecurity..."
                required
                color="emerald"
                index={5}
              />
            </div>

            <FormInput
              label="Blog Title"
              name="blog_title"
              value={form.blog_title}
              onChange={handleChange}
              error={fieldErrors.blog_title}
              placeholder="The Future of AI in Education"
              required
              color="emerald"
              index={6}
            />

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="emerald"
              index={7}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="emerald"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                SUBMIT BLOG
              </GlowButton>
            </div>
          </motion.form>

        </div>
      </section>
    </div>
  );
}
