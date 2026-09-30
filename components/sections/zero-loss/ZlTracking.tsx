'use client'

import { useEffect } from 'react'

import type { Locale } from '@/lib/i18n'
import { captureUtm, zlTrack } from '@/lib/zero-loss/tracking'

/** Fires `lp_view` once per page load and stores utm_* for the form payload. */
export default function ZlTracking({ locale }: { locale: Locale }) {
  useEffect(() => {
    captureUtm()
    zlTrack({ event: 'lp_view', page: 'zero-loss-migration', locale })
  }, [locale])

  return null
}
