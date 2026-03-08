import type { AnchorHTMLAttributes } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary'
}

const baseClasses =
  'inline-flex h-16 items-center rounded-[1.05rem] px-7 font-body text-[1.8rem] font-medium transition'

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'h-auto rounded-[12px] bg-ui-brand px-3 py-1.5 text-base text-ui-text-inverse hover:bg-ui-brand-hover',
  secondary:
    'h-auto rounded-[12px] bg-ui-brand-soft px-3 py-1.5 text-base text-ui-text-primary hover:bg-ui-brand-soft-hover',
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    />
  )
}
