<script setup lang="ts">
import { removeCategory, editTitle, saveTitle } from '../composables/todo-functions'
import { defineProps, computed } from 'vue'
import type { TodoCategory } from '@/types/todo-list'

const props = defineProps<{
  box: TodoCategory
  index: number
}>()
const title = computed(() => {
  return props.box.title
})

const index = computed(() => {
  return props.index
})
</script>

<template>
  <div class="category-header">
    <div v-if="props.box.isEditingTitle">
      <input type="text" id="editTitle" v-model="title" @blur="saveTitle(index)" />
      <button id="saveButton" @click="saveTitle(index)">📝</button>
    </div>
    <div v-else>
      <h3 id="catName">{{ title }}</h3>
      <button @click="editTitle(index)" id="editButton">📝</button>
    </div>
    <button @click="removeCategory(index)" id="delCatButton">X</button>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#editButton,
#saveButton {
  margin: auto;
  display: inline;
  background: transparent;
  color: white;
  border: none;
  border-radius: 6px;
}

#editButton:hover,
#saveButton:hover {
  cursor: pointer;
}

#delCatButton {
  color: white;
  border: none;
  border-radius: 20px;
  background: transparent;
  font-size: 17px;
  font-weight: bold;
}

#delCatButton:hover {
  cursor: pointer;
  background: transparent;
  color: crimson;
}
#catName {
  display: inline;
  width: 250px;
}

#editTitle,
h3 {
  font-size: 20px;
}

#delCatButton {
  color: white;
  border: none;
  border-radius: 20px;
  background: transparent;
  font-size: 17px;
  font-weight: bold;
}

#delCatButton:hover {
  cursor: pointer;
  background: transparent;
  color: crimson;
}
</style>
