export const Authorisation = "Authorisation"

export const auth = (data)=>{
    return {
        type:Authorisation,
        payload : data
    }
}