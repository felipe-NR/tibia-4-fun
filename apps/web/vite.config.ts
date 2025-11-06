import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3001,
  },
  plugins: [react()],
  base: "/tibia-4-fun/",
});
