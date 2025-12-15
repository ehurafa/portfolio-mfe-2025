import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    strictPort: true,
    cors: true
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'esnext'
  }
})
