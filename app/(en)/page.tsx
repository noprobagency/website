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
import { buildMetadata, siteConfig } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    path: '/',
    locale: 'en',
  })
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResultsCarousel />
      <ProblemSection />
      <SolutionSection />
      <CaseStudy />
      <Pricing />
      <LogoWall />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}
