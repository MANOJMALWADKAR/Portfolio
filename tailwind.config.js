// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
    screens: {
      xs: { max: "419px" }, // Add this for <420px
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // very important!
  ],
  plugins: [],
};
