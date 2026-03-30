import Image from 'next/image'
import Link from 'next/link'

import { siteAssets, siteConfig } from '@/lib/site'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Use Case', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="section-divider bg-bg-primary">
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="max-w-xl">
            <Image
              src={siteAssets.logo}
              alt="noprob agency™"
              width={541}
              height={244}
              className="h-9 w-auto"
            />
            <div className="mt-8">
              <p className="text-3xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
                Consistency.
              </p>
              <p className="mt-1 text-3xl font-semibold italic tracking-[-0.06em] text-text-primary md:text-5xl">
                That&apos;s noprob agency
              </p>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-text-secondary">
              We rebuild your store from the ground up and offer a dedicated team in Development,
              Marketing, and Strategy, available together or separately based on your needs.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">Navigation</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">Legal</p>
            <div className="mt-5 space-y-2 text-sm text-text-secondary">
              <p>NOPROB AGENCY LLC® EIN: 365136989</p>
              <p>30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-text-muted">
              <Link
                href="https://www.iubenda.com/privacy-policy/22342791"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.iubenda.com/privacy-policy/22342791/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} noprob agency™. All rights reserved.</p>
          <p className="text-[11px] uppercase tracking-[0.12em] text-text-muted/90">
            Version {siteConfig.version}
          </p>
        </div>
      </div>
    </footer>
  )
}
