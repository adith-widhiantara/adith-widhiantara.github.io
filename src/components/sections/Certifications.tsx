'use client'
import { motion, useReducedMotion } from 'framer-motion'
import cvData from '@/data/cv-data.json'

export default function Certifications() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="certifications" className="py-20" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Certifications
        </h2>
        <div className="space-y-10">
          {cvData.certifications.map((group, i) => {
            const anim = shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: i * 0.1 },
                }
            return (
              <motion.div key={group.category} {...anim}>
                <h3
                  className="font-mono text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--accent)' }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 text-sm border-b pb-2.5"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                      <span className="font-mono text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                        {item.issuer}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
