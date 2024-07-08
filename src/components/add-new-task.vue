<script setup lang="ts">
import { addTask } from '../composables/todo-functions'
import { defineProps } from 'vue'
import type { TodoCategory } from '@/types/todo-list'

const props = defineProps<{
  box: TodoCategory
  index: number
}>()
</script>

<template>
  <div class="new-task">
    <input id="inputTask" type="text" v-model="props.box.newTask" placeholder="Add to list" />
    <button id="addButton" @click="addTask(box, props.box.newTask)">Add</button>
  </div>
</template>

<style scoped>
#inputTask[type='text'] {
  flex: 1;
  border: none;
  outline: none;
  color: black;
  background: transparent;
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
}

.new-task {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 30px;
  padding-left: 20px;
  margin-bottom: 25px;
  margin-top: 25px;
}

#addButton {
  position: relative;
  border: none;
  outline: none;
  padding: 14px 30px;
  background: #ff5945;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border-radius: 30px;
  text-align: center;
  display: inline-block;
}

#addButton:hover {
  background: #e04a3a;
}
</style>
