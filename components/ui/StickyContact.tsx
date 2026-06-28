'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getDictionary } from '@/lib/i18n'

export default function StickyContact() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith('/it') ? 'it' : 'en'
  const t = getDictionary(locale)

  // Don't show on contact pages
  const isContactPage = pathname === '/contacts' || pathname === '/it/contatti'

  // Page-specific behavior: on the Shopify migration landing the floating CTA
  // scrolls to the in-page application section instead of the contact page.
  const isMigrazione = pathname === '/it/migrazione-shopify'
  const href = isMigrazione ? '#candidatura' : t.hero.ctaPrimaryHref
  const label = isMigrazione ? 'Candidati per la migrazione' : 'Contact Us'

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
