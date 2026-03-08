import { BiSolidStar, BiSolidQuoteLeft } from 'react-icons/bi'
import { SectionBody, SectionTitle } from '../ui/Typography'

export function Testimonial() {
  return (
    <section id="testimonial" className="w-full bg-ui-surface-muted px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto flex w-full max-w-[768px] flex-col items-center gap-8 text-center text-ui-text-primary">
          <div className="flex items-center justify-center gap-1">
            <BiSolidQuoteLeft className="size-12 md:size-14" aria-hidden="true" />
            <BiSolidStar className="size-5" />
            <BiSolidStar className="size-5" />
            <BiSolidStar className="size-5" />
            <BiSolidStar className="size-5" />
            <BiSolidStar className="size-5" />
          </div>

          <SectionTitle as="blockquote" className="text-[24px] leading-[1.4] tracking-[-0.02em] md:text-[28px] md:tracking-[-0.28px]"          >
            "My daughter went from struggling with biology to acing her exams.
            The personalized approach made all the difference."
          </SectionTitle>

          <div className="flex items-center gap-5">
            <div className="text-left">
              <SectionBody className="text-base font-semibold">— Igor K.</SectionBody>
              <SectionBody className="text-base ">Parent, San Jose, CA</SectionBody>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
