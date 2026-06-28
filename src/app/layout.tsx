import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const SITE_URL = 'https://adith-widhiantara.github.io'
const NAME = 'Aditya Saktyawan Widhiantara'
const TITLE = `${NAME} — Software Engineer`
const DESCRIPTION =
  'Software Engineer and Open-Source Creator with deep expertise in architecting high-performance enterprise systems. Specializing in PHP, Laravel, Java, and scalable backend architecture.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'Full Stack Developer',
    'PHP',
    'Laravel',
    'Java',
    'Spring',
    'React',
    'Next.js',
    'Open Source',
    'Indonesia',
  ],
  authors: [{ name: NAME, url: 'https://github.com/adith-widhiantara' }],
  creator: NAME,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: NAME,
    images: [{ url: '/photo.jpeg', width: 800, height: 800, alt: NAME }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/photo.jpeg'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: NAME,
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpeg`,
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/adith-widhiantara',
    'https://linkedin.com/in/aditya-s-widhiantara',
  ],
  knowsAbout: ['PHP', 'Laravel', 'Java', 'Spring', 'React', 'Next.js', 'PostgreSQL', 'RabbitMQ'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} font-sans`}>{children}</body>
    </html>
  )
}
