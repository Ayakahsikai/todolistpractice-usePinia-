<template lang="pug">
input(type="button", value="全部")
input(type="button", value="已完成")
input(type="button", value="未完成")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const todoStore = useTodoStore();
</script>

<style>

</style>