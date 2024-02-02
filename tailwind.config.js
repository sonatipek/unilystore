/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "fade-left": "fade-left 400ms ease-out forwards",
        "fade-0.5": "fade-0.5 400ms ease-out forwards",
      },
      keyframes: {
        "fade-left": {
          from: { opacity: 0, transform: "translateX(25rem)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "fade-0.5": {
          from: { opacity: 0 },
          to: { opacity: .5},
        },
      },
    },
  },
  plugins: [],
};
