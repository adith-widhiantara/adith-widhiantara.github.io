'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import cvData from '@/data/cv-data.json'

const DEFAULT_SHOW = 6

export default function Projects() {
  const shouldReduce = useReducedMotion()
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? cvData.projects : cvData.projects.slice(0, DEFAULT_SHOW)
  const remaining = cvData.projects.length - DEFAULT_SHOW

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Projects
        </h2>

        <div className="space-y-4">
          {displayed.map((proj, i) => {
            const anim = shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.24) },
                }
            return (
              <motion.div
                key={proj.id}
                {...anim}
                className="p-5 rounded-lg border"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-0.5 mb-2">
                  <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {proj.name}
                  </h3>
                  <span className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    {proj.company}
                  </span>
                </div>

                <p
                  className="text-sm mb-3"
                  style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}
                >
                  {proj.description}
                </p>

                {proj.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {proj.techStack.map((tech) => (
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

        {remaining > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-6 py-2 rounded-md text-sm font-medium border transition-opacity duration-150 hover:opacity-70"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              {showAll ? 'Show less' : `Show ${remaining} more`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
