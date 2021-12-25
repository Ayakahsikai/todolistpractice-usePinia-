import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


/*
    todo = {
        id: Date.now(),
        msg: '',
        createAt: Date.now(),
        updateAt: Date.now(),
        isDone: boolean
    }
*/

const createlistItem = (msg) => {
    const nowTime = Date.now();
    return {
        id: nowTime,
        msg,
        createAt: nowTime,
        updateAt: nowTime,
        isDone: false
    }
}

export const useTodoStore = (id = 'todo') => defineStore(id, {
    state: () => ({
        input: '',
        todolist: useLocalStorage('localTodo', []),
        filterOption: 'all',
        filterList: []
    }),
    actions: {
        add() {
            // console.log(this.input)
            if(this.input == "") return;
            this.todolist.push(createlistItem(this.input));
        },
        update(id, msg) {
            if(msg == "") return;
            const index = this.todolist.findIndex(el => el.id === id);
            this.todolist[index].msg = msg
            this.todolist[index].updateAt = Date.now()
        },
        del(id) {
            const index = this.todolist.findIndex(el => el.id === id);
            this.todolist.splice(index, 1)
        },
        stateUpdate(id) {
            const index = this.todolist.findIndex(el => el.id === id);
            this.todolist[index].isDone = this.todolist[index].isDone ? false : true
            this.todolist[index].updateAt = Date.now()
        },
        listupdate() {
            return this.filterOption === 'isDone' ? this.todolist.filter(el => el.isDone) : this.filterOption === 'notDone' ? this.todolist.filter(el => !el.isDone) : this.todolist
        }
    }
})()