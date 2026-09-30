'use client'

import { useId, useState } from 'react'

import type { ZlCopy } from '@/content/zero-loss-migration'
import { zlTrack } from '@/lib/zero-loss/tracking'
import ZlCta from './ZlCta'

const REVENUE_ITEM_INDEX = 5 // item 6 (1-based): "fattura almeno €300k"

/**
 * Section 4, Fletch interactive checklist: tick the true ones, the reaction
 * changes with the count. Item 6 (revenue) overrides the positive reaction.
 */
export default function ZlChecklist({ copy }: { copy: ZlCopy['checklist'] }) {
  const [checked, setChecked] = useState<boolean[]>(() => copy.items.map(() => false))
  const baseId = useId()

  const count = checked.filter(Boolean).length
  const hasRevenue = checked[REVENUE_ITEM_INDEX]
  const state: 'low' | 'high' | 'noRevenue' = count >= 3 ? (hasRevenue ? 'high' : 'noRevenue') : 'low'

  function toggle(index: number) {
    const next = checked.map((v, i) => (i === index ? !v : v))
    setChecked(next)
    zlTrack({ event: 'checklist_change', checked_count: next.filter(Boolean).length })
  }

  return (
    <section className="pt-20 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
        <p className="mt-2 font-sans text-[15px] font-medium tracking-[-0.02em] text-np-grey">({copy.sub})</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <ul className="flex flex-col gap-3">
            {copy.items.map((item, i) => {
              const id = `${baseId}-${i}`
              return (
                <li key={item}>
                  <label
                    htmlFor={id}
                    className={`flex cursor-pointer items-start gap-3 rounded-[12px] border bg-white px-4 py-3 transition-colors ${
                      checked[i] ? 'border-np-dark' : 'border-np-border hover:border-np-grey'
                    }`}
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => toggle(i)}
                      className="mt-[3px] h-5 w-5 shrink-0 cursor-pointer accent-[#121212]"
                    />
                    <span className="font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-dark min-[810px]:text-[16px]">
                      {item}
                    </span>
                  </label>
                </li>
              )
            })}
          </ul>

          <div
            aria-live="polite"
            className={`flex flex-col items-start justify-center gap-4 rounded-card p-6 transition-colors min-[810px]:p-8 ${
              state === 'high' ? 'bg-np-mark-green' : state === 'noRevenue' ? 'bg-[#f3e0da]' : 'bg-white border border-np-border'
            }`}
          >
            <span className="inline-flex items-center rounded-pill border border-np-dark bg-white px-3 py-[6px] font-serif text-[14px] italic tracking-[-0.02em] text-np-dark">
              {count}/{copy.items.length} {copy.countLabel}
            </span>
            <p className="font-display text-[1.5rem] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.9rem]">
              {state === 'high' ? copy.reactionHigh : state === 'noRevenue' ? copy.reactionNoRevenue : copy.reactionLow}
            </p>
            {state === 'high' && <ZlCta label={copy.reactionHighCta} position="checklist" />}
          </div>
        </div>
      </div>
    </section>
  )
}
