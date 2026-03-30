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
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={item.question} className="py-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-medium tracking-[-0.03em] text-text-primary transition-colors hover:text-accent-green">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-text-muted transition-transform duration-200',
                  isOpen && 'rotate-45 text-accent-green',
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
