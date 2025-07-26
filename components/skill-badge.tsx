"use client"

interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm border border-white/10 font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/20">
      {name}
    </span>
  )
}
