<template>
    <li class="item">{{ xyz }}</li>
</template>

<script>
export default {
    props: ["xyz"],
}
</script>

<style>
.item {
    cursor: pointer;
}
</style>