import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import react from "@astrojs/react";
import { remarkReadingTime } from "./src/lib/remark-reading-time";

// https://astro.build/config
export default defineConfig({
  site: "https://natebwangsut.github.io",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://natebwangsut.github.io/sitemap-index.xml",
        "https://natebwangsut.github.io/sitemap-0.xml",
      ],
    }),
    react(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  image: {
    // Example: Enable the Sharp-based image service
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
