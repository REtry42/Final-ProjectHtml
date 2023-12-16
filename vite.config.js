// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        classes: resolve(__dirname, "Classes.html"),
        how2play: resolve(__dirname, "How2Play.html"),
      },
    },
  },
});
