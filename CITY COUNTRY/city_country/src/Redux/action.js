export const AddCity = "AddCity"
export const SORT = "SORT";
export const DeleteCity = "Delete"

export const Add_city = (data)=>{
    return{
        type:AddCity,
        payload : data
    }
}

export const getData = ()=>async(dispatch)=>{
    const data = await fetch("http://localhost:8080/city").then((x)=>x.json());

    dispatch(Add_city(data))
}

export const sort = (by)=>{
    return{
        type:SORT,
        payload:by

    }
}

export const deletecity = (id)=>{
    return{
        type: DeleteCity,
        payload : id
    }
}
