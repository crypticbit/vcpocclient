import { defineNuxtConfig } from "nuxt";
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
  //   css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  //   server: {
  //     https: {
  //       key: fs.readFileSync(path.resolve(__dirname, "server.key")),
  //       cert: fs.readFileSync(path.resolve(__dirname, "server.crt")),
  //     },
  //   },
});
