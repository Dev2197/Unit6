import { applyMiddleware, legacy_createStore } from "redux";
// import { combineReducers } from "redux";
import thunk from 'redux-thunk'
import { amountReducer } from "./reducer";

export const store = legacy_createStore(amountReducer,applyMiddleware(thunk))
