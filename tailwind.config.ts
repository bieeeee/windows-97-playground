import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PSN: ['PSN', 'sans-serif'],
      },
      colors: {
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)'
        },
        blue: {
          300: 'var(--dark-navy)'
        }
      },
      spacing: {
        '1.5': '.3125rem'
      }
    },
  },
  plugins: [],
};
export default config;
