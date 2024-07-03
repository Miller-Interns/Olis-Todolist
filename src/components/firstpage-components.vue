<script setup lang="ts">
defineProps<{
  fullName: string
  dateCreated: string
  button: string
}>()
</script>

<template>
  <div class="box">
    <h2>{{ fullName }}</h2>
    <h3>{{ dateCreated }}</h3>
    <RouterLink class="button" to="/todopage">{{ button }}</RouterLink>
  </div>
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
  background: linear-gradient(135deg, #153677, #4e085f);
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  outline: 2px solid white;
}

.box h2 {
  color: #ffffff;
  font-size: 50px;
  justify-content: center;
  align-items: center;
}

.box h3 {
  color: #b75d5d;
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

.button:hover {
  color: white;
  background: gray;
}
</style>
