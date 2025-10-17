/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hue1: "#EEFDFF",
        hue2: "#DAF6FF",
        hue3: "#C5EFFF",
        hue4: "#9BE0FF",
        hue5: "#71D1FF",
        hue6: "#5CCAFF",
        hue7: "#47C2FF",
        navtransition1: "hsla(242, 62%, 91%, 1)",
        navtransition2: "hsla(191, 100%, 94%, 1)",
        navtransition3: "hsla(310, 69%, 90%, 1)",
        navbtn: "hsla(336, 91%, 83%, 1)",
        navtext: "hsla(20, 86%, 92%, 1)",
        waveTop: "#FCE4D8",
        waveBottom: "#DFF9FF",
        brandPink: "#FBACCC",
        foreground: "#625F5F",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      animation: {
        float: "floatY 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};