'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/ui/Button'
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]">
      <nav className="container-noprob flex h-[60px] items-center justify-between py-2">
        <Link href="/" className="flex items-center" aria-label="noprob agency home">
          <Image
            src={siteAssets.logo}
            alt="noprob agency™"
            width={541}
            height={244}
            priority
            className="h-[30px] w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
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

        <div className="hidden items-center gap-3 lg:flex">
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-noprob-dark bg-noprob-card text-noprob-dark lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          <span className="relative h-4 w-4">
            <span
              className={cn(
                'absolute left-0 top-1/2 h-px w-4 -translate-y-[6px] bg-current transition-transform',
                isMobileOpen && 'translate-y-0 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 h-px w-4 bg-current transition-opacity',
                isMobileOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-1/2 h-px w-4 translate-y-[6px] bg-current transition-transform',
                isMobileOpen && 'translate-y-0 -rotate-45',
              )}
            />
          </span>
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden border-b border-noprob-border bg-noprob-card transition-all duration-300 lg:hidden',
          isMobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="container-noprob flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 font-sans text-[18px] font-semibold leading-[120%] tracking-[-0.04em] text-noprob-dark"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
              {'hasChevron' in link && link.hasChevron ? <span className="text-sm">▾</span> : null}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <Link
              href="/it"
              className="inline-flex items-center gap-1 rounded-pill bg-noprob-card-soft px-2 py-1.5 font-sans text-tiny font-medium uppercase tracking-[-0.04em] text-noprob-dark"
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
    </header>
  )
}
