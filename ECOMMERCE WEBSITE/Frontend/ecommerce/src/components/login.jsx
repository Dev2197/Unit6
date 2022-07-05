import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { isLoggedin } from "../Redux/login/action";
import { auth } from "../Redux/Authorisation/action";
import { profileDetails } from "../Redux/Profile/action";

export const Login = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setUser({
            ...user,
            [name]:value
        })
    }

    const login = (event)=>{
        event.preventDefault();

        axios.post('http://localhost:5000/user/login', {
            email: user.email,
            password: user.password
          })
          .then(function (response) {
            // console.log(response.data.user.role);
            dispatch(isLoggedin(true))
            if(response.data.user.role === "admin")
            {
                dispatch(auth(response.data.user.role))
                dispatch(profileDetails(response.data.user))
                navigate('/admin')
            }else{
                dispatch(auth(response.data.user.role))
                dispatch(profileDetails(response.data.user))
            navigate('/')
            }
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return(
        <div>
            <form action="">
                <input type="text" placeholder="Enter Email" onChange={handleChange} name="email" required/>
                <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required/>
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}