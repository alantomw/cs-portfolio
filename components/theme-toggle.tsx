"use client"

import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsDark(!isDark)}
      className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </Button>
  )
}
