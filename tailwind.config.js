/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        // Set Playfair as the default font for font-sans (i.e., entire site unless overridden)
        sans: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"], // optional named override
      },
    },
  },
  plugins: [],
};
