'use client'

import { useEffect, useRef } from 'react'

/*
  "Power layer" decorative primitives for the AI Accelerator landing.
  All SVG/graphic elements are aria-hidden with pointer-events: none and
  animate only transform / opacity / stroke-dashoffset (styles in globals.css,
  frozen automatically under prefers-reduced-motion).
*/

type PulsePath = {
  d: string
  dur: number
  delay: number
  /** Hidden below 810px to keep the mobile network simplified (3-4 paths). */
  desktopOnly?: boolean
  nodes: { cx: number; cy: number }[]
}

// Curved/orthogonal circuits flowing from the edges toward the title area
// (center of the 1200x520 viewBox). Pulse timings are staggered so no more
// than 2-3 impulses are visible at once.
const PATHS: PulsePath[] = [
  { d: 'M0 90 H260 Q290 90 290 120 V200 Q290 230 320 230 H520', dur: 5.2, delay: 0.4, nodes: [{ cx: 290, cy: 160 }, { cx: 520, cy: 230 }] },
  { d: 'M1200 70 H960 Q930 70 930 100 V190 Q930 220 900 220 H700', dur: 6, delay: 2.1, nodes: [{ cx: 930, cy: 150 }, { cx: 700, cy: 220 }] },
  { d: 'M80 520 V420 Q80 390 110 390 H360 Q390 390 390 360 V300', dur: 5.6, delay: 3.4, nodes: [{ cx: 80, cy: 470 }, { cx: 390, cy: 330 }] },
  { d: 'M1140 520 V430 Q1140 400 1110 400 H840 Q810 400 810 370 V310', dur: 4.8, delay: 1.2, nodes: [{ cx: 1140, cy: 470 }, { cx: 810, cy: 340 }] },
  { d: 'M0 300 H180 Q210 300 210 270 V150 Q210 120 240 120 H430', desktopOnly: true, dur: 6.4, delay: 4.6, nodes: [{ cx: 210, cy: 210 }, { cx: 430, cy: 120 }] },
  { d: 'M1200 320 H1040 Q1010 320 1010 290 V160 Q1010 130 980 130 H780', desktopOnly: true, dur: 5.8, delay: 0, nodes: [{ cx: 1010, cy: 225 }, { cx: 780, cy: 130 }] },
  { d: 'M340 0 V70 Q340 100 370 100 H560', desktopOnly: true, dur: 4.4, delay: 2.9, nodes: [{ cx: 340, cy: 40 }, { cx: 560, cy: 100 }] },
  { d: 'M880 0 V80 Q880 110 850 110 H660', desktopOnly: true, dur: 5, delay: 3.9, nodes: [{ cx: 880, cy: 45 }, { cx: 660, cy: 110 }] },
]

/** Neural-circuit network behind the hero. Purely decorative. */
export function NeuralCircuits() {
  return (
    <svg
      viewBox="0 0 1200 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {PATHS.map((p, i) => (
        <g key={i} className={p.desktopOnly ? 'ai-circuit-desktop' : undefined}>
          <path d={p.d} className="ai-circuit-line" strokeWidth="1.5" />
          <path
            d={p.d}
            className="ai-circuit-pulse"
            strokeWidth="1.5"
            style={{ '--ai-dur': `${p.dur}s`, '--ai-delay': `${p.delay}s` } as React.CSSProperties}
          />
          {p.nodes.map((n, j) => (
            <circle
              key={j}
              cx={n.cx}
              cy={n.cy}
              r="3.5"
              className="ai-circuit-node"
              style={{ '--ai-dur': `${p.dur}s`, '--ai-delay': `${p.delay}s` } as React.CSSProperties}
            />
          ))}
        </g>
      ))}
    </svg>
  )
}

/** Two thin vertical cables along the page margins (desktop >= 1280px only). */
export function SideCables() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="ai-side-cable left-[18px]" style={{ '--ai-delay': '0s' } as React.CSSProperties} />
      <span className="ai-side-cable right-[18px]" style={{ '--ai-delay': '4.5s' } as React.CSSProperties} />
    </div>
  )
}

/** Horizontal divider crossed by a single impulse when it enters the viewport. */
export function ElectricDivider({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-charged')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`container-noprob ${className}`}>
      <div ref={ref} aria-hidden="true" className="ai-divider mx-auto max-w-[800px]" />
    </div>
  )
}

/** Small lightning bolt icon used in the nav item and micro-highlights. */
export function ZapIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M13 2 4.09 12.69a.5.5 0 0 0 .39.81H10l-1 8.5 8.91-10.69a.5.5 0 0 0-.39-.81H14l-1-8.5Z" />
    </svg>
  )
}
