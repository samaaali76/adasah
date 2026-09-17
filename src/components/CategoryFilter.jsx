import { categories } from '../data'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('الكل')}
        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
          active === 'الكل'
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent'
            : 'bg-[#161616] text-neutral-400 border-[#262626] hover:text-white hover:border-orange-500/30'
        }`}
      >
        جميع المقالات
      </button>
      {categories.map((c) => (
        <button
          key={c.name}
          onClick={() => onChange(c.name)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
            active === c.name
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent'
              : 'bg-[#161616] text-neutral-400 border-[#262626] hover:text-white hover:border-orange-500/30'
          }`}
        >
          {c.name}
          <span className="mr-1.5 opacity-60">({c.count})</span>
        </button>
      ))}
    </div>
  )
}