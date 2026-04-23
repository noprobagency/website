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

export default function EcommerceRebuildPage() {
  return (
    <main>
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
