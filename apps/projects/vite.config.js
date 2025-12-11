import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'projects',
      filename: 'remoteEntry.js',
      exposes: {
        './TodoApp': './src/projects/todo-app/App.tsx',
        './WeatherApp': './src/projects/weather/src/App.jsx',
        './TimerApp': './src/projects/timer/src/App.jsx'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
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
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
