<template lang="pug">
li
    input(type="checkbox")
    div {{ msg }}
    input(type="button", value="編輯")
    input(type="button", value="刪除")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const todoStore = useTodoStore();

const props = defineProps([
    'msg'
])
</script>

<style>

</style>