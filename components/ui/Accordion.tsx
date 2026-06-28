'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

/** Render an answer string, turning [label](url) tokens into links. */
function renderAnswer(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    const [, label, href] = match
    if (href.startsWith('/')) {
      return (
        <Link key={i} href={href} className="font-semibold underline transition-opacity hover:opacity-70">
          {label}
        </Link>
      )
    }
    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline transition-opacity hover:opacity-70"
      >
        {label}
      </a>
    )
  })
}

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
              <span className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text max-[809px]:text-[16px] max-[809px]:font-normal max-[809px]:leading-[1.5em]">
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
                isOpen ? 'mt-3 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="max-w-3xl font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                {renderAnswer(item.answer)}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
