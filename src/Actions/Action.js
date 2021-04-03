
import  { ADD_TASK,DELETE_TASK,EDIT_TASK,COMPLETE_TASK } from '../Const/ActionTypes';

export const addTask=(payload)=>{
    //payload task,id,isDone
    return{
        type:ADD_TASK,
        payload
    }
}
export const deleteTask=(payload)=>{
    //payload id
    return{
        type:DELETE_TASK,
        payload
    }
}
export const editTask=(payload)=>{
    return{
        type:EDIT_TASK,
        payload
    }
}
export const completeTask=(payload)=>{
    //payload id,isDone
    return{
        type:COMPLETE_TASK,
        payload
    }
}