import { useEffect, useState } from "react"
import './home.css'

export const Home = ()=>{
    const [items, setItems] = useState([])
    const [pageNumber,setPageNumber] = useState(0)
    console.log(pageNumber)
    const [totalPages,setTotalPages] = useState()
    const pages = new Array(totalPages).fill(0)

    useEffect(()=>{
        getdata()
    },[pageNumber])

    

    const getdata = async()=>{
        const data = await fetch(`http://localhost:5000/mensdata?page=${pageNumber}`).then((d)=>d.json())
        // console.log(data)
        setItems(data.mensdatas)
        setTotalPages(data.totalPages)
    }
    return (
        <div>
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
        {pages.map((p,i)=>(
            <button onClick={()=>{
              setPageNumber(i)
            }}>{i+1}</button>
          ))}
        </div>
    )
}