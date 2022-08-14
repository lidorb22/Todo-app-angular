/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#ff847c',
        'second': '#2a363b',
        'third': '#e84a5f',
        'fore': '#fecea8',
      },
    },
  },
  plugins: [],
}