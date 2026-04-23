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
      'Learn more about the monthly retainers and operating model behind the Data-Driven Team offer.',
    path: '/data-driven-team',
    locale: 'en',
  })
}

export default function DataDrivenTeamPage() {
  return (
    <main>
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
