import { ButtonLink } from '../ui/ButtonLink'
import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'

const faqItems = [
  {
    question: 'How do sessions work?',
    answer:
      'We meet one-on-one via Zoom in a quiet space where you can focus entirely on learning. I assess where you stand, then build lessons around your specific needs and learning style. Each session builds directly on the last.',
  },
  {
    question: 'What about scheduling?',
    answer:
      "Sessions fit your calendar, not mine. We arrange times that work best for you, whether that's after school, weekends, or whenever suits your routine. Flexibility is built in from the start.",
  },
  {
    question: 'Do you work with beginners?',
    answer:
      "Yes. Whether you're starting fresh or catching up after falling behind, we begin where you are and move forward from there. No judgment, just progress.",
  },
  {
    question: "What if I'm advanced?",
    answer:
      'I work with students at every level, including those preparing for advanced exams or diving deeper into complex topics. The approach stays the same: understanding over memorization.',
  },
  {
    question: "How do I know if it's working?",
    answer:
      'Most students notice improvement within the first few weeks as concepts start clicking. Real confidence comes with consistent work, usually visible within a month or two of regular sessions.',
  },
  {
    question: 'Can we focus on one subject?',
    answer:
      'Absolutely. Some students want math only, others science, and some mix both. We build a plan around what you need most.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      "Rates are transparent and depend on the subject and level. I offer package options that work better for ongoing tutoring. Contact me directly and we'll discuss what fits your situation.",
  },
  {
    question: 'What if I need to cancel?',
    answer:
      "Life happens. You can reschedule sessions with reasonable notice. I keep things simple and straightforward so you're never locked into anything rigid.",
  },
] as const

export function Faq() {
  return (
    <section id="faq" className="w-full bg-white px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 md:gap-16 lg:gap-20">
        <div className="w-full max-w-[768px]">
          <SectionEyebrow className="mb-4">FAQ</SectionEyebrow>
          <SectionTitle className="mb-6 text-[2rem] leading-[1.2] tracking-[-0.02em] md:text-[52px] md:tracking-[-0.52px]">
            Questions
          </SectionTitle>
          <SectionBody className="text-[18px] leading-[1.5] text-[#06080b]">
            Find answers to what matters most about starting your tutoring
            journey.
          </SectionBody>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-16">
          {faqItems.map((item) => (
            <article key={item.question} className="text-[#06080b]">
              <SectionTitle as="h3" className="mb-4 text-[22px] leading-[1.4] tracking-[-0.22px]">
                {item.question}
              </SectionTitle>
              <SectionBody className="text-base leading-[1.5] text-[#06080b]">
                {item.answer}
              </SectionBody>
            </article>
          ))}
        </div>

        <div>
          <SectionTitle as="h3" className="mb-4 text-[28px] leading-[1.3] tracking-[-0.28px]">
            Still curious?
          </SectionTitle>
          <SectionBody className="mb-6 text-base">Drop me a message!</SectionBody>
          <ButtonLink href="#sendmessage">
            Send message
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
