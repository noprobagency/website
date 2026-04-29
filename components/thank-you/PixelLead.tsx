'use client'

import { useEffect } from 'react'

/**
 * Fires a single Meta Pixel `Lead` event on mount. Used by the thank-you /
 * grazie pages, which are landed on only after a successful contact form
 * submission. Browser-only — no server-side CAPI for this event by design.
 */
export function PixelLead() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead')
    }
  }, [])
  return null
}
