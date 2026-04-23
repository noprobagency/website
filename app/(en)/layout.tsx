import type { Metadata, Viewport } from 'next'
import BaseLayout from '@/components/layout/BaseLayout'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { siteConfig, organizationJsonLd } from '@/lib/site'
import '@/app/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: '%s | noprob agency™',
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0f0f0',
}

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <BaseLayout locale="en">
          {children}
        </BaseLayout>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
