import React from 'react'
import '../App.css'
import'../index.css'
const FoodCard = ({ food }) => {
  return (
    <div>
        <div className="card">
        <img src={food.image} alt={food. name} />
        <h3>{food.name}</h3>
        
        <p className='price'>{food.price} AED</p>
        {/* <h4>{food.description} </h4> */}
        <button> Add to cart </button>
    </div>
    </div>
    
  )
}

export default FoodCard