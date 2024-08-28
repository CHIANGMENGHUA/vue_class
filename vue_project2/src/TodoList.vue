<script>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoInput,
        TodoItem,
    },

    data() {
        return {
            tasks: [],
        };
    },

    methods: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
    },
}
</script>

<template>
    <todo-input @abc="addTask"></todo-input>
    <ol>
        <todo-item v-for="(item, index) in tasks" :xyz="item" @click="removeTask(index)"></todo-item>
    </ol>
</template>