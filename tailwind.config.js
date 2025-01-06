/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'custom': {'min': '440px', 'max': "640px"},
      },
      inset: {
        '2/5': "40%",
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        my: {
          "0%": {
            transform: "translateX(100px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        appear: "appear 3s ease-in-out",
        my: 'appear 1s ease-in-out forwards',
        typewriter: "typewriter 5s steps(27) forwards",
        navcustom: "appear 1s ease-in-out"
      },
    },
  },
  plugins: [],
}

