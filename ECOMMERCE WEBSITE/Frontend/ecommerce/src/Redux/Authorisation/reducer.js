import { Authorisation } from "./action"

const init = {authorise:""}

export const authoriseReducer = (store=init,action)=>{
    switch(action.type){
        case Authorisation:
            return {...store, authorise:action.payload}
        default:
            return store;
    }
}