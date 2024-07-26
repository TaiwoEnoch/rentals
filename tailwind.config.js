/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'home-bg': "url('../../assets/home_bg.png')",
    }
  },
  plugins: [],
}

