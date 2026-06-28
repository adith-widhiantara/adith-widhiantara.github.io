import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogList from '@/components/blog/BlogList'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog — Aditya Saktyawan Widhiantara',
  description: 'Technical articles on software engineering, backend development, and open source.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main className="py-20">
        <div className="w-[90%] mx-auto">
          <h1 className="text-3xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
            Blog
          </h1>
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
