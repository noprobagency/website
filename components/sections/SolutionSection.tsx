import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'

const solutions = [
  {
    title: 'Tech Integration Zero Chaos',
    description:
      'All-in-one partner. Full-stack team: development, design, data and strategy. Everything managed for you.',
    image: siteAssets.solutionIcons[0],
  },
  {
    title: 'Real Support Real Results',
    description:
      'Response in minutes, not days. Proactive problem-solvers in Branding and Dev. We support your growth.',
    image: siteAssets.solutionIcons[1],
  },
  {
    title: 'Clean Data That Drives Growth',
    description:
      'Professional tracking, complete analytics, actionable dashboards. Decisions on real numbers, not hope.',
    image: siteAssets.solutionIcons[2],
  },
]

const checkItems = [
  'One accountable team for development, design, data and strategy.',
  'Fast support that moves in minutes instead of days.',
  'Tracking and reporting you can actually trust before scaling.',
]

export default function SolutionSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-xl">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
            Stop settling. Your eCommerce deserves a true technical partner.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            We combine code, data, and strategic execution into one accountable team, so growth
            decisions stop depending on guesswork and scattered freelancers.
          </p>

          <ul className="mt-8 space-y-4">
            {checkItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent-green text-sm font-semibold text-white">
                  ✓
                </span>
                <span className="text-base leading-relaxed text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-panel noise-mask overflow-hidden p-6 md:p-8">
          <div className="grid gap-4">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="rounded-[22px] border border-border bg-white p-5 shadow-[0_16px_36px_rgba(17,17,17,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[18px] bg-bg-secondary">
                    <Image
                      src={solution.image}
                      alt=""
                      width={60}
                      height={60}
                      className="h-12 w-12 object-contain"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-primary">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
