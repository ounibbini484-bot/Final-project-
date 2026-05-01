import { useContext } from 'react'
import '../App.css'
import '../index.css'
import { CartContext } from '../context/CartContext'
import axios from 'axios'

const FoodCard = ({ food, onDelete }) => {
  const {addToCart} = useContext(CartContext)

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete ${food.name}?`)) return;

    const token = localStorage.getItem('token');
    const foodId = food.id || food._id;
    
    try {
      await axios.delete(`http://localhost:8081/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Food deleted successfully');
      if (onDelete) {
        onDelete(foodId);
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('Failed to delete food item');
      }
    }
  };
  return (
    <div>
        <div className="card">
        <img src={food.image} alt={food. name} />
        <h3>{food.name}</h3>
        
        <p className='price'>{food.price} AED</p>
        {/* <h4>{food.description} </h4> */}
        <button onClick={()=>addToCart(food)}>Add to cart </button>
        {localStorage.getItem('role') === 'admin' && (
          <button onClick={handleDelete} style={{ backgroundColor: '#dc3545', marginTop: '10px' }}>
            Delete Food
          </button>
        )}
    </div>
    </div>
    
  )
}

export default FoodCard