/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: "Lato-Regular",
        latoBold: "Lato-Bold",
        OverPass: "OverPass"
      },
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
        navbarBlue: '#11365F',/* '#d1e1f4' */ 
        footerBlue: '#11365F',/* '#114d97', */
        loaderYellow: '#FFDD2F',
        contact: "rgba(20, 184, 166, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class",
};