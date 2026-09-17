import { Link } from 'react-router-dom'
import { posts, categories, siteInfo } from '../data'
import { iconFor } from '../data/categoryColors'
import PostCard from '../components/PostCard'
import FeaturedPostCard from '../components/FeaturedPostCard'

const stats = [
  { icon: 'fa-solid fa-newspaper', value: '+50', label: 'مقالة' },
  { icon: 'fa-solid fa-users', value: '+10ألف', label: 'قارئ' },
  { icon: 'fa-solid fa-folder-open', value: '4', label: 'تصنيفات' },
  { icon: 'fa-solid fa-pen-nib', value: '6', label: 'كاتب' },
]

export default function Home() {
  const featured = posts.filter((p) => p.featured).slice(0, 3)
  const featuredIds = new Set(featured.map((p) => p.id))
  const latest = [...posts]
    .filter((p) => !featuredIds.has(p.id))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
          style={{ animationDelay: '-2s' }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="section-label inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">مرحباً بك في {siteInfo.name}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/blog" className="btn-primary group">
                <span>استكشف المقالات</span>
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              </Link>
              <Link to="/about" className="btn-secondary">
                <i className="fa-regular fa-circle-question"></i>
                <span>اعرف المزيد</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                  <i className={`${s.icon} text-2xl text-orange-500 mb-1`}></i>
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</p>
                  <p className="text-neutral-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">مميز</span>
              <h2 className="section-title text-white">مقالات مختارة</h2>
              <p className="section-subtitle max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            </Link>
          </div>

                    <div className="space-y-8">
            {featured.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label mb-4">التصنيفات</span>
            <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
            <p className="section-subtitle max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((c) => (
              <Link
                key={c.name}
                to={`/blog?category=${encodeURIComponent(c.name)}`}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <i className={`${iconFor(c.name)} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">{c.name}</h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {c.count} مقالة
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="section-label mb-4">الأحدث</span>
              <h2 className="section-title text-white">أحدث المقالات</h2>
              <p className="section-subtitle max-w-lg">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link to="/blog" className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors">
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((post) => (
              <PostCard key={post.id} post={post} view="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6"
            >
              <input
                placeholder="أدخل بريدك الإلكتروني"
                type="email"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              />
              <button type="submit" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                اشترك الآن
              </button>
            </form>
            <p className="text-sm text-neutral-500">بدون إزعاج • إلغاء الاشتراك في أي وقت</p>
          </div>
        </div>
      </section>
    </>
  )
}
