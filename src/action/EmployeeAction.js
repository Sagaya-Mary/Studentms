import React from 'react';
import axios from 'axios';
import { ActionTypes } from './ActionTypes';


 const getAllStudents = (students) => ({
        type: ActionTypes.GET_ALL_STUDENT,
        payload: students

    
});
export const fetchStudentDetails=(data)=>{
    return(dispatch)=>{
        axios.get("http://localhost:8585/students/findall")
        .then(response=>{
            console.log("hi",response.data)
            dispatch(getAllStudents(response.data))
        })
        .catch(error=>{
            const errorMsg=error.message;
        })
    }
}
export const addStudent=()=>{
    return{
        type:ActionTypes.ADD_STUDENT,
        
    }
}

export const addStudentDetails=(data)=>{
    return(dispatch)=>{
        axios.post("http://localhost:8585/students/add",data)
        
        .then((result) =>{ dispatch(addStudent())
         console.log(result)})
        .catch((error)=>console.log(error.response.data));
    }
}

export const getStudentById=(student)=>{
    return{
        type:ActionTypes.GET_STUDENT_BYID,
        payload:student
    }
};
export const getStudentDetailsById=(data)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:8585/students/findbyid/${data}`)
        .then(response=>{
           console.log("hi",response.data)
            dispatch(getStudentById(response.data))
        })
        .catch(error=>{
            const errorMsg=error.message;
        })
    }
};
export const updateStudent=()=>{
    return{
        type:ActionTypes.UPDATE_STUDENT
        
    }
}

export const updateStudentDetails=(data)=>{
    return(dispatch)=>{
        axios.put("http://localhost:8585/students/update/add",data)
        
        .then((result) =>{ dispatch(updateStudent())
         console.log(result)})
        .catch((error)=>console.log(error.response.data));
    }
}

export const deleteStudentById=(student)=>{
    return{
        type:ActionTypes.DELETE_STUDENT,
        payload:student
    }
};
export const deleteStudentDetailsById=(data)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:8585/students/remove/${data}`)
        .then(response=>{
           console.log("delete",response.data)
            dispatch(deleteStudentById(response.data))
        })
        .catch(error=>{
            const errorMsg=error.message;
        })
    }
};