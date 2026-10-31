import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/star-war-web-studio/",
  plugins: [react(), tailwindcss()],
});