/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightgray:'#dde6ed',
      lightgrayer:'#d0dde6',
      lightbluegray:'#9DB2BF',
      mediumbluegray:'#526D82',
      hardbluegray:'#27374D',
      darkblue:'#202e40'
    },
    extend: {
      fontFamily:{
        body:['"Poppins", sans-serif']
      } 
    },
  },
  plugins: [],
}

