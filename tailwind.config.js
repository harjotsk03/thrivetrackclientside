/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#1A2732",
        mainYellow: "#FFC51C",
        borderGray: "#C6C6C6",
        mainBG: "#EFEFEF",
        secondaryGray: "#F6F6F6",
      },
      animation: {
        "gradient-background": "gradient-animation 15s ease infinite",
        "slide-up-down": "slideUpDown 0.5s ease-in-out",
        float: "float 2s ease-in-out infinite",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-delayed": "fade-in 0.8s ease-out 0.3s forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "color-pulse": "color-pulse 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      keyframes: {
        slideUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "color-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
