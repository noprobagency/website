import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Data-Driven Team',
    description:
      'Learn more about the monthly retainers and operating model behind the Data-Driven Team offer.',
    path: '/data-driven-team',
  })
}

export default function DataDrivenTeamPage() {
  return (
    <PageIntro
      eyebrow="Plan"
      title="Data-Driven Team."
      description="This offer page is scaffolded and linked from the homepage pricing section. Detailed scope, process, and deliverables can now be added without changing the routing or SEO structure."
    />
  )
}
