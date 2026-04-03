import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'

const problems = [
  {
    image: '/images/originals/vea64dgdN9StI4fAs6PXXKFyE.png',
    title: 'Fragmented Tech Stack',
    description:
      'Multiple vendors, endless handoffs, constant chaos. No single expert fully responsible or a manager.',
  },
  {
    image: '/images/originals/BwTYAhLAepLBYZo2TxC9P40G5aU.png',
    title: 'Blind decisions',
    description:
      '96% of eCommerce brands run on unreliable data. Tracking is broken, decisions are blind, results are random.',
  },
  {
    image: '/images/originals/p6hRcI15hP2jkD7fjTm3I0v15WI.png',
    title: 'Patchwork "Support"',
    description:
      'Marketing agencies improvise fixes and rush development, causing bugs and lost quality. We fix that.',
  },
]

export default function ProblemSection() {
  return (
    <section className="px-4 pb-0 pt-[60px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-noprob-text">
            Forget the <br /> <span className="line-through">All in one marketing agency</span>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            Sure, everyone wants a killer eCommerce. But if you trust the hype, you end up
            juggling bug fixes, random data, and support that vanishes. Solid quality in every
            basic area beats magic tricks in just one spot.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-[800px] flex-col gap-4 lg:flex-row">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="border-card-thick shadow-card flex-1 rounded-card bg-noprob-card p-6"
            >
              <Image
                src={problem.image}
                alt=""
                width={55}
                height={55}
                className="h-[55px] w-[55px] object-cover"
                aria-hidden
              />
              <h3 className="mt-5 font-sans text-[18px] font-semibold leading-[1.3em] tracking-[-0.02em] text-noprob-text">
                {problem.title}
              </h3>
              <p className="mt-3 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
