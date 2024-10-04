/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        textHover: "#7e96fffa",
        bodytext: "#D1D5DB",
      },
      backgroundImage: {
        "btn-bg": "linear-gradient(to right, #2b6cb0, #4c51bf)",
        "gradient-text": "linear-gradient(to right, #60a5fa, #1d4ed8)",
      },
    },
  },
  plugins: [],
};
