import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'eCommerce Rebuild',
    description:
      'Understand the scope, pace, and technical outcomes of the eCommerce Rebuild offer.',
    path: '/ecommerce-rebuild',
  })
}

export default function EcommerceRebuildPage() {
  return (
    <PageIntro
      eyebrow="Plan"
      title="eCommerce Rebuild."
      description="This route is prepared for the full sales page that will explain the rebuild offer end to end. Metadata, navigation, and link targets are already wired."
    />
  )
}
