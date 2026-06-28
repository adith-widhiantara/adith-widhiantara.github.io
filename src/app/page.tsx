import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import OpenSource from '@/components/sections/OpenSource'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Blog from '@/components/sections/Blog'
import { getAllPosts } from '@/lib/mdx'

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <OpenSource />
        <Projects />
        <Experience />
        <Certifications />
        <Blog posts={latestPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
