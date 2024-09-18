/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
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
        my: 'translate 1s ease-in-out forwards',
        typewriter: "typewriter 5s steps(27) forwards"
      },
    },
  },
  plugins: [],
}

