import { Link } from 'react-router-dom'
import { categories } from '../data'
import { colorFor } from '../data/categoryColors'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function FeaturedPostCard({ post }) {
  const cat = categories.find((c) => c.name === post.category)
  const color = colorFor(cat?.color)

  return (
    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-72 md:h-[400px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                  <i className="fa-solid fa-star text-[10px]"></i>
                  مميز
                </span>
              </div>
            )}
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${color.badge}`}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
              {post.title}
            </h2>
            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                  />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author.name}</p>
                  <p className="text-xs text-neutral-500">{formatDate(post.date)}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}