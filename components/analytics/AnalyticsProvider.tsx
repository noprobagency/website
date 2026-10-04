'use client'

import { Suspense } from 'react'
import { GoogleAnalytics } from './GoogleAnalytics'
import { MetaPixel } from './MetaPixel'
import { ConsentGate } from './ConsentGate'
import { RouteChangeTracker } from './RouteChangeTracker'
import { ClickTrackingDelegator } from './ClickTrackingDelegator'

export function AnalyticsProvider() {
  return (
    <>
      <ConsentGate category="analytics">
        <GoogleAnalytics />
      </ConsentGate>
      <ConsentGate category="marketing">
        <MetaPixel />
      </ConsentGate>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
      <ClickTrackingDelegator />
    </>
  )
}
