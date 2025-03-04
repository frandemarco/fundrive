import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Input } from "~/components/ui/input"

export function Header() {
  return (
    <header className="border-b border-border px-6 py-3 flex items-center justify-between bg-background">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
          <circle cx="13" cy="15" r="3" />
          <path d="M17 21v-2" />
          <path d="M21 17h-2" />
        </svg>
        <h1 className="text-xl font-semibold">Drive</h1>
      </div>
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search in Drive" className="pl-8 bg-muted/30" />
        </div>
      </div>
      <Avatar>
        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </header>
  )
}

