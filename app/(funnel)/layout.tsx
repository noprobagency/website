import type { Metadata, Viewport } from 'next'

import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import { siteConfig } from '@/lib/site'
import '@/app/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

/**
 * Root layout for paid-traffic application funnels (/af-*). No site navbar,
 * sticky contact or preloader: the page has a single job, the application.
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: { default: 'Candidatura', template: '%s | noprob agency™' },
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/images/favicon-no-prob.svg', media: '(prefers-color-scheme: light)' },
      { url: '/images/favicon-no-prob-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0f0f0',
}

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <ConsentBanner />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  )
}
