/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(2,0,36,1) 18%, rgba(50,50,87,1) 60%, rgba(74,80,121,1) 78%, rgba(115,125,156,1) 100%)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

