<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h3 class="age">{{ age }}</h3>
    <button @click="add">HBD</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("Leon");
const age = ref(27);
const add = () => age.value++;
</script>
