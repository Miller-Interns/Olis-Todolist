<script setup lang="ts">
import { sassify, toggleSlayColor } from '@/composable/firstpage-functions.ts'
</script>

<template>
  <button @click="toggleSlayColor()" id="changeColorButton" v-bind:style="sassify">💅</button>
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
