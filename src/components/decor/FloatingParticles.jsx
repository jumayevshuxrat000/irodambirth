import { useEffect, useRef } from 'react'
import useReducedMotion from '../../hooks/useReducedMotion'

const SHAPES = ['heart', 'star', 'dot', 'petal']

function drawHeart(ctx, x, y, s, color, alpha) {
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(x, y + s * 0.3)
  ctx.bezierCurveTo(x, y, x - s, y, x - s, y + s * 0.35)
  ctx.bezierCurveTo(x - s, y + s * 0.75, x, y + s, x, y + s * 1.2)
  ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.75, x + s, y + s * 0.35)
  ctx.bezierCurveTo(x + s, y, x, y, x, y + s * 0.3)
  ctx.fill()
}

function drawStar(ctx, x, y, s, color, alpha) {
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  ctx.beginPath()
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
    const outerX = x + Math.cos(angle) * s
    const outerY = y + Math.sin(angle) * s
    const innerAngle = angle + Math.PI / 5
    const innerX = x + Math.cos(innerAngle) * s * 0.42
    const innerY = y + Math.sin(innerAngle) * s * 0.42
    if (i === 0) ctx.moveTo(outerX, outerY)
    else ctx.lineTo(outerX, outerY)
    ctx.lineTo(innerX, innerY)
  }
  ctx.closePath()
  ctx.fill()
}

function drawPetal(ctx, x, y, s, color, alpha, rot) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.translate(x, y)
  ctx.rotate(rot)
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.ellipse(0, 0, s, s * 0.55, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

/**
 * A single canvas that draws a soft, drifting field of hearts / stars / dots / petals.
 * Very few DOM elements (just one canvas) so it stays cheap even with many particles.
 * Particles drift slowly upward and nudge gently away from the mouse cursor.
 */
export default function FloatingParticles({ density = 'normal', colors, className = '' }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()
  const paletteRef = useRef(colors || ['#f4a5c6', '#ffc7dd', '#e0699e', '#fff1e6'])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width, height
    let particles = []
    let mouse = { x: -1000, y: -1000 }
    let raf

    const isMobile = window.innerWidth < 700
    const baseCount = density === 'light' ? 14 : density === 'heavy' ? 46 : 26
    const count = isMobile ? Math.round(baseCount * 0.55) : baseCount

    function resize() {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    function makeParticle() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        s: 3 + Math.random() * 7,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        color: paletteRef.current[Math.floor(Math.random() * paletteRef.current.length)],
        speed: 0.15 + Math.random() * 0.35,
        drift: (Math.random() - 0.5) * 0.3,
        alpha: 0.25 + Math.random() * 0.45,
        rot: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      }
    }

    resize()
    particles = Array.from({ length: count }, makeParticle)

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onMouseLeave() {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    function tick() {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.y -= p.speed
        p.x += p.drift
        p.rot += p.rotSpeed

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.hypot(dx, dy)
        if (dist < 90) {
          const force = (90 - dist) / 90
          p.x += (dx / (dist || 1)) * force * 1.4
          p.y += (dy / (dist || 1)) * force * 1.4
        }

        if (p.y < -20) {
          p.y = height + 20
          p.x = Math.random() * width
        }
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20

        if (p.shape === 'heart') drawHeart(ctx, p.x, p.y, p.s, p.color, p.alpha)
        else if (p.shape === 'star') drawStar(ctx, p.x, p.y, p.s, p.color, p.alpha)
        else if (p.shape === 'petal') drawPetal(ctx, p.x, p.y, p.s, p.color, p.alpha, p.rot)
        else {
          ctx.globalAlpha = p.alpha
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.s * 0.35, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(tick)
    }

    if (reduced) {
      // Draw a single static, calm frame instead of animating.
      tick()
      cancelAnimationFrame(raf)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [density, reduced])

  return <canvas ref={canvasRef} className={`particles-canvas ${className}`} />
}
