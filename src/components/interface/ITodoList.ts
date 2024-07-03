export interface Task {
  id: number
  title: string
  completed: boolean
}

export interface TodoCategory {
  id: number
  newTask: string
  tasks: Task[]
  title: string
  isEditingTitle: boolean
}
