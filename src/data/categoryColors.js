export const colorMap = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'text-emerald-400',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  purple: {
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: 'text-purple-400',
    gradient: 'from-purple-500 to-purple-600',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'text-blue-400',
    gradient: 'from-blue-500 to-blue-600',
  },
  orange: {
    badge: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    icon: 'text-orange-500',
    gradient: 'from-orange-500 to-orange-600',
  },
}

export function colorFor(colorName) {
  return colorMap[colorName] || colorMap.orange
}

const categoryIcons = {
  'إضاءة': 'fa-solid fa-sun',
  'بورتريه': 'fa-solid fa-user',
  'مناظر طبيعية': 'fa-solid fa-mountain-sun',
  'تقنيات': 'fa-solid fa-sliders',
  'معدات': 'fa-solid fa-camera',
}

export function iconFor(categoryName) {
  return categoryIcons[categoryName] || 'fa-solid fa-camera'
}
