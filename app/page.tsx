import type { Metadata } from 'next'

import CaseStudies from '@/components/sections/CaseStudies'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Hero from '@/components/sections/Hero'
import LogoWall from '@/components/sections/LogoWall'
import Pricing from '@/components/sections/Pricing'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import Testimonials from '@/components/sections/Testimonials'
import { buildMetadata, siteConfig } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: siteConfig.defaultTitle,
    description:
      'We rebuild your store from the ground up and offer a dedicated team in Development, Marketing, and Strategy, available together or separately based on your needs.',
    path: '/',
  })
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <LogoWall />
      <FAQ />
      <FinalCTA />
    </>
  )
}
