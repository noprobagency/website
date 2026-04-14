'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

import { siteAssets } from '@/lib/site'

const testimonials = [
  {
    name: 'Antonio Cali',
    role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
    image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
    quote:
      'Collaborating with NoProb Agency for the development of our e-commerce was an extremely positive experience. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills. Every step, from graphic design to going live, was handled with professionalism…',
  },
  {
    name: 'Camilla Dudine',
    role: 'DDglobal Store - B2B eCommerce Owner',
    image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
    quote:
      'Collaborating with Antonio on the creation of our e-commerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing e-commerce website.',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function Testimonials() {
  return (
    <div className="mx-auto mt-16 max-w-[850px]">
      <div className="text-center">
        <h3 className="font-sans text-[1.6rem] font-bold leading-[1.4em] tracking-[-0.04em] text-[#f9f9f9]">
          Trusted by established business owners
        </h3>
      </div>

      <div className="mt-6 grid gap-3 xl:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <motion.article
            key={testimonial.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'some' }}
            variants={cardVariants}
            className="border-card-thick shadow-card flex h-auto flex-col items-start justify-between rounded-card bg-noprob-card p-6 overflow-visible"
          >
            <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
              {testimonial.quote}
            </p>

            <div className="flex-1" />

            <div className="mt-[10px]">
              <div className="h-5 w-auto">
                <Image
                  src={siteAssets.trustpilotWordmark}
                  alt="Trustpilot rating"
                  width={100}
                  height={20}
                  className="h-full w-auto object-contain object-left"
                />
              </div>

              <div className="mt-[10px] flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
