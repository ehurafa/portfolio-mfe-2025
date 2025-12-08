/// <reference types="vite/client" />

// Allow importing .jsx and .js files in TypeScript
declare module '*.jsx' {
  const content: React.ComponentType<unknown>
  export default content
}

declare module '*.js' {
  const content: unknown
  export default content
}
