/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-background": "gradient-animation 15s ease infinite",
      },
    },
  },
  plugins: [],
};
