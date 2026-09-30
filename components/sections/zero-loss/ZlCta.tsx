'use client'

import { cn } from '@/lib/utils'
import { zlTrack, type ZlCtaPosition } from '@/lib/zero-loss/tracking'

export const ZL_FORM_ID = 'candidatura'
export const ZL_FORM_FIRST_FIELD_ID = 'zl-websiteUrl'

/**
 * Scroll to the application form and move focus to its first field. Shared by
 * every "Candidati allo sprint" button on the page.
 */
export function goToApplication() {
  const target = document.getElementById(ZL_FORM_ID)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const focusFirst = () => {
    const field = document.getElementById(ZL_FORM_FIRST_FIELD_ID) as HTMLElement | null
    field?.focus({ preventScroll: true })
  }
  // Wait for the smooth scroll to settle before moving focus.
  window.setTimeout(focusFirst, 500)
}

export default function ZlCta({
  label,
  position,
  variant = 'primary',
  className,
}: {
  label: string
  position: ZlCtaPosition
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  return (
    <a
      href={`#${ZL_FORM_ID}`}
      onClick={(e) => {
        e.preventDefault()
        zlTrack({ event: 'cta_click', position })
        goToApplication()
      }}
      className={cn(variant === 'primary' ? 'button-principal' : 'button-secondary', className)}
    >
      {label}
    </a>
  )
}
