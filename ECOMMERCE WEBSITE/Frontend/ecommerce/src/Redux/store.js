import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authoriseReducer } from "./Authorisation/reducer";
import { LoginReducer } from "./login/reducer";
import { profileReducer } from "./Profile/reducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'Ecommerce',
    storage,
};

const rootReducer = combineReducers({
    Login: LoginReducer,
    Authorisation: authoriseReducer,
    Profile:profileReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = legacy_createStore(persistedReducer,applyMiddleware(thunk))

export const persistor = persistStore(store)