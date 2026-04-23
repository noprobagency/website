'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics/events'

export function ClickTrackingDelegator() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-tracking]')
      if (!target) return
      const eventName = target.getAttribute('data-tracking') || 'unknown'
      trackEvent('Lead', { content_name: eventName })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
