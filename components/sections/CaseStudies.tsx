import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'
import { cn } from '@/lib/utils'

const serviceTags = [
  { label: 'Meta Ads', className: 'border-[#b8d5ff] bg-[#eef5ff] text-[#2c5b9e]' },
  { label: 'eCommerce', className: 'border-[#ddd6fe] bg-[#f4f0ff] text-[#6d56a5]' },
  { label: 'Klaviyo', className: 'border-[#f5d7bd] bg-[#fff3e8] text-[#a6642b]' },
  { label: 'Shopify', className: 'border-[#cdeecb] bg-[#f0fbef] text-[#2d8a4b]' },
  { label: 'Google Ads', className: 'border-[#ffe1b0] bg-[#fff7ea] text-[#9a6a09]' },
  { label: 'SEO', className: 'border-[#d6d6d2] bg-[#f5f5f2] text-[#555555]' },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Case studies</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
            What happens when tech meets execution and consistency.
          </h2>
        </div>

        <div className="mt-14">
          <article className="overflow-hidden rounded-[30px] border border-border bg-white shadow-[0_22px_60px_rgba(17,17,17,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[0.56fr_0.44fr]">
              <div className="relative min-h-[26rem] lg:min-h-[38rem]">
                <Image
                  src={siteAssets.caseStudyCover}
                  alt="Luxury fashion case study"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-pill bg-white/92 px-3 py-2 text-xs font-medium text-text-primary shadow-sm backdrop-blur">
                  <Image
                    src={siteAssets.caseStudyCheck}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                    aria-hidden
                  />
                  noprob check
                </div>
              </div>

              <div className="p-8 md:p-10 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
                  eCommerce Luxury Fashion Retail
                </p>
                <Image
                  src={siteAssets.caseStudyBrand}
                  alt="Case study brand logo"
                  width={500}
                  height={108}
                  className="mt-6 h-8 w-auto opacity-90"
                />
                <p className="mt-6 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                  Started with no tech team or structure. Built, launched, and scaled eCommerce
                  with a dedicated team, turning a marginal channel into a key driver of brand
                  growth.
                </p>

                <div className="mt-8 rounded-[24px] border border-border bg-bg-secondary p-6">
                  <p className="flex items-center gap-2 text-4xl font-bold tracking-[-0.05em] text-text-primary">
                    <span className="text-accent-green">↑</span>
                    347% revenue growth
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    In 36 months of full partnership with noprob agency
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {serviceTags.map((tag) => (
                    <span
                      key={tag.label}
                      className={cn(
                        'rounded-pill border px-3 py-2 text-xs font-medium',
                        tag.className,
                      )}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[18px] border border-border bg-white p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
                      Performance
                    </p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-text-primary">
                      +38% MER Improvement
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-border bg-white p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted">
                      Acquisition
                    </p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-text-primary">
                      -14% Cost per Acquisition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
