import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { siteInfo } from '../data'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/blog', label: 'المدونة' },
  { to: '/about', label: 'من نحن' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
        : 'text-neutral-400 hover:text-white'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-orange-500/10 text-orange-500 border border-orange-500/30'
        : 'text-neutral-400 hover:bg-[#1a1a1a] hover:text-white'
    }`

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt={siteInfo.name}
              className="w-11 h-11 object-contain group-hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {siteInfo.name}
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                {siteInfo.tagline}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
            aria-label="فتح القائمة"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} w-5 h-5`}></i>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="bg-[#161616] rounded-2xl p-4 border border-[#262626]">
              <div className="flex flex-col space-y-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    className={mobileLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <Link
                  to="/blog"
                  onClick={() => setOpen(false)}
                  className="btn-primary text-sm text-center mt-2"
                >
                  ابدأ القراءة
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}