/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/(routes)/layout.tsx",
    "./app/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/components/**/*.{ts,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      tertiary: {
        DEFAULT: "hsl(var(--tertiary))",
        foreground: "hsl(var(--tertiary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      info: {
        DEFAULT: "hsl(var(--info))",
        foreground: "hsl(var(--info-foreground))",
      },
      warning: {
        DEFAULT: "hsl(var(--warning))",
        foreground: "hsl(var(--warning-foreground))",
      },
      success: {
        DEFAULT: "hsl(var(--success))",
        foreground: "hsl(var(--success-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      highlight: {
        DEFAULT: "hsl(var(--highlight))",
        foreground: "hsl(var(--highlight-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      none: "0px",
      xs: `calc(var(--radius) - 4px)`,
      sm: `calc(var(--radius) - 2px)`,
      md: `var(--radius)`,
      lg: `calc(var(--radius) + 2px)`,
      xl: `calc(var(--radius) + 4px)`,
      "2xl": `calc(var(--radius) + 6px)`,
      full: "9999px",
    },
    opacity: {
      "0": "0",
      "20": `calc(var(--opacity) - 0.8)`,
      "40": `calc(var(--opacity) - 0.6)`,
      "60": `calc(var(--opacity) - 0.4)`,
      "80": `calc(var(--opacity) - 0.2)`,
      "100": `var(--opacity)`,
    },
    maxWidth: {
      xs: "var(--screen-xs)",
      sm: "var(--screen-sm)",
      md: "var(--screen-md)",
      lg: "var(--screen-lg)",
      xl: "var(--screen-xl)",
    },
    screens: {
      xs: "var(--screen-xs)",
      sm: "var(--screen-sm)",
      md: "var(--screen-md)",
      lg: "var(--screen-lg)",
      xl: "var(--screen-xl)",
    },
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "always-black": {
          DEFAULT: "hsl(var(--always-black))",
          foreground: "hsl(var(--always-black))",
        },
        "always-white": {
          DEFAULT: "hsl(var(--always-white))",
          foreground: "hsl(var(--always-white))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss"), require("autoprefixer")],
};
