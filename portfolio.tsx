"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import { ProjectCard } from "./components/project-card";
import { SkillBadge } from "./components/skill-badge";
import { useTheme } from "./components/theme-provider";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Portfolio() {
  const { theme } = useTheme();
  const [emailRevealed, setEmailRevealed] = useState(false);
  const emailHoldTimeout = useRef<NodeJS.Timeout | null>(null);
  const [showCopyBubble, setShowCopyBubble] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyBubbleRef = useRef<HTMLDivElement | null>(null);
  const [footerEmailRevealed, setFooterEmailRevealed] = useState(false);
  const [footerShowCopy, setFooterShowCopy] = useState(false);
  const [footerCopied, setFooterCopied] = useState(false);
  const footerCopyRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "React",
    "Next.js",
    "Vercel",
    "Git",
    "Linux",
  ];

  const projects = [
    {
      title: "Discord Bot",
      description:
        "discord bot for career development with resume resources, real time job and event tracking, and learning material recommendations",
      tech: ["Python", "Discord.py", "GCP", "Nox"],
      github: "https://github.com/innovateorange/DiscordBot/issues",
      demo: "https://discord.gg/cvqbKxPtHE",
    },
    {
      title: "Flow",
      description:
        "sleek browser extension that helps users maintain focus by blocking distracting elements while browsing",
      tech: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
      github: "https://github.com/alantomw/Flow",
      demo: "https://chromewebstore.google.com/detail/flow/odenofhkafaeedoohodgdndpeeadpndg",
    },
  ];

  useEffect(() => {
    if (!showCopyBubble) return;
    function handleClick(e: MouseEvent) {
      if (
        copyBubbleRef.current &&
        e.target instanceof Node &&
        !copyBubbleRef.current.contains(e.target as Node)
      ) {
        setShowCopyBubble(false);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [showCopyBubble]);

  useEffect(() => {
    if (!footerShowCopy) return;
    function handleClick(e: MouseEvent) {
      if (
        footerCopyRef.current &&
        e.target instanceof Node &&
        !footerCopyRef.current.contains(e.target as Node)
      ) {
        setFooterShowCopy(false);
        setFooterEmailRevealed(false);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [footerShowCopy]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Add a simple header with Japan emoji and theme toggle at the top */}
      <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Japan emoji on the left */}
        <div className="flex items-center">
          <span
            className="text-2xl align-middle hover:scale-110 transition-transform duration-300"
            role="img"
            aria-label="Map of Japan"
          >
            🗾
          </span>
        </div>
        {/* Theme toggle on the right */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Profile Section (Avatar + Name + About Me) */}
      <section id="about" className="max-w-4xl mx-auto px-8 py-12">
        <Card
          className={`p-8 transition-all duration-500 backdrop-blur-sm ${
            theme === "dark"
              ? "bg-[#0a1628]/90 border-[#1e293b]/60"
              : "bg-[#eaf1fb]/80 border-[#b6d0ee]/60"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <img
              src="/images/buttercup.jpg"
              alt="Profile avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-slate-200 dark:border-slate-800 shadow-md"
            />
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight cursor-default">
                Alan Tom
              </h1>
              <div
                className={`space-y-4 leading-relaxed ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <p
                  className={`transition-colors duration-300 ${
                    theme === "dark"
                      ? "hover:text-slate-200"
                      : "hover:text-slate-800"
                  }`}
                >
                  I'm a computer science junior at Syracuse University. In my
                  free time, I lead CuseHacks, a student-run hackathon, and try
                  to travel as much as possible.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-light mb-10 cursor-default">Timeline</h2>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-3 top-0 h-full w-0.5 bg-slate-300 dark:bg-slate-700"
            style={{ zIndex: 0 }}
          />
          {/* Timeline items */}
          {[
            {
              color: "bg-blue-600",
              company: "iSchool at Syracuse University",
              title: "NSF REU Reseacher",
              years: "2025 - Now",
              desc: "using NLP to analyze Trump's social media activities impact on the stock market",
            },
            {
              color: "bg-yellow-400",
              company: "Innovate Orange (CuseHacks)",
              title: "President",
              years: "2024 - Now",
              desc: "leading a team of 20+ students to organize Syracuse University's hackathons and datathons",
            },
            {
              color: "bg-green-600",
              company: "Micron Technology",
              title: "Software Development Engineer Intern",
              years: "2025 - 2025",
              desc: "developed an interactive UI for an educational semiconductor game",
            },
            {
              color: "bg-red-600",
              company: "Data Lab at Syracuse University",
              title: "Research Assistant",
              years: "2024 - 2025",
              desc: "compared LLM memory with human memory",
            },
          ].map((item, idx) => (
            <div
              key={item.company + item.title}
              className="flex items-start mb-12 last:mb-0 relative group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.025] hover:shadow-2xl focus-within:scale-[1.025] focus-within:shadow-2xl"
              style={{ zIndex: 1 }}
              tabIndex={0}
            >
              {/* Dot with glow on hover */}
              <span
                className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${item.color} transition-all duration-300 group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.15)] group-hover:brightness-125 group-focus:shadow-[0_0_0_6px_rgba(59,130,246,0.18)]`}
                style={{ zIndex: 2 }}
              />
              <div className="ml-8 flex-1 flex flex-row justify-between items-start">
                <div>
                  <span className="font-bold text-base md:text-lg group-hover:text-white group-focus:text-white transition-colors duration-300">
                    {item.company}
                  </span>
                  <div className="italic text-slate-500 dark:text-slate-300 text-base mb-1 group-hover:text-slate-200 transition-colors duration-300">
                    {item.title}
                  </div>
                  <ul className="list-disc ml-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    <li>{item.desc}</li>
                  </ul>
                </div>
                <span className="text-md text-slate-400 dark:text-slate-400 ml-4 whitespace-nowrap min-w-[90px] text-right pt-1 group-hover:text-white transition-colors duration-300">
                  {item.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-8 py-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-light cursor-default">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex flex-row justify-between items-start w-full group cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.025] hover:shadow-2xl focus-within:scale-[1.025] focus-within:shadow-2xl"
                tabIndex={0}
              >
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-base md:text-lg group-hover:text-white group-focus:text-white transition-colors duration-300">
                    {project.title}
                  </span>
                  <div
                    className={`mt-1 text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl group-hover:text-slate-200 transition-colors duration-300`}
                  >
                    {project.description}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-6 mt-1 justify-end min-w-[120px]">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-focus:scale-105 group-focus:brightness-110 ${
                        tech.toLowerCase() === "gcp"
                          ? "bg-blue-600 text-white"
                          : tech.toLowerCase() === "python"
                          ? "bg-yellow-300 text-black"
                          : tech.toLowerCase() === "html"
                          ? "bg-orange-500 text-white"
                          : tech.toLowerCase() === "css"
                          ? "bg-purple-600 text-white"
                          : tech.toLowerCase().includes("react")
                          ? "bg-blue-500 text-white"
                          : tech.toLowerCase().includes("typescript")
                          ? "bg-blue-400 text-white"
                          : tech.toLowerCase().includes("javascript")
                          ? "bg-yellow-400 text-black"
                          : tech.toLowerCase().includes("node")
                          ? "bg-green-500 text-white"
                          : tech.toLowerCase().includes("aws")
                          ? "bg-orange-400 text-white"
                          : tech.toLowerCase().includes("express")
                          ? "bg-gray-800 text-white"
                          : tech.toLowerCase().includes("supabase")
                          ? "bg-green-700 text-white"
                          : tech.toLowerCase().includes("discord")
                          ? "bg-indigo-500 text-white"
                          : tech.toLowerCase().includes("stripe")
                          ? "bg-purple-500 text-white"
                          : tech.toLowerCase().includes("api")
                          ? "bg-green-400 text-white"
                          : tech.toLowerCase().includes("nox")
                          ? "bg-gray-500 text-white"
                          : "bg-slate-600 text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with contact icons and copyright */}
      <footer
        className={`mt-12 py-8 px-8 transition-colors duration-300 text-center backdrop-blur-sm ${
          theme === "dark"
            ? "bg-black border-t border-[#222]"
            : "bg-[#eaf1fb]/80 border-t border-[#b6d0ee]/60"
        }`}
      >
        <div className="flex justify-center space-x-4 mb-4">
          {/* Contact icons */}
          <Button
            variant="ghost"
            size="sm"
            asChild={false}
            className={`transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-black"
            }`}
            onClick={() => {
              if (!footerEmailRevealed) {
                setFooterEmailRevealed(true);
              } else if (!footerShowCopy) {
                setFooterShowCopy(true);
              }
            }}
          >
            <span className="flex items-center relative">
              <Mail className="w-4 h-4 mr-2" />
              {footerEmailRevealed ? (
                <>
                  <span className="underline decoration-dotted decoration-2 underline-offset-4 cursor-pointer">
                    alanwtom@outlook.com
                  </span>
                  {/* Copy popover */}
                  {footerShowCopy && (
                    <div
                      ref={footerCopyRef}
                      className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 z-50 rounded-xl shadow-lg px-2 py-1 text-xs font-medium transition-all duration-200 bg-black text-white border border-slate-700`}
                    >
                      {footerCopied ? (
                        <span className="text-green-400">Copied!</span>
                      ) : (
                        <div
                          role="button"
                          tabIndex={0}
                          className="inline-block px-1 py-0.5 hover:underline focus:outline-none cursor-pointer select-none font-normal transition-colors duration-150"
                          onClick={async (e) => {
                            e.stopPropagation();
                            await navigator.clipboard.writeText(
                              "alanwtom@outlook.com"
                            );
                            setFooterCopied(true);
                            setTimeout(() => {
                              setFooterShowCopy(false);
                              setFooterEmailRevealed(false);
                              setFooterCopied(false);
                            }, 1200);
                          }}
                          onKeyDown={async (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              await navigator.clipboard.writeText(
                                "alanwtom@outlook.com"
                              );
                              setFooterCopied(true);
                              setTimeout(() => {
                                setFooterShowCopy(false);
                                setFooterEmailRevealed(false);
                                setFooterCopied(false);
                              }, 1200);
                            }
                          }}
                        >
                          Copy Email
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <>Email</>
              )}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-black"
            }`}
          >
            <Link href="https://github.com/alantomw" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={`transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-black"
            }`}
          >
            <Link href="https://www.linkedin.com/in/alan-tom/" target="_blank">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
        </div>
        <p
          className={`text-xs mt-2 transition-colors duration-300 ${
            theme === "dark"
              ? "text-slate-500 hover:text-slate-400"
              : "text-slate-500 hover:text-slate-600"
          }`}
        >
          © 2025 Alan Tom. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
