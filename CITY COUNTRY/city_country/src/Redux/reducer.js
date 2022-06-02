import { AddCity, DeleteCity, SORT } from "./action"

const init = {city:[]}

export const CityReducer = (store=init, action)=>{
    switch(action.type){
        case AddCity :
            return {...store, city:action.payload}
        case SORT :
            return {...store, city: [...store.city].sort((a,b)=>a[action.payload]>b[action.payload]?1:a[action.payload]<b[action.payload]?-1:0)};
        case DeleteCity :
            return {...store, city : store.city.filter((el)=>el.id !== action.payload )}
        default : 
            return store;
    }
}