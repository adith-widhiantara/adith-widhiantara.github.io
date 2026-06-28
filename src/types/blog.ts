export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  published: boolean
}

export interface Post extends PostMeta {
  content: string
}
