/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#4DAA8A',
        'black-90': '#101010',
        'black-80': '#242424',
        'black-70': '#131313',
        backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      },
    },
  },
  plugins: [],
}

