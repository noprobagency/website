import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import 'vanilla-cookieconsent/dist/cookieconsent.css'

import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import GoogleAnalytics from '@/components/tracking/GoogleAnalytics'
import MetaPixel from '@/components/tracking/MetaPixel'
import { organizationJsonLd, siteConfig } from '@/lib/site'
import Preloader from '@/components/ui/Preloader'
import StickyContact from '@/components/ui/StickyContact'
import '@/app/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: '%s | noprob agency™',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: ['/og-image.svg'],
  },
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
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      it: `${siteConfig.url}/it`,
    },
  },
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-np-bg text-np-text font-sans antialiased">
        <JsonLd data={organizationJsonLd} />
        {/* <Preloader /> */}
        <GoogleAnalytics />
        <MetaPixel />
        <Navbar />
        <main>{children}</main>
        <StickyContact />
        <ConsentBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
