import Image from 'next/image'

const serviceTags = ['Meta Ads', 'eCommerce', 'Klaviyo', 'Shopify', 'Google Ads', 'SEO']

export default function CaseStudy() {
  return (
    <section className="px-0 py-[80px]">
      <div className="container-noprob">
        <article className="shadow-card flex flex-col overflow-hidden rounded-card bg-noprob-card-off border-card-thick lg:flex-row">
          <div className="relative min-h-[520px] flex-1">
            <Image
              src="/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg"
              alt="Cumini fashion case study"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-[25px] p-5 lg:p-5 lg:pr-0">
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

            <div className="space-y-5">
              <Image
                src="/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png"
                alt="Cumini logo"
                width={220}
                height={48}
                className="h-10 w-auto object-contain"
              />

              <p className="max-w-[480px] font-sans text-body-lg font-medium text-noprob-text">
                Started with no tech team or structure. Built, launched, and scaled eCommerce
                with a dedicated team, turning a marginal channel into a key driver of brand
                growth.
              </p>
            </div>

            <div className="border-b border-[rgba(164,164,164,0.5)] pb-6">
              <p className="flex items-center gap-2 font-sans text-body-lg font-medium text-noprob-dark">
                <span className="text-[#1dcc5d]">↑</span>
                347% revenue growth
              </p>
              <p className="mt-2 font-sans text-body-sm font-medium text-noprob-grey">
                In 36 months of full partnership with noprob agency
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
