<script setup lang="ts">
import { changeColor, toggleColor } from '@/composables/firstpage-functions'
</script>

<template>
  <button @click="toggleColor()" id="changeColorButton" v-bind:style="changeColor">💅</button>
</template>

<style>
#changeColorButton {
  position: fixed;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 3px;
  border-radius: 7px;
  font-size: 15px;
  width: fit-content;
  bottom: 10px;
  right: 50px;
  cursor: pointer;
  background: #424549;
  outline: 1px solid white;
  color: white;
  border: transparent;
}

#changeColorButton:hover {
  cursor: pointer;
}

.button:hover {
  color: white;
  background: gray;
}
</style>
