import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Asc } from './components/asc';
import { Desc } from './components/desc';
import { Home } from './components/home';

function App() {
  const navigate = useNavigate()
  const [itemSort,setItemSort] = useState("/")
  // console.log(itemSort)

  useEffect(()=>{
    navigate(itemSort)
  },[itemSort])


  return (
    <div className="App">

      <div className='sort'>
        <select onChange={(e)=>{setItemSort(e.target.value)}}>
          <option value="/">Sort By Price</option>
          <option value="/desc">High To Low</option>
          <option value="/asc">Low To High</option>
        </select>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/asc' element={<Asc />}></Route>
        <Route path='/desc' element={<Desc />}></Route>
      </Routes>

    </div>
  );
}

export default App;
