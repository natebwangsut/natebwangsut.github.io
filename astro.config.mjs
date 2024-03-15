import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
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
        "",
        "",
      ],
    }),
    react(),
    UnoCSS({ injectReset: true }),
    icon()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify(),
});
