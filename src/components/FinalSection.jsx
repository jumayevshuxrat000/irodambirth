import { motion } from 'framer-motion'
import Bunny from './decor/Bunny.jsx'
import FloatingParticles from './decor/FloatingParticles.jsx'
import ScrollReveal from './decor/ScrollReveal.jsx'

export default function FinalSection() {
  return (
    <section
      className="section"
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f7a9c9 0%, #ffd9e6 45%, #fff1e6 100%)',
      }}
    >
      <FloatingParticles density="heavy" />

      <Bunny variant="bounce" style={{ top: '4%', left: '4%' }} size={58} />
      <Bunny variant="wave" hold="cake" style={{ top: '3%', right: '4%' }} size={70} flip />
      <Bunny variant="sway" style={{ bottom: '5%', left: '6%' }} size={56} />
      <Bunny variant="jump" hold="cake" style={{ bottom: '4%', right: '5%' }} size={64} />

      <ScrollReveal>
        <div className="divider" style={{ justifyContent: 'center', fontSize: '1.2rem' }}>
          <span>♥</span><span>♥</span><span>♥</span><span>♥</span><span>♥</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h2
          className="heading-serif"
          style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          Happy Birthday,
          <br />
          <span className="heading-script">my Irodam</span> ♡
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.35}>
        <p style={{ textAlign: 'center', color: 'var(--text-mid)', marginTop: 10 }}>
          I hope this little website made you smile.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.5}>
        <motion.div
          className="final-heart"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ marginTop: 34 }}
        >
          ♥
        </motion.div>
      </ScrollReveal>

      <ScrollReveal delay={0.65}>
        <div className="divider" style={{ justifyContent: 'center' }}>
          <span>◈</span><span>✦</span><span>★</span><span>◈</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.8}>
        <p className="heading-script" style={{ fontSize: '1.4rem', color: 'var(--pink-ink)', textAlign: 'center' }}>
          with all my love ♡
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.95}>
        <p style={{ marginTop: 14, color: 'var(--text-mid)', fontSize: '0.9rem', textAlign: 'center' }}>
          made with love, just for you
        </p>
      </ScrollReveal>
    </section>
  )
}
