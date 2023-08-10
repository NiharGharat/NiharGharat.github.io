/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBrown: "#fbdcb6",
        brandBrown_100: "#dbaf84",
        brandBrown_200: "#db9f72",
        brand_lti_dark_blue: "#2f3187",
        pastel_green: "#B2D3BE",
        pastel_green_dark: "#709A98",
        pastel_lime: "#FFF6BD",
        pastel_lime_dark: "#ffee80",
        pastel_blue: "#B6D8F2",
        pastel_blue_dark: "#67aee4",
      },
      transitionProperty: {
        height: 'height'
      }
    },
  },
  plugins: [],
}

