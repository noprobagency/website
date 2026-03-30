import SectionLabel from '@/components/ui/SectionLabel'

const solutions = [
  {
    title: 'Tech Integration Zero Chaos',
    description:
      'All-in-one partner. Full-stack team: development, design, data and strategy. Everything managed for you.',
  },
  {
    title: 'Real Support Real Results',
    description:
      'Response in minutes, not days. Proactive problem-solvers in Branding and Dev. We support your growth.',
  },
  {
    title: 'Clean Data That Drives Growth',
    description:
      'Professional tracking, complete analytics, actionable dashboards. Decisions on real numbers, not hope.',
  },
]

export default function SolutionSection() {
  return (
    <section className="section-padding bg-bg-secondary/20">
      <div className="container-custom grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
            Stop settling. Your eCommerce deserves a true technical partner.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            We combine code, data, and strategic execution into one accountable team, so growth
            decisions stop depending on guesswork and scattered freelancers.
          </p>
        </div>

        <div className="grid gap-5">
          {solutions.map((solution, index) => (
            <article
              key={solution.title}
              className="surface-panel flex gap-5 p-6 transition duration-300 hover:border-accent-green/30"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-green text-sm font-semibold text-bg-primary">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-text-primary">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
