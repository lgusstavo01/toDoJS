/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1E6F9F",
        blueDark: "#4EA8DE",

        purple: "#8284FA",
        purpleDark: "#5E60CE",

        gray100: "#F2F2F2",
        gray200: "#D9D9D9",
        gray300: "#808080",
        gray400: "#333333",
        gray500: "#262626",
        gray600: "#1A1A1A",
        gray700: "#0D0D0D",

        danger: "#E25858",
      },
    },
  },
  plugins: [],
};
