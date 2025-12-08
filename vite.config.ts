import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "./" // important for FTP/static hosting so assets resolve from relative path
});