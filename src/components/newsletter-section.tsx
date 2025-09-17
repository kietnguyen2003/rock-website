"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", formData)
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Get the latest news</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name*
              </label>
              <Input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-background/50 border-primary"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name*
              </label>
              <Input
                id="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-background/50 border-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email*
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background/50 border-primary"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
              Country*
            </label>
            <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
              <SelectTrigger className="bg-background/50 border-primary">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-xs text-foreground/60 space-y-2">
            <p>
              By subscribing to the newsletter you agree to the{" "}
              <a href="#" className="underline hover:text-primary">
                terms of use
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-primary">
                privacy policy
              </a>
              .
            </p>
            <p>
              You can unsubscribe at any time by clicking the unsubscribe link which you will find at the bottom of
              every newsletter.
            </p>
          </div>

          <div className="text-center">
            <Button type="submit" className="bg-primary text-background hover:bg-primary/90 px-8">
              Join the Mailing List
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
