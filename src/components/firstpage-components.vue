<script setup lang="ts">
import { sassify } from '@/composable/firstpage-functions'
import sassifyButton from './sassify-button.vue'
const props = defineProps({
  fullName: String,
  dateCreated: String,
  routerButton: String
})
</script>

<template>
  <div class="box" v-bind:style="sassify">
    <h2>{{ props.fullName }}</h2>
    <h3>{{ props.dateCreated }}</h3>
    <RouterLink class="button" to="/todopage">{{ props.routerButton }}</RouterLink>
  </div>
  <sassifyButton />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
  box-sizing: border-box;
}

.box {
  position: absolute;
  display: inline-block;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 635px;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  outline: 2px solid white;
}

.box h2 {
  color: white;
  font-size: 50px;
  justify-content: center;
  align-items: center;
}

.box h3 {
  color: white;
  margin-top: -10px;
  font-size: 35px;
  justify-content: center;
  align-items: center;
}

.button {
  display: inline-block;
  margin-top: 20px;
  background: white;
  margin-bottom: 10px;
  color: black;
  font-size: 28px;
  width: 230px;
  cursor: pointer;
  border-radius: 7px;
}
</style>
