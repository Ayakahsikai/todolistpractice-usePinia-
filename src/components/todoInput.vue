<template lang="pug">
div
    label(for="todoinput") 輸入
    input(type="text" name="todoinput" v-model.trim="todoStore.input" @keyup.enter="todoStore.add")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const todoStore = useTodoStore();
</script>

<style>

</style>