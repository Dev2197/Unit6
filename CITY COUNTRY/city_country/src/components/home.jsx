import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletecity, getData, sort } from "../Redux/action"
import "./home.css"

export const Home = ()=>{
    const dispatch = useDispatch()
    const data = useSelector((store)=>store.city)
    // console.log(data)

    useEffect(()=>{
        dispatch(getData())
    },[])
    
    return (
        <div>
            <select name="" id="" onChange={(e)=>{
                dispatch(sort(e.target.value))
            }}>
                <option value="id">Sort By ID</option>
                <option value="country">Sort By Country</option>
                <option value="city">Sort By City</option>
                <option value="population">Sort By Population</option>
            </select>
            <table>
                <thead>
                    <th>id</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    <th>Delete</th>
                </thead>

                <tbody>
                    {data.map((e,i)=>(
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.country}</td>
                            <td>{e.city}</td>
                            <td>{e.population}</td>
                            <td style={{backgroundColor:"red", cursor:"pointer"}} 
                            onClick={()=>{dispatch(deletecity(e.id))}}
                            >Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}