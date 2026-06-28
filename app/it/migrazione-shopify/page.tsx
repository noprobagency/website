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

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/migrazione-shopify', locale, pageKey: 'migrazioneShopify' })
}

const migrazioneJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Migrazione eCommerce su Shopify',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce migration',
  areaServed: ['IT', 'EU'],
  description:
    'Percorso di 4 mesi per migrare un eCommerce su Shopify senza perdere vendite, clienti o posizioni su Google. Redirect 1:1, zero downtime, tracciamento server-side, design e SEO.',
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

export default function MigrazioneShopifyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrazioneJsonLd) }}
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
