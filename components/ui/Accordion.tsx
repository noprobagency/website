'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className="overflow-hidden rounded-lg bg-noprob-card-soft px-4 py-3">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-pill bg-noprob-bg text-noprob-grey transition-transform duration-200',
                  isOpen && 'rotate-45',
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="max-w-3xl font-sans text-body-sm font-medium text-noprob-text">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
