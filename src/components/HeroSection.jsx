import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Bunny from './decor/Bunny.jsx'
import FloatingParticles from './decor/FloatingParticles.jsx'

const textVariants = {
  hidden: { opacity: 0, y: 22 },
  show: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  const glowRef = useRef(null)
  const sectionRef = useRef(null)

  // very subtle cursor parallax on the glow layer only
  useEffect(() => {
    const el = sectionRef.current
    const glow = glowRef.current
    if (!el || !glow) return

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      glow.style.transform = `translate(${relX * 24}px, ${relY * 18}px)`
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section hero"
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        background:
          'linear-gradient(160deg, #ffd9e6 0%, #ffc9dd 38%, #fff1e6 78%, #fff6ef 100%)',
        backgroundSize: '200% 200%',
        animation: 'heroGradient 18s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes heroGradient {
          0% { background-position: 0% 30%; }
          50% { background-position: 100% 70%; }
          100% { background-position: 0% 30%; }
        }
      `}</style>

      <div
        ref={glowRef}
        className="glow-blob"
        style={{
          width: 460,
          height: 460,
          background: 'radial-gradient(circle, rgba(255,255,255,0.9), rgba(244,165,198,0.15) 70%, transparent 75%)',
          top: '18%',
          left: '50%',
          marginLeft: -230,
        }}
      />

      <FloatingParticles density="normal" />

      <Bunny variant="bounce" hold={null} style={{ top: '2%', left: '1%' }} size={64} tilt={-4} />
      <Bunny variant="wave" hold={null} style={{ top: '16%', right: '3%' }} size={170} flip />
      <Bunny variant="jump" hold={null} style={{ bottom: '4%', left: '2%' }} size={138} />
      <Bunny variant="sway" hold="flower" style={{ bottom: '8%', right: '4%' }} size={212} />

      <div style={{ position: 'relative', zIndex: 4, textAlign: 'center', maxWidth: 720 }}>
        <motion.p
          className="eyebrow"
          style={{ justifyContent: 'center' }}
          variants={textVariants}
          initial="hidden"
          animate="show"
          custom={0.1}
        >
          just for you ♡
        </motion.p>

        <motion.h1
          className="heading-serif"
          style={{ fontSize: 'clamp(2.3rem, 6vw, 3.6rem)' }}
          variants={textVariants}
          initial="hidden"
          animate="show"
          custom={0.35}
        >
          I love you,
          <br />
          <span className="heading-script" style={{ fontSize: '1.05em' }}>
            my Irodam
          </span>
        </motion.h1>

        <motion.div
          className="divider"
          style={{ justifyContent: 'center' }}
          variants={textVariants}
          initial="hidden"
          animate="show"
          custom={0.6}
        >
          <span className="line" />
          <span>♥</span>
          <span className="line right" />
        </motion.div>

        <motion.p
          className="heading-serif"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 500 }}
          variants={textVariants}
          initial="hidden"
          animate="show"
          custom={0.8}
        >
          Happy 17th Birthday ♡
        </motion.p>

        <motion.p
          className="eyebrow"
          style={{ justifyContent: 'center', marginTop: 18, fontSize: '1.1rem' }}
          variants={textVariants}
          initial="hidden"
          animate="show"
          custom={1.0}
        >
          this little site is all yours
        </motion.p>
      </div>

      <div className="scroll-indicator">
        <span>scroll down</span>
        <span className="stick" />
      </div>
    </section>
  )
}
