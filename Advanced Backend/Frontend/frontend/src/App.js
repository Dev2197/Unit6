import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Asc } from './components/asc';
import { Desc } from './components/desc';
import { FilterByBrand } from './components/filter';
import { FilterAndSort } from './components/filterAndSort';
import { Home } from './components/home';

function App() {

  // const [pageNumber,setPageNumber] = useState(0)
  // console.log(pageNumber)
  // const [totalPages,setTotalPages] = useState()
  // const pages = new Array(totalPages).fill(0)
  const navigate = useNavigate()
  const [brand,SetBrand] = useState("")
  const [price,setPrice] = useState("")

  const filterByBrand = (e)=>{
    SetBrand(e.target.value)
    navigate(`/Brand/${e.target.value}`)
  }

 

  useEffect(()=>{
    if(brand != "" && price!= "")
    {
      // console.log(brand,price)
       navigate(`Mens/${brand}&${price}`)   
    }
  },[price,brand])

//   useEffect(()=>{
//     getdata()
// },[])



// const getdata = async()=>{
//     const data = await fetch(`http://localhost:5000/mensdata?page=${pageNumber}`).then((d)=>d.json())
    
//     setTotalPages(data.totalPages)
// }
  return (
    <div className="App">
      
      <div >
        <select onChange={(e)=>{ setPrice(e.target.value)
          navigate(`/${e.target.value}`)
        }}>
          <option value="" disabled selected>Sort By Price</option>
          <option value="desc">High To Low</option>
          <option value="asc">Low To High</option>
        </select>
      </div>

      <div className='filter'>
        <select onChange={filterByBrand}>
          <option value="" disabled selected>Filter By Brand</option>
          <option value="Puma">Puma</option>
          <option value="ADIDAS">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="FILA">Fila</option>
          <option value="hummel">Hummel</option>
        </select>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/asc' element={<Asc />}></Route>
        <Route path='/desc' element={<Desc />}></Route>
        <Route path="/Brand/:id" element={<FilterByBrand />}></Route>
        <Route path={`Mens/:id`} element={<FilterAndSort />}></Route>
      </Routes>

      {/* {pages.map((p,i)=>(
        <button onClick={()=>{
          setPageNumber(i)
        }}>{i+1}</button>
      ))} */}
    </div>
  );
}

export default App;
