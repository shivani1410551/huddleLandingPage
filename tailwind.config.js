/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "430px",
      md: "640px",
      lg: "745px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        primary: ["Poppins", "sans - serif"], //700
        secondary: ["Open Sans", "sans - serif"],
      },
    },
  },
  plugins: [],
};
