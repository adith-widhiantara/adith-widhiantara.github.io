'use client'
import { motion, useReducedMotion } from 'framer-motion'
import BlogCard from '@/components/blog/BlogCard'
import type { PostMeta } from '@/types/blog'

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const shouldReduce = useReducedMotion()

  if (posts.length === 0) return null

  const anim = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 },
      }

  return (
    <section id="blog" className="py-20" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="w-[90%] mx-auto">
        <motion.div {...anim}>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Blog
            </h2>
            <a
              href="/blog/"
              className="text-sm transition-opacity duration-150 hover:opacity-60"
              style={{ color: 'var(--accent)' }}
            >
              View all →
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
