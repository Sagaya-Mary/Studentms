import React from "react";
import { ActionTypes } from "../action/ActionTypes";

const initialState={
   student:[],
    students:[],
    success:'',
   error:''
}

const StudentReducer=(state=initialState,action)=>{
    let newState= {...state};
    switch(action.type){   
        case ActionTypes.GET_ALL_STUDENT:
            newState.students=action.payload
            break;
        case ActionTypes.ADD_STUDENT:
            break;
        case ActionTypes.GET_STUDENT_BYID:
            newState.student=action.payload
        case ActionTypes.UPDATE_STUDENT:    
            break;
        case ActionTypes.DELETE_STUDENT:
            break;
        default:
            newState=state

        
    }
   
    return newState
}
export default StudentReducer