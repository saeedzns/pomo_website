import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://pomodorum.example",
  integrations: [tailwind()],
});
