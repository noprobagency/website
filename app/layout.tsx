import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '@fontsource/source-serif-4/600-italic.css'
import '@fontsource/fragment-mono/400.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import JsonLd from '@/components/seo/JsonLd'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import GoogleAnalytics from '@/components/tracking/GoogleAnalytics'
import MetaPixel from '@/components/tracking/MetaPixel'
import { organizationJsonLd, siteConfig } from '@/lib/site'
import '@/styles/globals.css'

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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <JsonLd data={organizationJsonLd} />
        <GoogleAnalytics />
        <MetaPixel />
        <Navbar />
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ConsentBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
