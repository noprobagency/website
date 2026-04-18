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
  return buildMetadata({
    title: 'Data-Driven Team',
    description:
      'Il team tecnico per la crescita che ti aiuta a scalare il tuo eCommerce senza il caos.',
    path: '/it/data-driven-team',
  })
}

export default function ItalianDataDrivenTeamPage() {
  const locale = 'it'
  return (
    <main>
      <DataDrivenTeamHero locale={locale} />
      <DataDrivenTeamProblem locale={locale} />
      <DataDrivenTeamSolution locale={locale} />
      <EcommerceRebuildProcess locale={locale} />
      <EcommerceRebuildWhyUs locale={locale} />
      <CaseStudy locale={locale} noPadding={true} />
      <Pricing locale={locale} teamOnly={true} />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
