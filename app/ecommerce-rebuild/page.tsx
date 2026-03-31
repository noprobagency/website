import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'eCommerce Rebuild',
    description: 'Understand the scope, pace, and technical outcomes of the eCommerce Rebuild offer.',
    path: '/ecommerce-rebuild',
  })
}

export default function EcommerceRebuildPage() {
  return (
    <PageIntro
      eyebrow="Plan"
      title="eCommerce Rebuild."
      description="This sales page is now served as a pure React route and is ready for the next implementation pass with the full long-form content."
    />
  )
}
