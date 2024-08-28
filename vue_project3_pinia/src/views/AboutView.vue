<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Hello, {{ name }}, your age is {{ age }}.</h2>
    <button @click="updateName">Click</button>
    <button @click="addAge">Add age</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import userStore from "@/stores/user";

export default {
  computed: {
    ...mapState(userStore, ["name", "age", "getUserName", "getUserAge"]),
  },
  methods: {
    ...mapActions(userStore, ["updateName", "addAge"]),
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

button {
  margin: 20px;
}
</style>
