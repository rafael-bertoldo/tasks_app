import { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode
}

export interface CreateTask {
  content: string
}

export interface Task {
  id: string
  content: string
  active: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null
}

export interface TaskContextData {
  tasks: Task[],
  // createTask: (data: CreateTask) => void
}