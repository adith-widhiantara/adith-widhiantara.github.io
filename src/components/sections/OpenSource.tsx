'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import cvData from '@/data/cv-data.json'

export default function OpenSource() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="open-source" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Open Source
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {cvData.openSource.map((os, i) => {
            const anim = shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: i * 0.1 },
                }
            return (
              <motion.div
                key={os.id}
                {...anim}
                className="p-6 rounded-lg border flex flex-col gap-3"
                style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {os.name}
                  </h3>
                  <a
                    href={os.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 transition-opacity duration-150 hover:opacity-60"
                    style={{ color: 'var(--text-muted)' }}
                    aria-label={`View ${os.name} on GitHub`}
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <p className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                  {os.role}
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {os.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
