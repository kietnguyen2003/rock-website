"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { getAllVideos } from "@/lib/videos-data"
import { Play } from "lucide-react"
import { useState } from "react"

export default function VideosPage() {
  const videos = getAllVideos()
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideo(videoId)
  }

  const handleCloseVideo = () => {
    setPlayingVideo(null)
  }

  return (
    <div className="min-h-screen bg-sage">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
                    {/* Arctic Monkeys Logo in center */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-primary tracking-tight">
              THE
              <br />
              GAMMA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {videos.slice(0, 6).map((video) => {
              const isPlaying = playingVideo === video.id
              const youtubeId = getYouTubeVideoId(video.youtube_link)

              return (
                <div key={video.id} className="text-center">
                  <div className="relative group cursor-pointer mb-4">
                    {isPlaying && youtubeId ? (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&enablejsapi=1`}
                          title={video.song_name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                        <button
                          onClick={handleCloseVideo}
                          className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black/90 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={video.thumbnail}
                          alt={video.song_name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/60 transition-colors">
                          <div className="bg-background/90 rounded-full p-3">
                            <Play className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="flex-1 bg-background/90 text-primary border border-primary hover:bg-primary hover:text-background"
                              onClick={() => handlePlayVideo(video.id)}
                            >
                              Play video
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="px-2 bg-background/90"
                              asChild
                            >
                              <a href={video.youtube_link} target="_blank" rel="noopener noreferrer">
                                ↗
                              </a>
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{video.song_name}</h3>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.slice(6).map((video) => {
              const isPlaying = playingVideo === video.id
              const youtubeId = getYouTubeVideoId(video.youtube_link)

              return (
                <div key={video.id} className="text-center">
                  <div className="relative group cursor-pointer mb-4">
                    {isPlaying && youtubeId ? (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&enablejsapi=1`}
                          title={video.song_name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                        <button
                          onClick={handleCloseVideo}
                          className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-1 hover:bg-black/90 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={video.thumbnail}
                          alt={video.song_name}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/60 transition-colors">
                          <div className="bg-background/90 rounded-full p-3">
                            <Play className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="flex-1 bg-background/90 text-primary border border-primary hover:bg-primary hover:text-background"
                              onClick={() => handlePlayVideo(video.id)}
                            >
                              Play video
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="px-2 bg-background/90"
                              asChild
                            >
                              <a href={video.youtube_link} target="_blank" rel="noopener noreferrer">
                                ↗
                              </a>
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{video.song_name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex justify-between items-center">
            <nav className="flex space-x-8">
              <a href="/" className="text-primary hover:text-primary/80 transition-colors">
                Home
              </a>
              <a href="/videos" className="text-primary hover:text-primary/80 transition-colors font-semibold">
                Videos
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
