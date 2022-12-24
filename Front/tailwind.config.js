/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Vazirmatn: "Vazirmatn",
      },
      colors: {
        lightGrey: "rgb(78, 78, 82)",
        darkGrey: "#292929",
      },
      dropShadow: {
        "3xl": "0px 2px 20px rgba(0,0,0,.7)",
      },
      screens: {
        sm: "640px",
      },
      fontWeight: {
        "[100]": 100,
        "[200]": 200,
        "[300]": 300,
        "[400]": 400,
        "[500]": 500,
        "[600]": 600,
        "[700]": 700,
        "[800]": 800,
        "[900]": 900,
      },
    },
  },
  plugins: [],
};
