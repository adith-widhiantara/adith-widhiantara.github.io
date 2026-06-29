import React from 'react'
import { codeToHtml } from 'shiki'
import CopyButton from './CopyButton'

export default async function CodeBlock({ children }: { children?: React.ReactNode }) {
  const el = children as React.ReactElement<{ className?: string; children?: string }>
  const rawLang = (el?.props?.className ?? '').replace('language-', '')
  const lang = rawLang || 'text'
  const code = String(el?.props?.children ?? '').trim()

  let html: string
  try {
    html = await codeToHtml(code, { lang, theme: 'one-dark-pro' })
  } catch {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    html = `<pre style="background-color:#282c34;color:#abb2bf"><code>${escaped}</code></pre>`
  }

  return (
    <div className="my-6 rounded-lg overflow-hidden" style={{ border: '1px solid #3e4451' }}>
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{ backgroundColor: '#21252b', borderBottom: '1px solid #3e4451' }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: '#636d83' }}>
          {rawLang || 'code'}
        </span>
        <CopyButton code={code} />
      </div>
      <div
        className="[&>pre]:m-0 [&>pre]:rounded-none [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:text-sm [&>pre]:leading-relaxed [&>pre]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
