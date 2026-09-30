import { Fragment } from 'react'

import { ZL_PLACEHOLDER_LABEL } from '@/content/zero-loss-migration'

/**
 * "[DA CONFERMARE]" marker for values Antonio has not confirmed yet.
 * Evident (yellow) everywhere except the Vercel production environment, so it
 * reads clearly on localhost and on preview deployments.
 * `NEXT_PUBLIC_VERCEL_ENV` is exposed automatically by Vercel.
 */
const EVIDENT = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'

export function Placeholder({ token, className = '' }: { token?: string; className?: string }) {
  return (
    <mark
      data-placeholder={token}
      title={token ? `Placeholder: ${token}` : 'Placeholder'}
      className={`rounded-[4px] px-1 font-sans text-[0.85em] font-semibold tracking-[-0.02em] ${
        EVIDENT ? 'bg-[#fff3a3] text-[#5a4a00] outline outline-1 outline-[#e5c94a]' : 'bg-transparent text-inherit'
      } ${className}`}
    >
      {ZL_PLACEHOLDER_LABEL}
    </mark>
  )
}

const TOKEN_RE = /(\[\[[A-Z0-9_]+\]\])/g

/** True when the whole string is a single placeholder token. */
export function isPlaceholderToken(text: string): boolean {
  return /^\[\[[A-Z0-9_]+\]\]$/.test(text.trim())
}

/**
 * Render a copy string, turning `[[TOKEN]]` markers into <Placeholder />.
 * Plain strings pass through untouched (no extra wrappers).
 */
export function renderCopy(text: string): React.ReactNode {
  if (!text.includes('[[')) return text
  return text.split(TOKEN_RE).map((part, i) => {
    const match = part.match(/^\[\[([A-Z0-9_]+)\]\]$/)
    if (match) return <Placeholder key={i} token={match[1]} />
    return <Fragment key={i}>{part}</Fragment>
  })
}

/** Plain-text version for JSON-LD and aria labels. */
export function stripCopy(text: string): string {
  return text.replace(TOKEN_RE, ZL_PLACEHOLDER_LABEL)
}

/**
 * Fixed-ratio placeholder frame for a screenshot that has not been provided.
 * Keeps layout stable (no CLS) and shows the marker.
 */
export function ImagePlaceholder({ label, ratio = '4 / 3', className = '' }: { label: string; ratio?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: ratio }}
      className={`flex w-full items-center justify-center rounded-card border-2 border-dashed border-np-border bg-white ${className}`}
    >
      <Placeholder token="SCREENSHOT" />
    </div>
  )
}
