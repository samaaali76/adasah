export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 right-4 text-neutral-500"></i>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ابحث عن مقالة، وسم، أو كاتب..."
        className="w-full pr-11 pl-4 py-3.5 rounded-xl bg-[#161616] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute top-1/2 -translate-y-1/2 left-4 text-neutral-500 hover:text-orange-500 transition-colors"
          aria-label="مسح البحث"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </div>
  )
}
