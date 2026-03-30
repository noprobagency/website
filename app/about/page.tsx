import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'About',
    description:
      'Meet the technical and growth partner behind noprob agency and the operating model we bring to eCommerce brands.',
    path: '/about',
  })
}

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="About"
      title="A technical partner built for long-term eCommerce growth."
      description="noprob agency works where development, data, and strategy need to move as one system. This page is scaffolded for the next session and already ships with complete metadata."
    />
  )
}
