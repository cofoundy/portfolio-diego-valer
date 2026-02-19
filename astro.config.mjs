// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cofoundy.github.io",
  base: "/portfolio-diego-valer",
  vite: {
    plugins: [tailwindcss()],
  },
});
