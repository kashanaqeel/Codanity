/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#5128a0",
          dark: "#3e217e",
          light: "#6b46c1",
          muted: "#f3effa",
          glow: "rgba(81, 40, 160, 0.35)",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          light: "#c4b5fd",
          muted: "#f5f3ff",
        },
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#f8f9fc",
          muted: "#f1f3f9",
        },
        ink: {
          DEFAULT: "#0f172a",
          secondary: "#475569",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 8px 32px -8px rgba(81, 40, 160, 0.12)",
        "card-hover": "0 20px 48px -12px rgba(81, 40, 160, 0.2)",
        glow: "0 0 40px -8px rgba(81, 40, 160, 0.45)",
        "glow-cyan": "0 0 32px -6px rgba(81, 40, 160, 0.35)",
        "glow-emerald": "0 0 32px -6px rgba(52, 211, 153, 0.35)",
        "glow-ai": "0 0 48px -8px rgba(139, 92, 246, 0.3), 0 0 24px -4px rgba(81, 40, 160, 0.2)",
        "glow-cyan-tight": "0 0 10px -3px rgba(81, 40, 160, 0.35)",
        "glow-emerald-tight": "0 0 10px -3px rgba(52, 211, 153, 0.3)",
        "glow-ai-tight": "0 4px 14px -10px rgba(139, 92, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.06)",
        "panel-dark": "0 8px 24px -14px rgba(0, 0, 0, 0.55)",
        nav: "0 1px 0 rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(81, 40, 160, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(81, 40, 160, 0.04) 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, rgba(139, 92, 246, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(81, 40, 160, 0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 100% 20%, rgba(139, 92, 246, 0.08), transparent 50%), radial-gradient(ellipse 40% 30% at 0% 80%, rgba(81, 40, 160, 0.06), transparent 50%)",
        "page-hero":
          "linear-gradient(180deg, #ffffff 0%, #fcfbfe 45%, #f8f9fc 100%)",
        "page-hero-accent":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(81, 40, 160, 0.1), transparent 65%)",
        "hero-ai":
          "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(139, 92, 246, 0.15), transparent 55%), radial-gradient(ellipse 45% 35% at 90% 30%, rgba(81, 40, 160, 0.1), transparent 50%), radial-gradient(ellipse 40% 30% at 5% 70%, rgba(107, 70, 193, 0.08), transparent 50%)",
        aurora:
          "radial-gradient(ellipse 60% 40% at 20% 30%, rgba(81, 40, 160, 0.14), transparent 60%), radial-gradient(ellipse 50% 35% at 80% 60%, rgba(139, 92, 246, 0.12), transparent 55%), radial-gradient(ellipse 40% 30% at 50% 90%, rgba(107, 70, 193, 0.06), transparent 50%)",
        "footer-gradient":
          "linear-gradient(180deg, #111827 0%, #0b1220 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        aurora: "aurora 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.8", transform: "scale(1.05) rotate(2deg)" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
