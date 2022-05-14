
import { combineReducers } from "redux";
import StudentReducer from "./EmployeeReducer";
 const RootReducer=combineReducers({
    data:StudentReducer
})
export default RootReducer