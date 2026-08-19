/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WP_API_BASE: string
  readonly VITE_WP_BASE: string
  readonly VITE_WP_POSTS_PATH: string
  readonly VITE_WP_ACF_POSTS_PATH: string
  readonly VITE_GA_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
