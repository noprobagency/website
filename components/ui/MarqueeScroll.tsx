'use client'

import { cn } from '@/lib/utils'

type MarqueeScrollProps = {
  children: React.ReactNode
  reverse?: boolean
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}

const speedMap = {
  slow: '[animation-duration:50s]',
  normal: '[animation-duration:35s]',
  fast: '[animation-duration:20s]',
} as const

export default function MarqueeScroll({
  children,
  reverse,
  speed = 'normal',
  className,
}: MarqueeScrollProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max',
          'animate-marquee',
          reverse && '[animation-direction:reverse]',
          speedMap[speed],
        )}
      >
        <div className="flex items-center gap-12 pr-12">{children}</div>
        <div className="flex items-center gap-12 pr-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
