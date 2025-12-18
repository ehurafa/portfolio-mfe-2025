import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  envDir: '../../',
  server: {
    port: 5000,
    strictPort: true
  },
  preview: {
    port: 5000,
    strictPort: true
  },
  build: {
    target: 'esnext',
    cssCodeSplit: false
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts'
  },
  base: './'
})
