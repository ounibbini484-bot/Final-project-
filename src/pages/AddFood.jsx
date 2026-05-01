import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddFood = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      alert("You are not logged in.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/food/", {
        name: formData.name,
        price: parseFloat(formData.price),
        image: formData.image,
        description: formData.description
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Food added successfully: ", response.data);
      alert("Food item added successfully!");
      // Optionally navigate back to home or clear the form
      navigate("/home");

    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while adding food");
      }
    }
  }

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2>Add New Food</h2>
        <p>Enter the details for the new food item</p>
        <form className='auth-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Food Name</label>
            <input type="text"
              placeholder='e.g. Mangoes'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required />
          </div>

          <div className='form-group'>
            <label htmlFor="price">Price</label>
            <input type="number"
              step="0.01"
              placeholder='e.g. 64.8'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleChange}
              required />
          </div>

          <div className='form-group'>
            <label htmlFor="image">Image URL</label>
            <input type="text"
              placeholder='e.g. https://images.../burger.jpg'
              id='image'
              name='image'
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor="description">Description</label>
            <textarea
              placeholder='e.g. Fried jalapeño and spicy mayo...'
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc', marginTop: '0.5rem' }}
            />
          </div>

          <button type='submit' className="auth-btn">Add Food</button>
        </form>
      </div>
    </div>
  )
}

export default AddFood;
