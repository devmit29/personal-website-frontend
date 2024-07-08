/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 5s steps(27) forwards"
      },
    },
  },
  plugins: [],
}

