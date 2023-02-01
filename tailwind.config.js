/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tussock: {
          '50': '#fbf8f1',
          '100': '#f5efdf',
          '200': '#ebdcbd',
          '300': '#dec293',
          '400': '#d0a367',
          '500': '#ca9558',
          '600': '#b8773e',
          '700': '#995f35',
          '800': '#7b4c31',
          '900': '#64402a',
      },
      
      }
    },
    screens: {
      'xs': '440px',
      // => @media (min-width: 440px) { ... }
  
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '868px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }
  
      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }

      '5xl': '2200px',
      // => @media (min-width: 2200px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/line-clamp'),
  ],
}
