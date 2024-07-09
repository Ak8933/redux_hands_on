import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer
    //add after ',' if more reducers
})

export default reducers;