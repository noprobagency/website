'use client'

import { ZL_DEMO_DASHBOARD_URL } from '@/content/zero-loss-migration'
import { zlTrack } from '@/lib/zero-loss/tracking'
import { Placeholder } from './Placeholder'

/**
 * "Guarda la dashboard che ricevi il giorno 1" link ([LINK DEMO]). Opens in
 * a new tab and fires `dashboard_demo_click`. Until the URL is confirmed it
 * renders as a disabled button with the placeholder marker.
 */
export default function ZlDashboardLink({
  label,
  position,
  className = '',
}: {
  label: string
  position: 'proof' | 'success'
  className?: string
}) {
  if (!ZL_DEMO_DASHBOARD_URL) {
    return (
      <span aria-disabled="true" className={`button-secondary !w-auto !cursor-not-allowed !whitespace-normal opacity-80 ${className}`}>
        <span className="inline-flex flex-wrap items-center gap-2">
          {label}
          <Placeholder token="LINK_DEMO" />
        </span>
      </span>
    )
  }
  return (
    <a
      href={ZL_DEMO_DASHBOARD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => zlTrack({ event: 'dashboard_demo_click', position })}
      className={`button-secondary ${className}`}
    >
      {label}
    </a>
  )
}
