import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

export default defineConfig({
  site: isGitHubPages ? "https://saeedzns.github.io" : "https://pomodorum.example",
  base: isGitHubPages ? "/pomo_website" : "/",
  integrations: [tailwind()],
});
