import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
