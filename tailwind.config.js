/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        logoFont:["Mukta"]
      },
      margin:{
        "57px":"57px",
        "32px":"32px"
      },
      fontSize:{
        "28":"28px"
      },
      colors:{
        "logocolor":"#F5F5F5",
        "logodotcolor":"#EAAB00"
      },
      fontWeight:{
        "weight800":800
      }
    },
  }
}

