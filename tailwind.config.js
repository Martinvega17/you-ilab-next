/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "parallax": "url('/assets/footer/teamwork.webp')"
      },
      fontFamily: {
        latoRegular: "Lato-Regular",
        latoBold: "Lato-Bold",
        OverPassSemiBold: "OverPass-SemiBold",
        OverPassRegular: "OverPass-Regular",
        MontserratBold: "Montserrat-Bold",
        MontserratRegular: "Montserrat-Regular",
        MontserratThin: "Montserrat-Thin",
        RobotoRegular: "Roboto-Regular",
      },
      colors: {
        hoverColor: "#ffaa17",
        darkRed: "#ea0638",
        navbarBlue: '#11365F',/* '#d1e1f4' */ 
        footerBlue: '#11365F',/* '#114d97', */
        loaderYellow: '#FFDD2F',
        contact: '#262626',
        buttonContact: '#2563EB',
        titleAbout: '#4DB9CA',
        darkBlack: '#333',
        titleAbout: '#183157',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "class",
};