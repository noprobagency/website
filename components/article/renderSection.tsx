import Image from 'next/image'
import Link from 'next/link'

import type { ArticleSection } from '@/data/articles'

const CONTACTS_HREF = 'https://noprob.agency/it/contacts'

export function renderSection(section: ArticleSection, idx: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          className="mb-4 mt-[60px] font-sans font-semibold tracking-[-0.05em] leading-[1.15em] text-black"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          {section.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={idx}
          className="mb-3 mt-[40px] font-sans font-semibold tracking-[-0.04em] leading-[1.3em] text-black text-[22px]"
        >
          {section.text}
        </h3>
      )
    case 'paragraph':
      return (
        <p
          key={idx}
          className="article-body mb-5 font-sans font-medium tracking-[-0.02em] text-[#1c1c1c]"
        >
          {section.text}
        </p>
      )
    case 'image':
      return (
        <figure
          key={idx}
          className="my-8 mx-auto overflow-hidden rounded-[16px]"
          style={section.maxWidth ? { maxWidth: section.maxWidth } : undefined}
        >
          <Image
            src={section.src}
            alt={section.alt ?? ''}
            width={section.width ?? 1400}
            height={section.height ?? 900}
            className="h-auto w-full object-contain"
          />
        </figure>
      )
    case 'list':
      return (
        <ul key={idx} className="mb-5 list-disc pl-6 space-y-2">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="article-body font-sans font-medium tracking-[-0.02em] text-[#1c1c1c]"
            >
              {item}
            </li>
          ))}
        </ul>
      )
    case 'metrics':
      return (
        <div
          key={idx}
          className="my-8 rounded-[12px] border border-black/10 bg-white px-5 py-4"
        >
          <div className="font-sans text-[15px] tracking-[-0.02em] text-[#1c1c1c]">
            <span>MER &gt; </span>
            <span style={{ color: '#96BF47', fontWeight: 600 }}>{section.merValue}</span>
          </div>
          <div className="mt-2 border-t border-black/10 pt-2 font-sans text-[15px] tracking-[-0.02em] text-[#1c1c1c]">
            <span>Crescita fatturato eCommerce: </span>
            <span style={{ color: '#96BF47', fontWeight: 600 }}>{section.growthValue}</span>
          </div>
          {section.note ? (
            <p className="mt-2 font-sans text-[13px] tracking-[-0.02em] text-[#7c7c7c]">
              {section.note}
            </p>
          ) : null}
        </div>
      )
    case 'cta':
      return (
        <aside
          key={idx}
          className="my-[60px] rounded-[12px] bg-[#1A1A1A]"
          style={{ padding: '40px 48px' }}
        >
          <h3 className="font-sans text-[24px] font-bold leading-[1.2em] tracking-[-0.03em] text-white">
            Stai lasciando potenziale sul tavolo.
          </h3>
          <p className="mt-3 font-sans text-[16px] leading-[1.6em] text-[#AAAAAA]">
            Se hai un eCommerce fashion che non sta ancora rendendo quello che dovrebbe, parliamoci. Lavoriamo con un numero selezionato di progetti a lungo termine.
          </p>
          <Link
            href={CONTACTS_HREF}
            className="mt-6 inline-block rounded-[12px] font-sans font-semibold no-underline"
            style={{
              backgroundColor: '#96BF47',
              color: '#1A1A1A',
              padding: '14px 32px',
            }}
            data-tracking="cumini_use_case_cta"
          >
            Parliamoci
          </Link>
        </aside>
      )
    default:
      return null
  }
}
