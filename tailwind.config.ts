import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./(routes)/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
    },
    opacity: {
      "0": "0",
      "20": "0.2",
      "40": "0.4",
      "60": "0.6",
      "80": "0.8",
      "100": "1",
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: {
          100: "#DEE9FF",
          200: "#C4D8FE",
          300: "#A9C2F3",
          400: "#8FA9DB",
          500: "#7490C6",
          600: "#5D77A8",
          700: "#526790",
          800: "#425478",
          900: "#384868",
          1000: "#333F57",
          1100: "#2A354A",
          1200: "#1F2634",
          1300: "#11151D",
        },
        secondary: {
          100: "#EFFFF6",
          200: "#E7FFF1",
          300: "#D7FFE8",
          400: "#CCFFE2",
          500: "#BAFFD8",
          600: "#ACFFD0",
          700: "#6FFCC2",
          800: "#3DEDB0",
          900: "#1DD49E",
          1000: "#1FC5A7",
          1100: "#21AEA1",
          1200: "#249695",
          1300: "#1A656A",
        },
        semantic: {
          success: "#00BDA7",
          warning: "#F0CF59",
          danger: "#D14242",
          info: "#5A80E1",
        },
        black: "#000000",
        white: "#ffffff",
        gray: {
          100: "#F8F8F8",
          200: "#F3F3F3",
          300: "#E4E4E4",
          400: "#CECECE",
          500: "#B0B0B0",
          600: "#929292",
          700: "#707070",
          800: "#525252",
          900: "#404040",
          1000: "#303030",
          1100: "#2A2A2A",
          1200: "#202020",
          1300: "#101010",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
