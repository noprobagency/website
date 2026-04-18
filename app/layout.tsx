import type { Metadata, Viewport } from 'next'
import BaseLayout from '@/components/layout/BaseLayout'
import { siteConfig } from '@/lib/site'
import '@/app/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

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
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <BaseLayout locale="en">
          {children}
        </BaseLayout>
      </body>
    </html>
  )
}
