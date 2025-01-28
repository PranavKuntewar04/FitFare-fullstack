/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontWeight: {
        extrabold: '900',  // Adds the 900 weight for extrabold
      },
    },
  },
  plugins: [],
}

