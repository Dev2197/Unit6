import { Order } from "./action";

let init = {amount:0};

export const amountReducer = (store=init, action)=>{

    switch(action.type){
        case Order:
            return {amount : action.payload}
        
        default:
            return store;
    }
}