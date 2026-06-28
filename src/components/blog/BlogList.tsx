import type { PostMeta } from '@/types/blog'
import BlogCard from './BlogCard'

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
        No posts yet.
      </p>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
