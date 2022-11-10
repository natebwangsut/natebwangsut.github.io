import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [solid(), svelte()],
});
