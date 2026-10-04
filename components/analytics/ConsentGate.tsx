'use client'

import { useEffect, useState } from 'react'

import { CONSENT_UPDATE_EVENT, hasConsent, type ConsentCategory } from '@/lib/consent'

/**
 * Renders its children only once the visitor has accepted the given category
 * in the cookie banner (`components/tracking/ConsentBanner.tsx`).
 */
export function ConsentGate({ category, children }: { category: ConsentCategory; children: React.ReactNode }) {
  const [consentGranted, setConsentGranted] = useState(false)

  useEffect(() => {
    const syncConsent = () => setConsentGranted(hasConsent(category))

    syncConsent()
    window.addEventListener(CONSENT_UPDATE_EVENT, syncConsent)

    return () => window.removeEventListener(CONSENT_UPDATE_EVENT, syncConsent)
  }, [category])

  if (!consentGranted) return null
  return <>{children}</>
}
