<template>
    <div id="__ssr">
        <button @click="add">count is {{count}}</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const count = ref(0);

const add = () => {
    count.value += 1;
}
</script>

<style scoped>
#__ssr {
    color: skyblue;
}
</style>