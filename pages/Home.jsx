import React from 'react'
import FoodCard from '../components/FoodCard'
import { foodData } from '../data/food'

const Home = () => {
  return (
    <div className="container">
      <h1 className="page-title">Explore Our Menu</h1>

      <div className="food-container">
        {foodData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

    </div>
  )
}

export default Home