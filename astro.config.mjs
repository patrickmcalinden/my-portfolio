import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: 'https://patrickmcalinden.com',
  integrations: [tailwind(), sitemap()]
});
