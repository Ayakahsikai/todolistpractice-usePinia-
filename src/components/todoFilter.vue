<template lang="pug">
input(type="button", value="全部", @click="changeFilter", :class="{ active: todoStore.filterOption === 'all' }")
input(type="button", value="已完成", @click="changeFilter", :class="{ active: todoStore.filterOption === 'isDone' }")
input(type="button", value="未完成", @click="changeFilter", :class="{ active: todoStore.filterOption === 'notDone' }")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const todoStore = useTodoStore();

const changeFilter = (e) => {
    console.log(e.target.value)
    todoStore.filterOption = e.target.value === '已完成' ? 'isDone' : e.target.value === '未完成' ? 'notDone' : 'all'
}
</script>

<style scoped>
input{
    border: none;
    background: transparent;
    padding: 15px;
    color: white;
}

input:hover {
    color: #0ff;
}

.active {
    color: #0ff;
}
</style>