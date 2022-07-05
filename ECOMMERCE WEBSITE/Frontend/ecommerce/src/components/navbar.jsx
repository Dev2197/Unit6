import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'

export const Navbar = ()=>{

    const role = useSelector(store=>store.Authorisation.authorise)

    const navigate = useNavigate()
    return(
        <div className="navbar">
            <div onClick={()=>{navigate('/')}}>FlipKart</div>
            <div onClick={()=>{navigate('/products')}}>Products</div>
            <div onClick={()=>{navigate('/cart')}}>Cart</div>
            <div onClick={()=>{navigate('/signup')}}>SignUp</div>
            <div onClick={()=>{navigate('/login')}}>Login</div>
            {role?<div onClick={()=>{navigate('/profile')}}>Profile</div>:null}
        </div>
    )
}