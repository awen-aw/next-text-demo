import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "title-color-white": "#EDEDED",
        "tiny-color-white": "#F2F2F2",
        "tiny-color-gray": "#676767",
        "color-bg-gray": "#131313",
        "hover-btn-gray": "#303030",
        "mask-black-100": "rgba(3, 3, 3, 1)",
        "mask-black-80": "rgba(3, 3, 3, 0.8)",
        "mask-black-0": "rgba(3, 3, 3, 0.01)",
      },
    },
    fontFamily: {
      "next-book-bold": ["NEXT-Book-Bold", "sans-serif"],
      "next-book-thin": ["NEXT-Book-Thin", "sans-serif"],
      "neuemachinna-light": ["neuemachinna-light", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
