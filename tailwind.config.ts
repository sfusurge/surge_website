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
        "sunken": "rgba(var(--sunken), <alpha-value>)",
        "overlay": "rgba(var(--overlay), <alpha-value>)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "brand-primary": "var(--brand-primary)",
        "brand-primary-hover": "var(--brand-primary-hover)",
        "brand-primary-pressed": "var(--brand-primary-pressed)",      },
        
        fontSize:{
          xs:['0.75rem',{lineHeight:"100%", letterSpacing: "0.0rem"}],
          sm:['0.875rem',{lineHeight:"100%", letterSpacing: "0rem"}],
          base:['1.125rem',{lineHeight:"150%", letterSpacing: "0rem"}],
          lg:['1.25rem',{lineHeight:"100%", letterSpacing: "0rem"}],
          xl:['1.5625rem',{lineHeight:"125%", letterSpacing: "0rem"}],
          "2xl":['2rem',{lineHeight:"125%", letterSpacing: "0rem"}],
          "3xl":['2.5rem',{lineHeight:"125%", letterSpacing: "0rem"}],
          "4xl":['3.25rem',{lineHeight:"112.5%", letterSpacing: "0rem"}],


        }
    },
    fontFamily:{
      GeistSans:['var(--font-geist-sans)'],
      GeistMono:['var(--font-geist-mono)'],

    }
  },
  plugins: [],
};
export default config;
