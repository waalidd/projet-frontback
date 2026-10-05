import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Les appels à /api sont redirigés vers le backend Express
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
