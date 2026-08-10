import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          50: "#eef7f7",
          100: "#d3ecec",
          200: "#a8d9d9",
          300: "#78c0c0",
          400: "#4aa3a3",
          500: "#2f8686",
          600: "#236a6a",
          700: "#1f5757",
          800: "#1c4747",
          900: "#123030",
          950: "#0a1d1d",
        },
        coral: {
          50: "#fff3ed",
          100: "#ffe4d4",
          200: "#ffc5a8",
          300: "#ff9d71",
          400: "#ff7a47",
          500: "#f9591f",
          600: "#e34012",
          700: "#bc2f10",
          800: "#952815",
          900: "#792414",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(18, 48, 48, 0.12)",
        softer: "0 2px 12px -2px rgba(18, 48, 48, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
