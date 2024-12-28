/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very_dark_blue": "hsl(243, 87%, 12%)",
        "desaturated_blue": "hsl(238, 22%, 44%)",
        "bright_blue": "hsl(224, 93%, 58%)",
        "moderate_cyan": "hsl(170, 45%, 43%)",
        "light_grayish_blue": "hsl(240, 75%, 98%)",
        "light_gray": "hsl(0, 0%, 75%)",
      },
      screens: {
        "mb": { min: "0", max: "1024px" }
      },
      fontFamily: {
        "rail": "Raleway, sans-serif",
        "opsans": "Open Sans, sans-serif",
      }
    },
  },
  plugins: [],
}

