/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customRed: '#C00021',
        primary: '#F4EFE6',
        customYellow:'#fed030',
        customBlue:'#5286a5',
        darkBlue:'#003049',
      },

      fontFamily: {
        'sans': ['Khand', 'sans-serif'], // This sets Khand as the default sans-serif font
        'ser':['Inknut Antiqua', 'serif']
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#F4EFE6', // Use your desired background color here
      }),
    },
  },
  plugins: [],
}

