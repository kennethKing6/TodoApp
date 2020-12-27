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