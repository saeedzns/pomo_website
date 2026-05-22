/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        tomato: "#b9362b",
        basil: "#2f5d3a",
        olive: "#333d2d",
        cream: "#fbf3e4",
        paper: "#fffaf1",
        ink: "#241f1c",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgb(36 31 28 / 0.10)",
      },
    },
  },
  plugins: [],
};
