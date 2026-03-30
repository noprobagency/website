'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import { liveAssets } from '@/lib/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Services', href: '/#pricing' },
  { label: 'About', href: '/about' },
  { label: 'Use Case', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'border-b border-border bg-bg-primary/88 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <nav className="container-custom flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="noprob agency home">
          <Image
            src={liveAssets.logo}
            alt="noprob agency™"
            width={541}
            height={244}
            unoptimized
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-[-0.02em] text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/it"
            className="rounded-pill border border-border px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text-primary"
          >
            IT
          </Link>
          <Button href="/contacts" size="sm" trackingLabel="navbar_cta">
            Reserve Your Sprint
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card text-text-primary lg:hidden"
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
          'overflow-hidden border-b border-border bg-bg-secondary transition-all duration-300 lg:hidden',
          isMobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="container-custom flex flex-col gap-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium tracking-[-0.03em] text-text-secondary transition-colors hover:text-text-primary"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <Link
              href="/it"
              className="rounded-pill border border-border px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-text-muted"
              onClick={() => setIsMobileOpen(false)}
            >
              IT
            </Link>
            <Button href="/contacts" trackingLabel="navbar_mobile_cta">
              Reserve Your Sprint
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
