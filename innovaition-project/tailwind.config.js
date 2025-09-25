// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6344FE", // your purple
          "secondary": "#000000", // black
          "accent": "#6344FE", // optional, same as primary
          "neutral": "#000000", // text color
          "base-100": "#FFFFFF", // background
        },
      },
      {
        dark: {
          "primary": "#6344FE", // same purple
          "secondary": "#FFFFFF", // for contrast on dark bg
          "accent": "#6344FE",
          "neutral": "#FFFFFF", // text color
          "base-100": "#000000", // background
        },
      },
    ],
  },
};
