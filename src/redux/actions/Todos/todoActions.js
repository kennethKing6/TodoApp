import * as Todos from './constants';
import {store} from '../../index'

export const addTask = (task)=>{

    store.dispatch({
        type: Todos.ADD_TASK,
        task:task
    })
  
}

export const deleteTask = (task)=>{
    store.dispatch({
        type: Todos.DELETE_TASK,
        task: task
    })
}

export const deleteTasks = (tasks)=>{
    store.dispatch({
        type: Todos.DELETE_TASKS,
        tasks: tasks
    })
}

export const selectTask = (index)=>{
    store.dispatch({
        type: Todos.IS_SELECTED,
        index: index
    })
}
export const deselectTask = (task)=>{
    store.dispatch({
        type: Todos.TASK_NOT_DONE,
        task: task
    })
}