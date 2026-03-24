"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FormInput from "@/components/FormInput";
import GlowButton from "@/components/GlowButton";
import useRegistration from "@/hooks/useRegistration";

export default function ReelMakingForm() {
  const whatsappLink = "https://chat.whatsapp.com/Ela0hxUv4kx2KvDZUMa6l0?mode=gi_t";
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(whatsappLink)}`;
  const { submit, loading, success, error, fieldErrors } =
    useRegistration("reel-making");
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    instagram_id: "",
    phone: "",
    agree: false,
  });
  const [showPoster, setShowPoster] = useState(true);

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

  if (success) {
    return (
      <div className="relative min-h-screen grid-pattern">
        <ParticleBackground />
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="glassmorphism glow-border-rose rounded-2xl p-12 text-center max-w-md"
          >
            <svg
              className="w-20 h-20 mx-auto mb-6 text-neon-rose"
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
            <h2 className="font-orbitron text-2xl font-bold neon-rose mb-3">
              REGISTRATION SUCCESSFUL!
            </h2>
            <p className="text-slate-400 text-sm mb-8">
              You&apos;ll receive a confirmation email shortly. All the best for
              Reel Making!
            </p>
            <Link
              href="/register"
              className="glow-btn-rose px-6 py-3 rounded-xl font-orbitron text-xs text-neon-rose tracking-wider inline-block"
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
              className="text-slate-500 hover:text-neon-rose text-sm transition-colors inline-flex items-center gap-2"
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
            <div className="text-neon-rose">
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
                  d="M15.75 10.5L21 7.5v9l-5.25-3m0 0h-9A2.25 2.25 0 014.5 11.25v-3A2.25 2.25 0 016.75 6h9A2.25 2.25 0 0118 8.25v3A2.25 2.25 0 0115.75 13.5z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron text-2xl sm:text-3xl font-bold neon-rose">
                REEL MAKING
              </h1>
              <p className="text-slate-400 text-sm">
                Register for the Reel Making competition.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism glow-border-rose rounded-2xl p-6 sm:p-8 space-y-5"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput
                label="His / Her Name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                error={fieldErrors.full_name}
                placeholder="John Doe"
                required
                color="rose"
                index={0}
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
                color="rose"
                index={1}
              />
              <FormInput
                label="Instagram ID"
                name="instagram_id"
                value={form.instagram_id}
                onChange={handleChange}
                error={fieldErrors.instagram_id}
                placeholder="@yourhandle"
                required
                color="rose"
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
                color="rose"
                index={3}
              />
            </div>

            <FormInput
              type="checkbox"
              name="agree"
              label="I agree to the event rules and code of conduct"
              value={form.agree}
              onChange={handleChange}
              required
              color="rose"
              index={4}
            />

            <div className="pt-2">
              <GlowButton
                type="submit"
                color="rose"
                loading={loading}
                disabled={!form.agree}
                className="w-full"
              >
                SUBMIT FORM
              </GlowButton>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glassmorphism glow-border-rose rounded-2xl p-6 sm:p-8 mt-6"
          >
            <h2 className="font-orbitron text-lg sm:text-xl font-bold neon-rose mb-4">
              OFFICIAL RULES &amp; GUIDELINES
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm sm:text-base">
              <li>
                Reporting Time: The competition begins at 9:00 AM sharp. Participants arriving after 9:00 AM will not be permitted to participate and will be considered disqualified. Punctuality is mandatory.
              </li>
              <li>
                Submission Deadline: All reels must be fully completed and submitted by 6:00 PM sharp. Submissions received after the deadline will not be accepted or evaluated under any circumstances.
              </li>
              <li>
                Theme: The theme of the reel must be strictly related to the Tech Fest. The exact topic will be announced on the spot at the commencement of the competition. Participants are expected to work solely based on the given topic. Entries that do not reflect the assigned topic will be disqualified without review.
              </li>
              <li>
                On-Site Production Only: Participants must shoot, edit, and finalise their reel entirely within the competition hours (9:00 AM – 6:00 PM). Pre-recorded or pre-edited content is strictly not allowed.
              </li>
              <li>
                No External Material: The use of any external, pre-prepared, or third-party material — including stock footage, pre-downloaded audio, or template overlays — is strictly prohibited. All content must be original and created on the day.
              </li>
              <li>
                Submission Process: Final entries must be submitted via the official email ID provided at the time of registration, before the deadline. Include your name, registration number, and institution in the submission email.
              </li>
              <li>
                Fair Play: Any violation of the above rules, use of unfair means, plagiarism, or misconduct will result in immediate disqualification. The decisions of the organising committee are final and binding.
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glassmorphism glow-border-rose rounded-2xl p-6 sm:p-8 mt-6"
          >
            <h2 className="font-orbitron text-lg sm:text-xl font-bold neon-rose mb-4">
              JOIN REEL MAKING WHATSAPP GROUP
            </h2>

            {showPoster && (
              <img
                src="/reel-whatsapp-group.jpg"
                alt="Reel Making WhatsApp Group"
                onError={() => setShowPoster(false)}
                className="w-full max-w-md mx-auto rounded-2xl border border-rose-400/30 mb-6"
              />
            )}

            <div className="flex flex-col items-center gap-4">
              <img
                src={qrImageUrl}
                alt="WhatsApp Group QR"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-white p-3 border border-rose-400/40"
              />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-rose px-5 py-3 rounded-xl font-orbitron text-xs text-neon-rose tracking-wider inline-flex items-center gap-2"
              >
                JOIN WHATSAPP GROUP
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
