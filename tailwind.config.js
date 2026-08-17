/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ink: "var(--color-white)",
        grey: {
          DEFAULT: "var(--color-grey)",
          1: "var(--color-grey-1)",
          2: "var(--color-grey-2)",
          3: "var(--color-grey-3)",
          4: "var(--color-grey-4)",
          5: "var(--color-grey-5)",
          6: "var(--color-grey-6)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        apple: "var(--box-shadow-1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.28, 0.11, 0.32, 1)",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.28, 0.11, 0.32, 1)",
        "apple-spring": "cubic-bezier(0.34, 1.25, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
