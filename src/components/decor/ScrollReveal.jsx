import { motion } from 'framer-motion'

/**
 * Wraps children with a gentle fade + rise reveal that triggers once
 * when the element scrolls into view.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
