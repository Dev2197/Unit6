export const Order = "Order"

export const Payorder = (data)=>{
    return {
        type: Order,
        payload : data
    }
}