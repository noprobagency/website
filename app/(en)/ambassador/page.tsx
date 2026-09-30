import type { Metadata } from 'next'

import AmbassadorPlaybook from '@/components/sections/ambassador/AmbassadorPlaybook'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { getAmbassadorCopy } from '@/lib/i18n/ambassador'

const locale = 'en' as const

// Private playbook shared by hand: noindex and not listed in the sitemap.
export async function generateMetadata(): Promise<Metadata> {
  const d = getAmbassadorCopy(locale)
  return buildMetadata({
    path: '/ambassador',
    locale,
    title: d.metaTitle,
    description: d.metaDescription,
    noIndex: true,
  })
}

export default function AmbassadorEnPage() {
  return (
    <>
      <AmbassadorPlaybook locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
