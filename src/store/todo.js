import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


/*
    todo = {
        id: Date.now(),
        msg: '',
        createAt: Date.now(),
        updateAt: Date.now()
    }
*/
export const useTodoStore = (id = 'todo') => defineStore(id, {
    state: () => ({
        input: '',
        todolist: useLocalStorage('localTodo'),
        filterOption: ''
    })
})()