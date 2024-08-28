<template>
    <div>
        <h1> &Products& </h1>
        <hr>
        <p>{{ product }}</P>
    </div>
</template>

<script>
const items = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
};
export default {
    computed: {
        product() {
            return items[this.$route.params.sn];
        },
    },
}
</script>