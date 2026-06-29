'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import type { PostMeta } from '@/types/blog'
import BlogCard from './BlogCard'

export default function BlogSearch({ posts, allTags }: { posts: PostMeta[]; allTags: string[] }) {
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])

  function toggleTag(tag: string) {
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag])
  }

  const filtered = posts.filter((post) => {
    const matchesQuery =
      query === '' ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())

    const matchesTags =
      activeTags.length === 0 || activeTags.every((t) => post.tags.includes(t))

    return matchesQuery && matchesTags
  })

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--text-muted)' }}
        />
        <input
          type="text"
          placeholder="Cari artikel..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border font-mono text-sm bg-transparent outline-none focus:ring-1"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-primary)',
            '--tw-ring-color': 'var(--accent)',
          } as React.CSSProperties}
        />
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => {
          const active = activeTags.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className="font-mono text-xs px-2.5 py-1 rounded border transition-colors duration-150"
              style={{
                borderColor: active ? 'var(--accent)' : 'var(--border)',
                backgroundColor: active ? 'var(--accent-dim)' : 'transparent',
                color: active ? 'var(--accent)' : 'var(--text-muted)',
              }}
            >
              {tag}
            </button>
          )
        })}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          Tidak ada artikel yang cocok.
        </p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
