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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command"
import {
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@workspace/ui/components/context-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import { ChevronsUpDown } from "lucide-react"

// Assuming you might want an icon for alerts or dialogs later
// import { Terminal } from "lucide-react"

export default function ShowcasePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [openCommand, setOpenCommand] = React.useState(false)
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false)
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [carouselCurrent, setCarouselCurrent] = React.useState(0)
  const [carouselCount, setCarouselCount] = React.useState(0)

  // Effect for command palette keybinding (optional, but common)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpenCommand((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  React.useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCarouselCount(carouselApi.scrollSnapList().length)
    setCarouselCurrent(carouselApi.selectedScrollSnap() + 1)

    carouselApi.on("select", () => {
      setCarouselCurrent(carouselApi.selectedScrollSnap() + 1)
    })
  }, [carouselApi])

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

      {/* Accordion Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Avatar Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
        <div className="flex gap-4">
         <Avatar>
            {/* Replace with a real image URL */}
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
             {/* Example with fallback only */}
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Badge Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badge</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Calendar Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
         <p className="text-center text-sm text-muted-foreground mt-2">
          Selected date: {date ? date.toLocaleDateString() : "None"}
        </p>
      </section>

      {/* Command Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Command</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>{" "}
          or{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Ctrl</span>K
          </kbd>{" "}
          to open the command palette (or click the button).
        </p>
         <Button variant="outline" onClick={() => setOpenCommand(true)}>
          Open Command Palette
        </Button>

        <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </section>

      {/* Alert Dialog Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      {/* Aspect Ratio Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Aspect Ratio</h2>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            {/* Replace with a real image component if desired */}
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
           <p className="text-center text-sm text-muted-foreground mt-2">
            Image constrained to 16:9 aspect ratio.
           </p>
        </div>
      </section>

      {/* Collapsible Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Collapsible</h2>
        <Collapsible
          open={isCollapsibleOpen}
          onOpenChange={setIsCollapsibleOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Context Menu Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Context Menu</h2>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right-click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>Back</ContextMenuItem>
            <ContextMenuItem inset disabled>Forward</ContextMenuItem>
            <ContextMenuItem inset>Reload</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem inset>Save Page As...</ContextMenuItem>
            <ContextMenuItem inset>Print...</ContextMenuItem>
            <ContextMenuSeparator />
             <ContextMenuItem inset>View Page Source</ContextMenuItem>
             <ContextMenuItem inset>Inspect</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      {/* Carousel Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Carousel</h2>
        <Carousel setApi={setCarouselApi} className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {carouselCurrent} of {carouselCount}
        </div>
      </section>

    </div>
  )
} 