export default function ViewToggle({ view, onChange }) {
  return (
    <div className="flex items-center bg-[#161616] rounded-xl p-1 border border-[#262626]">
      <button
        onClick={() => onChange('grid')}
        aria-label="عرض شبكي"
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          view === 'grid' ? 'bg-orange-500 text-white' : 'text-neutral-500 hover:text-white'
        }`}
      >
        <i className="fa-solid fa-table-cells-large"></i>
      </button>
      <button
        onClick={() => onChange('list')}
        aria-label="عرض قائمة"
        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
          view === 'list' ? 'bg-orange-500 text-white' : 'text-neutral-500 hover:text-white'
        }`}
      >
        <i className="fa-solid fa-list"></i>
      </button>
    </div>
  )
}
