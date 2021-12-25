<template lang="pug">
li
    input(type="checkbox" :id="id" v-model="isDone" @change="stateUpdate")
    label(:for="id")
        CheckIcon(style="width: 30px;height: 30px;color: #0f0;" v-if="isDone")
        XIcon(style="width: 30px;height: 30px;color: #f00;" v-else)
    input.edit(type="text", v-model.trim="msg" v-if="editStatus", @keyup.enter="msgUpadte", v-focus)
    div(@click="stateUpdate", v-else) {{ index + 1 }}. {{ msg }}
    //- input(type="button", value="編輯")
    //- input(type="button", value="刪除")
    button(style="--b: 1", @click="editStatus = true")
        DocumentReportIcon(style="width: 30px;height: 30px;")
    button(style="--b: 0", @click="delTodo")
        TrashIcon(style="width: 30px;height: 30px;")
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'
import { CheckIcon, XIcon, TrashIcon, DocumentReportIcon } from '@heroicons/vue/outline'
import { ref } from 'vue';

components: {
    CheckIcon,
    XIcon,
    TrashIcon,
    DocumentReportIcon
}

const todoStore = useTodoStore();
const editStatus = ref(false)
const vFocus = {
    mounted(el) {
        el.focus();
    }
}

const props = defineProps([
    'msg',
    'isDone',
    'id',
    'index'
])

// console.log(editInput)

const stateUpdate = () => {
    console.log(props.id)
    todoStore.stateUpdate(props.id);
}

const msgUpadte = () => {
    todoStore.update(props.id, props.msg)
    editStatus.value = false
}

const delTodo = () => {
    todoStore.del(props.id);
}

</script>

<style scoped>
li {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 10px;
    position: relative;
    flex-wrap: wrap;
}

input[type="checkbox"] {
    display: none;
}

div {
    font-size: 30px;
}

button {
    background: transparent;
    border: none;
    width: 30px;
    height: 30px;
    position: absolute;
    right: calc(var(--b) * 40px);
}

.edit {
    font-size: 30px;
    border: none;
    outline: none;
}

* {
    margin-right: 10px;
}
</style>