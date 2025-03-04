import { Button } from "~/components/ui/button"
import { ChevronRight, File, FileText, Folder, HardDrive, Image, MoreVertical, Upload, Video } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import type { FileItem } from "~/lib/types"

interface FileExplorerProps {
  files: FileItem[]
  currentPath: string[]
  onFolderClick: (folderName: string) => void
  onNavigateUp: () => void
  onUploadClick: () => void
}

export function FileExplorer({ files, currentPath, onFolderClick, onNavigateUp, onUploadClick }: FileExplorerProps) {
  const getIconForFile = (iconType: string) => {
    switch (iconType) {
      case "folder":
        return <Folder className="h-10 w-10 text-blue-500" />
      case "file":
        return <FileText className="h-10 w-10 text-gray-500" />
      case "image":
        return <Image className="h-10 w-10 text-green-500" />
      case "video":
        return <Video className="h-10 w-10 text-red-500" />
      default:
        return <File className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onNavigateUp} disabled={currentPath.length === 0}>
            <HardDrive className="h-4 w-4 mr-2" />
            My Drive
          </Button>
          {currentPath.map((path, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Navigate to this specific level
                  onFolderClick(path)
                }}
              >
                {path}
              </Button>
            </div>
          ))}
        </div>
        <Button size="sm" onClick={onUploadClick} className="gap-2">
          <Upload className="h-4 w-4" />
          Upload
        </Button>
      </div>

      {files.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[400px] text-center">
          <Folder className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">This folder is empty</h3>
          <p className="text-muted-foreground mt-1">Upload files or create folders to get started</p>
          <Button onClick={onUploadClick} className="mt-4 gap-2">
            <Upload className="h-4 w-4" />
            Upload files
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="border rounded-lg p-3 hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => {
                if (file.type === "folder") {
                  onFolderClick(file.name)
                } else {
                  // For files, we would normally open the file or show a preview
                  window.open(`#file-${file.id}`, "_blank")
                }
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col items-center">
                  {getIconForFile(file.icon || file.type)}
                  <span className="text-sm mt-2 text-center line-clamp-2">{file.name}</span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {file.type !== "folder" && <span>{(file.size / 1024 / 1024).toFixed(2)} MB · </span>}
                <span>{new Date(file.modified).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

