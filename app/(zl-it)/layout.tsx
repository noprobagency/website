import type { Metadata, Viewport } from 'next'

import ZeroLossRootLayout from '@/components/sections/zero-loss/ZeroLossRootLayout'
import { siteConfig } from '@/lib/site'
import { zeroLossViewport } from '@/lib/zero-loss/metadata'

/** Root layout of the IT Zero-Loss Migration Sprint landing (no site navbar). */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
}

export const viewport: Viewport = zeroLossViewport

export default function ZeroLossItLayout({ children }: { children: React.ReactNode }) {
  return <ZeroLossRootLayout locale="it">{children}</ZeroLossRootLayout>
}
