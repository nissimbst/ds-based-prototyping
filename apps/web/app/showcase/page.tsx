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
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Alert, AlertDescription, AlertTitle } from "@workspace/ui/components/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

// Assuming you might want an icon for alerts or dialogs later
// import { Terminal } from "lucide-react"

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

      {/* Checkbox Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-showcase" />
          <Label
            htmlFor="terms-showcase"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="terms-disabled" disabled />
          <Label
            htmlFor="terms-disabled"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Disabled checkbox
          </Label>
        </div>
      </section>

      {/* Select Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Select</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          </SelectContent>
        </Select>
      </section>

      {/* Dialog Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* Example form content */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Alert Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alert</h2>
        <div className="space-y-4">
          <Alert>
            {/* <Terminal className="h-4 w-4" /> Icon placeholder */}
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            {/* <Terminal className="h-4 w-4" /> Icon placeholder */}
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">
            Change your password here.
          </TabsContent>
        </Tabs>
      </section>

    </div>
  )
} 