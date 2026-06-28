import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-8 mb-3" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4" style={{ color: 'var(--text-primary)', lineHeight: '1.7' }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-sm px-1.5 py-0.5 rounded"
      style={{ backgroundColor: 'var(--bg-subtle)', color: 'var(--accent)' }}
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-lg p-4 overflow-x-auto my-6 font-mono text-sm border"
      style={{ backgroundColor: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-1" style={{ color: 'var(--text-primary)' }} {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ lineHeight: '1.7' }} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="underline underline-offset-2 transition-opacity hover:opacity-70"
      style={{ color: 'var(--accent)' }}
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 pl-4 my-4 italic"
      style={{ borderColor: 'var(--accent)', color: 'var(--text-muted)' }}
      {...props}
    />
  ),
}

export default function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose-custom">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
