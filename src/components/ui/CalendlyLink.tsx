import type { ComponentProps, MouseEvent } from 'react'
import { openCalendlyPopup } from '../../lib/calendly'
import { ButtonLink } from './ButtonLink'

type CalendlyLinkProps = Omit<ComponentProps<typeof ButtonLink>, 'href' | 'onClick'>

export function CalendlyLink({ children, ...props }: CalendlyLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    void openCalendlyPopup()
  }

  return (
    <ButtonLink href="#" onClick={handleClick} {...props}>
      {children}
    </ButtonLink>
  )
}
