import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        copo: {
          50: "#EEF4FF",
          100: "#D9E5FE",
          200: "#B8D0FD",
          300: "#88B1FA",
          400: "#5389F5",
          500: "#2B63EB",
          600: "#1746D4",
          700: "#0F38B0",
          800: "#0B3C8C", // Primary Brand Color
          900: "#0A2D69",
          950: "#061A3D",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#FF7A00", // Accent Brand Color
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(11, 60, 140, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -4px rgba(11, 60, 140, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        elevated: "0 20px 40px -8px rgba(11, 60, 140, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)",
        orange: "0 10px 25px -4px rgba(255, 122, 0, 0.35)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
