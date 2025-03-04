"use client"

import { useState } from "react"
import { Header } from "~/components/header"
import { Sidebar } from "~/components/sidebar"
import { FileExplorer } from "~/components/file-explorer"
import { UploadDialog } from "~/components/upload-dialog"
import { mockData } from "~/lib/mock-data"

export function DriveUI() {
  const [currentPath, setCurrentPath] = useState<string[]>([])
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [data, setData] = useState(mockData)

  const getCurrentFolder = () => {
    let current = data
    for (const path of currentPath) {
      const folder = current.find((item) => item.type === "folder" && item.name === path)
      if (folder && folder.type === "folder") {
        current = folder.children
      }
    }
    return current
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  const navigateUp = () => {
    setCurrentPath(currentPath.slice(0, -1))
  }

  const handleUpload = (files: File[]) => {
    // Mock adding files to the current directory
    const newFiles = files.map((file) => ({
      id: Math.random().toString(36).substring(7),
      name: file.name,
      type: "file",
      size: file.size,
      modified: new Date().toISOString(),
      icon: getFileIcon(file.name),
    }))

    const newData = [...data]

    if (currentPath.length > 0) {
      // Navigate to the current folder and add files there
      let current = newData
      let parent = null
      let parentIndex = -1

      for (const path of currentPath) {
        parent = current
        parentIndex = current.findIndex((item) => item.type === "folder" && item.name === path)

        if (parentIndex !== -1 && parent[parentIndex].type === "folder") {
          current = parent[parentIndex].children
        }
      }

      if (parent && parentIndex !== -1) {
        parent[parentIndex].children = [...parent[parentIndex].children, ...newFiles]
        setData(newData)
      }
    } else {
      // Add files to root
      setData([...newData, ...newFiles])
    }

    setIsUploadOpen(false)
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase()

    switch (extension) {
      case "pdf":
        return "file-text"
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "image"
      case "doc":
      case "docx":
        return "file-text"
      case "xls":
      case "xlsx":
        return "file-spreadsheet"
      case "ppt":
      case "pptx":
        return "file-presentation"
      case "mp4":
      case "mov":
      case "avi":
        return "video"
      case "mp3":
      case "wav":
        return "file-audio"
      default:
        return "file"
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onUploadClick={() => setIsUploadOpen(true)} />
        <FileExplorer
          files={getCurrentFolder()}
          currentPath={currentPath}
          onFolderClick={navigateToFolder}
          onNavigateUp={navigateUp}
          onUploadClick={() => setIsUploadOpen(true)}
        />
      </div>
      <UploadDialog isOpen={isUploadOpen} onClose={() => setIsUploadOpen(false)} onUpload={handleUpload} />
    </div>
  )
}

