import Link from 'next/link'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const COPY: Record<Locale, { author: string; readingTimeSuffix: string }> = {
  en: { author: 'Antonio Manitta', readingTimeSuffix: 'min read' },
  it: { author: 'Antonio Manitta', readingTimeSuffix: 'min di lettura' },
}

const DATE_LOCALE: Record<Locale, string> = { en: 'en-US', it: 'it-IT' }

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso)
  return d.toLocaleDateString(DATE_LOCALE[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

type Props = {
  publishedAt: string // ISO date or 'YYYY-MM-DD'
  readingTimeMinutes: number
  locale?: Locale
}

export function BlogPostMeta({ publishedAt, readingTimeMinutes, locale = 'it' }: Props) {
  const copy = COPY[locale]
  const aboutHref = ROUTE_PATHS.about[locale]

  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-sans text-[14px] text-[#7c7c7c] tracking-[-0.02em]">
      <Link href={aboutHref} className="font-medium text-[#1c1c1c] no-underline hover:underline">
        {copy.author}
      </Link>
      <span aria-hidden>·</span>
      <time dateTime={publishedAt}>{formatDate(publishedAt, locale)}</time>
      <span aria-hidden>·</span>
      <span>
        {readingTimeMinutes} {copy.readingTimeSuffix}
      </span>
    </div>
  )
}
