import * as Todos from "../actions/Todos/constants";



export  default function todosReducer (state = [], action){

    const newState = [...state];
    var taskIndex;
    switch(action.type){
        case Todos.ADD_TASK:
             action.task["taskStatus"] = Todos.TASK_NOT_DONE;
             newState.push(action.tasks);
            break;
        case Todos.DELETE_TASK:
             taskIndex = newState.findIndex((ele)=>{
                ele.title === action.task.title && ele.description === action.task.description
            });
            if(taskIndex !== -1) newState.splice(taskIndex,1)

            break;
        case Todos.DELETE_TASKS:
            if(Array.isArray(action.tasks)){
              action.tasks.forEach(element => {
                 taskIndex = newState.findIndex((ele)=>{
                    ele.title === element.title && ele.description === element.description
                });
                newState.splice(taskIndex,1)
              });
            }
            break;
        case Todos.TASK_COMPLETED:
             taskIndex = newState.findIndex((ele)=>{
             ele.title === action.task.title && ele.description === action.task.description;
            });
            if(taskIndex !== -1) newState[taskIndex].taskStatus = Todos.TASK_COMPLETED;
        case Todos.TASK_NOT_DONE:
                 taskIndex = newState.findIndex((ele)=>{
                 ele.title === action.task.title && ele.description === action.task.description;
                });
                if(taskIndex !== -1) newState[taskIndex].taskStatus = Todos.TASK_NOT_DONE;
        default:
            return state;
    }
    return newState;
}