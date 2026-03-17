/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0A0E1A",
          800: "#0D1526",
          700: "#111B33",
        },
        neon: {
          cyan: "#00F5FF",
          purple: "#8B5CF6",
          magenta: "#FF00C8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "monospace"],
      },
    },
  },
  plugins: [],
};
