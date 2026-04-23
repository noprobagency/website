type EventName = 'PageView' | 'Lead' | 'ViewContent' | 'Contact'

type EventParams = {
  content_category?: string
  content_name?: string
  value?: number
  currency?: string
  page_path?: string
  [key: string]: unknown
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export async function trackEvent(name: EventName, params: EventParams = {}) {
  const eventId = crypto.randomUUID()
  const timestamp = Math.floor(Date.now() / 1000)

  // 1. Fire client-side Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, params, { eventID: eventId })
  }

  // 2. Fire GA4 event (browser only)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name.toLowerCase(), params)
  }

  // 3. Fire server-side CAPI (deduplication via eventId)
  try {
    await fetch('/api/meta-capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: name,
        eventId,
        timestamp,
        customData: params,
        sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
      }),
    })
  } catch (err) {
    console.error('[CAPI] fetch error:', err)
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', { page_path: url })
  }
  trackEvent('PageView', { page_path: url })
}

export function trackContactClick(location: string) {
  trackEvent('Lead', { content_category: 'contact', content_name: location })
}

export function trackPricingView() {
  trackEvent('ViewContent', { content_category: 'pricing' })
}

export function trackCaseStudyView(slug: string) {
  trackEvent('ViewContent', { content_category: 'use-case', content_name: slug })
}
