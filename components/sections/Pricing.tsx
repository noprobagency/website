import Image from 'next/image'
import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import Testimonials from '@/components/sections/Testimonials'
import { siteAssets } from '@/lib/site'

function CheckIcon() {
  return (
    <svg className="np-check-circle" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
        fill="#121212"
      />
    </svg>
  )
}

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
    price: '5795€',
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
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href={plan.href}
                    data-tracking={`pricing_primary_${index}`}
                    className="np-btn-primary w-full"
                  >
                    {plan.cta}
                  </Link>
                  <Link
                    href={plan.secondaryHref}
                    className="text-center font-sans text-[12.8px] font-medium leading-[1.6em] tracking-[-0.02em] text-noprob-text transition-opacity hover:opacity-70"
                  >
                    {plan.secondary}
                  </Link>
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
