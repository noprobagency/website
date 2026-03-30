import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { liveAssets } from '@/lib/site'

const serviceTags = ['Meta Ads', 'eCommerce', 'Klaviyo', 'Shopify', 'Google Ads', 'SEO']
const outcomeCards = [
  '+38% MER Improvement',
  '-14% Cost per Acquisition',
  '57% Retention Cost Reduction',
  '€9.03 Cost per Acquisition',
  '32% Avg. YoY Revenue Growth',
  '+13% LTV',
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Case studies</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
            What happens when tech meets execution and consistency.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="surface-panel overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.6fr_0.4fr]">
              <div className="relative min-h-[26rem]">
                <Image
                  src={liveAssets.caseStudyCover}
                  alt="Luxury fashion case study"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
                  eCommerce Luxury Fashion Retail
                </p>
                <Image
                  src={liveAssets.caseStudyBrand}
                  alt="Case study brand logo"
                  width={500}
                  height={108}
                  unoptimized
                  className="mt-6 h-9 w-auto opacity-90"
                />
                <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                  Started with no tech team or structure. Built, launched, and scaled eCommerce
                  with a dedicated team, turning a marginal channel into a key driver of brand
                  growth.
                </p>
                <div className="mt-8 rounded-[24px] border border-accent-green/20 bg-accent-green/10 p-6">
                  <p className="font-serif text-sm italic text-accent-green">Primary outcome</p>
                  <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-text-primary">
                    347% revenue growth
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    In 36 months of full partnership with noprob agency
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {serviceTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-border px-3 py-2 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {outcomeCards.map((metric) => (
              <div key={metric} className="surface-panel p-5">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
                  More outcomes
                </p>
                <p className="mt-4 text-xl font-semibold tracking-[-0.04em] text-text-primary">
                  {metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
