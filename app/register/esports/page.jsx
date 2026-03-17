"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import useRegistration from "@/hooks/useRegistration";

const deviceTypes = ["Android", "iOS"];

export default function EsportsForm() {
  const { submit, loading, success, error, fieldErrors, reset } =
    useRegistration("esports");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    college: "",
    bgmi_uid: "",
    ign: "",
    device_type: "",
    team_name: "",
    squad_member_1: "",
    squad_member_2: "",
    squad_member_3: "",
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
    data.participation_type = "Squad";
    // Combine squad members into squad_igns for backend
    data.squad_igns = [data.squad_member_1, data.squad_member_2, data.squad_member_3]
      .filter(Boolean)
      .join(", ");
    delete data.squad_member_1;
    delete data.squad_member_2;
    delete data.squad_member_3;
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
            className="glassmorphism glow-border-magenta rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-magenta"
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
            <h2 className="font-orbitron text-2xl font-bold neon-magenta mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              You&apos;ll receive a confirmation email shortly. Prepare for
              battle!
            </p>
            <Link
              href="/register"
              className="glow-btn-magenta px-6 py-3 rounded-xl font-orbitron text-xs text-neon-magenta tracking-wider inline-block"
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
              className="text-slate-500 hover:text-neon-magenta text-sm transition-colors inline-flex items-center gap-2"
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
            <div className="text-neon-magenta">
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
                  d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c-1.588-.179-3.054.71-3.405 2.269l-.238 1.058c-.331 1.469.596 2.938 2.073 3.278l.495.11c1.07.238 2.197-.096 2.883-.895l.455-.53a1.003 1.003 0 011.528 0l.455.53c.686.8 1.814 1.133 2.883.895l.495-.11c1.477-.34 2.404-1.81 2.073-3.278l-.238-1.058c-.351-1.559-1.817-2.448-3.405-2.269a48.49 48.49 0 01-4.163.3v0A.64.64 0 0114.25 6.087z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-magenta">
                eSPORTS — BGMI
              </h1>
              <p className="text-slate-400 text-sm">
                Day 3 — The Ultimate Battleground
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-magenta rounded-2xl p-6 sm:p-8 space-y-5"
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
                color="magenta"
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
                color="magenta"
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
                color="magenta"
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
                color="magenta"
                index={3}
              />
              <FormInput
                label="BGMI Player ID / UID"
                name="bgmi_uid"
                value={form.bgmi_uid}
                onChange={handleChange}
                error={fieldErrors.bgmi_uid}
                placeholder="5123456789"
                required
                color="magenta"
                index={4}
              />
              <FormInput
                label="In-Game Name (IGN)"
                name="ign"
                value={form.ign}
                onChange={handleChange}
                error={fieldErrors.ign}
                placeholder="xShadowKing"
                required
                color="magenta"
                index={5}
              />
              <FormInput
                label="Device Type"
                name="device_type"
                type="select"
                value={form.device_type}
                onChange={handleChange}
                error={fieldErrors.device_type}
                placeholder="Select device"
                options={deviceTypes}
                required
                color="magenta"
                index={6}
              />
            </div>

            <FormInput
              label="Team Name"
              name="team_name"
              value={form.team_name}
              onChange={handleChange}
              error={fieldErrors.team_name}
              placeholder="Shadow Squad"
              required
              color="magenta"
              index={7}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <FormInput
                label="Member 1 Name"
                name="squad_member_1"
                value={form.squad_member_1}
                onChange={handleChange}
                placeholder="Player name"
                required
                color="magenta"
                index={8}
              />
              <FormInput
                label="Member 2 Name"
                name="squad_member_2"
                value={form.squad_member_2}
                onChange={handleChange}
                placeholder="Player name"
                required
                color="magenta"
                index={9}
              />
              <FormInput
                label="Member 3 Name"
                name="squad_member_3"
                value={form.squad_member_3}
                onChange={handleChange}
                placeholder="Player name"
                required
                color="magenta"
                index={10}
              />
            </div>

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="magenta"
              index={10}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="magenta"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                JOIN BATTLE
              </GlowButton>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
