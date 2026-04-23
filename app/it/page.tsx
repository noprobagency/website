import type { Metadata } from 'next'

import CaseStudy from '@/components/sections/CaseStudy'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoWall from '@/components/sections/LogoWall'
import Pricing from '@/components/sections/Pricing'
import ProblemSection from '@/components/sections/ProblemSection'
import ResultsCarousel from '@/components/sections/ResultsCarousel'
import SolutionSection from '@/components/sections/SolutionSection'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Il tuo Partner eCommerce. Dal Build alla Crescita.',
    description:
      'Partner eCommerce premium specializzato in sviluppo, rebuild e crescita. Un unico team tecnico per Shopify e WooCommerce.',
    path: '/it',
    locale: 'it',
  })
}

export default function ItalianHomePage() {
  return (
    <>
      <Hero locale="it" />
      <ResultsCarousel locale="it" />
      <ProblemSection locale="it" />
      <SolutionSection locale="it" />
      <CaseStudy locale="it" />
      <Pricing locale="it" />
      <LogoWall locale="it" />
      <FAQ locale="it" />
      <CTA locale="it" />
      <Footer locale="it" />
    </>
  )
}
