<script setup lang="ts">
import categoryHeader from './category-header.vue'
import taskBox from './task-box.vue'
import addNewTask from './add-new-task.vue'
import type { TodoCategory } from '@/types/todo-list'

const props = defineProps<{
  box: TodoCategory
  index: number
}>()
</script>

<template>
  <categoryHeader v-bind:box="box" :index="index" />
  <addNewTask :box="box" :index="index" />
  <ul>
    <li id="taskBox" v-for="task in box.tasks" :key="task.id" class="task">
      <taskBox :task="task" :index="index" />
    </li>
  </ul>
</template>

<style scoped>
#taskBox {
  display: flex;
}
</style>
