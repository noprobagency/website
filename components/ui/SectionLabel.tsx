import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn('eyebrow', className)}>
      <span className="h-2 w-2 rounded-full bg-accent-green" aria-hidden />
      {children}
    </span>
  )
}
