'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Button from '@/components/ui/Button'
import { isLegacyBackedPath } from '@/lib/legacy-routes'
import { siteAssets } from '@/lib/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '/#results', hasChevron: true },
  { label: 'About', href: '/about' },
  { label: 'Use Case', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  if (isLegacyBackedPath(pathname)) {
    return null
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]">
      <nav className="mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between px-6 py-2 min-[810px]:px-9">
        <Link href="/" className="relative flex h-10 w-20 items-center" aria-label="noprob agency home">
          <Image
            src={siteAssets.logo}
            alt="noprob agency™"
            width={541}
            height={244}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-7 min-[810px]:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-noprob-dark transition-opacity hover:opacity-70"
              >
                {link.label}
                {'hasChevron' in link && link.hasChevron ? <span className="text-sm">▾</span> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 min-[810px]:flex">
          <Link
            href="/it"
            className="inline-flex items-center gap-1 rounded-pill bg-noprob-card px-2 py-1.5 font-sans text-tiny font-medium uppercase tracking-[-0.04em] text-noprob-dark mix-blend-difference"
          >
            IT <span className="text-[10px]">▾</span>
          </Link>
          <Button href="/contacts" variant="primary" trackingLabel="navbar_cta">
            Reserve Your Sprint
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-pill bg-noprob-card px-3 py-2 font-sans text-[16px] font-semibold leading-none tracking-[-0.04em] text-black backdrop-blur-[5px] [-webkit-backdrop-filter:blur(5px)] min-[810px]:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          {isMobileOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden transition-all duration-300 min-[810px]:hidden',
          isMobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-6 pb-4">
          <div className="mx-auto max-w-[342px] rounded-[20px] border border-white/70 bg-white/90 p-5 shadow-card backdrop-blur-[10px]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center justify-between gap-1 font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-noprob-dark"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span>{link.label}</span>
                  {'hasChevron' in link && link.hasChevron ? <span className="text-sm">▾</span> : null}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="/it"
                className="inline-flex items-center gap-1 rounded-pill bg-noprob-card px-2 py-1.5 font-sans text-tiny font-medium uppercase tracking-[-0.04em] text-noprob-dark"
                onClick={() => setIsMobileOpen(false)}
              >
                IT <span className="text-[10px]">▾</span>
              </Link>
              <Button href="/contacts" variant="primary" trackingLabel="navbar_mobile_cta">
                Reserve Your Sprint
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
