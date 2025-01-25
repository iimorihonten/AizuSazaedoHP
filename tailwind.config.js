/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mincho: ['Noto Serif JP', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        yugothic: ['Yu Gothic', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
