import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return(
      <div className='nav'>
        <div>
          <h2 style={{marginLeft:"50px", cursor:"pointer"}} onClick={()=>{navigate('/')}}>City Country</h2>
        </div>
        <div className='nav2'>
          <h4 style={{marginRight:"20px", cursor:"pointer"}} onClick={()=>{navigate('/addCountry')}}>Add Country</h4>
           <h4 style={{marginRight:"300px", cursor:"pointer"}} onClick={()=>{navigate('/addCity')}}>Add City</h4>
        </div>
      </div>
    )
}