import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 8000,
    port: 8080,
  },
  optimizeDeps: {
    exclude: ["@react-three/drei, @react-three/fiber"],
  },
});
