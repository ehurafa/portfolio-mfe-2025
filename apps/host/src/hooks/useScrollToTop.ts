import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Document scroll persists across routes; reset it on every navigation
export function useScrollToTop() {
  const { pathname } = useLocation()

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not a value used inside
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
