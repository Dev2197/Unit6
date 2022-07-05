import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './home.css'

export const Home = ()=>{
    const [items, setItems] = useState([])
    const params = useParams()
    // console.log(params)
    

    useEffect(()=>{
        getdata()
    },[params.id])

    

    const getdata = async()=>{
        const data = await fetch(`http://localhost:5000/mensdata?page=${params.id-1}`).then((d)=>d.json())
        // console.log(data)
        setItems(data.mensdatas)
        
    }
    return (
        
            <div className="card">
            {
                items.map((e,i)=>(
                    <div key={i}>
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