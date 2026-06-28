'use client'
import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold" style={{ color: 'var(--accent)' }}>
          adith.dev
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--text-muted)' }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md transition-opacity duration-150 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md transition-opacity duration-150 hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
