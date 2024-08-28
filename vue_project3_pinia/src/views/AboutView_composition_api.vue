<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>Hello, {{ name }}, your age is {{ age }}.</h2>
        <button @click="user.updateName">Click</button>
        <button @click="updateData">Update Data</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import userStore from "@/stores/user";

const user = userStore();
const { name, age, getUserName, getUserAge } = storeToRefs(user);

const updateData = () => {
    name.value = "Peter Parker";
    age.value = 17;
}
const reset = () => {
    user.$reset();
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