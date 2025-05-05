import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Link href="/showcase" passHref legacyBehavior={false}>
          <Button size="sm" asChild>
            <span>Go to Showcase</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
