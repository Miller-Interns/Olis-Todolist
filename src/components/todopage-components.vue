<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  boxes,
  addBox,
  addTask,
  removeCategory,
  removeTask,
  toggleTaskCompletion,
  editTask,
  editTitle,
  saveTitle
} from '../composable/todo-functions'
import { useLocalStorage } from '@/stores/use-local-storage'
import { onMounted } from 'vue'

onMounted(() => {
  useLocalStorage()
})

const props = defineProps({
  pageHeader: String,
  toHome: String
})
</script>

<template>
  <h1 id="headerBox">{{ props.pageHeader }}</h1>
  <RouterLink id="backButton" to="/">{{ props.toHome }}</RouterLink>
  <button @click="addBox" id="addCategory">+</button>
  <div id="boxContainer">
    <div v-for="(box, index) in boxes" :key="box.id" class="box">
      <div class="category-header">
        <div v-if="box.isEditingTitle">
          <input type="text" id="editTitle" v-model="box.title" @blur="saveTitle(index)" />
          <button id="saveButton" @click="saveTitle(index)">📝</button>
        </div>
        <div v-else>
          <h3 id="catName">{{ box.title }}</h3>
          <button @click="editTitle(index)" id="editButton">📝</button>
        </div>
        <button @click="removeCategory(index)" id="delCatButton">X</button>
      </div>
      <div class="new-task">
        <input id="inputTask" type="text" v-model="box.newTask" placeholder="Add to list" />
        <button id="addButton" @click="addTask(index)">Add</button>
      </div>
      <ul>
        <li id="taskBox" v-for="task in box.tasks" :key="task.id" class="task">
          <input
            type="checkbox"
            :checked="task.completed"
            @change="toggleTaskCompletion(index, task.id)"
          />
          <input
            type="text"
            id="editTaskName"
            v-model="task.title"
            @change="editTask(index, task.id, task.title)"
            :class="{ completed: task.completed }"
          />
          <button @click="removeTask(index, task.id)" id="deleteButton">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#headerBox {
  position: absolute;
  color: white;
  display: inline-block;
  font-size: 40px;
  font-weight: bold;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%;
  background: #424549;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  z-index: 10;
}

#backButton {
  position: absolute;
  margin-left: auto;
  font-size: 40px;
  top: 2.9%;
  left: 2%;
  color: white;
  cursor: pointer;
  z-index: 10;
}

#backButton:hover {
  color: black;
  background: #424549;
}

#addCategory {
  border: transparent;
  background: transparent;
  position: absolute;
  margin-right: auto;
  font-size: 40px;
  top: 4.75%;
  right: 2.2%;
  color: white;
  z-index: 10;
}

#addCategory:hover {
  background: transparent;
  cursor: pointer;
  color: black;
}

#boxContainer {
  margin-top: 115px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box {
  width: 50vw;
  background: #424549;
  margin: 10px 0;
  margin-left: 30.05%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  outline: 2px solid white;
  border-radius: 6px;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#catName {
  display: inline;
  width: 250px;
}

#editTitle,
h3 {
  font-size: 20px;
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

#taskBox {
  display: flex;
}

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

.box ul {
  list-style: none;
  padding: 0;
  margin: 0;
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
