import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FoodCard from '../components/FoodCard'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [foodData, setFoodData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFood = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:8081/food/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        setFoodData(Array.isArray(data) ? data : (data.data || []));
      }
      catch (err) {
        console.error("Error:", err);
        if (err.response && err.response.status == 401 || err.response.status) {
          localStorage.removeItem('token');
          navigate('/login');

        }
        alert("An error occurred during login");
      }
    };
    fetchFood();
  }, [navigate]);

  const handleDelete = (deletedId) => {
    setFoodData(currentData => currentData.filter(food => (food.id || food._id) !== deletedId));
  };

  return (
    <div className="container">

      <h1 className="page-title">Explore Our Menu</h1>


      <div className="food-container">
        {foodData.map((food) => (
          <FoodCard key={food.id || food._id} food={food} onDelete={handleDelete} />
        ))}
      </div>

    </div>
  )
}

export default Home