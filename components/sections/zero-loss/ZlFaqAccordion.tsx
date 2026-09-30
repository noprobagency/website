'use client'

import Accordion from '@/components/ui/Accordion'
import { renderCopy } from './Placeholder'

/** Client wrapper: binds the placeholder renderer to the shared Accordion. */
export default function ZlFaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return <Accordion items={items} renderText={renderCopy} />
}
