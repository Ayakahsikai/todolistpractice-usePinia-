<template lang="pug">
//- 輸入框
div.container
  div todoList
  TodoInput
  //- 清單
  ul
    Todolist(v-for="item in todoStore.todolist", :key="item.id", v-bind="item")
  //- 過濾
  TodoFilter
</template>

<script setup>
import TodoInput from './components/todoInput.vue';
import Todolist from './components/todoList.vue';
import { useTodoStore } from './store/todo.js'
import TodoFilter from './components/todoFilter.vue';

components: {
  TodoInput,
  Todolist,
  TodoFilter
}

const todoStore = useTodoStore();

</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
