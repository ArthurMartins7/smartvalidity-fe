/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      ...require('tailwindcss/colors'),
      'smartverdehover' : '#16a34a',
      'smartverde' : '#15803d',
      'rentazul': '#9ca3af',
      'smartbranco': '#ffffff',
      'smartcinza': '#4b5563',
      'smartpreto': '#000000',
      'smartamarelo':'#737373',
      'smartvermelho': '#dc2626',
    },
    extend: {
      boxShadow: {
        'custom-direction': '2px 0px 10px rgba(0, 0, 0, 0.2)', // Adjust the values as needed
      },
    },
  },
  plugins: [],
}

