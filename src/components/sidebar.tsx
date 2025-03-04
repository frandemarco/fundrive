import { Button } from "~/components/ui/button"
import { Clock, FileHeart, FileImage, FileText, HardDrive, Plus, Share2, Star, Trash2 } from "lucide-react"

interface SidebarProps {
  onUploadClick: () => void
}

export function Sidebar({ onUploadClick }: SidebarProps) {
  return (
    <div className="w-64 border-r border-border p-4 hidden md:block bg-background">
      <Button onClick={onUploadClick} className="w-full mb-6 gap-2">
        <Plus className="h-4 w-4" />
        New
      </Button>

      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <HardDrive className="h-4 w-4" />
          My Drive
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Share2 className="h-4 w-4" />
          Shared with me
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Clock className="h-4 w-4" />
          Recent
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Star className="h-4 w-4" />
          Starred
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Trash2 className="h-4 w-4" />
          Trash
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-sm font-medium mb-2">Categories</h3>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileImage className="h-4 w-4" />
            Images
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileText className="h-4 w-4" />
            Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FileHeart className="h-4 w-4" />
            Favorites
          </Button>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-sm font-medium mb-2">Storage</h3>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div className="bg-primary h-full w-[65%]" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">6.5 GB of 10 GB used</p>
      </div>
    </div>
  )
}

