/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Dancing Script", "cursive"],
        fontt2: ["Bebas Neue", "sans-serif"],
        fonty: ["Londrina Shadow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
