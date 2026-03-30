import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'
import { siteAssets } from '@/lib/site'

const testimonials = [
  {
    name: 'Antonio Cali',
    role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
    image: siteAssets.testimonialAntonio,
    quote:
      'Collaborating with NoProb Agency for the development of our e-commerce was an extremely positive experience. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills.',
  },
  {
    name: 'Camilla Dudine',
    role: 'DDglobal Store - B2B eCommerce Owner',
    image: siteAssets.testimonialCamilla,
    quote:
      'Collaborating with Antonio on the creation of our e-commerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing e-commerce website.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-5xl">
            Trusted by established business owners
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-[22px] border border-border bg-white p-8 shadow-[0_18px_45px_rgba(17,17,17,0.05)]"
            >
              <Image
                src={siteAssets.trustpilotStars}
                alt="Trustpilot stars"
                width={92}
                height={20}
                className="h-4 w-auto"
              />

              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border bg-bg-secondary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.04em] text-text-primary">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
