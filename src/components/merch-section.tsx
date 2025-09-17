import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MerchSection() {
  const merchItems = [
    {
      id: 1,
      name: "Oscilloscope Logo Tee (Black)",
      image: "/images/merch-1.jpg",
    },
    {
      id: 2,
      name: "I Wanna Be Yours Lyric Tee",
      image: "/images/merch-2.jpg",
    },
    {
      id: 3,
      name: "Classic Logo Tee (Black)",
      image: "/images/merch-3.jpg",
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Official Merch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {merchItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className="bg-background/50 rounded-lg p-6 mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground">{item.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-background bg-transparent"
          >
            Visit the store
          </Button>
        </div>
      </div>
    </section>
  )
}
