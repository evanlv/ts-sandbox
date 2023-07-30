/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const { emerald, amber, teal, orange, rose } = require("tailwindcss/colors")

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/web/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { emerald, amber, teal, orange, rose },
    },
  },
  plugins: [],
}
