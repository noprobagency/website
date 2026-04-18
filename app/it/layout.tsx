import type { Metadata } from 'next'
import BaseLayout from '@/components/layout/BaseLayout'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Il tuo Partner eCommerce. Dal Build alla Crescita.',
    template: '%s | noprob agency™',
  },
  description:
    'Partner eCommerce premium specializzato in sviluppo, rebuild e crescita. Un unico team tecnico per Shopify e WooCommerce.',
  openGraph: { locale: 'it_IT', siteName: siteConfig.name },
  alternates: {
    canonical: `${siteConfig.url}/it`,
    languages: { en: siteConfig.url, it: `${siteConfig.url}/it` },
  },
}

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout locale="it">{children}</BaseLayout>
}
