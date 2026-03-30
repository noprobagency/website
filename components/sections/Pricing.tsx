import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

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
    <section id="pricing" className="section-padding bg-bg-secondary/20">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
            Smart plans for serious eCommerce brands
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            Whether your eCommerce is running and growing or needs a complete rebuild, our tech
            team will guide you every step of the way.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-2">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className="surface-panel flex flex-col p-8 md:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-pill border border-border px-3 py-2 text-xs text-text-muted">
                  {plan.badge}
                </span>
                <span className="rounded-pill border border-accent-green/20 bg-accent-green/10 px-3 py-2 text-xs font-medium text-accent-green">
                  4.9 Trustpilot
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.05em] text-text-primary">
                {plan.name}
              </h3>
              <div className="mt-5 flex items-end gap-3">
                <span className="text-sm text-text-muted">From</span>
                <span className="text-5xl font-semibold tracking-[-0.07em] text-text-primary">
                  {plan.price}
                </span>
                {plan.period ? <span className="pb-1 text-text-muted">{plan.period}</span> : null}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-text-secondary">{plan.description}</p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-pill border border-border px-3 py-2 text-xs text-text-secondary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <Button href={plan.href} className="w-full" trackingLabel={`pricing_primary_${index}`}>
                  {plan.cta}
                </Button>
                <Button href={plan.secondaryHref} variant="secondary" className="w-full">
                  {plan.secondary}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
