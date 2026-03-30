import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { foodData } from '../data/foods'

const Home = () => {
  return (
    <div className="container">
      
      <div className="home-header">
        <h1 className="page-title">Explore Our Menu</h1>

        <div className="auth-actions">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </div>

      <div className="food-container">
        {foodData.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

    </div>
  )
}

export default Home