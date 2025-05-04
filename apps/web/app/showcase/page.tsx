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
import { ChevronsUpDown, Plus } from "lucide-react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { Progress } from "@workspace/ui/components/progress"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Slider } from "@workspace/ui/components/slider"
import { Toaster as SonnerToaster } from "@workspace/ui/components/sonner"
import { toast } from "sonner"
import { Switch } from "@workspace/ui/components/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Textarea } from "@workspace/ui/components/textarea"
import { Toggle } from "@workspace/ui/components/toggle"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"

// Form Schema Example
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

// Table Data Example
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
]

// Navigation Menu Example Component
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function ShowcasePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [openCommand, setOpenCommand] = React.useState(false)
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false)
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()
  const [carouselCurrent, setCarouselCurrent] = React.useState(0)
  const [carouselCount, setCarouselCount] = React.useState(0)
  const [progress, setProgress] = React.useState(13)
  const [sliderValue, setSliderValue] = React.useState([50])

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // Form Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast("Form Submitted!", { description: `Username: ${values.username}` })
  }

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

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TooltipProvider>
      <div className="container mx-auto p-8 space-y-12">
        <SonnerToaster />
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

        {/* Drawer Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Drawer</h2>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                {/* Example Content */}
                <p>Some content inside the drawer.</p>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </section>

        {/* Dropdown Menu Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </section>

        {/* Form Section */}
        <section>
           <h2 className="text-2xl font-semibold mb-4">Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-sm">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
        </section>

        {/* Hover Card Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Hover Card</h2>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </section>

        {/* Menubar Section */}
        <section>
           <h2 className="text-2xl font-semibold mb-4">Menubar</h2>
           <Menubar>
             <MenubarMenu>
               <MenubarTrigger>File</MenubarTrigger>
               <MenubarContent>
                 <MenubarItem>New Tab</MenubarItem>
                 <MenubarItem>New Window</MenubarItem>
                 <MenubarSeparator />
                 <MenubarItem>Share</MenubarItem>
               </MenubarContent>
             </MenubarMenu>
              <MenubarMenu>
               <MenubarTrigger>Edit</MenubarTrigger>
               <MenubarContent>
                 <MenubarItem>Undo</MenubarItem>
                 <MenubarItem>Redo</MenubarItem>
               </MenubarContent>
             </MenubarMenu>
           </Menubar>
        </section>

        {/* Navigation Menu Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Navigation Menu</h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                   <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    {/* Add more list items */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        {/* Pagination Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pagination</h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        {/* Popover Section */}
         <section>
          <h2 className="text-2xl font-semibold mb-4">Popover</h2>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
               <p>Popover content goes here.</p>
            </PopoverContent>
          </Popover>
        </section>

        {/* Progress Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Progress</h2>
          <Progress value={progress} className="w-[60%]" />
          <p className="text-sm text-muted-foreground mt-2">Current progress: {progress}%</p>
        </section>

        {/* Radio Group Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Radio Group</h2>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
          </RadioGroup>
        </section>

        {/* Resizable Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Resizable</h2>
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
               <div className="flex h-[200px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </section>

        {/* Scroll Area Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
           <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {Array.from({ length: 20 }).map((_, i, a) => (
                <React.Fragment key={i}>
                  Tag {i + 1}
                  {i < a.length - 1 && <Separator className="my-2" />}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </section>

        {/* Separator Section */}
        <section>
           <h2 className="text-2xl font-semibold mb-4">Separator</h2>
           <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
                <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
              </div>
            </div>
        </section>

        {/* Sheet Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sheet</h2>
           <Sheet>
            <SheetTrigger asChild><Button variant="outline">Open Sheet</Button></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              {/* Add form elements here */}
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </section>

        {/* Skeleton Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skeleton</h2>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </section>

        {/* Slider Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Slider</h2>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className="w-[60%]"
            value={sliderValue}
            onValueChange={setSliderValue}
          />
           <p className="text-sm text-muted-foreground mt-2">Current value: {sliderValue[0]}</p>
        </section>

        {/* Sonner (Toast) Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sonner (Toast)</h2>
          <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast
          </Button>
        </section>

        {/* Switch Section */}
         <section>
          <h2 className="text-2xl font-semibold mb-4">Switch</h2>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </section>

         {/* Table Section */}
         <section>
            <h2 className="text-2xl font-semibold mb-4">Table</h2>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
         </section>

         {/* Textarea Section */}
         <section>
           <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
           <Textarea placeholder="Type your message here." />
         </section>

          {/* Toggle Section */}
         <section>
           <h2 className="text-2xl font-semibold mb-4">Toggle</h2>
           <Toggle aria-label="Toggle italic">
             {/* Add an icon like Bold */}
             <span className="font-bold">B</span>
           </Toggle>
         </section>

         {/* Toggle Group Section */}
         <section>
            <h2 className="text-2xl font-semibold mb-4">Toggle Group</h2>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <span className="font-bold">B</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                 <span className="italic">I</span>
              </ToggleGroupItem>
               <ToggleGroupItem value="underline" aria-label="Toggle underline">
                 <span className="underline">U</span>
              </ToggleGroupItem>
            </ToggleGroup>
         </section>

         {/* Tooltip Section */}
         <section>
           <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
           <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
         </section>

      </div>
    </TooltipProvider>
  )
} 