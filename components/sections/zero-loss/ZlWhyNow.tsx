import type { ZlCopy } from '@/content/zero-loss-migration'

/**
 * Section 8 (not in Fletch): three fact cards, each with its clickable
 * source under it. No source, no fact.
 */
export default function ZlWhyNow({ copy }: { copy: ZlCopy['whyNow'] }) {
  return (
    <section className="pt-20 min-[810px]:pt-28">
      <div className="container-noprob">
        <div className="max-w-[820px]">
          <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
          <p className="mt-5 font-sans text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.paragraph}</p>
        </div>

        <ol className="mt-10 grid gap-4 min-[810px]:grid-cols-3">
          {copy.cards.map((card, i) => (
            <li key={i} className="section-card !gap-4">
              <span className="font-display text-[2rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-grey">0{i + 1}</span>
              <p className="font-sans text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">{card.text}</p>
              <p className="mt-auto font-sans text-[12px] font-medium tracking-[-0.02em] text-np-grey">
                {copy.sourceLabel}:{' '}
                {card.sources.map((s, j) => (
                  <span key={s.href}>
                    {j > 0 && ', '}
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70">
                      {s.label}
                    </a>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-[900px] font-sans text-[16px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">{copy.closing}</p>
      </div>
    </section>
  )
}
