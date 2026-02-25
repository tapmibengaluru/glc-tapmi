import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#EC2188",
      },
      fontFamily: {
        arkitype: "var(--font-arkitype)",
        helvetica: "var(--font-helvetica)",
        bungee: "var(--font-bungee)",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      lg2: "1200px",

      xl: "1580px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "2000px",
      // => @media (min-width: 1536px) { ... }
      // "2xxl": "1700px",
      // "3xl": "1920px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "24px",
        lg: "28px",
      },
      screens: {
        xs : "375px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        lg2: "1200px",
        xl: "1280px",
        "2xl": "1300px",
        "3xl": "1450px",
      },
    },
  },
  plugins: [],
};
export default config;
