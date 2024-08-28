<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h3 class="age">{{ age }}</h3>
    <button @click="add">HBD</button>
    <button @click="changeColor" changeColor>change color</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("Leon");
const age = ref(27);
const theColor = ref("#008000");

const add = () => age.value++;
const changeColor = () => theColor.value = "brown";
</script>

<style>
.name {
  color: v-bind(theColor);
}
</style>