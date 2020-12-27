import * as Todos from './constants';


export const addTask = (task)=> dispatch =>{
dispatch({
    type: Todos.ADD_TASK,
    task: task,
})
}

export const deleteTask = (task)=>dispatch =>{
    dispatch({
        type: Todos.DELETE_TASK,
        task: task
    })
}

export const deleteTasks = (tasks)=>dispatch =>{
    dispatch({
        type: Todos.DELETE_TASKS,
        tasks: tasks
    })
}

export const selectTask = (task)=>dispatch =>{
    dispatch({
        type: Todos.TASK_COMPLETED,
        task: task
    })
}
export const deselectTask = (task)=>dispatch =>{
    dispatch({
        type: Todos.TASK_NOT_DONE,
        task: task
    })
}