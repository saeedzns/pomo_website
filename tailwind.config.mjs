/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tomato: "#c62520",
        basil: "#89b9a3",
        olive: "#33463c",
        cream: "#f3eadb",
        paper: "#fffaf4",
        ink: "#201b17",
        mint: "#a9cbb9",
        wood: "#d9c5aa",
        tile: "#b91f1c",
        frame: "#151311",
        steel: "#74736e",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgb(32 27 23 / 0.12)",
      },
    },
  },
  plugins: [],
};
