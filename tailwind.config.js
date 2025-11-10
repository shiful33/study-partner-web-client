import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      'custom-dark-blue': '#001F46',
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: [
      // Light Config
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#001F46",
          secondary: "yellow",
          "base-content": "#001F46",
        },
      },
      // Dark Config
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "yellow",
          secondary: "#001F46",
          "base-content": "white",
        },
      },
    ],
    logs: false,
  },
};
