import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 3000,      // you can change this to any free port
    strictPort: true // will error instead of switching ports silently
  },
  plugins: [react()],
});
