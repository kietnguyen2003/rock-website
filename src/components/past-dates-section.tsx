import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PastDatesSection() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Past Dates</h2>

        <div className="mb-8">
          <Select defaultValue="2025">
            <SelectTrigger className="w-full max-w-xs mx-auto bg-background/50 border-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <p className="text-foreground/70 mb-8">No dates for 2025</p>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-background bg-transparent"
        >
          View all past dates
        </Button>
      </div>
    </section>
  )
}
