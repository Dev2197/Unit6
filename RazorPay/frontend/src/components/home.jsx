import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./home.css"

export const Home = ()=>{

    const [amount,setAmount] = useState(0)
    const navigate = useNavigate()

    const handleChange = (e)=>{
        // console.log(e.target.value)
        setAmount(e.target.value)
    }

    const amountpay = ()=>{
        console.log(amount)
        navigate('/pay')
    }
    return(
        <div>
            
            <div>
                <input type="number" placeholder="Enter Amount" name="amount" onChange={handleChange}/>
                <button  onClick={amountpay}>Razorpay</button>
            </div>
        </div>
    )
}