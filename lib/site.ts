import type { Metadata } from 'next'

import { absoluteUrl } from '@/lib/utils'

export const siteConfig = {
  name: 'noprob agency™',
  companyName: 'NOPROB AGENCY LLC',
  url: 'https://noprob.agency',
  version: 'v0.5.3',
  ga4Id: 'G-JD0T1HWWWV',
  metaPixelId: '1174058738142037',
  defaultTitle: 'noprob agency™ – Your eCommerce Technical & Growth Partner',
  description:
    'Technical partner that makes eCommerce simple. A 7/7 team of developers, designers, and strategists combining code, data, and creativity to help Shopify and WooCommerce brands scale without stress.',
  keywords: [
    'ecommerce agency',
    'shopify development',
    'woocommerce',
    'ecommerce partner',
    'technical ecommerce partner',
    'growth partner',
    'fashion ecommerce',
    'supplements ecommerce',
    'dtc ecommerce',
  ],
} as const

export const siteAssets = {
  logo: '/images/originals/AY6rjj8ZVUbD4McJGHwEF1x9L08.svg',
  heroBlob: '/images/originals/sTppB2IVM0xacjy14dgUESIfmsE.png',
  heroBlobMobile: '/images/originals/922LPrLT3JS7JXQbJxraBeoo8I.png',
  heroChart: '/images/originals/HijMCqLZAt650eXmAVvyaUjhCCs.svg',
  trustpilotStars: '/images/originals/sbAOhlGVa6UCdyPY5GQVN73U.svg',
  trustpilotWordmark: '/images/originals/EHy98QvA9z6tzzIid9n0yt58zU.svg',
  heroAntonio: '/images/originals/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png',
  heroPartners: [
    '/images/originals/05zntouhHCNSOngYM6ybfvl2s.svg',
    '/images/originals/agPK5mb4ANTVoDB7vttXGc5Ink.webp',
    '/images/originals/pNYebJJ9UvO2bOfzWB6XHxacQs.svg',
    '/images/originals/SOy6gjI9zh07NZMqw435UMgZbWM.svg',
    '/images/originals/PShAQlL3z50doCD4JeSedvGws3o.png',
  ],
} as const

type MetadataOptions = {
  title?: string
  description?: string
  path?: string
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const canonical = absoluteUrl(path)
  const resolvedTitle = title || siteConfig.defaultTitle

  return {
    title: resolvedTitle,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_US',
      title: resolvedTitle,
      description,
      images: [
        {
          url: absoluteUrl('/og-image.svg'),
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [absoluteUrl('/og-image.svg')],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  legalName: siteConfig.companyName,
  url: siteConfig.url,
  logo: absoluteUrl(siteAssets.logo),
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St Ste R',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  sameAs: ['https://www.trustpilot.com/review/noprob.agency'],
} as const
