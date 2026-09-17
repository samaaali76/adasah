import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { posts } from '../data'
import PostCard from '../components/PostCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ViewToggle from '../components/ViewToggle'
import Pagination from '../components/Pagination'

const PAGE_SIZE = 6

export default function Blog() {
  const [params, setParams] = useSearchParams()

  const search = params.get('q') || ''
  const category = params.get('category') || 'الكل'
  const view = params.get('view') || 'grid'
  const page = parseInt(params.get('page') || '1', 10)

  function updateParam(key, value, resetPage = true) {
    const next = new URLSearchParams(params)
    if (value && value !== 'الكل' && value !== '') {
      next.set(key, value)
    } else {
      next.delete(key)
    }
    if (resetPage) next.delete('page')
    setParams(next)
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return posts.filter((p) => {
      const matchesCategory = category === 'الكل' || p.category === category
      if (!matchesCategory) return false
      if (!q) return true
      const haystack = [p.title, p.excerpt, p.author.name, ...(p.tags || [])].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [search, category])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const pagePosts = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  function goToPage(p) {
    const next = new URLSearchParams(params)
    if (p > 1) next.set('page', String(p))
    else next.delete('page')
    setParams(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label mb-4">
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            مدونتنا
          </span>
          <h1 className="section-title text-white">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="section-subtitle">تصفح، ابحث، وصنّف حسب ما يهمك</p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-4 lg:items-center lg:justify-between mb-6">
          <div className="w-full lg:max-w-md">
            <SearchBar value={search} onChange={(v) => updateParam('q', v)} />
          </div>
          <div className="w-full lg:w-auto">
            <CategoryFilter active={category} onChange={(v) => updateParam('category', v)} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-10">
          <ViewToggle view={view} onChange={(v) => updateParam('view', v, false)} />
          <p className="text-sm text-neutral-500">
            {filtered.length > 0 ? `عرض ${filtered.length} مقالة` : 'لا توجد نتائج'}
          </p>
        </div>

        {pagePosts.length === 0 ? (
          <div className="text-center py-24">
            <i className="fa-solid fa-camera-retro text-5xl text-neutral-700 mb-4"></i>
            <p className="text-neutral-400 text-lg mb-2">لم نعثر على أي مقالة تطابق بحثك</p>
            <p className="text-neutral-600 text-sm">جرّب كلمات مختلفة أو اختر تصنيفاً آخر</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagePosts.map((post) => (
              <PostCard key={post.id} post={post} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {pagePosts.map((post) => (
              <PostCard key={post.id} post={post} view="list" />
            ))}
          </div>
        )}

        <Pagination page={safePage} totalPages={totalPages} onChange={goToPage} />
      </div>
    </section>
  )
}