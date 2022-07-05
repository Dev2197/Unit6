
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/admin';
import { Home } from './components/home';
import { Login } from './components/login';
import { Navbar } from './components/navbar';
import { Profile } from './components/profile';
import { SignUp } from './components/signup';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        {/* <Route path='/products' element={<Products />}></Route> */}
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
