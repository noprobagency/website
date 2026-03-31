import { cn } from '@/lib/utils'

type SectionLabelProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return <span className={cn('np-eyebrow', className)}>{children}</span>
}
