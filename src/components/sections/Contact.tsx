'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import cvData from '@/data/cv-data.json'

export default function Contact() {
  const shouldReduce = useReducedMotion()

  const anim = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="w-[90%] mx-auto">
        <motion.div {...anim}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Contact
          </h2>
          <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>
            Here&apos;s where to find me.
          </p>
          <div className="flex flex-wrap gap-8">
            <a
              href={cvData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-medium transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--text-primary)' }}
            >
              <Github size={22} />
              GitHub
            </a>
            <a
              href={cvData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-medium transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--text-primary)' }}
            >
              <Linkedin size={22} />
              LinkedIn
            </a>
            <a
              href={`mailto:${cvData.personal.email}`}
              className="flex items-center gap-3 font-medium transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--text-primary)' }}
            >
              <Mail size={22} />
              {cvData.personal.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
