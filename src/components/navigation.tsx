import Link from "next/link"
import { Youtube } from "lucide-react"
import { SiSpotify, SiTiktok, SiApplemusic } from "react-icons/si"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/videos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Videos
            </Link>
          </nav>

          {/* Right Social Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://open.spotify.com/artist/0yvZDoRfiyo4dw1YfJM413?si=JuH1rLSmQfWR2sEfJFMu_A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Spotify"
            >
              <SiSpotify className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com/@TheGamma_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://music.apple.com/us/artist/the-gamma/1782071015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Apple Music"
            >
              <SiApplemusic className="w-5 h-5" />
            </Link>
            <Link
              href="https://tiktok.com/@thegamma_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
