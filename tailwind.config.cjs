/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblue: "#4831D4",
        mygray: "#595959",
      },
      fontFamily: {
        myfont: ["Manrope"],
      },
    },
  },
  plugins: [],
};
