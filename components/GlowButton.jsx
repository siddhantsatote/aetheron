"use client";

export default function GlowButton({
  children,
  color = "cyan",
  type = "button",
  disabled = false,
  loading = false,
  onClick,
  className = "",
}) {
  const colorMap = {
    cyan: "glow-btn-cyan text-neon-cyan",
    purple: "glow-btn-purple text-neon-purple",
    magenta: "glow-btn-magenta text-neon-magenta",
    amber: "glow-btn-amber text-neon-amber",
    emerald: "glow-btn-emerald text-neon-emerald",
    rose: "glow-btn-rose text-neon-rose",
    red: "glow-btn-red text-neon-red",
    violet: "glow-btn-violet text-neon-violet",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${colorMap[color]} font-orbitron text-sm tracking-wider px-8 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${className}`}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
