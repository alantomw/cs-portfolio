"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  delay?: number
}

export function ProjectCard({ title, description, tech, github, demo, delay = 0 }: ProjectCardProps) {
  return (
    <Card
      className="bg-slate-900/50 border-slate-800 p-6 hover:bg-slate-900/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-900/20 group backdrop-blur-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-medium text-white group-hover:text-slate-100 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={item}
              className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm hover:bg-slate-700/50 transition-all duration-300"
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
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
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
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-105"
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
