import type { ZlCopy } from '@/content/zero-loss-migration'
import { renderCopy } from './Placeholder'
import ZlCta from './ZlCta'

const TIER_ACCENTS = ['bg-np-green', 'bg-[#8bcff2]', 'bg-[#d0a8e0]'] as const

/**
 * Section 3, Fletch "offer card": product intro + "What you get" + 3 pricing
 * tiers in one card, then the 4 result cards with the number in bold.
 */
export default function ZlOverview({ copy }: { copy: ZlCopy['overview'] }) {
  return (
    <section className="pt-16 min-[810px]:pt-24">
      <div className="container-noprob">
        <div className="section-card !gap-0 !p-0">
          <div className="grid w-full gap-8 p-6 min-[810px]:p-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-10">
            {/* Col A: product */}
            <div className="flex flex-col lg:border-r lg:border-black/[0.06] lg:pr-10">
              <h2 className="font-display text-[1.8rem] font-semibold leading-[1.1em] tracking-[-0.05em] text-np-dark lg:text-[2.2rem]">{copy.h2}</h2>
              <p className="mt-5 font-sans text-[16px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">
                {copy.paragraph}
              </p>
              <div className="mt-6 lg:mt-auto lg:pt-8">
                <ZlCta label={copy.cta} position="overview" />
              </div>
            </div>

            {/* Col B: what you get */}
            <div className="lg:border-r lg:border-black/[0.06] lg:pr-10">
              <h3 className="font-sans text-[18px] font-bold leading-[1.3em] tracking-[-0.03em] text-np-dark">
                {copy.deliverablesTitle}
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {copy.deliverables.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span aria-hidden className="mt-[7px] h-[10px] w-[10px] shrink-0 rounded-full bg-np-dark" />
                    <div>
                      <p className="font-sans text-[15px] font-semibold leading-[1.35em] tracking-[-0.02em] text-np-dark">{item.title}</p>
                      <p className="mt-[2px] font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-grey">
                        {renderCopy(item.line)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col C: pricing tiers */}
            <div>
              <h3 className="font-sans text-[18px] font-bold leading-[1.3em] tracking-[-0.03em] text-np-dark">{copy.pricingTitle}</h3>
              <p className="mt-1 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">{copy.pricingSub}</p>
              <ol className="mt-5 flex flex-col gap-4">
                {copy.tiers.map((tier, i) => (
                  <li key={tier.label} className="relative pl-4">
                    <span aria-hidden className={`absolute left-0 top-0 h-full w-[4px] rounded-full ${TIER_ACCENTS[i]}`} />
                    <p className="font-sans text-[13px] font-semibold leading-[1.3em] tracking-[-0.02em] text-np-dark">
                      <span className="mr-1 text-np-grey">{i + 1}.</span>
                      {tier.label}
                    </p>
                    <p className="mt-1 font-display text-[2rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2.4rem]">
                      {tier.price}
                    </p>
                    <p className="mt-1 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">{tier.under}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 font-sans text-[12px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-grey">{copy.pricingNote}</p>
            </div>
          </div>

          <div className="w-full border-t border-black/[0.06] px-6 py-4 min-[810px]:px-10">
            <p className="font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.afterLine}</p>
          </div>
        </div>

        {/* 4 result cards: bold number, then attribution */}
        <ul className="mt-6 grid gap-4 min-[600px]:grid-cols-2 lg:grid-cols-4">
          {copy.results.map((r) => (
            <li key={r.value} className="flex flex-col justify-between rounded-card border border-np-border bg-transparent p-5">
              <p className="font-sans text-[19px] font-bold leading-[1.25em] tracking-[-0.04em] text-np-dark min-[810px]:text-[21px]">
                {renderCopy(r.value)}
              </p>
              <p className="mt-4 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">{renderCopy(r.attribution)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
