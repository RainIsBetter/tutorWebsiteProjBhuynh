import { SectionBody } from '../ui/Typography'

const footerLinks = [
  'Math sessions',
  'Science sessions',
  'Online tutoring',
  'Personalized tutoring',
  'Flexible scheduling',
] as const

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-[#1e2023] px-[5%] py-12 md:px-16 md:py-8">
      <div className="mx-auto w-full max-w-[1280px] text-white">
        <div className="pb-3">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-body text-base font-semibold text-white transition-opacity hover:opacity-80"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
          <SectionBody className="text-sm text-white/80">
            © 2026 Anna Katkova Design.
          </SectionBody>
        </div>
      </div>
    </footer>
  )
}
