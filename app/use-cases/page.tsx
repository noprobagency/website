import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Use Cases',
    description:
      'Explore the operating contexts, category fit, and growth scenarios noprob agency is designed for.',
    path: '/use-cases',
  })
}

export default function UseCasesPage() {
  return (
    <PageIntro
      eyebrow="Use Case"
      title="Execution models for serious Shopify and WooCommerce brands."
      description="The detailed use-case breakdown is queued for the following iteration. The route and metadata are already in place so the information architecture is stable from day one."
    />
  )
}
