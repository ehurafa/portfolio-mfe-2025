const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export function initGA(): void {
  if (!GA_MEASUREMENT_ID) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  // SPA: page_view is sent manually per route change, not on config.
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageview(path: string): void {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', { page_path: path })
}
