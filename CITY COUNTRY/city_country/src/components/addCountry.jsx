import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const AddCountry = ()=>{
    const [country,setCountry] = useState('')
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setCountry(e.target.value)
    }

    const handleSubmit = ()=>{
        // console.log(country)
        axios({
            method: 'post',
            url: 'http://localhost:8080/country',
            data: {
              country: country,
            }
          });

        //   navigate('/addCity')
    }
    return(
        <div>
            <form action="">
                <input type="text" placeholder="Enter Country Name" name="country" onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}