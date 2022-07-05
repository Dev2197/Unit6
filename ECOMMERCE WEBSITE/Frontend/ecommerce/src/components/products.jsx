import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import './productCard.css'


export const Products = ({product})=>{
    
    return(
        <div className="card">
            <Link className="productCard" to={product._id}>
                <img className="proImg" src={product.images} alt="" />
                <p>{product.name}</p>
                <p>Rs.{product.price}</p>
            </Link>
            <div className="rating">
            <ReactStars
             count={5}
             value={3}
             edit={false}
             size={24}
             activeColor="#ffd700"
              /><span>256 reviews</span>
            </div>

            
        </div>
    )
}