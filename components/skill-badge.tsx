"use client"

import { useTheme } from "./theme-provider"

interface SkillBadgeProps {
  skill: string
  delay?: number
}

export function SkillBadge({ skill, delay = 0 }: SkillBadgeProps) {
  const { theme } = useTheme()

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm ${
        theme === "dark"
          ? "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
          : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80 hover:text-slate-900"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  )
}
