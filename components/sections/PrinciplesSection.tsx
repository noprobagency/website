'use client'

import Image from 'next/image'

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-16 lg:py-32 bg-noprob-bg">
      <div className="container-noprob">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-stretch lg:gap-20">
          {/* Left Column: Image */}
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-card-lg lg:w-[45%]">
            <Image
              src="/images/originals/about-no-prob.avif"
              alt="Photo of Hamza"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-10 lg:w-[55%]">
            <h2 className="text-[32px] lg:text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-noprob-text">
              We don’t work with just anyone. Every project must align with these three core
              principles:
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  Seamless Integration & Proven Team
                </h3>
                <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                  We plug directly into your structure with aligned workflows, vetted specialists,
                  and a methodology that delivers. You’ll work with a tight-knit, stable team shaped
                  by long-term growth partnerships. When needed, we also source the right talent for
                  your exact eCommerce needs.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  Long-Term Vision & Strategic Focus
                </h3>
                <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                  We’re built for Fashion, Supplements, and DTC brands. Our approach values quality
                  over noise: stable growth, data-led decisions, and a consistent strategic partner
                  over time. Our 2026 goal? Be the most trusted performance ally in your space.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-bold tracking-[-0.04em] text-noprob-text">
                  Substance, Stability & Experience
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-body-lg font-medium leading-[1.6em] text-noprob-text">
                    With 7+ years of international execution and a model based on predictable, fixed
                    costs, we help you scale without margin surprises. No fluff — just
                    infrastructure, strategy, and industry-native talent.
                  </p>
                  <p className="font-sans text-body-lg font-bold leading-[1.6em] text-noprob-text">
                    That’s why we work exclusively with a highly selected group of brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
