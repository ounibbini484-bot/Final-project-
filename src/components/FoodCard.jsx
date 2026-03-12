import React from 'react'

const FoodCard = ({ food }) => {
  return (
    <div>
        <div className="food-card">
        <img src={food.image} alt={food. name} />
        <h3>{food.name}</h3>
        <p>{food.price}</p>
        <h4>{food.description} </h4>
        <button> Add to cart </button>
    </div>
    </div>
    
  )
}

export default FoodCard