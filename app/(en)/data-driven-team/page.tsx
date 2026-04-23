import type { Metadata } from 'next'

import DataDrivenTeamHero from '@/components/sections/DataDrivenTeamHero'
import DataDrivenTeamProblem from '@/components/sections/DataDrivenTeamProblem'
import DataDrivenTeamSolution from '@/components/sections/DataDrivenTeamSolution'
import EcommerceRebuildProcess from '@/components/sections/EcommerceRebuildProcess'
import EcommerceRebuildWhyUs from '@/components/sections/EcommerceRebuildWhyUs'
import CaseStudy from '@/components/sections/CaseStudy'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/data-driven-team', locale: 'en', pageKey: 'dataDrivenTeam' })
}

const dataDrivenTeamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data-Driven Team — Dedicated eCommerce Retainer',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'eCommerce management retainer',
  areaServed: ['IT', 'EU', 'US'],
  offers: {
    '@type': 'Offer',
    price: '1495',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '1495',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
    },
  },
}

export default function DataDrivenTeamPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataDrivenTeamJsonLd) }}
      />
      <DataDrivenTeamHero />
      <DataDrivenTeamProblem />
      <DataDrivenTeamSolution />
      <EcommerceRebuildProcess />
      <EcommerceRebuildWhyUs />
      <CaseStudy noPadding={true} />
      <Pricing teamOnly={true} />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
