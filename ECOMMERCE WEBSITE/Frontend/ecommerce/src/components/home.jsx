import { Products } from "./products"
// import {  useSelector } from "react-redux";
import './home.css'

export const Home = ()=>{

    // const role = useSelector(store=>store.Authorisation.authorise)
    // console.log(role)

    const product={
        images:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2022/3/2/093bc645-d461-4128-94a1-0692803944141646215571321-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Cotton-Pure-Cotton--1.jpg",
        _id:"Product1",
        price:3000,
        name:"HRX by Hrithik Roshan",
    }
    return(
        <div className="homeContainer">
            <Products product={product}></Products>
            <Products product={product}></Products>
            <Products product={product}></Products>
            <Products product={product}></Products>
            <Products product={product}></Products>
        </div>
    )
}