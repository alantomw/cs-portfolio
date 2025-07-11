import { Card } from "@/components/ui/card"

interface Track {
  title: string
  artist: string
  color: string
}

interface MusicGridProps {
  tracks: Track[]
}

export function MusicGrid({ tracks }: MusicGridProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {tracks.map((track, index) => (
        <Card
          key={index}
          className="bg-slate-800 border-slate-700 p-3 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <div className={`aspect-square ${track.color} rounded mb-2`}></div>
          <div className="text-xs">
            <p className="text-white font-medium truncate">{track.title}</p>
            <p className="text-slate-400 truncate">{track.artist}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
