import Image from 'next/image'

import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'

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
    <section id="pricing" className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
            Smart plans for serious eCommerce brands
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            Whether your eCommerce is running and growing or needs a complete rebuild, our tech
            team will guide you every step of the way.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {plans.map((plan, index) => (
            <article key={plan.name} className="flex flex-col rounded-[20px] border border-border bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-pill border border-border px-3 py-1 text-xs text-text-muted">
                  {plan.badge}
                </span>
              </div>

              <h3 className="mt-8 text-[2rem] font-bold tracking-[-0.05em] text-text-primary">
                {plan.name}
              </h3>
              <div className="mt-5">
                <span className="text-sm text-text-muted">From</span>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-5xl font-extrabold tracking-[-0.07em] text-text-primary">
                    {plan.price}
                  </span>
                  {plan.period ? <span className="pb-1 text-text-muted">{plan.period}</span> : null}
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef8f1] text-accent-green">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <Button
                  href={plan.href}
                  className="w-full"
                  trackingLabel={`pricing_primary_${index}`}
                >
                  {plan.cta}
                </Button>
                <Button href={plan.secondaryHref} variant="secondary" className="w-full">
                  {plan.secondary}
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <Image
                  src={siteAssets.trustpilotStars}
                  alt="Trustpilot stars"
                  width={90}
                  height={20}
                  className="h-4 w-auto"
                />
                <span className="text-sm text-text-muted">
                  <span className="font-medium text-accent-green">4,9</span> Trustpilot
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
