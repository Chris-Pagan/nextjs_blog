/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-orchid": {
          50: "#FDFAFD",
          100: "#FCF5FB",
          200: "#F7E5F4",
          300: "#F3D5ED",
          400: "#E9B6E0",
          500: "#E097D2",
          600: "#CA88BD",
          700: "#865B7E",
          800: "#65445F",
          900: "#432D3F",
        },
        "bay-of many": {
          50: "#F5F5F8",
          100: "#EAEBF2",
          200: "#CBCCDE",
          300: "#ABADCA",
          400: "#6D70A3",
          500: "#2E327B",
          600: "#292D6F",
          700: "#1C1E4A",
          800: "#151737",
          900: "#0E0F25",
        },
        "medium-purple": {
          50: "#F8F7FD",
          100: "#F1F0FB",
          200: "#DDD9F6",
          300: "#C9C3F0",
          400: "#A095E5",
          500: "#7768DA",
          600: "#6B5EC4",
          700: "#473E83",
          800: "#362F62",
          900: "#241F41",
        },
        "fuchsia-blue": {
          50: "#F9F7FB",
          100: "#F2EEF8",
          200: "#DFD6ED",
          300: "#CCBDE1",
          400: "#A68BCB",
          500: "#8059B5",
          600: "#7350A3",
          700: "#4D356D",
          800: "#3A2851",
          900: "#261B36",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
