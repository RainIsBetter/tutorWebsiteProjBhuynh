import { Brain, GraduationCap } from 'lucide-react'
import headshotImage from '../../assets/headshot.jpg'
import { ButtonLink } from '../ui/ButtonLink'
import { CalendlyLink } from '../ui/CalendlyLink'
import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'

export function Background() {
  return (
    <section id="background" className="w-full bg-white px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8 text-[#06080b]">
            <div>
              <SectionEyebrow className="mb-4">Background</SectionEyebrow>
              <SectionTitle
                as="h2"
                className="mb-6 text-[2rem] leading-[1.2] tracking-[-0.02em] md:text-[52px] md:tracking-[-0.52px]"
              >
                Experienced tutor dedicated to student success
              </SectionTitle>
              <SectionBody className="text-[18px] leading-[1.5] text-[#06080b]">
                I am a high school math and science tutor with over a decade of
                experience working with diverse learners across public and private
                schools. My approach is structured, patient, and results-focused,
                with an emphasis on building both understanding and confidence. I
                focus on building genuine connections with students by meeting
                them where they are academically and emotionally, not where they
                are expected to be. From that starting point, I create a clear,
                supportive path forward that builds confidence, skills, and
                measurable progress.
              </SectionBody>
            </div>

            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="flex flex-col items-start gap-4">
                <GraduationCap className="size-12 text-[#06080b]" aria-hidden="true" />
                <SectionTitle
                  as="h3"
                  className="text-[22px] leading-[1.4] tracking-[-0.22px]"
                >
                  What I teach
                </SectionTitle>
                <SectionBody className="text-base text-[#06080b]">
                  I tutor up to AB Calculus for math and AP Biology, AP
                  Chemistry, and AP Physics for Science.
                </SectionBody>
              </div>

              <div className="flex flex-col items-start gap-4">
                <Brain className="size-12 text-[#06080b]" aria-hidden="true" />
                <SectionTitle
                  as="h3"
                  className="text-[22px] leading-[1.4] tracking-[-0.22px]"
                >
                  How I teach
                </SectionTitle>
                <SectionBody className="text-base text-[#06080b]">
                  I specialize in breaking down complex concepts into clear,
                  manageable steps.
                </SectionBody>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <CalendlyLink>Book now</CalendlyLink>
              <ButtonLink href="#faq" variant="secondary">
                Learn more
              </ButtonLink>
            </div>
            
          </div>

          <div className="overflow-hidden rounded-[40px]">
            <img
              src={headshotImage}
              className="aspect-[600/640] w-full object-cover"
              alt="Tutor portrait"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
