/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Adjust the path based on your project structure
  theme: {
    extend: {
      fontFamily: {
        amaranth: ['Amaranth', 'sans-serif'], // Add Amaranth to Tailwind's fontFamily
      },
    },
  },
  plugins: [],
};
