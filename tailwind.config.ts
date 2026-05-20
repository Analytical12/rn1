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
        "rn-offwhite": "#F7F5F0",
        "rn-warm-light": "#ECE8E1",
        "rn-text": "#4A4A46",
        "rn-graphite": "#1F2A2E",
        "rn-sage": "#8FAF9B",
        "rn-green": "#315C4B",
        "rn-teal": "#2F7D7E",
        "rn-petrol": "#1F5F68",
        "rn-sand": "#D9CBB8",
        "rn-mint": "#DDEBE3",
        "rn-mist": "#DDEAF0",
        "rn-terra": "#B9785F",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      maxWidth: {
        "content": "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
