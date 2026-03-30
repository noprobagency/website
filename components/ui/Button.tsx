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
  primary:
    'bg-accent-green text-bg-primary shadow-glow hover:bg-accent-green-dim focus-visible:ring-accent-green',
  secondary:
    'border border-border bg-transparent text-text-primary hover:border-accent-green/40 hover:bg-bg-elevated focus-visible:ring-accent-green',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary focus-visible:ring-accent-green',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
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
    'inline-flex items-center justify-center rounded-pill font-medium tracking-[-0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:cursor-not-allowed disabled:opacity-50',
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
