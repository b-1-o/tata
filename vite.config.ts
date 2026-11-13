import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tata/",
  build: { assetsInlineLimit: 4096, target: "es2022" },
});
