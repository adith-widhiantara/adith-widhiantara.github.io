import type { PostMeta } from '@/types/blog'

export default function BlogCard({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <a
      href={`/blog/${post.slug}/`}
      className="block p-5 rounded-lg border transition-opacity duration-150 hover:opacity-80"
      style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
    >
      <p className="font-mono text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
        {date}
      </p>
      <h3 className="font-semibold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
        {post.title}
      </h3>
      <p className="text-sm mb-3" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
        {post.excerpt}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: 'var(--accent-dim)', color: 'var(--accent)' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
