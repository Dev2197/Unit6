import { useEffect, useState } from "react"
import './home.css'

export const Home = ()=>{
    const [items, setItems] = useState([])

    useEffect(()=>{
        getdata()
    },[])

    

    const getdata = async()=>{
        const data = await fetch("http://localhost:5000/mensdata").then((d)=>d.json())
        console.log(data)
        setItems(data)
    }
    return (
        <div className="card">
            {
                items.map((e)=>(
                    <div >
                        <img className="productimag" src={e.imageURL} alt="" />
                        <p>Brand:{e.Brand}</p>
                        <p>{e.productName}</p>
                        <p className="price">Rs.{e.price}</p>
                    </div>
                ))
            }
        </div>
    )
}