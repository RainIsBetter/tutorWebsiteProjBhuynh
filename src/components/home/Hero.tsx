import handsImage from '../../assets/hands.jpg'
import notebookImage from '../../assets/notebook.jpg'
import { ButtonLink } from '../ui/ButtonLink'
import { CalendlyLink } from '../ui/CalendlyLink'
import { SectionBody, SectionTitle } from '../ui/Typography'

export function Hero() {
  return (
    <section id="hero" className="w-full bg-[#e2eaf8] px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8 text-[#06080b]">
            <SectionTitle
              as="h1"
              className="text-[2.5rem] leading-[1.2] tracking-[-0.02em] md:text-[3.5rem] lg:text-[72px] lg:tracking-[-0.72px]"
            >
              Master math and science with expert guidance
            </SectionTitle>

            <SectionBody className="max-w-[40rem] text-[18px] leading-[1.5] text-[#06080b]">
              I teach math and science to students who want to understand the
              fundamentals and excel in their studies. Whether you&apos;re
              struggling with algebra or need help with physics, I&apos;m here to
              guide you through it.
            </SectionBody>

            <div className="flex flex-wrap items-center gap-6">
              <CalendlyLink>
                Book now
              </CalendlyLink>
              <ButtonLink href="#subjects" variant="secondary" >
                Learn more
              </ButtonLink>
            </div>
          </div>

          <div className="relative h-[420px] min-h-px min-w-px flex-[1_0_0] md:h-[638px]">
            <div className="absolute inset-[0_120px_0_0] rounded-[40px] md:inset-[0_182px_0_0]">
              <img
                src={notebookImage}
                className="absolute inset-0 size-full rounded-[40px] object-cover"
                alt="Notebook with math and science notes"
              />
            </div>
            <div className="absolute right-0 top-10 size-[220px] rounded-[32px] md:top-[64px] md:size-[304px]">
              <img
                src={handsImage}
                className="absolute inset-0 size-full rounded-[32px] object-cover"
                alt="Hands writing in a notebook"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
