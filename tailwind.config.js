/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ce-blue': '#1F4E78',
        'ce-light': '#4472C4',
        'ce-red': '#C5504F',
        'ce-green': '#70AD47',
      },
    },
  },
  plugins: [],
};
