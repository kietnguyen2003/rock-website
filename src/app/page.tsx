import { Navigation } from "@/components/navigation"
import { VideosSection } from "@/components/videos-section"
import { NewsletterSection } from "@/components/newsletter-section"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo.jpg"
              alt="The Gamma Logo"
              width={320}
              height={320}
              className="w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 mx-auto rounded-full object-cover"
            />
          </div>

          {/* Band name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary tracking-tight">THE GAMMA</h1>
        </div>
      </main>

      <VideosSection />
      <NewsletterSection />

      <footer className="bg-black/90 text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-xs">
            By continuing to browse this site, you agree to our privacy policy and the use of cookies as described in
            this notice.
          </p>
          <button className="text-xs hover:text-primary transition-colors">✕</button>
        </div>
      </footer>
    </div>
  )
}
