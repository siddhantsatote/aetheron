/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#040B1F",
          800: "#0A1430",
          700: "#122047",
        },
        neon: {
          cyan: "#35F3FF",
          purple: "#3F9DFF",
          magenta: "#74ADFF",
          amber: "#FFB12B",
          emerald: "#12DF93",
          rose: "#FF4CA0",
          red: "#FF4A45",
          violet: "#9B84FF",
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
