import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type PolymorphicProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function SectionEyebrow<T extends ElementType = 'p'>({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? 'p'

  return (
    <Component
      className={joinClasses('font-body text-base font-semibold text-ui-text-primary', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export function SectionTitle<T extends ElementType = 'h2'>({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? 'h2'

  return (
    <Component
      className={joinClasses(
        'font-heading font-bold leading-[1.1] tracking-[-0.02em] text-ui-text-primary',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function SectionBody<T extends ElementType = 'p'>({
  as,
  className,
  children,
  ...props
}: PolymorphicProps<T>) {
  const Component = as ?? 'p'

  return (
    <Component
      className={joinClasses('font-body leading-[1.5] text-ui-text-muted', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
