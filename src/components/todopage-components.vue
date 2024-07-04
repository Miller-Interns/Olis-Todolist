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

const useLocalStorage

defineProps<{ pageHeader: string; toHome: string }>()
</script>

<template>
  <div>
    <h1 id="headerBox">{{ pageHeader }}</h1>
    <RouterLink id="backButton" to="/">{{ toHome }}</RouterLink>
    <button @click="addBox" id="addCategory">+</button>
    <div id="boxContainer">
      <div v-for="(box, index) in boxes" :key="box.id" class="box">
        <div class="category-header">
          <div v-if="box.isEditingTitle">
            <input type="text" v-model="box.title" @blur="saveTitle(index)" />
            <button id="saveButton" @click="saveTitle(index)">Save</button>
          </div>
          <div v-else>
            <h3 id="catName">{{ box.title }}</h3>
            <button @click="editTitle(index)" id="editButton">Edit</button>
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
              v-model="task.title"
              @change="editTask(index, task.id, task.title)"
              :class="{ completed: task.completed }"
            />
            <button @click="removeTask(index, task.id)" id="deleteButton">X</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#headerBox {
  position: absolute;
  color: white;
  display: inline-block;
  font-size: 40px;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98%;
  background: rgb(123, 118, 118);
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  outline: 2px solid white;
  z-index: 10;
}

#backButton {
  position: absolute;
  margin-left: auto;
  font-size: 40px;
  top: 2.9%;
  left: 2%;
  color: black;
  cursor: pointer;
  z-index: 10;
}

#backButton:hover {
  color: white;
  background: rgb(123, 118, 118);
}

#addCategory {
  border: transparent;
  background: transparent;
  position: absolute;
  margin-right: auto;
  font-size: 40px;
  top: 4.75%;
  right: 2.2%;
  color: black;
  z-index: 10;
}

#addCategory:hover {
  color: white;
  background: rgb(123, 118, 118);
  cursor: pointer;
}

#boxContainer {
  margin-top: 115px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box {
  width: 50vw;
  background: rgb(123, 118, 118);
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

#editButton,
#saveButton {
  margin: auto;
  display: inline;
  background: transparent;
  border: none;
  border-radius: 6px;
}

#editButton:hover,
#saveButton:hover {
  cursor: pointer;
  text-decoration: underline;
  color: white;
}

#delCatButton {
  color: white;
  background: red;
  border: none;
  border-radius: 20px;
  outline: 2px solid white;
}

#delCatButton:hover {
  cursor: pointer;
  background: white;
  color: black;
}

#inputTask[type='text'] {
  flex: 1;
  border: none;
  outline: none;
  color: black;
  background: transparent;
  padding: 10px;
  font-weight: 14px;
  border-radius: 6px;
}

#taskBox {
  display: flex;
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
  color: white;
  background: rgb(123, 118, 118);
  border: none;
  border-radius: 10px;
}

#deleteButton:hover {
  cursor: pointer;
  background: none;
  color: red;
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
