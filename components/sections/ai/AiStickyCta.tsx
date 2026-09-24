'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

/**
 * Mobile-only sticky CTA bar: appears after the hero, hides while the
 * application form (#candidatura) is in the viewport.
 */
export default function AiStickyCta({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).sticky
  const [pastHero, setPastHero] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const form = document.getElementById('candidatura')
    let observer: IntersectionObserver | undefined
    if (form) {
      observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => setFormVisible(entry.isIntersecting)),
        { threshold: 0.05 }
      )
      observer.observe(form)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  const visible = pastHero && !formVisible

  // Portal to <body>: ancestors with transforms (page transition wrapper)
  // would otherwise break position: fixed.
  if (!mounted) return null

  return createPortal(
    <div
      aria-hidden={!visible}
      className={`ai-sticky-bar fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 bg-white/95 px-5 py-3 backdrop-blur-[8px] transition-transform duration-300 min-[810px]:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <span className="font-sans text-[15px] font-semibold tracking-[-0.03em] text-np-dark">
        <span className="ai-number">{d.priceLine}</span>
      </span>
      <Link href="#candidatura" data-tracking="ai_sticky_cta" className="button-principal ai-cta !py-[6px]" tabIndex={visible ? 0 : -1}>
        {d.cta}
      </Link>
    </div>,
    document.body
  )
}
