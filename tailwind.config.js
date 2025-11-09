import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      // Light Config
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "yellow",
          secondary: "accent",
        },
      },
      // Dark Config
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "orange",
          secondary: "white",
        },
      },
    ],
    logs: false,
  },
};
