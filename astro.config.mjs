import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  trailingSlash: "never",
  integrations: [solid(), svelte(), mdx(), sitemap()],
  image: {
    // Example: Enable the Sharp-based image service
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
