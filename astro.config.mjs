import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  trailingSlash: "never",
  integrations: [
    solid({
      include: ["**/solid/*"],
    }),
    // TODO: Move svelte component to /svelte folder
    // svelte({
    //   include: ["**/svelte/*"],
    // }),
    svelte(),
  ],
  image: {
    // Example: Enable the Sharp-based image service
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
