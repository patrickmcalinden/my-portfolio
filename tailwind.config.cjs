/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCF9F1",
          100: "#F7F0E1",
          200: "#EDE2CA",
          300: "#DFCFAC",
        },
        pine: {
          500: "#4E9169",
          600: "#3B7D58",
          700: "#2E6647",
          800: "#245038",
          900: "#1B3A2A",
          950: "#12291D",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Fraunces", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        content: "42rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
