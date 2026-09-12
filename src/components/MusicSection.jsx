import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Bunny from './decor/Bunny.jsx'
import ScrollReveal from './decor/ScrollReveal.jsx'

const NOTES = ['♪', '♫', '♩', '♬']

export default function MusicSection() {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(18)

  return (
    <section
      className="section"
      style={{
        minHeight: '80vh',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #ffe3ec 0%, #fff1e6 60%, #fff6ef 100%)',
      }}
    >
      <Bunny variant="sway" style={{ top: '4%', left: '3%' }} size={56} />
      <Bunny variant="wave" hold="heart" style={{ bottom: '5%', right: '3%' }} size={64} flip />

      <AnimatePresence>
        {playing &&
          NOTES.map((n, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: [0, 1, 0], y: -140, x: (i - 1.5) * 22 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              style={{
                position: 'absolute',
                bottom: '38%',
                left: '50%',
                fontSize: '1.6rem',
                color: '#e0699e',
                pointerEvents: 'none',
              }}
            >
              {n}
            </motion.span>
          ))}
      </AnimatePresence>

      <ScrollReveal>
        <p className="eyebrow" style={{ justifyContent: 'center' }}>♫ for you</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="heading-serif" style={{ textAlign: 'center', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)', maxWidth: 560 }}>
          When I listen to this music,
          <br />I remember you.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <div
          className="music-card"
          style={{ marginTop: 44, boxShadow: playing ? '0 30px 60px -18px rgba(224,105,158,0.35)' : undefined }}
        >
          <div className="label">playing just for you</div>
          <div className="title">Our Favorite Song</div>
          <div className="artist">Your favorite artist</div>

          <div
            className="progress-track"
            role="slider"
            aria-valuenow={progress}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              setProgress(Math.round(((e.clientX - rect.left) / rect.width) * 100))
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="time-row">
            <span>0:{String(Math.round((progress / 100) * 34)).padStart(2, '0')}</span>
            <span>3:34</span>
          </div>

          <div className="controls-row">
            <button className="skip-btn" aria-label="previous">⏮</button>
            <button
              className="play-btn"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'pause' : 'play'}
            >
              {playing ? '❚❚' : '▶'}
            </button>
            <button className="skip-btn" aria-label="next">⏭</button>
          </div>

          {playing && (
            <div className="equalizer" style={{ justifyContent: 'center', marginTop: 14 }}>
              <span /><span /><span /><span /><span />
            </div>
          )}

          <p style={{ textAlign: 'center', marginTop: 16, fontFamily: 'var(--font-script)', color: 'var(--pink-ink)' }}>
            this song is you ♡
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
