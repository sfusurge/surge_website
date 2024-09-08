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
        sunken: "rgb(var(--sunken) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        "raised-hover": "rgb(var(--raised-hover) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-brand-primary": "rgb(var(--text-brand-primary) / <alpha-value>)",
        "brand-primary": "rgb(var(--brand-primary) / <alpha-value>)",
        "brand-primary-hover":
          "rgb(var(--brand-primary-hover) / <alpha-value>)",
        "brand-primary-pressed":
          "rgb(var(--brand-primary-pressed) / <alpha-value>)",
        "border-tertiary": "var(--border-tertiary)",
      },
      backgroundColor: {
        "surface": "rgb(var(--surface) / <alpha-value>)"
      },
      borderRadius: {
        'custom-radius': 'var(--Spacing-8, 32px)',
      },
      gap: {
        'custom-gap': 'var(--Radius-lg, 8px)',
      },
      fontSize: {
        xs: [
          "0.75rem",
          { lineHeight: "100%", letterSpacing: "0rem" },
        ] /* 12px */,
        s: [
          "0.875rem",
          { lineHeight: "100%", letterSpacing: "0rem" },
        ] /* 14px */,
        base: [
          "1.125rem",
          { lineHeight: "150%", letterSpacing: "0rem" },
        ] /* 18px */,
        lg: [
          "1.25rem",
          { lineHeight: "100%", letterSpacing: "0rem" },
        ] /* 20px */,
        xl: [
          "1.5625rem",
          { lineHeight: "125%", letterSpacing: "0rem" },
        ] /* 25px */,
        "2xl": [
          "2rem",
          { lineHeight: "125%", letterSpacing: "0rem" },
        ] /* 32px */,
        "3xl": [
          "2.5rem",
          { lineHeight: "125%", letterSpacing: "0rem" },
        ] /* 40px */,
        "4xl": [
          "3.25rem",
          { lineHeight: "112.5%", letterSpacing: "0rem" },
        ] /* 52px */,
      },
      screens: {
        xs: "430px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      GeistSans: ["var(--font-geist-sans)"],
      GeistMono: ["var(--font-geist-mono)"],
    },
  },
  plugins: [],
};
export default config;
