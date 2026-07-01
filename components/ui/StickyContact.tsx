'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getDictionary } from '@/lib/i18n'

// Landing pages carry an in-page application form (#candidatura). The floating
// CTA there is page-specific and scrolls to that form. Everywhere else it points
// to the contact page with a generic "request info" label.
const LANDING_LABELS: Record<string, string> = {
  '/it/sviluppo-shopify': 'Candidati per il progetto',
  '/shopify-development': 'Apply for the project',
  '/it/migrazione-shopify': 'Candidati per la migrazione',
  '/shopify-migration': 'Apply for your migration',
  '/it/team-ecommerce-dedicato': 'Candidati per il team',
  '/data-driven-team': 'Apply for the team',
}

export default function StickyContact() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith('/it') ? 'it' : 'en'
  const t = getDictionary(locale)

  // Don't show on contact pages
  const isContactPage = pathname === '/contacts' || pathname === '/it/contatti'

  const isLanding = pathname in LANDING_LABELS
  const href = isLanding ? '#candidatura' : t.hero.ctaPrimaryHref
  const label = isLanding
    ? LANDING_LABELS[pathname]
    : locale === 'it'
      ? 'Richiedi informazioni'
      : 'Request information'

  useEffect(() => {
    if (isContactPage) return

    const handleScroll = () => {
      const trigger = document.getElementById('problem')
      let isVisible = true

      if (trigger) {
        isVisible = trigger.getBoundingClientRect().top <= window.innerHeight
      }

      const footer = document.querySelector('footer')
      if (footer && footer.getBoundingClientRect().top <= window.innerHeight) {
        isVisible = false
      }

      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isContactPage])

  if (isContactPage) return null

  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300"
      style={{ opacity: visible ? 1 : 0, transform: 'translateX(-50%)', pointerEvents: visible ? 'auto' : 'none' }}
    >
      <Link href={href} className="button-principal whitespace-nowrap">
        <span className="inline-flex items-center gap-2">
          {label}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1dcc5d] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1dcc5d]" />
          </span>
        </span>
      </Link>
    </div>
  )
}
