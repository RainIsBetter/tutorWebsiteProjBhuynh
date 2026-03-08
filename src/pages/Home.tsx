import { Navbar } from '../components/home/Navbar'
import { Hero } from '../components/home/Hero'
import { Subjects } from '../components/home/Subjects'
import { WhyChooseMe } from '../components/home/WhyChooseMe'
import { Background } from '../components/home/Background'
import { Testimonial } from '../components/home/Testimonial'
import { Faq } from '../components/home/Faq'
import { SendMessage } from '../components/home/SendMessage'
import { Footer } from '../components/home/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Subjects />
      <WhyChooseMe />
      <Background />
      <Testimonial />
      <Faq />
      <SendMessage />
      <Footer />
    </div>
  )
}
