import type { Metadata } from 'next'

import MigrazioneHero from '@/components/sections/MigrazioneHero'
import MigrazioneProblem from '@/components/sections/MigrazioneProblem'
import SearchConsoleCharts from '@/components/sections/SearchConsoleCharts'
import MigrazioneSolution from '@/components/sections/MigrazioneSolution'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import MigrazionePricing from '@/components/sections/MigrazionePricing'
import MigrazioneSocialProof from '@/components/sections/MigrazioneSocialProof'
import MigrazioneRelated from '@/components/sections/MigrazioneRelated'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import MigrazioneForm from '@/components/sections/MigrazioneForm'
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
    price: '1100',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '1100',
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
      <SearchConsoleCharts locale={locale} />
      <MigrazioneSolution locale={locale} />
      <MigrazioneProcess locale={locale} />
      <MigrazionePricing locale={locale} />
      <MigrazioneSocialProof locale={locale} />
      <MigrazioneRelated locale={locale} />
      <MigrazioneFAQ locale={locale} />
      <MigrazioneForm locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
