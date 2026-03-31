import Link from 'next/link'

import { siteConfig } from '@/lib/site'

const footerLinks = [
  { label: 'Services', href: '/#results' },
  { label: 'About', href: '/about' },
  { label: 'Use Case', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Footer() {
  return (
    <footer className="bg-noprob-footer text-white">
      <div className="container-noprob py-10">
        <div className="grid gap-14 lg:grid-cols-[1.45fr_0.7fr_0.85fr]">
          <div className="max-w-[720px]">
            <div className="relative inline-flex items-start font-serif text-[30px] font-semibold italic leading-none tracking-[-0.05em] text-white">
              noprob
              <span className="absolute -right-4 top-0 font-sans text-[12px] not-italic leading-none">
                ®
              </span>
            </div>

            <div className="mt-8">
              <p className="font-display text-[64px] font-semibold leading-none tracking-[-0.05em] text-white">
                Consistency.
              </p>
              <p className="mt-1 font-display text-[64px] font-semibold leading-none tracking-[-0.05em] text-white">
                That&apos;s <span className="font-serif italic">noprob agency</span>
              </p>
            </div>

            <p className="mt-6 max-w-[640px] font-sans text-[18px] font-semibold leading-[1.4em] tracking-[-0.02em] text-white">
              We rebuild your store from the ground up and offer a dedicated team in Development,
              Marketing, and Strategy, available together or separately based on your needs.
            </p>
          </div>

          <div>
            <p className="font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-[#f0f0f0]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-[#f0f0f0] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-[#f0f0f0]">
              Legal
            </p>
            <div className="mt-5 space-y-2 text-sm text-[#a9a9a9]">
              <p>NOPROB AGENCY LLC® EIN: 365136989</p>
              <p>30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#7c7c7c]">
              <Link
                href="https://www.iubenda.com/privacy-policy/22342791"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#989898]"
              >
                Privacy Policy
              </Link>
              <Link
                href="https://www.iubenda.com/privacy-policy/22342791/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#989898]"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#a9a9a9] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} noprob agency™. All rights reserved.</p>
          <p className="text-[11px] uppercase tracking-[0.12em] text-[#7c7c7c]">
            Version {siteConfig.version}
          </p>
        </div>
      </div>
    </footer>
  )
}
