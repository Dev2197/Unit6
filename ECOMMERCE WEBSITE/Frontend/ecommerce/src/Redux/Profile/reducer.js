import { Profile } from "./action"

let init = {profile:''}
export const profileReducer = (store=init,action)=>{
    switch(action.type){
        case Profile:
            return {...store,profile:action.payload}
            default:
                return store
    }
}