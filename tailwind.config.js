/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive': '#808000',
        'light-olive': '#e8eae0',
      },
      spacing: {
        '200': '50rem',
        '240': '60rem',
      }
    },
    borderWidth: {
      '1': '1px',
    },
  },
  plugins: [],
}
