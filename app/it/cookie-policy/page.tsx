import type { Metadata } from 'next'

import LegalPage from '@/components/sections/legal/LegalPage'
import { getLegalCopy } from '@/lib/i18n/legal'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = getLegalCopy('it').cookie
  return buildMetadata({ ...seo, path: ROUTE_PATHS.cookiePolicy.it, locale: 'it' })
}

export default function ItalianCookiePolicyPage() {
  return <LegalPage locale="it" doc="cookie" />
}
