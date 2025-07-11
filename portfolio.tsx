"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mountain, Mail, Github, Linkedin, ArrowRight } from "lucide-react"
import { ThemeToggle } from "./components/theme-toggle"
import { ProjectCard } from "./components/project-card"
import { SkillBadge } from "./components/skill-badge"
import { useTheme } from "./components/theme-provider"

export default function Portfolio() {
  const { theme } = useTheme()

  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
  ]

  const projects = [
    {
      title: "Task Management App",
      description:
        "A full-stack web application for team collaboration with real-time updates, user authentication, and project management features.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, data visualization, and responsive design.",
      tech: ["Next.js", "TypeScript", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce API",
      description:
        "RESTful API for an e-commerce platform with authentication, payment processing, and inventory management.",
      tech: ["Python", "FastAPI", "MongoDB", "Stripe API"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      theme === "dark"
        ? "bg-black text-white"
        : "bg-white text-black"
    }`}>
                      {/* Navigation */}
        <nav className={`backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-black/80 border-b border-slate-800/50"
            : "bg-white/80 border-b border-slate-200/50"
        }`}>
          <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Mountain className={`w-6 h-6 hover:scale-110 transition-transform duration-300 ${
                theme === "dark" ? "text-white" : "text-black"
              }`} />
            </div>

            {/* Navigation links in center */}
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:scale-105 relative group ${
                    theme === "dark"
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-black"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    theme === "dark" ? "bg-white" : "bg-black"
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Theme toggle on the right */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-4xl mx-auto px-8 py-20">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight hover:scale-105 transition-transform duration-500 cursor-default">
              Alan Tom
            </h1>
            <p className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              i love osaka!
            </p>
          </div>

          <div className="flex space-x-4 pt-4">
            {[
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
              { icon: Github, href: "https://github.com/alantomw", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/alan-tom/", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }, index) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className={`transition-all duration-300 hover:scale-110 ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-600 hover:text-black"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={href} target="_blank">
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

              {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto px-8 py-20">
          <Card className={`p-8 transition-all duration-500 backdrop-blur-sm ${
            theme === "dark"
              ? "bg-slate-900/30 border-slate-800/50 hover:bg-slate-900/50"
              : "bg-slate-50/80 border-slate-200/50 hover:bg-slate-100/80"
          }`}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              About Me
            </h2>
            <div className={`space-y-4 leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}>
              <p className={`transition-colors duration-300 ${
                theme === "dark" ? "hover:text-slate-200" : "hover:text-slate-800"
              }`}>
                I'm a computer science junior at Syracuse University. In my free time, I lead CuseHacks, a student-run hackathon, and try to travel as much as possible.
              </p>
              <p className={`transition-colors duration-300 ${
                theme === "dark" ? "hover:text-slate-200" : "hover:text-slate-800"
              }`}>
                Currently learning full-stack development and always looking for opportunities to collaborate on
                interesting projects.
              </p>
            </div>

            <div className="pt-6">
              <h3 className={`text-xl font-medium mb-4 hover:scale-105 transition-transform duration-300 cursor-default ${
                theme === "dark" ? "text-white" : "text-black"
              }`}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-8 py-20">
        <div className="space-y-12">
          <h2 className="text-3xl font-light hover:scale-105 transition-transform duration-300 cursor-default">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>

              {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto px-8 py-20">
          <Card className={`p-12 text-center hover:scale-[1.02] transition-all duration-500 backdrop-blur-sm ${
            theme === "dark"
              ? "bg-gradient-to-r from-slate-900/30 to-slate-800/30 border-slate-700/50"
              : "bg-gradient-to-r from-slate-50/80 to-slate-100/80 border-slate-200/50"
          }`}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light hover:scale-105 transition-transform duration-300 cursor-default">
              Let's Connect
            </h2>
            <p className={`text-lg max-w-md mx-auto ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Always interested in new opportunities and collaborations. Let's build something amazing together.
            </p>
            <Button
              asChild
              className={`transition-all duration-300 hover:scale-105 group ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-slate-200"
                  : "bg-black text-white hover:bg-slate-800"
              }`}
            >
              <Link href="mailto:alex@example.com">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className={`border-t mt-20 py-8 backdrop-blur-sm transition-colors duration-300 ${
        theme === "dark" ? "border-slate-800/50" : "border-slate-200/50"
      }`}>
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className={`text-xs mt-2 transition-colors duration-300 ${
            theme === "dark" ? "text-slate-500 hover:text-slate-400" : "text-slate-500 hover:text-slate-600"
          }`}>
            © 2025 Alan Tom. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
