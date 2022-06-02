import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AddCity } from './components/addCity';
import { AddCountry } from './components/addCountry';
import { Home } from './components/home';
import { Navbar } from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/addCountry" element={<AddCountry />}></Route>
        <Route path="/addCity" element={<AddCity />}></Route>
      </Routes>
    </div>
  );
}

export default App;
