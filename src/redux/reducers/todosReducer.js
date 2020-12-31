import { act } from "react-test-renderer";
import * as Todos from "../actions/Todos/types";



export  function todosReducer (state = [], action){

    const newState = [...state];
    switch(action.type){
        case Todos.ADD_TASK:
            const date = new Date();
             action.task["selected"] = false;
             action.task["date"] = date;
             action.task["time"] = {hours:date.getHours(),minutes:date.getMinutes()};
             action.task['notificationId'] = null;
             newState.unshift(action.task);
            break;
        case Todos.DELETE_TASK:
             newState.splice(action.index,1);

            break;
        case Todos.DELETE_TASKS:
            newState.splice(0);
            break;
        case Todos.IS_SELECTED:
             const position = action.index;
           newState[position].selected = !newState[position].selected;
            break;
        case Todos.SELECT_DATE:
            newState[action.index].date = action.date;
            break;
        case Todos.SELECT_TIME:
              newState[action.index].time = action.timeObject;
              break;
        case Todos.SCHEDULE_TASK:
          newState[action.index].notificationId = action.notificationId;
          break;
        case Todos.DELETE_SCHEDULED_TASK:
          newState[action.index].notificationId = null;
          break;
        default:
            return state;
    }
    return newState;
}