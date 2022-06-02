import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { getData } from "../Redux/action"
import { useNavigate } from "react-router-dom"

export const AddCity = ()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        city:"",
        country:"",
        population:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/city',
        //     data: {
        //        data:formData
        //     }
        //   })
        fetch(" http://localhost:8080/city",{
            method:"Post",
            headers:{
                "content-type":"Application/json",
            },
            body:JSON.stringify(formData)
        }).then(()=>dispatch(getData()))

        navigate('/')
        
    }

    useEffect(()=>{
        dispatch(getData())
    },[])
    
    return(
        <div>
            <form action="">
                <input type="text" placeholder="Enter City Name" name="city" onChange={handleChange}/>
                <input type="text" placeholder="Country" name="country" onChange={handleChange}/>
                <input type="text" placeholder="Population" name="population" onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}