/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      /* =========================
          Colors
      ========================== */

      colors: {
        primary: "#7C3AED",
        "primary-light": "#A78BFA",
        "primary-dark": "#5B21B6",

        neon: "#8B5CF6",

        dark: {
          100: "#1a1a2e",
          200: "#16213e",
          300: "#0f3460",
        },

        light: {
          100: "#ffffff",
          200: "#f8fafc",
          300: "#e2e8f0",
        },
      },

      /* =========================
          Fonts
      ========================== */

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif",
        ],

        mono: [
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },

      /* =========================
          Animations
      ========================== */

      animation: {
        float: "float 6s ease-in-out infinite",

        glow:
          "glow 2s ease-in-out infinite alternate",

        gradient:
          "gradient 8s ease infinite",

        typing:
          "typing 3.5s steps(40,end)",

        "spin-slow":
          "spin 20s linear infinite",

        shimmer:
          "shimmer 3s linear infinite",
      },

      /* =========================
          Keyframes
      ========================== */

      keyframes: {

        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-20px)",
          },
        },

        glow: {
          from: {
            boxShadow:
              "0 0 5px #7C3AED, 0 0 10px #7C3AED",
          },

          to: {
            boxShadow:
              "0 0 20px #A78BFA, 0 0 40px #A78BFA",
          },
        },

        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },

          "50%": {
            backgroundPosition: "100% 50%",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% center",
          },

          "100%": {
            backgroundPosition: "200% center",
          },
        },
      },

      /* =========================
          Backgrounds
      ========================== */

      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",

        "hero-gradient":
          "linear-gradient(to right, #7C3AED, #4F46E5)",

        "card-gradient":
          "linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },

      /* =========================
          Shadows
      ========================== */

      boxShadow: {
        neon:
          "0 0 20px rgba(124,58,237,0.35)",

        "neon-lg":
          "0 0 40px rgba(124,58,237,0.5)",
      },

      /* =========================
          Blur
      ========================== */

      backdropBlur: {
        xs: "2px",
      },

      /* =========================
          Border Radius
      ========================== */

      borderRadius: {
        "4xl": "2rem",
      },

      /* =========================
          Transition
      ========================== */

      transitionDuration: {
        400: "400ms",
      },
    },
  },

  plugins: [],
};