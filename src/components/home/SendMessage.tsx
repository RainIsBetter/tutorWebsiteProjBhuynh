import { Input, Label, Textarea } from '@relume_io/relume-ui'
import sendMessageImage from '../../assets/message-us.jpg'
import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'

export function SendMessage() {
  return (
    <section id="sendmessage" className="w-full bg-[#e2eaf8] px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[40px]">
          <img
            src={sendMessageImage}
            alt="Tutor speaking with a student during an online lesson"
            className="aspect-[600/640] w-full object-cover"
          />
        </div>

        <div className="text-[#06080b]">
          <div className="mb-8 md:mb-10">
            <SectionEyebrow className="mb-4">Connect</SectionEyebrow>
            <SectionTitle
              as="h2"
              className="mb-6 text-[2rem] leading-[1.2] tracking-[-0.02em] md:text-[52px] md:tracking-[-0.52px]"
            >
              Send a message
            </SectionTitle>
            <SectionBody className="text-[18px] leading-[1.5] text-[#06080b]">
              Fill out the form below to contact me.
            </SectionBody>
          </div>

          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="first-name" className="mb-2 text-sm font-semibold text-[#06080b]">
                First name
              </Label>
              <Input
                type="text"
                id="first-name"
                className="h-12 rounded-xl border-black/15 bg-white px-4 text-base text-[#06080b]"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="last-name" className="mb-2 text-sm font-semibold text-[#06080b]">
                Last name
              </Label>
              <Input
                type="text"
                id="last-name"
                className="h-12 rounded-xl border-black/15 bg-white px-4 text-base text-[#06080b]"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 text-sm font-semibold text-[#06080b]">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="h-12 rounded-xl border-black/15 bg-white px-4 text-base text-[#06080b]"
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 text-sm font-semibold text-[#06080b]">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] rounded-xl border-black/15 bg-white px-4 py-3 text-base text-[#06080b]"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-[12px] bg-[#5e8ed8] px-3 py-1.5 font-body text-base font-medium text-white transition hover:bg-[#4f80cb]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
