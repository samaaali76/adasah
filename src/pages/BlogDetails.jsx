import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug, getRelatedPosts, categories } from '../data'
import { colorFor } from '../data/categoryColors'
import PostCard from '../components/PostCard'
import PostContent from '../components/PostContent'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (post) document.title = `${post.title} - عدسة`
  }, [post])

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const cat = categories.find((c) => c.name === post.category)
  const color = colorFor(cat?.color)
  const related = getRelatedPosts(post)

  return (
    <article className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors mb-8">
          <i className="fa-solid fa-arrow-right"></i>
          العودة إلى المدونة
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${color.badge}`}>{post.category}</span>
          <span className="flex items-center gap-1 text-sm text-neutral-500">
            <i className="fa-regular fa-clock"></i>
            {post.readTime}
          </span>
          <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
          <span className="text-sm text-neutral-500">{formatDate(post.date)}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[#262626]">
          <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-[#262626]" />
          <div>
            <p className="font-semibold text-white">{post.author.name}</p>
            <p className="text-sm text-neutral-500">{post.author.role}</p>
          </div>
        </div>

        <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden mb-10">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <PostContent content={post.content} />

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[#262626]">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/blog?q=${encodeURIComponent(tag)}`}
                className="px-3 py-1.5 rounded-full text-sm bg-[#161616] border border-[#262626] text-neutral-400 hover:text-orange-500 hover:border-orange-500/30 transition-all duration-300"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </div>

      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h2 className="section-title text-white mb-8">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <PostCard key={p.id} post={p} view="grid" />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
