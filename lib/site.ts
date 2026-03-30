import type { Metadata } from 'next'

import { absoluteUrl } from '@/lib/utils'

export const siteConfig = {
  name: 'noprob agency™',
  companyName: 'NOPROB AGENCY LLC',
  url: 'https://noprob.agency',
  defaultTitle: 'noprob agency™ – Your eCommerce Technical & Growth Partner',
  description:
    'Technical partner that makes eCommerce simple. A 7/7 team of developers, designers, and strategists combining code, data, and creativity to help Shopify and WooCommerce brands scale without stress.',
  keywords: [
    'ecommerce agency',
    'shopify development',
    'woocommerce development',
    'technical ecommerce partner',
    'growth partner',
    'fashion ecommerce',
    'supplements ecommerce',
    'dtc ecommerce',
  ],
} as const

export const liveAssets = {
  logo: 'https://framerusercontent.com/images/AY6rjj8ZVUbD4McJGHwEF1x9L08.svg?width=541&height=244',
  heroBackdrop:
    'https://framerusercontent.com/images/sTppB2IVM0xacjy14dgUESIfmsE.png?width=2912&height=1632',
  heroBackdropMobile:
    'https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png?width=3072&height=2048',
  caseStudyCover:
    'https://framerusercontent.com/images/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg?width=2668&height=4000',
  caseStudyBrand: 'https://framerusercontent.com/images/T1UW1kS41RaUauBrmK5dUj0txA.png?width=500&height=108',
  testimonialAntonio:
    'https://framerusercontent.com/images/5ZClDWRqPVst2zJqghXyG33cMY0.png?width=73&height=73',
  testimonialCamilla:
    'https://framerusercontent.com/images/btYlkzRXpOBFU8seMDbnX8BY8.jpeg?width=200&height=200',
  trustpilotBadge:
    'https://framerusercontent.com/images/sbAOhlGVa6UCdyPY5GQVN73U.svg?width=1132&height=278',
  logoWall: [
    'https://framerusercontent.com/images/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg?width=71&height=61',
    'https://framerusercontent.com/images/N0Tx01aMkN7R9VRqxvyyVyhYwQk.png?width=188&height=87',
    'https://framerusercontent.com/images/vN14wZ29u2zUpcqrMSGkycbAUf0.svg?width=165&height=32',
    'https://framerusercontent.com/images/TkZPz7oSBvfmLnhfuoopRtZMGOg.svg?width=363&height=52',
    'https://framerusercontent.com/images/4WXTDogs69o24LfYlTlhkJwFNis.svg?width=169&height=70',
    'https://framerusercontent.com/images/dKDeBQLhklB2IlsixCrTFByIQ1w.svg?width=146&height=52',
    'https://framerusercontent.com/images/qwWohvBrgJlSHfTWtvnnrKMguM.svg?width=188&height=68',
    'https://framerusercontent.com/images/HFB669NKhBu4jn7AhQ5uvYL0cY.svg?width=327&height=60',
    'https://framerusercontent.com/images/43oBOi4PKxtyVmYCQkDgPI.svg?width=418&height=118',
    'https://framerusercontent.com/images/SewUzXcHAaqioXr7g1lRajka5Mc.svg?width=162&height=28',
    'https://framerusercontent.com/images/HvA5aLVjEBt6fJXZIKt8YOmWX30.svg?width=765&height=361',
    'https://framerusercontent.com/images/8occchv7EZ1XL94VC9bEoysJDPU.svg?width=584&height=431',
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
  logo: absoluteUrl('/og-image.svg'),
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
