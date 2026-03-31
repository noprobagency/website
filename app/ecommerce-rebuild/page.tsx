import type { Metadata } from 'next'

import LegacyStaticPage from '@/components/legacy/LegacyStaticPage'
import { buildLegacyMetadata } from '@/lib/legacy-site'

export async function generateMetadata(): Promise<Metadata> {
  return buildLegacyMetadata('ecommerceRebuild')
}

export default function EcommerceRebuildPage() {
  return <LegacyStaticPage pageKey="ecommerceRebuild" />
}
