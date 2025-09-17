import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function VideosPage() {
  const videos = [
    { id: 1, title: "Sculptures Of Anything Goes", thumbnail: "/images/video-1.jpg" },
    { id: 2, title: "I Ain't Quite Where I Think I Am", thumbnail: "/images/video-2.jpg" },
    { id: 3, title: "There'd Better Be A Mirrorball", thumbnail: "/images/video-3.jpg" },
    { id: 4, title: "Body Paint", thumbnail: "/images/video-4.jpg" },
    { id: 5, title: "Black Treacle", thumbnail: "/images/video-5.jpg" },
    { id: 6, title: "Arabella", thumbnail: "/images/video-6.jpg" },
    { id: 7, title: "Evil Twin", thumbnail: "/images/video-7.jpg" },
    { id: 8, title: "You And I (feat Richard Hawley)", thumbnail: "/images/video-8.jpg" },
    { id: 9, title: "Why'd You Only Call Me When You're High?", thumbnail: "/images/video-9.jpg" },
    { id: 10, title: "When The Sun Goes Down", thumbnail: "/images/video-10.jpg" },
    { id: 11, title: "Tranquility Base Hotel & Casino", thumbnail: "/images/video-11.jpg" },
    { id: 12, title: "Snap Out Of It", thumbnail: "/images/video-12.jpg" },
    { id: 13, title: "R U Mine?", thumbnail: "/images/video-13.jpg" },
    { id: 14, title: "One For The Road", thumbnail: "/images/video-14.jpg" },
    { id: 15, title: "Four Out Of Five", thumbnail: "/images/video-15.jpg" },
  ]

  return (
    <div className="min-h-screen bg-sage">
      <Navigation />

      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold text-center text-primary mb-16">Videos</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {videos.slice(0, 6).map((video) => (
              <div key={video.id} className="text-center">
                <div className="relative group cursor-pointer mb-4">
                  <Image
                    src={video.thumbnail || "/placeholder.svg?height=200&width=300"}
                    alt={video.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full bg-background/90 text-primary border border-primary hover:bg-primary hover:text-background"
                      >
                        Play video
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground">{video.title}</h3>
              </div>
            ))}
          </div>

          {/* Arctic Monkeys Logo in center */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-primary tracking-tight">
              THE
              <br />
              GAMMA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.slice(6).map((video) => (
              <div key={video.id} className="text-center">
                <div className="relative group cursor-pointer mb-4">
                  <Image
                    src={video.thumbnail || "/placeholder.svg?height=200&width=300"}
                    alt={video.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-full bg-background/90 text-primary border border-primary hover:bg-primary hover:text-background"
                      >
                        Play video
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-foreground">{video.title}</h3>
              </div>
            ))}
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
