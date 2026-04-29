import Image from 'next/image'
import Link from 'next/link'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const COPY: Record<
  Locale,
  { name: string; role: string; bio: string; readMore: string }
> = {
  en: {
    name: 'Antonio Manitta',
    role: 'Founder & eCommerce Manager — NoProb Agency',
    bio: 'For over 7 years I have helped fashion, supplements, and DTC brands scale their eCommerce. I work in long-term partnership with three brands at a time, building stable systems that compound.',
    readMore: 'About NoProb',
  },
  it: {
    name: 'Antonio Manitta',
    role: 'Founder & eCommerce Manager — NoProb Agency',
    bio: 'Da oltre 7 anni aiuto brand fashion, integratori e DTC a far crescere il loro eCommerce. Lavoro in long-term partnership con tre brand alla volta, costruendo sistemi stabili che si compongono nel tempo.',
    readMore: 'Scopri NoProb',
  },
}

export function AuthorBio({ locale = 'it' }: { locale?: Locale }) {
  const copy = COPY[locale]
  const aboutHref = ROUTE_PATHS.about[locale]

  return (
    <section className="my-12 flex items-start gap-5 rounded-[16px] border border-black/10 bg-white p-6">
      <div className="relative h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/originals/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png"
          alt={copy.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-sans text-[16px] font-semibold tracking-[-0.02em] text-black leading-[1.2em]">
            {copy.name}
          </p>
          <p className="mt-0.5 font-sans text-[13px] text-[#7c7c7c] tracking-[-0.02em]">
            {copy.role}
          </p>
        </div>
        <p className="font-sans text-[15px] leading-[1.6em] text-[#1c1c1c] tracking-[-0.02em]">
          {copy.bio}
        </p>
        <Link
          href={aboutHref}
          className="font-sans text-[14px] font-medium text-[#1c1c1c] underline underline-offset-4 decoration-[#1c1c1c]/40 hover:decoration-[#1c1c1c] transition-colors"
        >
          {copy.readMore} →
        </Link>
      </div>
    </section>
  )
}
