import type { Metadata } from 'next'

import PageIntro from '@/components/sections/PageIntro'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'IT',
    description:
      'Italian-language experience scaffold for noprob agency.',
    path: '/it',
  })
}

export default function ItalianPage() {
  return (
    <PageIntro
      eyebrow="Italian"
      title="Italian version in progress."
      description="The `/it` route is already reserved and linked from the navigation so the multilingual structure is ready for the next iteration."
    />
  )
}
