'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { formatPeriod, getDuration } from '@/lib/utils'
import cvData from '@/data/cv-data.json'

export default function Experience() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="experience" className="py-20 px-6" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Experience
        </h2>

        <div className="relative">
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-10 pl-8">
            {cvData.experiences.map((exp, i) => {
              const anim = shouldReduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.3) },
                  }
              return (
                <motion.div key={exp.id} {...anim} className="relative">
                  <div
                    className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 -translate-x-1/2"
                    style={{
                      backgroundColor: exp.period.current ? 'var(--accent)' : 'var(--bg)',
                      borderColor: exp.period.current ? 'var(--accent)' : 'var(--border)',
                    }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-0.5 mb-2">
                    <div>
                      <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {exp.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {formatPeriod(exp.period.start, exp.period.end, exp.period.current)}
                      </p>
                      <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                        {getDuration(exp.period.start, exp.period.end)}
                      </p>
                    </div>
                  </div>

                  {exp.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                          <span
                            className="mt-2 w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: 'var(--text-muted)' }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-0.5 rounded"
                          style={{ backgroundColor: 'var(--accent-dim)', color: 'var(--accent)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
