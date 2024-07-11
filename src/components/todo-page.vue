<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { boxes, addBox } from '../composables/todo-functions'
import { useLocalStorage } from '@/stores/use-local-storage'
import { onMounted } from 'vue'
import { changeColor } from '@/composables/firstpage-functions'
import { RouterName } from '@/types/enum'
import changeColorButton from './change-box-color.vue'
import todopageComponents from './todopage-components.vue'

onMounted(() => {
  useLocalStorage()
})

const props = defineProps({
  pageHeader: String,
  toHome: String
})
</script>

<template>
  <h1 id="headerBox" v-bind:style="changeColor">{{ props.pageHeader }}</h1>
  <RouterLink id="backButton" :to="RouterName.FirstPage">⬅</RouterLink>
  <button @click="addBox" id="addCategory">+</button>
  <div id="boxContainer">
    <div v-for="(box, index) in boxes" :key="box.id" class="box" v-bind:style="changeColor">
      <todopageComponents :box="box" :index="index" />
    </div>
  </div>
  <changeColorButton />
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
  background: transparent;
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

.box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
