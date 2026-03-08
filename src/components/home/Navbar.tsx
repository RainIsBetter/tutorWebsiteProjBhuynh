import type { MouseEvent } from 'react'
import { openCalendlyPopup } from '../../lib/calendly'

export function Navbar() {
  const handleBookNowClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    void openCalendlyPopup()
  }

  return (
    <header className="h-[72px] w-full bg-[#1e2023]">
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-end px-[5%] md:px-16">
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#background" className="text-base text-white transition-opacity hover:opacity-80">
              About me
            </a>
            <a href="#subjects" className="text-base text-white transition-opacity hover:opacity-80">
              Subjects
            </a>
            <a href="#faq" className="text-base text-white transition-opacity hover:opacity-80">
              Questions
            </a>
            <a href="#sendmessage" className="text-base text-white transition-opacity hover:opacity-80">
              Contact
            </a>
          </nav>

          <a
            href="#"
            onClick={handleBookNowClick}
            className="inline-flex items-center justify-center rounded-[12px] border border-[#729ae0] bg-[#729ae0] px-[10px] py-[4px] text-base font-medium text-white transition-colors hover:bg-[#5f87cf]"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
