/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#C00021",
        primary: "#F4EFE6",
        customYellow: "#fed030",
        customBlue: "#5286a5",
        darkBlue: "#003049",
      },

      fontFamily: {
        sans: ["Khand", "sans-serif"], // This sets Khand as the default sans-serif font
        ser: ["Inknut Antiqua", "serif"],
        monomaniac: ["Monomaniac One"],
        jetBrains: ["JetBrains Mono", "monospace"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#F4EFE6", // Use your desired background color here
      }),
      borderWidth: {
        DEFAULT: "1px",
        12: "12px",
        15: "15px",
        20: "20px",
        95: "95px",
      },
      fontSize: {
        110: "110px",
      },
      screens: {
        card: "450px", // Custom breakpoint
      },
    },
  },
  plugins: [],
};
