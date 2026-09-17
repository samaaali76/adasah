import { Link } from 'react-router-dom'
import { siteInfo, categories } from '../data'

const social = [
  { key: 'twitter', icon: 'fa-brands fa-x-twitter' },
  { key: 'github', icon: 'fa-brands fa-github' },
  { key: 'linkedin', icon: 'fa-brands fa-linkedin-in' },
  { key: 'youtube', icon: 'fa-brands fa-youtube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-300 border-t border-[#262626]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/logo.png"
                alt={siteInfo.name}
                className="w-11 h-11 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <span className="text-xl font-bold text-white">{siteInfo.name}</span>
            </Link>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{siteInfo.description}</p>
            <div className="flex gap-2">
              {social.map((s) => (
                <a
                  key={s.key}
                  href={siteInfo.social[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={s.key}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              استكشف
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              التصنيفات
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link
                    to={`/blog?category=${encodeURIComponent(c.name)}`}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              ابقى على اطلاع
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <p className="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                placeholder="أدخل بريدك الإلكتروني"
                type="email"
                className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
              />
              <button type="submit" className="w-full btn-primary text-sm">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © 2026 {siteInfo.name}. صنع بكل <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}