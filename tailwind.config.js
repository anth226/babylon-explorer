/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notApproved: "#BC2727",
        pending: "#E28937",
        approved: "#1AA179",
        secondary: "#010CC2"
      }
    },
  },
  plugins: [],
}
