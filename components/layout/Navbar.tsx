'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { colors, dropdown, logoText } from '@/lib/design-tokens'

type NavLink = {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Use Case', href: '/use-cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
]

const SERVICE_ITEMS = [
  { label: 'eCommerce ReBuild', href: '/ecommerce-rebuild' },
  { label: 'Data Drive Team', href: '/data-driven-team' },
  { label: 'MVP Sprint', href: '/contacts' },
] as const

const MOBILE_NAV = [
  ...SERVICE_ITEMS,
  ...NAV_LINKS,
] as const

function ChevronDown({ size = 14, color = colors.textDark }: { size?: number; color?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path
        fill={color}
        d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 256 256" width={18} height={18} aria-hidden="true" focusable="false">
      <path
        fill={colors.textDark}
        d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
      />
    </svg>
  )
}

function Logo({ size = logoText.navSize }: { size?: string }) {
  return (
    <Link href="/" aria-label="noprob agency — torna alla home" className="inline-flex items-baseline">
      <span
        className="inline-flex select-none items-baseline font-serif italic leading-none tracking-[-0.08em] text-np-text"
        style={{ fontSize: size, fontWeight: logoText.weight }}
      >
        {logoText.text}
        <sup className="relative -top-[0.45em] ml-px font-sans text-[0.55em] font-semibold not-italic leading-none tracking-normal">
          {logoText.trademark}
        </sup>
      </span>
    </Link>
  )
}

function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<number | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
      closeTimeoutRef.current = null
    }, 140)
  }

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      clearCloseTimeout()
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative after:absolute after:left-0 after:top-full after:h-2 after:w-[220px] after:content-['']"
      onMouseEnter={openDropdown}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => {
          clearCloseTimeout()
          setOpen((current) => !current)
        }}
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans text-[16px] font-normal leading-[120%] tracking-[-0.04em] text-np-dark transition-colors hover:bg-black/5"
        style={{ backgroundColor: open ? dropdown.itemHoverBg : 'transparent' }}
      >
        <span>Services</span>
        <span
          className="transition-transform duration-150"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={14} />
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Servizi"
          className="absolute left-0 z-[100] bg-white"
          style={{
            top: `calc(100% + ${dropdown.gap})`,
            borderRadius: dropdown.radius,
            padding: dropdown.padding,
            minWidth: dropdown.minWidth,
            boxShadow: dropdown.shadow,
          }}
          onMouseEnter={openDropdown}
          onMouseLeave={scheduleClose}
        >
          {SERVICE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block whitespace-nowrap rounded-[8px] px-4 py-[10px] font-sans text-[16px] font-normal tracking-[-0.03em] text-np-text transition-colors hover:bg-black/5"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-[10px] [-webkit-backdrop-filter:blur(10px)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-2 min-[810px]:px-9">
          <Logo size={logoText.navSize} />

          <nav
            aria-label="Navigazione principale"
            className="np-nav-desktop items-center gap-0"
          >
            <ServicesDropdown />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans text-[16px] font-normal leading-[120%] tracking-[-0.04em] text-np-dark transition-colors hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Cambia lingua in italiano"
              className="np-nav-desktop items-center gap-1 rounded-pill bg-white px-[10px] py-[6px] font-sans text-[12px] font-medium tracking-[-0.04em] text-np-text"
            >
              <span>IT</span>
              <ChevronDown size={12} color={colors.textPrimary} />
            </button>

            <Link
              href="/contacts"
              className="np-nav-desktop np-btn-primary"
            >
              Reserve Your Sprint
            </Link>

            <button
              type="button"
              aria-label="Apri menu di navigazione"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="np-nav-mobile items-center justify-center rounded-pill border border-black/10 bg-white px-4 py-2 font-sans text-[14px] font-semibold tracking-[-0.04em] text-np-text"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu di navigazione mobile"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={[
          'fixed inset-0 z-[100] flex flex-col bg-np-bg px-6 pb-9 pt-0 transition-opacity duration-200 min-[810px]:hidden',
          mobileOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="mb-8 flex items-center justify-between border-b border-black/5 py-2">
          <Logo />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Chiudi menu"
            className="inline-flex items-center gap-1 rounded-pill border border-black/10 bg-white px-[14px] py-2 font-sans text-[14px] font-semibold tracking-[-0.04em] text-np-text"
          >
            <CloseIcon />
            <span>Chiudi</span>
          </button>
        </div>

        <nav aria-label="Navigazione mobile" className="flex-1">
          {MOBILE_NAV.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-black/5 py-[18px] font-sans text-[16px] font-normal leading-[120%] tracking-[-0.04em] text-np-text"
            >
              <span>{link.label}</span>
              <ChevronDown size={20} />
            </Link>
          ))}
        </nav>

        <Link
          href="/contacts"
          onClick={() => setMobileOpen(false)}
          className="np-btn-primary mt-6"
        >
          Reserve Your Sprint
        </Link>
      </div>
    </>
  )
}
