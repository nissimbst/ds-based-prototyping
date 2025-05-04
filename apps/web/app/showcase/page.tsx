"use client" // Mark as client component if using hooks or event handlers, good practice for showcase pages

import React from "react"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function ShowcasePage() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <h1 className="text-3xl font-bold mb-8">UI Component Showcase</h1>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">?</Button> {/* Placeholder for icon button */}
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the main content area of the card.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Footer Action</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Input & Label Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Input & Label</h2>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email-showcase">Email</Label>
          <Input type="email" id="email-showcase" placeholder="your@email.com" />
          <Label htmlFor="password-showcase">Password</Label>
          <Input type="password" id="password-showcase" placeholder="Enter password" />
          <Label htmlFor="disabled-showcase">Disabled Input</Label>
          <Input id="disabled-showcase" placeholder="Can't type here" disabled />
        </div>
      </section>

      {/* Add more component showcases here as they are built */}

    </div>
  )
} 