import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteInfo, categories } from '../data'

export default function About() {
  useEffect(() => {
    document.title = `من نحن - ${siteInfo.name}`
  }, [])

  return (
    <section className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-4">من نحن</span>
          <h1 className="section-title text-white">
            قصة <span className="gradient-text">{siteInfo.name}</span>
          </h1>
          <p className="section-subtitle">{siteInfo.description}</p>
        </div>

        <div className="glass-card p-8 md:p-12 mb-12 space-y-6 text-neutral-300 leading-loose text-lg">
          <p>
            بدأت {siteInfo.name} كفكرة بسيطة: مشاركة شغف التصوير الفوتوغرافي مع كل
            شخص عايز يتعلم، سواء كان مبتدئ لسه ماسك كاميرا لأول مرة، أو محترف بيدور
            على تفاصيل تصقل مهاراته.
          </p>
          <p>
            النهاردة، بنغطي كل حاجة من أساسيات الإضاءة والتكوين، لحد أحدث التقنيات
            في تصوير البورتريه والمناظر الطبيعية، من خلال فريق من الكتّاب والمصورين
            المحترفين.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={`/blog?category=${encodeURIComponent(c.name)}`}
              className="text-center p-4 rounded-2xl bg-[#161616] border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
            >
              <p className="font-bold text-white">{c.name}</p>
              <p className="text-sm text-neutral-500">{c.count} مقالة</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="btn-primary">
            <span>تصفح المقالات</span>
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}
