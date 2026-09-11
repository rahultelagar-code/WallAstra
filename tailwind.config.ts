import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        oled: "#000000",
        surface: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          800: "#18181b",
          900: "#09090b",
          950: "#040406",
        },
        brand: {
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          fuchsia: "#d946ef",
          emerald: "#10b981",
        }
      },
      aspectRatio: {
        "9/16": "9 / 16",
        "16/9": "16 / 9",
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.4)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
};

export default config;
