import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",
        secondary: "#D4B499",
        accent: "#E67E22",
        "background-light": "#FDFBF7",
        "background-dark": "#1C1917",
        "surface-light": "#FFFFFF",
        "surface-dark": "#292524",
        "text-light": "#4A4036",
        "text-dark": "#E7E5E4",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': "1rem",
        '2xl': "1.5rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(139, 94, 60, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
