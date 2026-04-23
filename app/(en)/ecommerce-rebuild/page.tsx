import type { Metadata } from 'next'

import EcommerceRebuildHero from '@/components/sections/EcommerceRebuildHero'
import EcommerceRebuildProblem from '@/components/sections/EcommerceRebuildProblem'
import EcommerceRebuildSolution from '@/components/sections/EcommerceRebuildSolution'
import EcommerceRebuildProcess from '@/components/sections/EcommerceRebuildProcess'
import EcommerceRebuildWhyUs from '@/components/sections/EcommerceRebuildWhyUs'
import CaseStudy from '@/components/sections/CaseStudy'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/ecommerce-rebuild', locale: 'en', pageKey: 'ecommerceRebuild' })
}

const ecommerceRebuildJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'eCommerce Rebuild on Shopify',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce rebuild',
  areaServed: ['IT', 'EU', 'US'],
  offers: {
    '@type': 'Offer',
    price: '5795',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '5795',
      priceCurrency: 'EUR',
      unitText: 'ONE_TIME',
    },
  },
}

export default function EcommerceRebuildPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecommerceRebuildJsonLd) }}
      />
      <EcommerceRebuildHero />
      <EcommerceRebuildProblem />
      <EcommerceRebuildSolution />
      <EcommerceRebuildProcess />
      <EcommerceRebuildWhyUs />
      <CaseStudy noPadding={true} />
      <Pricing rebuildOnly={true} />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
