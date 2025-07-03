const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "1166px",
      },
    },
    extend: {
      screens: {
        sm: "426px",
        "32md": "960px",
        "32lg": "1230px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      willChange: {
        transform: "transform",
        opacity: "opacity",
        auto: "auto",
        "transform-opacity": "transform, opacity",
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translate3d(100%, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translate3d(0, 0, 0)" },
          to: { opacity: "0", transform: "translate3d(100%, 0, 0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translate3d(-100%, 0, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translate3d(0, 0, 0)" },
          to: { opacity: "0", transform: "translate3d(-100%, 0, 0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        enterFromRight: "enterFromRight 500ms cubic-bezier(0.22, 1, 0.36, 1)", // easing suave
        exitToRight: "exitToRight 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        enterFromLeft: "enterFromLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        exitToLeft: "exitToLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        scaleIn: "scaleIn 200ms ease-in-out",
        scaleOut: "scaleOut 200ms ease-in-out",
        fadeIn: "fadeIn 300ms ease-in-out",
        fadeOut: "fadeOut 300ms ease-in-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
  ],
};
