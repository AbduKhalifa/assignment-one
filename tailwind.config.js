/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base": "#FFFFFF",
        "helper": "#F5F5F5",
        "blue": "#6698F0",
        "text": "#919294"
      },
      transitionDuration: {
        'fast': '200ms',
        'medium': '450ms',
        'slow': '850ms'
      }
    },
  },
  plugins: [],
}


