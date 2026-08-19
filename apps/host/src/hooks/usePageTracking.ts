import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageview } from '../utils/analytics'

export function usePageTracking(): void {
  const location = useLocation()

  useEffect(() => {
    trackPageview(location.pathname + location.search)
  }, [location])
}
