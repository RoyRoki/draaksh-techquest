import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        draaksh: {
          primary: "#5e2eea",
          glow: "#7B4FFF",
          accent: "#A78BFA",
          spark: "#C084FC",
          gold: "#F5C518",
          "gold-dim": "#C9A012",
        },
        surface: {
          0: "#000000",
          1: "#07070f",
          2: "#0a0a14",
          3: "#0f0f1a",
        },
        border: {
          dim: "rgba(94,46,234,0.18)",
          hover: "rgba(94,46,234,0.5)",
          bright: "rgba(94,46,234,0.8)",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(64px,11vw,160px)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(48px,8vw,120px)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(36px,5vw,72px)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(28px,3.5vw,48px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "body-lg": ["clamp(16px,1.3vw,20px)", { lineHeight: "1.6" }],
        "body-md": ["clamp(14px,1.1vw,17px)", { lineHeight: "1.65" }],
        "label": ["clamp(11px,0.9vw,13px)", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "grain": "grain 0.5s steps(2) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(94,46,234,0.3), 0 0 60px rgba(94,46,234,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(94,46,234,0.6), 0 0 100px rgba(94,46,234,0.2)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "grain": {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(3%,2%)" },
          "30%": { transform: "translate(-1%,4%)" },
          "40%": { transform: "translate(2%,-1%)" },
          "50%": { transform: "translate(-3%,2%)" },
          "60%": { transform: "translate(1%,-2%)" },
          "70%": { transform: "translate(-2%,3%)" },
          "80%": { transform: "translate(3%,-3%)" },
          "90%": { transform: "translate(-1%,1%)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(94,46,234,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,46,234,0.06) 1px, transparent 1px)",
        "violet-radial": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(94,46,234,0.15), transparent)",
        "gold-radial": "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(245,197,24,0.08), transparent)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
