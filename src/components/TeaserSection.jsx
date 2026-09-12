import Bunny from './decor/Bunny.jsx'
import FloatingParticles from './decor/FloatingParticles.jsx'
import ScrollReveal from './decor/ScrollReveal.jsx'

export default function TeaserSection() {
  return (
    <section
      className="section"
      style={{
        minHeight: '70vh',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #ffc9dd 0%, #ffe1ea 55%, #fff6ef 100%)',
      }}
    >
      <FloatingParticles density="light" />

      <Bunny variant="jump" style={{ top: '6%', left: '4%' }} size={60} />
      <Bunny variant="wave" style={{ top: '4%', right: '5%' }} size={64} flip hold={null} />

      <ScrollReveal>
        <div className="divider" style={{ justifyContent: 'center', fontSize: '1.4rem' }}>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="eyebrow" style={{ justifyContent: 'center', fontSize: '1.3rem' }}>
          ✨ a little surprise for you... ✨
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="heading-serif" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.7rem)' }}>
          keep scrolling, my Irodam
        </p>
      </ScrollReveal>
    </section>
  )
}
