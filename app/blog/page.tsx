import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Blog',
    description:
      'Technical, data, and growth insights for Shopify and WooCommerce operators.',
    path: '/blog',
  })
}

export default function BlogPage() {
  return (
    <PageIntro
      eyebrow="Blog"
      title="Technical and growth notes for eCommerce operators."
      description="Editorial content is not part of this first homepage sprint, but the blog route is already configured with production-ready metadata and design scaffolding."
    />
  )
}
