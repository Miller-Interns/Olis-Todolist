<script setup lang="ts">
import { toggleTaskCompletion, editTask, removeTask } from '../composables/todo-functions'
import { defineProps, computed } from 'vue'
import type { Task } from '@/types/todo-list'

const props = defineProps<{
  task: Task
  index: number
}>()
const task = computed(() => {
  return props.task.title
})

const index = computed(() => {
  return props.index
})
</script>

<template>
  <input
    type="checkbox"
    :checked="props.task.completed"
    @change="toggleTaskCompletion(index, props.task.id)"
  />
  <input
    type="text"
    id="editTaskName"
    v-model="task"
    @change="editTask(index, props.task.id, props.task.title)"
    :class="{ completed: props.task.completed }"
  />
  <button @click="removeTask(index, props.task.id)" id="deleteButton">X</button>
</template>

<style scoped>
#editTaskName {
  font-size: 15px;
}

input[type='text'] {
  flex: 1;
  border: none;
  color: white;
  outline: none;
  background: transparent;
  padding: 10px;
  font-weight: 14px;
  border-radius: 6px;
}

input[type='checkbox'] {
  cursor: pointer;
}
#deleteButton {
  font-size: 15px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  border-radius: 10px;
}

#deleteButton:hover {
  cursor: pointer;
  background: none;
  background: transparent;
  color: crimson;
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
