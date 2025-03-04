export interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  size?: number
  modified: string
  icon?: string
  children?: FileItem[]
}

