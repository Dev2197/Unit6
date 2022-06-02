import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { CityReducer } from "./reducer";


export const store = legacy_createStore(CityReducer, applyMiddleware(thunk));