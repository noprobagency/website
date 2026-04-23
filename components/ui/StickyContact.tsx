'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { getDictionary } from '@/lib/i18n'

export default function StickyContact() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith('/it') ? 'it' : 'en'
  const t = getDictionary(locale)

  // Don't show on contact pages
  const isContactPage = pathname === '/contacts' || pathname === '/it/contacts'

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
      <Link
        href={t.hero.ctaPrimaryHref}
        className="flex items-center justify-center gap-[30px] overflow-clip rounded-[138px] border border-[#363636] bg-[#121212] py-2 pl-2 pr-[18px] hover:opacity-90"
      >
        <div className="relative h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full">
          <Image
            src="https://framerusercontent.com/images/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png"
            alt=""
            fill
            sizes="30px"
            className="object-cover"
          />
        </div>
        <span className="whitespace-nowrap text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-[#f0f0f0]">
          Contact Us
        </span>
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#1dcc5d]" />
      </Link>
    </div>
  )
}
