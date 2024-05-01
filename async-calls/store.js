import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from 'redux-thunk'
import { userReducer } from "./reducers/userReducer";

let rootReducer = combineReducers({
  userReducer:userReducer
})



export let store=createStore(rootReducer,applyMiddleware(thunk))