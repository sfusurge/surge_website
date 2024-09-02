import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        geist: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'brand-primary': '#60A5FA',
      },
      backgroundColor: {
        'surface': '#121318',
      },
      borderRadius: {
        'custom-radius': 'var(--Spacing-8, 32px)',
      },
      gap: {
        'custom-gap': 'var(--Radius-lg, 8px)',
      },
    },
  },
  plugins: [],
};
export default config;
