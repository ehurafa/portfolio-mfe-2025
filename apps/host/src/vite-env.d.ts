// src/vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="@originjs/vite-plugin-federation/types" />

interface ImportMetaEnv {
  readonly VITE_WP_API_BASE: string
  readonly VITE_WP_BASE: string
  readonly VITE_WP_POSTS_PATH: string
  readonly VITE_WP_ACF_POSTS_PATH: string
  readonly VITE_PROJECTS_URL: string
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_GITHUB_USERNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Module Federation types for remote MFEs
declare module 'projects/TodoApp' {
  const TodoApp: React.ComponentType
  export default TodoApp
}

declare module 'projects/WeatherApp' {
  const WeatherApp: React.ComponentType
  export default WeatherApp
}

declare module 'projects/TimerApp' {
  const TimerApp: React.ComponentType
  export default TimerApp
}

// Augment Window interface for Event Bus
declare global {
  interface Window {
    __eventBus__?: any
  }
}

export {}
