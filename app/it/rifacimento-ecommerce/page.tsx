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
  return buildMetadata({ path: '/it/rifacimento-ecommerce', locale: 'it', pageKey: 'ecommerceRebuild' })
}

export default function ItalianEcommerceRebuildPage() {
  const locale = 'it'
  return (
    <main>
      <EcommerceRebuildHero locale={locale} />
      <EcommerceRebuildProblem locale={locale} />
      <EcommerceRebuildSolution locale={locale} />
      <EcommerceRebuildProcess locale={locale} />
      <EcommerceRebuildWhyUs locale={locale} />
      <CaseStudy locale={locale} noPadding={true} />
      <Pricing locale={locale} rebuildOnly={true} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
