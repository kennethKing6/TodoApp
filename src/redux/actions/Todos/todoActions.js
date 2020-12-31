import * as Todos from './types';
import {store} from '../../index';
import {TodoNotifications} from '../../../model/TodoNotifications'

export const addTask = (task)=>{

    store.dispatch({
        type: Todos.ADD_TASK,
        task:task
    })
  
}

/**
 * 
 * @param {string} notificationId turn off notification 
 * @param {*number} index required to delete task
 */
export const deleteTask = (notificationId,index)=>{
        TodoNotifications.cancelNotification(notificationId)
    .then(()=>{}).catch((err)=>{
        console.log("notification error",err);
        return;
    }).finally(()=>{
        store.dispatch({
            type: Todos.DELETE_TASK,
            index:index
        })
    })
    
}

export const deleteTasks = ()=>{
    TodoNotifications.cancellAllNotifications()
    .then(()=>{
        store.dispatch({
            type: Todos.DELETE_TASKS,
        })
    }).catch((err)=>{
        console.log("notification error",err)
        return; 
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
        task: task,
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

export const scheduleTask = (task,index)=>{
        TodoNotifications.scheduleNotification(task)
        .then((id)=>{
            store.dispatch({
                type:Todos.SCHEDULE_TASK,
                notificationId:id,
                index:index
            })
        }).catch((err)=>{

            console.log("notification error",err)
            return;
        })
    
    
}

export const cancelScheduledTask = (notificationId,index)=>{

    
    TodoNotifications.cancelNotification(notificationId)
    .then()
    .catch((err)=>{
        
        console.log("notification error",err);
        return;
    }).finally(()=>{
        store.dispatch({
            type: Todos.DELETE_SCHEDULED_TASK,
            index:index
        })
    })
    
   
}