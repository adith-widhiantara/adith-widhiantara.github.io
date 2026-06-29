'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      aria-label="Copy code"
      title={copied ? 'Copied!' : 'Copy'}
      className="p-1.5 rounded transition-all duration-150 opacity-50 hover:opacity-100"
      style={{ color: '#abb2bf' }}
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  )
}
