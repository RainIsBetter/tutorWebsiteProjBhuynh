import { BrainCog, Calculator, FlaskConical, type LucideIcon, Microscope } from 'lucide-react'
import { ButtonLink } from '../ui/ButtonLink'
import { CalendlyLink } from '../ui/CalendlyLink'
import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'

const subjects: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Mathematics',
    description:
      'From algebra through calculus, we work through problems until the logic becomes clear.',
    icon: Calculator,
  },
  {
    title: 'Biology',
    description:
      'Living systems make more sense when you see how the pieces connect and function together.',
    icon: Microscope,
  },
  {
    title: 'Chemistry',
    description:
      'Every student learns chemistry differently, so I tailor sessions to your unique strengths and learning gaps.',
    icon: FlaskConical,
  },
  {
    title: 'Physics',
    description:
      'I excel at physics tutoring by adapting to your learning style, helping you master concepts through proven methods.',
    icon: BrainCog,
  },
]

export function Subjects() {
  return (
    <section id="subjects" className="w-full bg-ui-surface-base px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-14 md:gap-20">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-4 text-center text-ui-text-primary">
          <SectionEyebrow className="text-[16px] font-semibold text-ui-text-primary">
            Subjects
          </SectionEyebrow>
          <div className="flex w-full flex-col gap-6">
            <SectionTitle className="text-[2rem] leading-[1.2] tracking-[-0.02em] md:text-[52px] md:tracking-[-0.52px]">
              What I teach and how it works
            </SectionTitle>
            <SectionBody className="text-[18px] leading-[1.5] text-ui-text-primary">
              I focus on core subjects with proven methods that help students
              grasp concepts and retain them. Each lesson builds on what you
              already know.
            </SectionBody>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {subjects.map((subject) => {
            const Icon = subject.icon

            return (
              <article
                key={subject.title}
                className="flex min-h-px min-w-px flex-col items-center gap-6 text-center text-ui-text-primary"
              >
                <Icon className="size-12 text-ui-text-primary" strokeWidth={2} aria-hidden="true" />

                <div className="flex w-full flex-col gap-4">
                  <SectionTitle
                    as="h3"
                    className="text-[28px] leading-[1.4] tracking-[-0.28px]"
                  >
                    {subject.title}
                  </SectionTitle>
                  <SectionBody className="text-[16px] leading-[1.5] text-ui-text-primary">
                    {subject.description}
                  </SectionBody>
                </div>
              </article>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <CalendlyLink>
            Schedule now
          </CalendlyLink>
          <ButtonLink href="#whychooseme" variant="secondary">
            Learn more
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
