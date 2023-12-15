/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url(../assets/img/sanFrancisco.jpg)",
        sanFranciscoDesktop: "url(../assets/img/sanFranciscoDesktop.jpg)",
        yosemite: "url(../assets/img/yosemite.jpg)",
        LA: "url(../assets/img/LA.jpg)",
        seattle: "url(../assets/img/seattle.jpg)",
        newYork: "url(../assets/img/new_york.jpg)",
        norway: "url('../assets/img/norway.jpg')",
        sydney: "url(../assets/img/sydney.jpg)",
        miami: "url(../assets/img/miami.jpg)",
        switzerland: "url(../assets/img/switzerland.jpg)",
        bali: "url(../assets/img/bali.jpg)",
        norway: "url(../assets/img/norway.jpg)",
        chicago: "url(../assets/img/chicago.jpg)",
        edimburgo: "url(../assets/img/edimburgo.jpg)",
        iceland: "url(../assets/img/iceland.jpg)",
      },
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
        grayFooter: "#FCFBFB",
      },
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
        grayFooter: "#ccc",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
