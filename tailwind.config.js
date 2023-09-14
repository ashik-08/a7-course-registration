/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        "pri-text": "#1C1B1B",
        "sec-text": "#1C1B1B99",
        "spe-text": "#2F80ED",
        "cal-text": "#1C1B1BCC",
        "main-bg": "#F3F3F3",
      },
    },
  },
  plugins: [],
}

