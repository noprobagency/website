import type { Metadata } from 'next'

import LegalPage from '@/components/sections/legal/LegalPage'
import { getLegalCopy } from '@/lib/i18n/legal'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = getLegalCopy('en').privacy
  return buildMetadata({ ...seo, path: ROUTE_PATHS.privacyPolicy.en, locale: 'en' })
}

export default function PrivacyPolicyPage() {
  return <LegalPage locale="en" doc="privacy" />
}
