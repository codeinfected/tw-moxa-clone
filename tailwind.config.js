/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { max: "970px" },
      tablet: { max: "770px" },
      mobile: { max: "550px" },
    },
    extend: { fontFamily: { body: ["Poppins"] } },
  },
  plugins: [],
};
