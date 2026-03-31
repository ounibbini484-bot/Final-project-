import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { foodData } from '../data/foods'

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