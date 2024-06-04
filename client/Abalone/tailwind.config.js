/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      'libra': ["Work Sans" , "sans"],  
      'rubik':["Rubik"] 
     },
    extend: {
      colors: {
        'fbab7e': '#FBAB7E',
        'f7ce68': '#F7CE68',
        'f4d03f': '#F4D03F',
        '16a085': '#16A085',
      },
      backgroundImage: {
        'custom-gradient-orange': 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        'custom-gradient-green': 'linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)',
        'custom-gradient-drkGreen':'linear-gradient(114.3deg, rgb(19, 126, 57) 0.2%, rgb(8, 65, 91) 68.5%)',
      },
      boxShadow:{
        'custom-sm': '0 4px 0 rgba(54, 52, 60, 1) , 4px 0px 0 rgba(54, 52, 60, 1) ',
      }
    },
  },
  plugins: [],
}

