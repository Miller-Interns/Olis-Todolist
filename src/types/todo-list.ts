export type Task = {
  id: number
  title: string
  completed: boolean
}

export type TodoCategory = {
  id: number
  newTask: string
  tasks: Task[]
  title: string
  isEditingTitle: boolean
}
