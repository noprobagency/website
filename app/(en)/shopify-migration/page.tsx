import type { Metadata } from 'next'

import MigrazioneHero from '@/components/sections/MigrazioneHero'
import MigrazioneProblem from '@/components/sections/MigrazioneProblem'
import MigrazioneSolution from '@/components/sections/MigrazioneSolution'
import MigrazioneSocialProof from '@/components/sections/MigrazioneSocialProof'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import MigrazionePricing from '@/components/sections/MigrazionePricing'
import SearchConsoleCharts from '@/components/sections/SearchConsoleCharts'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/shopify-migration', locale, pageKey: 'migrazioneShopify' })
}

const migrationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify eCommerce Migration',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce migration',
  areaServed: ['IT', 'EU', 'US'],
  description:
    'A 4-month journey to migrate your eCommerce to Shopify without losing sales or customers. 1:1 redirects, no site interruption, server-side tracking, design and SEO.',
  offers: {
    '@type': 'Offer',
    price: '1350',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '1350',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
    },
  },
}

export default function ShopifyMigrationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationJsonLd) }}
      />
      <MigrazioneHero locale={locale} />
      <MigrazioneProblem locale={locale} />
      <MigrazioneSolution locale={locale} />
      <MigrazioneSocialProof locale={locale} />
      <MigrazioneProcess locale={locale} />
      <MigrazionePricing locale={locale} />
      <SearchConsoleCharts locale={locale} />
      <MigrazioneFAQ locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
