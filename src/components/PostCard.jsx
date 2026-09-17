import { Link } from 'react-router-dom'
import { categories } from '../data'
import { colorFor } from '../data/categoryColors'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PostCard({ post, view = 'grid' }) {
  const cat = categories.find((c) => c.name === post.category)
  const color = colorFor(cat?.color)

  if (view === 'list') {
    return (
      <article className="group card overflow-hidden">
        <Link to={`/blog/${post.slug}`} className="flex flex-col sm:flex-row">
          <div className="relative sm:w-72 h-52 sm:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${color.badge}`}>
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col justify-center flex-1">
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
              <span className="flex items-center gap-1">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
              <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
              <span>{formatDate(post.date)}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-neutral-400 mb-4 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group card overflow-hidden h-full flex flex-col">
      <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${color.badge} bg-[#0a0a0a]/80 backdrop-blur-sm`}>
              {post.category}
            </span>
          </div>
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                <i className="fa-solid fa-star text-[10px]"></i>
                مميز
              </span>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-auto">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />
              <div>
                <p className="text-sm font-medium text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <i className="fa-solid fa-arrow-left text-orange-500 group-hover:text-white transition-colors duration-300 text-xs"></i>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
