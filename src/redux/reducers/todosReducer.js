import { act } from "react-test-renderer";
import * as Todos from "../actions/Todos/constants";



export  function todosReducer (state = [], action){

    const newState = [...state];
    var taskIndex;
    switch(action.type){
        case Todos.ADD_TASK:
             action.task["selected"] = false;
             newState.unshift(action.task);
            break;
        case Todos.DELETE_TASK:
             taskIndex = newState.findIndex((ele)=>{
               return ele.title === action.task.title && ele.description === action.task.description
            });
            if(taskIndex !== -1) newState.splice(taskIndex,1)

            break;
        case Todos.DELETE_TASKS:
            if(Array.isArray(action.tasks)){
              action.tasks.forEach(element => {
                 taskIndex = newState.findIndex((ele)=>{
                   return ele.title === element.title && ele.description === element.description
                });
                newState.splice(taskIndex,1)
              });
            }
            break;
        case Todos.IS_SELECTED:
             const position = action.index;
           newState[position].selected = !newState[position].selected;
            break;
        default:
            return state;
    }
    return newState;
}