"use client"

interface SkillBadgeProps {
  skill: string
  delay?: number
}

export function SkillBadge({ skill, delay = 0 }: SkillBadgeProps) {
  return (
    <span
      className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm hover:bg-slate-700/50 hover:text-white hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  )
}
