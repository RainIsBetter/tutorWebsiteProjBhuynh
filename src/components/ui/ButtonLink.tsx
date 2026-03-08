import type { AnchorHTMLAttributes } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary'
}

const baseClasses =
  'inline-flex h-16 items-center rounded-[1.05rem] px-7 font-body text-[1.8rem] font-medium transition'

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary: 'bg-[#5e8ed8] text-white hover:bg-[#4f80cb] h-auto rounded-[12px] px-3 py-1.5 text-base',
  secondary: 'bg-[#cbd5e3] text-black hover:bg-[#c1ccdc] h-auto rounded-[12px] bg-black/5 px-3 py-1.5 text-base text-[#06080b] hover:bg-black/10',
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
