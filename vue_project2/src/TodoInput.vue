<template>
    <form @submit.prevent="submitData">
        <input type="text" v-model="task">
        <button> Submit </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            task: "",
        };
    },

    methods: {
        submitData(e) {

            this.$emit("abc", this.task);
            this.task = "";
        },
    }
}
</script>