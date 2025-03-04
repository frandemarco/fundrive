"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { Upload, X } from "lucide-react"

interface UploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onUpload: (files: File[]) => void
}

export function UploadDialog({ isOpen, onClose, onUpload }: UploadDialogProps) {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const handleUpload = () => {
    onUpload(files)
    setFiles([])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>Upload files to your Drive</DialogDescription>
        </DialogHeader>
        <div
          className={`mt-4 border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? "border-primary bg-primary/10" : "border-muted-foreground/20"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium">Drag files here</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">or click to browse</p>
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            Select files
          </Button>
          <input type="file" ref={fileInputRef} className="hidden" multiple onChange={handleFileChange} />
        </div>

        {files.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Selected files</h4>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                  <div className="flex items-center">
                    <div className="ml-2 text-sm">
                      <div className="font-medium">{file.name}</div>
                      <div className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={files.length === 0}>
            Upload {files.length > 0 && `(${files.length})`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

