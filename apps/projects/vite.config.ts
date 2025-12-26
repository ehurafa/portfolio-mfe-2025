import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Explicitly load env from monorepo root
  const rootDir = resolve(__dirname, '../../')
  const env = loadEnv(mode, rootDir, '')

  return {
    base: '/micro/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_UNSPLASH_API_KEY': JSON.stringify(env.VITE_UNSPLASH_API_KEY)
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
