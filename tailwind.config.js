/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xx: '321px',
      xs: '376px',
      sm: '426px',
      md: '769px',
      lg: '1025px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        mont: 'Montserrat, sans-serif',
      },
      fontWeight: {
        regular: 400,
      },
      colors: {
        transparent: 'transparent',
        yellow: '#F7D22D',
        default: '#231F20',
        lightWhite: 'rgba(0, 0, 0, 0.06)',
        gray: '#696F7A',
        white: '#fff',
        lightGray: '#F3F3F7',
      },
    },
  },
  plugins: [],
}
