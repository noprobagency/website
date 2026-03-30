import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'

const problems = [
  {
    image: siteAssets.problemIcons[0],
    title: 'Fragmented Tech Stack',
    description:
      'Multiple vendors, endless handoffs, constant chaos. No single expert fully responsible or a manager.',
  },
  {
    image: siteAssets.problemIcons[1],
    title: 'Blind Decisions',
    description:
      '96% of eCommerce brands run on unreliable data. Tracking is broken, decisions are blind, results are random.',
  },
  {
    image: siteAssets.problemIcons[2],
    title: 'Patchwork "Support"',
    description:
      'Marketing agencies improvise fixes and rush development, causing bugs and lost quality. We fix that.',
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Problem</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
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
              className="group rounded-[20px] border border-border bg-white p-8 shadow-[0_18px_40px_rgba(17,17,17,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(17,17,17,0.06)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-bg-secondary">
                <Image
                  src={problem.image}
                  alt=""
                  width={56}
                  height={56}
                  className="h-12 w-12 object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-text-primary transition-colors group-hover:text-accent-green">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-[15px]">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
