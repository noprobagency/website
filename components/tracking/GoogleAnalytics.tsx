'use client'

import { useEffect, useState } from 'react'
import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

import { CONSENT_UPDATE_EVENT, hasConsent } from '@/lib/consent'
import { siteConfig } from '@/lib/site'

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID || siteConfig.ga4Id
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => setEnabled(hasConsent('analytics'))

    syncConsent()
    window.addEventListener(CONSENT_UPDATE_EVENT, syncConsent)

    return () => window.removeEventListener(CONSENT_UPDATE_EVENT, syncConsent)
  }, [])

  if (!gaId || !enabled) {
    return null
  }

  return <NextGoogleAnalytics gaId={gaId} />
}
