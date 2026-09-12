import { motion } from 'framer-motion'
import Bunny from './decor/Bunny.jsx'
import ScrollReveal from './decor/ScrollReveal.jsx'

const paragraphs = [
  <>
    Today you turn 17, and I can't quite believe how fast time has carried us here. I remember
    the first day I really saw you — not just looked at you, but <em>saw</em> you — and I knew
    there was something completely singular about you.
  </>,
  <>
    You have a way of making ordinary moments feel warm and alive. When you laugh, everything
    else in the room gets a little quieter, like the world pauses to listen. That is a rare and
    beautiful thing, and it is entirely, uniquely you.
  </>,
  <>
    This past year you've grown into someone even more wonderful than you already were. I watch
    you navigate things with grace that people twice your age haven't figured out. You amaze
    me — quietly, constantly.
  </>,
  <>
    I made this little website because I wanted to give you something that holds more than a
    gift card or a bouquet ever could. I wanted you to have a small corner of the internet that
    says: <em>you are deeply loved, and you are seen</em>.
  </>,
  <>Happy Birthday, my Irodam. Seventeen looks so beautiful on you.</>,
]

export default function LetterSection() {
  return (
    <section
      className="section"
      style={{ background: '#fff1e6', minHeight: '90vh', justifyContent: 'center' }}
    >
      <Bunny variant="sway" style={{ top: '10%', left: '4%' }} size={56} />

      <ScrollReveal>
        <motion.div
          className="letter-card"
          initial={{ rotate: -1.2 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3>For my Irodam ♡</h3>
          {paragraphs.map((content, i) => (
            <ScrollReveal key={i} delay={0.12 * i} y={12} duration={0.7} as="p">
              {content}
            </ScrollReveal>
          ))}
          <p className="letter-signature">♥ always yours</p>
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
