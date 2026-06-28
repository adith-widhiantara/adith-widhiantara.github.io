'use client'
import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import cvData from '@/data/cv-data.json'

const TITLES = [...new Set(cvData.experiences.map((e) => e.title))]

function firstTwoSentences(text: string): string {
  const matches = text.match(/[^.!?]+[.!?]+/g) ?? []
  return matches.slice(0, 2).join(' ').trim()
}

export default function Hero() {
  const shouldReduce = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'erasing'>('typing')

  useEffect(() => {
    const target = TITLES[idx]
    let t: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
      } else {
        t = setTimeout(() => setPhase('pausing'), 2000)
      }
    } else if (phase === 'pausing') {
      t = setTimeout(() => setPhase('erasing'), 400)
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setIdx((i) => (i + 1) % TITLES.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(t)
  }, [displayed, phase, idx])

  const anim = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      }

  return (
    <section id="hero" className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="w-[90%] mx-auto">
        <motion.div {...anim}>
          <p className="font-mono text-sm mb-4" style={{ color: 'var(--accent)' }}>
            Hello, I&apos;m
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {cvData.personal.name}
          </h1>

          <div className="font-mono text-lg sm:text-xl mb-6 h-8 flex items-center gap-0.5" style={{ color: 'var(--mono)' }}>
            <span>{displayed}</span>
            <span className="animate-pulse select-none">|</span>
          </div>

          <p
            className="text-base mb-10 max-w-xl"
            style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}
          >
            {firstTwoSentences(cvData.objective)}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={cvData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition-opacity duration-150 hover:opacity-70"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={cvData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition-opacity duration-150 hover:opacity-70"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${cvData.personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-opacity duration-150 hover:opacity-80"
              style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
            >
              <Mail size={15} />
              Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
