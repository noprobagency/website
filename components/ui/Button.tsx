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
  primary: 'np-btn-primary',
  secondary: 'np-btn-secondary',
  ghost: 'inline-flex items-center justify-center text-[18px] font-semibold tracking-[-0.04em] text-np-dark transition-opacity hover:opacity-70',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: '',
  md: '',
  lg: '',
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
    'transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
