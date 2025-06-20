import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Icons({ compiler: "vue3" }), vue()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
