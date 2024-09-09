const { Questrial } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors:{
        'iconscolorktp': '#5f8744',
        'iconscolorktphover': '#7bb853',
        'iconscolorktpbottom': '#abad34',
      },
      fontFamily: {
        Outfit: ['Outfit Sans', 'sans-serif'], 
        Exo: ['Exo2', 'sans-serif'],
        Questrial: ['Questrial', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};
