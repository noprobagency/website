import Image from 'next/image'

import { siteAssets } from '@/lib/site'

const testimonials = [
  {
    name: 'Antonio Cali',
    role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
    image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
    quote:
      'Collaborating with NoProb Agency for the development of our e-commerce was an extremely positive experience. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills.',
  },
  {
    name: 'Camilla Dudine',
    role: 'DDglobal Store - B2B eCommerce Owner',
    image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
    quote:
      'Collaborating with Antonio on the creation of our e-commerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing e-commerce website.',
  },
]

export default function Testimonials() {
  return (
    <div className="mt-16">
      <div className="max-w-[760px]">
        <h3 className="font-sans text-[32px] font-bold leading-[1.15em] tracking-[-0.04em] text-[#f9f9f9]">
          Trusted by established business owners
        </h3>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="border-card-thick shadow-card flex h-full flex-col rounded-card bg-noprob-card p-6"
          >
            <Image
              src={siteAssets.trustpilotStars}
              alt="Trustpilot stars"
              width={303}
              height={20}
              className="h-5 w-auto"
            />

            <p className="mt-5 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
              {testimonial.quote}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-sans text-[18px] font-semibold leading-[1.3em] tracking-[-0.02em] text-noprob-text">
                  {testimonial.name}
                </p>
                <p className="font-sans text-body-sm font-medium text-noprob-grey">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
