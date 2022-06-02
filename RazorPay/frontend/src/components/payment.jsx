import { useNavigate } from "react-router-dom"

export const Payment = ()=>{

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate('/confirmPayment')
    }

    return(
        <div>
            
            <form action="">
                <input type="number" placeholder="Enter Card Number"/> <br />
                <input type="text"  placeholder="Enter Expiry Date"/> <br />
                <input type="number" placeholder="Enter Cvv"/> <br />

                <button style={{width:"200px", marginTop:"20px"}} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}