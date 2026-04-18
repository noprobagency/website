import Image from 'next/image'
import Link from 'next/link'

import { siteConfig, siteAssets } from '@/lib/site'
import { ServicesDropdown } from '@/components/layout/Navbar'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const logoHref = locale === 'it' ? '/it' : '/'

  return (
    <footer data-header-theme="dark" className="flex flex-col items-center gap-12 bg-black px-9 py-10 text-white">
      <div className="w-full max-w-[1200px] lg:flex lg:items-end lg:justify-between lg:gap-8">
        <div className="max-w-[760px]">
          <Link href={logoHref} className="relative inline-flex h-[44px] w-auto items-center">
            <Image
              src={siteAssets.logoWhite}
              alt="noprob agency logo"
              height={44}
              width={176}
              className="h-full w-auto object-contain object-left"
            />
          </Link>

          <div className="mt-4">
            <h2 className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[64px]">
              {t.footer.headingPre.split('\n').map((line, i, arr) => (
                <span key={i} className="block">{i === arr.length - 1 ? <>{line}<span className="font-serif italic font-normal">{t.footer.headingEm}</span></> : line}</span>
              ))}
            </h2>
          </div>

          <p className="mt-4 max-w-[547px] font-sans text-[18px] font-semibold tracking-[-0.04em] text-white">
            {t.footer.description}
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap items-center gap-2 lg:mt-0 lg:justify-end border-b border-transparent">
          <ServicesDropdown locale={locale} theme="dark" direction="up" className="text-[18px] font-semibold" />
          {t.footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-[14px] py-2 font-sans text-[18px] font-semibold tracking-[-0.04em] text-[#f0f0f0] transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex w-full max-w-[1200px] flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[#a9a9a9]">
          <p>NOPROB AGENCY LLC® EIN : 365136989</p>
          <p>30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[12px] font-medium tracking-[-0.04em] text-[#7c7c7c]">
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
          <span className="uppercase tracking-[0.12em] text-[#7c7c7c]">Version {siteConfig.version}</span>
        </div>
      </div>
    </footer>
  )
}
