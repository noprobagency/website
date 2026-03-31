import Image from 'next/image'

import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'
import Testimonials from '@/components/sections/Testimonials'

const plans = [
  {
    badge: 'Already with a good eCommerce?',
    name: 'Data-Driven Team',
    price: '€1,495',
    period: '/month',
    description:
      'A tailor-made eCommerce team that evolves with you. Your eCommerce Manager is your single point of contact, leading a flexible, well-tuned group of specialists. You focus on your brand, he takes care of everything else, including hiring.',
    features: ['7/7 support', 'NDA sign', 'Trial Discount'],
    cta: 'Get Your custom Data Team',
    href: '/contacts',
    secondary: 'Learn more about the plan',
    secondaryHref: '/data-driven-team',
  },
  {
    badge: 'Want to build your ecommerce?',
    name: 'eCommerce Rebuild',
    price: '€5,795',
    period: '',
    description:
      'We rebuild your eCommerce from design to performance, creating a platform built to grow. You focus on elevating your brand. We handle everything technical, from maintenance to optimization.',
    features: ['7/7 support', 'NDA sign', '100% Risk-Free'],
    cta: 'Start your eCommerce Rebuild',
    href: '/contacts',
    secondary: 'Learn more about the plan',
    secondaryHref: '/ecommerce-rebuild',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-40 bg-black px-9 py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-[#f9f9f9]">
            Smart plans for serious eCommerce brands
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-[#f9f9f9]">
            Whether your eCommerce is running and growing or needs a complete rebuild, our tech
            team will guide you every step of the way.
          </p>
        </div>

        <div className="mt-10 grid gap-3 xl:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className="rounded-card-lg border border-noprob-border-dk bg-noprob-text p-2"
            >
              <div className="rounded-[20px] bg-noprob-card p-8 shadow-pricing-inner">
                <div
                  className={
                    index === 0
                      ? 'inline-flex rounded-[5px] bg-[rgb(206,232,204)] px-2 py-[5px] font-serif text-[14px] font-semibold italic tracking-[-0.06em] text-noprob-text'
                      : 'inline-flex rounded-[5px] bg-[rgb(219,204,232)] px-2 py-[5px] font-serif text-[14px] font-semibold italic tracking-[-0.06em] text-noprob-text'
                  }
                >
                  {plan.badge}
                </div>

                <h3 className="mt-8 font-serif text-[2.5rem] font-semibold italic leading-[1.1em] tracking-[-0.05em] text-noprob-text">
                  {plan.name}
                </h3>

                <div className="mt-6">
                  <span className="font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-muted">
                    From
                  </span>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="font-sans text-[1.8rem] font-bold leading-[1em] tracking-[-0.04em] text-noprob-text">
                      {plan.price}
                    </span>
                    {plan.period ? (
                      <span className="font-sans text-body-sm font-medium text-noprob-grey">
                        {plan.period}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-6 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 font-sans text-body-sm font-medium text-noprob-text"
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#121212] text-[#f0f0f0]">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    href={plan.href}
                    className="w-full !justify-center !rounded-xl !py-3"
                    trackingLabel={`pricing_primary_${index}`}
                  >
                    {plan.cta}
                  </Button>
                  <Button
                    href={plan.secondaryHref}
                    variant="secondary"
                    className="w-full !justify-center rounded-xl border border-[#e5e5e5]"
                  >
                    {plan.secondary}
                  </Button>
                </div>

                <div className="mt-8 flex flex-col gap-1">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src={siteAssets.trustpilotStars}
                      alt="Trustpilot stars"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    <span className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[rgb(36,143,98)]">
                      4,9
                    </span>
                    <span className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[rgb(36,143,98)]">
                      Trustpilot
                    </span>
                  </div>
                  <p className="font-sans text-tiny font-medium tracking-[-0.04em] text-noprob-dark">
                    Trusted by Fashion, Supplements, and DTC eCommerce brands
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Testimonials />
      </div>
    </section>
  )
}
