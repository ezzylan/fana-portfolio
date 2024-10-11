import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://farhanah-izzati.netlify.app",
  integrations: [sitemap(), tailwind(), icon()],
});
