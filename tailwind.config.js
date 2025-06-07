/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      colors: {
        base: {
          dark_bg: "#222222",
          hover: "#455a64",
          shadow: "#22222290",
          text: "#d3d3d3",
          light: "#ffffff",
          special_span: "#964b00",
          normal_span: "#c99a6b",
        },
        line: "#039BCF",
      },
    },
  },
  plugins: [],
};
