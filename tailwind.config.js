/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768',
      lg: '976',
      xl: '1440px'

    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
      
      }
      
    },
  },
  plugins: [],
}

