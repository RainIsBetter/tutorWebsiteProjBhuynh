import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'
import yourScheduleImage from '../../assets/your-schedule.jpg'
import personalizedApproachImage from '../../assets/personalized-approach.jpg'
import examConfidenceImage from '../../assets/exam-confidence.jpg'
import { ButtonLink } from '../ui/ButtonLink'
import { CalendlyLink } from '../ui/CalendlyLink'

export function WhyChooseMe() {
  return (
    <section id="whychooseme" className="w-full bg-ui-surface-muted px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-start gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[768px]">
            <SectionEyebrow className="mb-4">Why choose me</SectionEyebrow>
            <SectionTitle className="mb-6 text-4xl leading-[1.2] tracking-[-0.02em] md:text-6xl lg:text-[52px] lg:tracking-[-0.52px]">
              The advantages of working with a dedicated tutor
            </SectionTitle>
            <SectionBody className="text-base md:text-lg">
              Solo tutoring means you get my full attention and a learning plan
              built just for you. No large classrooms, no distractions, just
              focused progress.
            </SectionBody>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="flex w-full flex-col gap-6 md:gap-8">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={yourScheduleImage}
                  alt="Student studying with a flexible tutoring schedule"
                  className="aspect-[394/240] w-full object-cover"
                />
              </div>
              <div>
                <SectionTitle
                  as="h3"
                  className="mb-6 text-3xl leading-[1.3] tracking-[-0.02em] lg:text-[36px] lg:tracking-[-0.36px]"
                >
                  Your schedule, your pace
                </SectionTitle>
                <SectionBody className="text-base">
                  Sessions fit around your life, not the other way around.
                  Whether you prefer early mornings, late evenings, or flexible
                  scheduling throughout the week, I adjust to match your unique
                  rhythm and commitments.
                </SectionBody>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:gap-8">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={personalizedApproachImage}
                  alt="One-on-one personalized tutoring approach"
                  className="aspect-[394/240] w-full object-cover"
                />
              </div>
              <div>
                <SectionTitle
                  as="h3"
                  className="mb-6 text-3xl leading-[1.3] tracking-[-0.02em] lg:text-[36px] lg:tracking-[-0.36px]"
                >
                  Personalized approach
                </SectionTitle>
                <SectionBody className="text-base">
                  I identify your unique strengths and capabilities, then work
                  systematically on the areas that need the most attention and
                  improvement to help you reach your full potential.
                </SectionBody>
              </div>
            </div>

            <div className="flex w-full flex-col gap-6 md:gap-8">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={examConfidenceImage}
                  alt="Student gaining confidence for upcoming exams"
                  className="aspect-[394/240] w-full object-cover"
                />
              </div>
              <div>
                <SectionTitle
                  as="h3"
                  className="mb-6 text-3xl leading-[1.3] tracking-[-0.02em] lg:text-[36px] lg:tracking-[-0.36px]"
                >
                  Exam confidence
                </SectionTitle>
                <SectionBody className="text-base">
                  Students who engage in regular practice and focused study
                  habits consistently improve their grades and gain greater
                  confidence in their academic abilities and overall
                  intellectual capabilities.
                </SectionBody>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <CalendlyLink>Book now</CalendlyLink>
            <ButtonLink href="#background" variant="secondary">
              Learn more
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
