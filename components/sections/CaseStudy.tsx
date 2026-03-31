import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'

const serviceTags = ['Meta Ads', 'eCommerce', 'Klaviyo', 'Shopify', 'Google Ads', 'SEO']

export default function CaseStudy() {
  return (
    <section className="px-9 py-[80px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <div className="max-w-[550px] text-center">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-np-text">
            What happens when tech meets execution and consistency.
          </h2>
        </div>

        <article className="shadow-card flex w-full max-w-[800px] flex-col overflow-hidden rounded-card bg-np-card-off np-border-card lg:flex-row">
          <div className="relative min-h-[420px] flex-1">
            <Image
              src="/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg"
              alt="Cumini fashion case study"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-[25px] p-5 lg:pr-5">
            <div className="space-y-5">
              <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-np-text">
                eCommerce Luxury Fashion Retail
              </p>

              <Image
                src="/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png"
                alt="Cumini logo"
                width={228}
                height={36}
                className="h-9 w-auto object-contain object-left"
              />

              <p className="max-w-[480px] font-sans text-body-sm font-medium leading-[1.5em] text-np-text">
                Started with no tech team or structure. Built, launched, and scaled eCommerce
                with a dedicated team, turning a marginal channel into a key driver of brand
                growth.
              </p>
            </div>

            <div className="border-b border-[rgba(164,164,164,0.5)] pb-6">
              <p className="flex items-center gap-2 font-sans text-body-lg font-medium text-np-dark">
                <span className="text-np-green">↑</span>
                347% revenue growth
              </p>
              <p className="mt-2 font-sans text-[12px] font-medium tracking-[-0.04em] text-np-text">
                In 36 months of full partnership with noprob agency
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex rounded-pill bg-white px-3 py-[2px] font-sans text-[14px] font-semibold tracking-[-0.04em] text-white [mix-blend-mode:difference]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
