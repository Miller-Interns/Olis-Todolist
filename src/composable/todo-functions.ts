import { ref } from 'vue'
import type { TodoCategory } from '../types/todo-list'

export const boxes = ref<TodoCategory[]>([])

export function addBox() {
  boxes.value.push({
    id: boxes.value.length + 1,
    newTask: '',
    tasks: [],
    title: `Category ${boxes.value.length + 1}`,
    isEditingTitle: false
  })
}

export function addTask(boxIndex: number) {
  const newTaskTitle = boxes.value[boxIndex].newTask.trim()
  if (newTaskTitle) {
    boxes.value[boxIndex].tasks.push({
      id: Date.now(),
      title: newTaskTitle,
      completed: false
    })
    boxes.value[boxIndex].newTask = ''
  }
}

export function removeTask(boxIndex: number, taskId: number) {
  boxes.value[boxIndex].tasks = boxes.value[boxIndex].tasks.filter((task) => task.id !== taskId)
}

export function toggleTaskCompletion(boxIndex: number, taskId: number) {
  const task = boxes.value[boxIndex].tasks.find((task) => task.id === taskId)
  if (task) {
    task.completed = !task.completed
  }
}

export function editTask(boxIndex: number, taskId: number, newTitle: string) {
  const task = boxes.value[boxIndex].tasks.find((task) => task.id === taskId)
  if (task) {
    task.title = newTitle
  }
}

export function editTitle(boxIndex: number) {
  boxes.value[boxIndex].isEditingTitle = !boxes.value[boxIndex].isEditingTitle
}

export function saveTitle(boxIndex: number) {
  boxes.value[boxIndex].isEditingTitle = false
}

export function removeCategory(boxIndex: number) {
  boxes.value.splice(boxIndex, 1)
}
