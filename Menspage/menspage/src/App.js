import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Asc } from './components/asc';
import { Desc } from './components/desc';
import { FilterByBrand } from './components/filter';
import { FilterAndSort } from './components/filterAndSort';
import { Home } from './components/home';

function App() {
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
  return (
    <div className="App">

      <div >
        <select onChange={(e)=>{ setPrice(e.target.value)
          navigate(`/${e.target.value}`)
        }}>
          <option value="/">Sort By Price</option>
          <option value="desc">High To Low</option>
          <option value="asc">Low To High</option>
        </select>
      </div>

      <div className='filter'>
        <select onChange={filterByBrand}>
          <option>Filter By Brand</option>
          <option value="Puma">Puma</option>
          <option value="ADIDAS">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="FILA">Fila</option>
          <option value="hummel">Hummel</option>
        </select>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/asc' element={<Asc />}></Route>
        <Route path='/desc' element={<Desc />}></Route>
        <Route path="/Brand/:id" element={<FilterByBrand />}></Route>
        <Route path={`Mens/:id`} element={<FilterAndSort />}></Route>
      </Routes>

    </div>
  );
}

export default App;
