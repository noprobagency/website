import Link from 'next/link'

import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  external?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  trackingLabel?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#111111] text-white hover:bg-[#333333] focus-visible:ring-[#111111]',
  secondary:
    'border border-[#cccccc] bg-transparent text-text-primary hover:border-[#999999] hover:bg-white focus-visible:ring-[#111111]',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary focus-visible:ring-[#111111]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  external,
  disabled,
  type = 'button',
  trackingLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-pill font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:cursor-not-allowed disabled:opacity-50',
    'active:scale-[0.98]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        data-tracking={trackingLabel}
        {...(external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      data-tracking={trackingLabel}
    >
      {children}
    </button>
  )
}
