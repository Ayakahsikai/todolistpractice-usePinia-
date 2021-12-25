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

const createlistItem = (msg) => {
    const nowTime = Date.now();
    return {
        id: nowTime,
        msg,
        createAt: nowTime,
        updateAt: nowTime
    }
}

export const useTodoStore = (id = 'todo') => defineStore(id, {
    state: () => ({
        input: '',
        todolist: useLocalStorage('localTodo', []),
        filterOption: 'all'
    }),
    actions: {
        add() {
            // console.log(this.input)
            if(this.input == "") return
            this.todolist.push(createlistItem(this.input))
        }
    }
})()