'use client'
import { motion, useReducedMotion } from 'framer-motion'
import cvData from '@/data/cv-data.json'

export default function Skills() {
  const shouldReduce = useReducedMotion()
  const { backend, frontend, databases, cachingAndMessaging, tools, technicalSkills, softSkills, aiIntegrationSkills, collaborationTools, languages } =
    cvData.skills

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay },
        }

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="w-[90%] mx-auto">
        <h2 className="text-2xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Skills
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 mb-10">
          <motion.div {...fadeUp(0)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--accent)' }}>
              Backend
            </h3>
            <div className="space-y-5">
              {backend.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium text-sm mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </p>
                  <ul className="space-y-1">
                    {skill.highlights.map((h) => (
                      <li key={h} className="text-xs flex gap-2" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-muted)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: 'var(--accent)' }}>
              Frontend
            </h3>
            <div className="space-y-5">
              {frontend.map((skill) => (
                <div key={skill.name}>
                  <p className="font-medium text-sm mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </p>
                  <ul className="space-y-1">
                    {skill.highlights.map((h) => (
                      <li key={h} className="text-xs flex gap-2" style={{ color: 'var(--text-muted)' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-muted)' }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div {...fadeUp(0)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <span
                  key={db}
                  className="font-mono text-xs px-2.5 py-1 rounded border"
                  style={{ borderColor: 'var(--border)', color: 'var(--mono)', backgroundColor: 'var(--bg-subtle)' }}
                >
                  {db}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              Caching & Messaging
            </h3>
            <div className="flex flex-wrap gap-2">
              {cachingAndMessaging.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-2.5 py-1 rounded border"
                  style={{ borderColor: 'var(--border)', color: 'var(--mono)', backgroundColor: 'var(--bg-subtle)' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-xs px-2.5 py-1 rounded border"
                  style={{ borderColor: 'var(--border)', color: 'var(--mono)', backgroundColor: 'var(--bg-subtle)' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h3 className="text-lg font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Technical Skills
          </h3>
          <div className="grid gap-10 sm:grid-cols-2">
            <motion.div {...fadeUp(0)} className="space-y-8">
              {technicalSkills.map((group) => (
                <div key={group.category}>
                  <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                    {group.category}
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                        <span>&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                  Language Skills
                </h4>
                <ul className="space-y-1.5">
                  {languages.map((lang) => (
                    <li key={lang.name} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span>&bull;</span>
                      {lang.name} ({lang.level})
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="space-y-8">
              <div>
                <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                  Soft Skills
                </h4>
                <ul className="space-y-1.5">
                  {softSkills.map((item) => (
                    <li key={item} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span>&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                  AI Integration Skills
                </h4>
                <ul className="space-y-1.5">
                  {aiIntegrationSkills.map((item) => (
                    <li key={item} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span>&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                  Collaboration & Productivity Tools
                </h4>
                <ul className="space-y-1.5">
                  {collaborationTools.map((item) => (
                    <li key={item} className="text-sm flex gap-2" style={{ color: 'var(--text-muted)' }}>
                      <span>&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
