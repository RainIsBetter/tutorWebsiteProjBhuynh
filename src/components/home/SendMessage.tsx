import { Input, Label } from '@relume_io/relume-ui'
import sendMessageImage from '../../assets/message-us.jpg'
import { SectionBody, SectionEyebrow, SectionTitle } from '../ui/Typography'
import { type FormEvent, useState } from 'react'

const CONTACT_EMAIL = 'bhuynh@tutorstudio.dev'

export function SendMessage() {
  const [fields, setFields] = useState<FormFields>({ name: '' })
  const [submitMessage, setSubmitMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const name = fields.name.trim()
    const subject = 'Tutoring inquiry'
    const body = [
      'Hello Bon,',
      '',
      'I would like to learn more about tutoring sessions.',
      '',
      `Name: ${name || 'Not provided'}`,
      '',
      'Thanks,',
      name || 'Prospective student',
    ].join('\n')

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')

    setSubmitMessage('Gmail compose opened in a new tab with a pre-filled draft.')
  }
  return (
    <section id="sendmessage" className="w-full bg-ui-surface-muted px-[5%] py-16 md:px-16 md:py-28">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="overflow-hidden rounded-[40px]">
          <img
            src={sendMessageImage}
            alt="Tutor speaking with a student during an online lesson"
            className="aspect-[600/640] w-full object-cover"
          />
        </div>

        <div className="text-ui-text-primary">
          <div className="mb-8 md:mb-10">
            <SectionEyebrow className="mb-4">Connect</SectionEyebrow>
            <SectionTitle
              as="h2"
              className="mb-6 text-[2rem] leading-[1.2] tracking-[-0.02em] md:text-[52px] md:tracking-[-0.52px]"
            >
              Send a message
            </SectionTitle>
            <SectionBody className="text-[18px] leading-[1.5] text-ui-text-primary">
              Share your name and we'll open a pre-filled email draft for you.
            </SectionBody>
          </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2 text-sm font-semibold text-[#06080b]">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={fields.name}
                onChange={(event) => setFields({ name: event.target.value })}
                className="h-12 rounded-xl border-black/15 bg-white px-4 text-base text-[#06080b]"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center rounded-[12px] bg-[#5e8ed8] px-3 py-1.5 font-body text-base font-medium text-white transition hover:bg-[#4f80cb]"
              >
                Open Gmail draft
              </button>

              <p className="mt-3 text-sm text-[#06080b]">
                Prefer your own email client? Send directly to{' '}
                <span className="select-all font-semibold">{CONTACT_EMAIL}</span>
              </p>

              {submitMessage ? <p className="mt-3 text-sm text-[#06080b]">{submitMessage}</p> : null}
            </div>
          </form>

          
        </div>
      </div>
    </section>
  )
}
