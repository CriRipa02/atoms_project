/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFF',
        'black': '#000',
        'grey': '#F4F4F4',
        'red': '#FF2C33',
        'eggshell': '#F4F1DE',
      },
      fontFamily: {
        'anybody': ['Cinzel', 'serif'],
        'raleway': ['Cinzel', 'serif']
      },
    },
    screens: {
      'sm': '390px',
      'lg': '1440px',
    }
  },
  plugins: [],
}

