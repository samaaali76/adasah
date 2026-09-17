import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[90vh] flex items-center bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <i className="fa-solid fa-camera-retro text-7xl text-orange-500/50 mb-8"></i>
        <p className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          الصفحة اللي بتدور عليها مش موجودة
        </h1>
        <p className="text-neutral-400 text-lg mb-10 max-w-md mx-auto">
          يمكن يكون الرابط غلط أو الصفحة اتنقلت لمكان تاني. يلا نرجعلك تاني للمحتوى.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary">
            <i className="fa-solid fa-house"></i>
            <span>العودة للرئيسية</span>
          </Link>
          <Link to="/blog" className="btn-secondary">
            <i className="fa-solid fa-newspaper"></i>
            <span>تصفح المدونة</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
