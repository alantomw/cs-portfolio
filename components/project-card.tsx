"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useTheme } from "./theme-provider"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  delay?: number
}

export function ProjectCard({ title, description, tech, github, demo, delay = 0 }: ProjectCardProps) {
  const { theme } = useTheme()

  return (
    <Card
      className={`p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group backdrop-blur-sm ${
        theme === "dark"
          ? "bg-slate-900/50 border-slate-800 hover:bg-slate-900/80 hover:shadow-slate-900/20"
          : "bg-slate-50/80 border-slate-200 hover:bg-slate-100/80 hover:shadow-slate-200/20"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <h3 className={`text-xl font-medium transition-colors duration-300 ${
          theme === "dark"
            ? "text-white group-hover:text-slate-100"
            : "text-black group-hover:text-slate-800"
        }`}>
          {title}
        </h3>
        <p className={`leading-relaxed transition-colors duration-300 ${
          theme === "dark"
            ? "text-slate-400 group-hover:text-slate-300"
            : "text-slate-600 group-hover:text-slate-700"
        }`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={item}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                theme === "dark"
                  ? "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
              }`}
              style={{ animationDelay: `${delay + index * 100}ms` }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 pt-2">
          {github && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              <Link href={github} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          )}
          {demo && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              <Link href={demo} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}
