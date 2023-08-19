/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel_blue_new: {
          light: "#bbeaff",
          dark: "	#72d3fe",
        },
        "pastel-yellow-new": {
          dark: "#FDFD96",
          light: "#fefecb",
        },
        "pastel-orange-new": {
          dark: "#ffc04d",
          light: "#ffd280",
        },
        "pastel-blue-new": {
          light: "#b8e2f6",
          dark: "#89CFF0",
        },
        "pastel-mint-new": {
          light: "#cdedcf",
          dark: "#ACE1AF"
        },
        brand_lti_dark_blue: "#2f3187",
      },
      fontFamily: {
        headline: "'Plus Jakarta Sans', sans-serif"
      },
      transitionProperty: {
        height: 'height'
      }
    },
  },
  plugins: [],
}

