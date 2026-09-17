import raw from './posts.json'

// نتعامل مع الملف ده بالظبط زي أي Response راجعلنا من الـ Backend
export const posts = raw.posts
export const categories = raw.categories
export const siteInfo = raw.siteInfo

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}

export function getRelatedPosts(post, limit = 3) {
  if (!post) return []
  return posts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, limit)
}
