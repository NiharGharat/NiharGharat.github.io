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
      },
    },
  },
  plugins: [],
}

