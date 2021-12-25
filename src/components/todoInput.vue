<template lang="pug">
div
    input(type="text" name="todoinput" v-model.trim="todoStore.input" @keyup.enter="addItem")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const todoStore = useTodoStore();

const addItem = () => {
    todoStore.add()
    todoStore.input = ''
}
</script>

<style scoped>
input {
    border-radius: 10px;
    font-size: x-large;
    padding-left: 2%;
    width: 100%;
    font-size: 30px;
}
</style>