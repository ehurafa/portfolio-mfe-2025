import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Explicitly load env from monorepo root
  const rootDir = resolve(__dirname, '../../')
  const env = loadEnv(mode, rootDir, '')

  const unsplashKey = (env.VITE_UNSPLASH_API_KEY || '').trim()

  return {
    base: '/micro/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_UNSPLASH_API_KEY': JSON.stringify(unsplashKey)
    },
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
  }
})
