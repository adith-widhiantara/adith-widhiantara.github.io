import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MDXContent from '@/components/blog/MDXContent'
import { getAllSlugs, getPostBySlug } from '@/lib/mdx'
import CopyForMediumButton from '@/components/blog/CopyForMediumButton'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: `${post.title} — Aditya Saktyawan Widhiantara`,
      description: post.excerpt,
    }
  } catch {
    return {}
  }
}

export default function PostPage({ params }: Props) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const date = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Header />
      <main className="py-20">
        <div className="w-[90%] mx-auto max-w-3xl">
          <a
            href="/blog/"
            className="font-mono text-sm mb-8 inline-block transition-opacity hover:opacity-60"
            style={{ color: 'var(--text-muted)' }}
          >
            ← Back to Blog
          </a>

          <header className="mb-10">
            <p className="font-mono text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
              {date}
            </p>
            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-between gap-3">
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
              <CopyForMediumButton />
            </div>
          </header>

          <div id="mdx-content">
            <MDXContent source={post.content} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
