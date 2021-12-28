<template lang="pug">
//- 輸入框
div.container
  .title todoList
  .card 
    TodoInput
    //- 過濾
    .filterlist
      TodoFilter
    //- 清單
    ul.todoItemList
      Todolist(v-for="(item, index) in todoStore.listupdate()", v-bind="item", :index="index")
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

.container {
  background-color: #333;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.card {
  border: 1px solid #fff;
  border-radius: 30px;
  background-color: rgba(80, 80, 80, 0.6);
  padding: 30px;
  width: 50%;
}

.title {
  font-size: 70px;
  color: #FFF;
}

.filterlist {
  display: flex;
  flex-direction: row;
}

.todoItemList {
  margin-top: 10px;
  /* margin: 10px; */
  background-color: #fff;
  width: 100%;
  border-radius: 10px;
}
</style>
