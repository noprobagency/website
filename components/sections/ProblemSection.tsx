import SectionLabel from '@/components/ui/SectionLabel'

const problems = [
  {
    number: '01',
    title: 'Fragmented Tech Stack',
    description:
      'Multiple vendors, endless handoffs, constant chaos. No single expert fully responsible or a manager.',
  },
  {
    number: '02',
    title: 'Blind decisions',
    description:
      '96% of eCommerce brands run on unreliable data. Tracking is broken, decisions are blind, results are random.',
  },
  {
    number: '03',
    title: 'Patchwork “Support”',
    description:
      'Marketing agencies improvise fixes and rush development, causing bugs and lost quality. We fix that.',
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-5xl">
            Forget the All-in-one marketing agency
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
            Sure, everyone wants a killer eCommerce. But if you trust the hype, you end up
            juggling bug fixes, random data, and support that vanishes. Solid quality in every
            basic area beats magic tricks in just one spot.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="surface-panel group p-7 transition duration-300 hover:border-accent-green/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-green/20 bg-accent-green/10 font-mono text-sm text-accent-green">
                {problem.number}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-text-primary transition-colors group-hover:text-accent-green">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
