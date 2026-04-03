import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'

const solutions = [
  {
    title: 'Tech Integration Zero Chaos',
    description:
      'All-in-one partner. Full-stack team—development, design, data and strategy. Everything managed for you.',
    image: '/images/originals/mLxRO32RYdrkA8A3LeYtI1YsShQ.png',
  },
  {
    title: 'Real Support Real Results',
    description:
      'Response in minutes, not days. Proactive problem-solvers in Branding & Dev. We support your growth',
    image: '/images/originals/VsUV6XwKbarU0lTCxeyHOgrVaCU.png',
  },
  {
    title: 'Clean Data That Drives Growth',
    description:
      'Professional tracking, complete analytics, actionable dashboards. Decisions on real numbers, not hope.',
    image: '/images/originals/Vcll2J5RvsXWeyROzs7IjM4yiY.png',
  },
]

export default function SolutionSection() {
  return (
    <section className="px-4 pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>Solution</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-noprob-text">
            Stop settling. <br /> Your eCommerce deserves a <br />{' '}
            <mark className="bg-[rgb(206,232,204)] px-2 font-serif italic text-noprob-text">
              true technical partner
            </mark>
            .
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[800px] gap-4 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="border-card-thick shadow-card rounded-card bg-noprob-card p-6"
            >
              <Image
                src={solution.image}
                alt=""
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-cover"
                aria-hidden
              />
              <h3 className="mt-5 font-sans text-[18px] font-semibold leading-[1.3em] tracking-[-0.02em] text-noprob-text">
                {solution.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
