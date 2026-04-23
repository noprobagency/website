'use client'

import { useEffect, useState } from 'react'

export function ConsentGate({ children }: { children: React.ReactNode }) {
  const [consentGranted, setConsentGranted] = useState(true) // TEMP: pass-through until Iubenda is installed

  useEffect(() => {
    // TODO when Iubenda Consent Solution is installed:
    // 1. Change default state above to `false`
    // 2. Listen to window._iub callbacks and flip consentGranted based on user choice
    // 3. Implement Consent Mode v2: default denied, update on granted
    // For now: pass-through mode (GA4 + Pixel always load)
  }, [])

  if (!consentGranted) return null
  return <>{children}</>
}
