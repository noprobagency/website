import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

export default function MigrazioneRelated({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).related

  return (
    <section className="pb-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 text-np-h3 text-center text-np-dark">{d.heading}</h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {d.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="section-card group transition-transform hover:-translate-y-1"
              >
                <h3 className="font-sans text-[18px] font-semibold tracking-[-0.04em] text-noprob-text">
                  {item.title}
                </h3>
                <p className="font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                  {item.description}
                </p>
                <span className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-dark underline">
                  Scopri di più
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
