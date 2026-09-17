import { useEffect } from 'react'
import { siteInfo } from '../data'

export default function StaticPage({ label, title, paragraphs }) {
  useEffect(() => {
    document.title = `${title} - ${siteInfo.name}`
  }, [title])

  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-4">{label}</span>
          <h1 className="section-title text-white">{title}</h1>
        </div>

        <div className="glass-card p-8 md:p-12 space-y-6 text-neutral-300 leading-loose text-lg">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
