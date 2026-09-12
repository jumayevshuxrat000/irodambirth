import { motion } from 'framer-motion'
import Bunny from './decor/Bunny.jsx'
import ScrollReveal from './decor/ScrollReveal.jsx'

const photos = [
  { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&q=80', caption: 'my favorite memory', rotate: -6, big: true },
  { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80', caption: 'you ♡', rotate: 5 },
  { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80', caption: 'my Irodam', rotate: -4, heart: true },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80', caption: 'the best of times', rotate: 4 },
  { src: 'https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=500&q=80', caption: 'always remember this', rotate: -3 },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80', caption: 'forever in my heart', rotate: 6, heart: true },
]

export default function PhotoWall() {
  return (
    <section
      className="section"
      style={{ background: '#fff6ef', paddingBottom: 120 }}
    >
      <Bunny variant="sway" hold="heart" style={{ top: 6, right: '6%' }} size={58} />
      <Bunny variant="bounce" hold="flower" style={{ bottom: '8%', left: '4%' }} size={58} />

      <ScrollReveal>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>our memories ♡</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="heading-serif" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}>
          A Wall of Us
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="divider">
          <span className="line" />
          <span>◆</span>
          <span className="line right" />
        </div>
      </ScrollReveal>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '48px 40px',
          maxWidth: 980,
          marginTop: 40,
        }}
      >
        {photos.map((p, i) => (
          <ScrollReveal key={p.caption} delay={0.08 * i} y={40}>
            <motion.div
              className="polaroid"
              style={{
                transform: `rotate(${p.rotate}deg)`,
                width: p.big ? 260 : 220,
              }}
              whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
            >
              <span className="tape" />
              {p.heart && <span className="heart-sticker">♥</span>}
              <img src={p.src} alt={p.caption} style={{ height: p.big ? 300 : 240 }} loading="lazy" />
              <span className="caption">{p.caption}</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
