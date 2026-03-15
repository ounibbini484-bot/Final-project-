import { useContext } from 'react'
import '../App.css'
import'../index.css'
import { CartContext } from '../context/CartContext'
const FoodCard = ({ food }) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div>
        <div className="card">
        <img src={food.image} alt={food. name} />
        <h3>{food.name}</h3>
        
        <p className='price'>{food.price} AED</p>
        {/* <h4>{food.description} </h4> */}
        <button onClick={()=>addToCart(food)}>Add to cart </button>
    </div>
    </div>
    
  )
}

export default FoodCard