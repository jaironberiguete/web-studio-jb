/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {     
            custom: ["Roboto", "sans-serif"], // Example with Roboto
            extra: ["Condiment", "cursive"], // Example with Arial
          },
        },
  },
  plugins: [],
}
