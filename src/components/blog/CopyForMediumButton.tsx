'use client'
import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyForMediumButton() {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const host = window.location.hostname
    setShow(host === 'localhost' || host === '127.0.0.1')
  }, [])

  if (!show) return null

  async function handleCopy() {
    const el = document.getElementById('mdx-content')
    if (!el) return

    // Clone so we can rewrite relative img src → absolute without touching the DOM
    const clone = el.cloneNode(true) as HTMLElement
    clone.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src')
      if (src && src.startsWith('/')) {
        img.setAttribute('src', `https://adith-widhiantara.github.io${src}`)
      }
    })

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([clone.innerHTML], { type: 'text/html' }),
          'text/plain': new Blob([el.innerText], { type: 'text/plain' }),
        }),
      ])
    } catch {
      navigator.clipboard.writeText(el.innerText)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <button
      onClick={handleCopy}
      title="Hanya muncul di localhost"
      className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded border transition-colors duration-150"
      style={{
        borderColor: copied ? 'var(--accent)' : 'var(--border)',
        color: copied ? 'var(--accent)' : 'var(--text-muted)',
        backgroundColor: 'var(--bg-subtle)',
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy for Medium'}
    </button>
  )
}
