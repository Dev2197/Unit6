import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ConfirmPayment } from './components/confirmPayment';
import { Home } from './components/home';
import { Payment } from './components/payment';


function App() {
  return (
    <div className="App">
      <div className="nav">
                <img src="https://cdn.razorpay.com/logo.svg" alt="" />
                <h4>Dashboard</h4>
            </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pay' element={<Payment />}></Route>
        <Route path='/confirmPayment' element={<ConfirmPayment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
