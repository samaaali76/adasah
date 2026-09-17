export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-orange-500/30 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="الصفحة السابقة"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300 ${
            p === page
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
              : 'bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-orange-500/30'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white hover:border-orange-500/30 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="الصفحة التالية"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    </div>
  )
}
