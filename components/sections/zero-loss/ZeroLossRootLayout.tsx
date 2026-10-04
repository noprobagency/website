import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import { organizationJsonLd } from '@/lib/site'
import type { Locale } from '@/lib/i18n'
import '@/app/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

/**
 * Root layout shared by app/(zl-en) and app/(zl-it). Like the (funnel)
 * layout: no global navbar, sticky contact pill or preloader. The landing
 * renders its own nav (ZlNav) and the minimal footer.
 */
export default function ZeroLossRootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <ConsentBanner locale={locale} />
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  )
}
