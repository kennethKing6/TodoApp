import * as Todos from './types';
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

export const setTaskDate = (date,index)=>{
    store.dispatch({
       type:Todos.SELECT_DATE, 
       date:date,
       index:index
    })
}

export const setTaskTime= (time,index)=>{
    store.dispatch({
        type:Todos.SELECT_TIME,
        timeObject:time,
        index:index
    })
}