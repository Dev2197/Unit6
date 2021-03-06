import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Asc } from './components/asc';
import { Desc } from './components/desc';
import { FilterByBrand } from './components/filter';
import { FilterAndSort } from './components/filterAndSort';
import { FilterByCategory } from './components/filterCategory';
import { Home } from './components/home';

function App() {

  const [pageNumber,setPageNumber] = useState(0)
  // console.log(pageNumber)
  const [totalPages,setTotalPages] = useState()
  const pages = new Array(totalPages).fill(0)
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

  useEffect(()=>{
    getdata()
},[pageNumber])



const getdata = async()=>{
    const data = await fetch(`https://protected-brushlands-51342.herokuapp.com/mensdata?page=${pageNumber}`).then((d)=>d.json())
    
    setTotalPages(data.totalPages)
}

const sorting = (e)=>{
  setPrice(e.target.value)
  navigate(`/${e.target.value}/page/${pageNumber+1}`)
}

const filterByCategory = (e)=>{
  navigate(`/Category/${e.target.value}`)
}
  return (
    <div className="App">
      
      <div >
        <select onChange={sorting}>
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

      <div>
        <select onChange={filterByCategory}>
          <option disabled selected>Filter By Category</option>
          <option value="Jackets">Jackets</option>
          <option value="Overshirt">Overshirt</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Shorts">Shorts</option>
        </select>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={`page/:id`} element={<Home />}></Route>
        <Route path='/asc' element={<Asc />}></Route>
        <Route path='/asc/page/:id' element={<Asc />}></Route>
        <Route path='/desc' element={<Desc />}></Route>
        <Route path='/desc/page/:id' element={<Desc />}></Route>
        <Route path="/Brand/:id" element={<FilterByBrand />}></Route>
        <Route path={`Mens/:id`} element={<FilterAndSort />}></Route>
        <Route path='Category/:id' element={<FilterByCategory />}></Route>
      </Routes>

      {pages.map((p,i)=>(
        <button onClick={()=>{
          setPageNumber(i)
          navigate(`page/${i+1}`)
        }}>{i+1}</button>
      ))}
    </div>
  );
}

export default App;
