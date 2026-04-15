'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { colors, dropdown, logoText } from '@/lib/design-tokens'
import { siteAssets } from '@/lib/site'

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

function Logo({ size = '35px' }: { size?: string }) {
  return (
    <Link
      href="/"
      aria-label="noprob agency — torna alla home"
      className="inline-flex items-center"
    >
      <div className="relative" style={{ height: size }}>
        <Image
          src={siteAssets.logoBlack}
          alt="noprob agency logo"
          height={parseInt(size)}
          width={parseInt(size) * 4} // Assumed aspect ratio, object-contain will handle it
          className="h-full w-auto object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}

export function ServicesDropdown({ 
  theme = 'light', 
  direction = 'down', 
  className 
}: { 
  theme?: 'light' | 'dark', 
  direction?: 'up' | 'down',
  className?: string
}) {
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
      className={`relative ${direction === 'down' ? "after:top-full" : "after:bottom-full"} after:absolute after:left-0 after:h-2 after:w-[220px] after:content-['']`}
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          openDropdown()
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          scheduleClose()
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => {
          clearCloseTimeout()
          setOpen((current) => !current)
        }}
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans overflow-hidden text-[16px] font-normal tracking-[-0.04em] transition-colors",
          theme === 'dark' ? 'text-[#f0f0f0] hover:bg-white/10' : 'text-np-dark hover:bg-black/5',
          className
        )}
        style={theme === 'light' ? { backgroundColor: open ? dropdown.itemHoverBg : 'transparent' } : {}}
      >
        <span>Services</span>
        <span
          className="transition-transform duration-150"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={14} color={theme === 'dark' ? '#f0f0f0' : 'currentColor'} />
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Servizi"
          className={`absolute left-0 z-[100] border ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-black/5 bg-white'}`}
          style={{
            ...(direction === 'down' ? { top: `calc(100% + ${dropdown.gap})` } : { bottom: `calc(100% + ${dropdown.gap})` }),
            borderRadius: dropdown.radius,
            padding: dropdown.padding,
            minWidth: dropdown.minWidth,
            boxShadow: dropdown.shadow,
          }}
          onMouseEnter={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              openDropdown()
            }
          }}
          onMouseLeave={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              scheduleClose()
            }
          }}
        >
          {SERVICE_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block whitespace-nowrap rounded-[8px] px-4 py-[10px] font-sans text-[16px] font-normal tracking-[-0.03em] transition-colors ${
                theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-np-text hover:bg-black/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

const MENU_PARTNERS = [
  { name: 'Shopify Partners', src: siteAssets.heroPartners[0], width: 288, height: 76, className: 'block h-[18px] w-auto object-contain opacity-75' },
  { name: 'WooCommerce', src: siteAssets.heroPartners[1], width: 300, height: 300, className: 'block h-[22px] w-auto object-contain opacity-75' },
  { name: 'Google Partner', src: siteAssets.heroPartners[2], width: 288, height: 76, className: 'block h-[30px] w-auto object-contain opacity-75' },
  { name: 'Meta Partner', src: siteAssets.heroPartners[3], width: 288, height: 76, className: 'block h-[22px] w-auto object-contain opacity-75' },
  { name: 'Klaviyo Partners', src: siteAssets.heroPartners[4], width: 500, height: 233, className: 'block h-[24px] w-auto object-contain opacity-75' },
] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const darkSections = document.querySelectorAll('[data-header-theme="dark"]')
      const headerHeight = 60 // Approximate header height

      let isIntersecting = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        // Check if the scroll position is within the boundaries of a dark section
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          isIntersecting = true
        }
      })

      setIsOverDark(isIntersecting)
    }

    window.addEventListener('scroll', checkScroll)
    // Initial check
    checkScroll()

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

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
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          isOverDark ? 'bg-white' : 'bg-[rgba(240,240,240,0.5)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-2 min-[810px]:px-9">
          <Logo />

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
              className="np-nav-desktop items-center gap-1 rounded-pill bg-white px-[10px] py-[6px] font-sans text-[12px] font-medium tracking-[-0.04em] text-np-text shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300"
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
              aria-label={mobileOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="np-nav-mobile items-center justify-center rounded-[50px] bg-white font-sans text-[14px] font-medium tracking-[-0.04em] text-black transition-colors"
              style={{ border: isOverDark ? '1px solid black' : '1px solid transparent', backdropFilter: 'blur(5px)', fontFeatureSettings: '"salt","kern","cv05","cv11","ccmp"' }}
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — glass dropdown panel, matches header exact styles */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu di navigazione mobile"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={[
          'fixed inset-x-0 top-[50px] z-[40] min-[810px]:hidden transition-all duration-300 ease-out pt-6 pb-6',
          isOverDark
            ? 'bg-white'
            : 'bg-[rgba(240,240,240,0.5)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]',
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        {/* Nav links */}
        <nav aria-label="Navigazione mobile" className="px-6">
          {/* Services accordion */}
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2 font-sans text-[16px] font-medium tracking-[-0.04em] text-np-text"
          >
            <span>Services</span>
            <span className="transition-transform duration-200" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <ChevronDown size={18} />
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="pl-3 pb-1">
              {SERVICE_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                  className="block py-1.5 font-sans text-[15px] font-medium tracking-[-0.04em] text-np-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-sans text-[16px] font-medium tracking-[-0.04em] text-np-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + bottom padding */}
        <div className="px-6 py-4">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-pill bg-white px-3 py-[5px] font-sans text-[13px] font-medium tracking-[-0.04em] text-np-text shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          >
            <span>IT</span>
            <ChevronDown size={11} color={colors.textPrimary} />
          </button>
        </div>
      </div>
    </>
  )
}
