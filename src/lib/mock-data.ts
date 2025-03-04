import type { FileItem } from "./types"

export const mockData: FileItem[] = [
  {
    id: "folder-1",
    name: "Documents",
    type: "folder",
    modified: "2023-11-15T10:30:00Z",
    icon: "folder",
    children: [
      {
        id: "file-1",
        name: "Project Proposal.docx",
        type: "file",
        size: 2500000,
        modified: "2023-11-14T14:20:00Z",
        icon: "file-text",
      },
      {
        id: "file-2",
        name: "Budget 2023.xlsx",
        type: "file",
        size: 1800000,
        modified: "2023-11-10T09:15:00Z",
        icon: "file-spreadsheet",
      },
      {
        id: "file-3",
        name: "Meeting Notes.pdf",
        type: "file",
        size: 950000,
        modified: "2023-11-08T16:45:00Z",
        icon: "file-text",
      },
    ],
  },
  {
    id: "folder-2",
    name: "Images",
    type: "folder",
    modified: "2023-11-12T11:20:00Z",
    icon: "folder",
    children: [
      {
        id: "file-4",
        name: "Vacation Photo.jpg",
        type: "file",
        size: 4500000,
        modified: "2023-11-11T18:30:00Z",
        icon: "image",
      },
      {
        id: "file-5",
        name: "Team Photo.png",
        type: "file",
        size: 6200000,
        modified: "2023-11-09T12:10:00Z",
        icon: "image",
      },
    ],
  },
  {
    id: "folder-3",
    name: "Videos",
    type: "folder",
    modified: "2023-11-08T15:40:00Z",
    icon: "folder",
    children: [
      {
        id: "file-6",
        name: "Product Demo.mp4",
        type: "file",
        size: 158000000,
        modified: "2023-11-07T13:25:00Z",
        icon: "video",
      },
    ],
  },
  {
    id: "file-7",
    name: "Resume.pdf",
    type: "file",
    size: 1200000,
    modified: "2023-11-14T10:15:00Z",
    icon: "file-text",
  },
  {
    id: "file-8",
    name: "Presentation.pptx",
    type: "file",
    size: 8500000,
    modified: "2023-11-13T09:45:00Z",
    icon: "file-presentation",
  },
  {
    id: "file-9",
    name: "Notes.txt",
    type: "file",
    size: 45000,
    modified: "2023-11-12T14:50:00Z",
    icon: "file-text",
  },
]

