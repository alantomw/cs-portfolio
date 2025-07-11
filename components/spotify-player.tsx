"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { useState } from "react"

export function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Card className="bg-slate-800 border-slate-700 p-6 max-w-md">
      <div className="space-y-4">
        {/* Album Art */}
        <div className="aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
        </div>

        {/* Song Info */}
        <div className="text-center">
          <h3 className="text-white font-medium">Good 4 U</h3>
          <p className="text-slate-400 text-sm">Olivia Rodrigo</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-700 rounded-full h-1">
            <div className="bg-green-500 h-1 rounded-full w-1/3"></div>
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>1:23</span>
            <span>3:58</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <SkipBack className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-green-500"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
